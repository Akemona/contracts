const { BN, balance, constants, ether, expectEvent, makeInterfaceId, send, expectRevert, singletons, time } = require('openzeppelin-test-helpers');//require('../node_modules/openzeppelin-test-helpers');

const chai = require('chai');

const should = chai
  .use(require('chai-bn')(BN))
  .should();


const AkemonaWhitelist = artifacts.require("AkemonaWhitelist");
const AkemonaWhitelistPermissionless = artifacts.require("AkemonaWhitelistPermissionless");
const AkemonaWhitelistTracker = artifacts.require("AkemonaWhitelistTracker");
const AkemonaProtocol = artifacts.require("AkemonaProtocol");
const AkemonaCrowdsaleCalculations = artifacts.require("AkemonaCrowdsaleCalculations");
const AkemonaSecurityToken = artifacts.require("AkemonaSecurityToken");
const USDC = artifacts.require("USDC");
const AkemonaProxy = artifacts.require("AkemonaProxy");
const Akenro = artifacts.require("Akenro");
const AkemonaSecurityTokenFactory = artifacts.require("AkemonaSecurityTokenFactory");


const web3 = require('web3')


var calculateDailyRate = function (annualRate) {
  return Math.pow(1 + annualRate, 1 / 365) - 1;
}

var calculateAnnualRate = function (dailyRate) {
  var c = 1000;
  for (var i = 0; i < 365; i++) {
    c = c * (1 + dailyRate);
  }
  return (c / 1000) - 1;
}

var getCurrentPriceJS = function (dailyRate, numDays) {

  return 100 / Math.pow(1 + dailyRate, numDays);

}

contract("AkemonaProtocol", function ([_, akemona, investor, escrow, usdcOwner, investor2, akenroTreasury, offeringOwner1]) {
  const DEC18 = (new BN(10)).pow(new BN(18));
  const DEC6 = (new BN(10)).pow(new BN(6));
  const DEC2 = (new BN(10)).pow(new BN(2));

  const ANNUALRATE = .08;
  const DAILYRATE = calculateDailyRate(ANNUALRATE);
  const MININVEST = 10;
  const GOAL = 100000;
  const CAP = 200000;
  const MATURITYTIME = Math.floor(Date.now() / 1000) + 365 * 5 * 24 * 3600;
  const DISBURSEMENTTIME = MATURITYTIME + 100 * 24 * 3600;
  const EFFDAILYRATE = new BN(DAILYRATE * 1e18);
  const OFFERINGCREATIONFEE = new BN(200000);
  const CLIFFTIMESTAMP = Math.floor(Date.now() / 1000) + 100 * 24 * 3600;

  var offeringId;

  var toBN = function (num, multiplier) {
    if (!multiplier) {
      multiplier = DEC6;
    }
    return (new BN(num)).mul(multiplier);
  }

  before(async function () {
    // Advance to the next block to correctly read time in the solidity "now" function interpreted by ganache
    await time.advanceBlock();
  });

  beforeEach(async function () {
    try {
    this.akenro = await Akenro.new(
      akenroTreasury, 
      CLIFFTIMESTAMP,
      0,
      0,
      0,
      { from: akemona }
    );

    const minter_role = await this.akenro.MINTER_ROLE();

    await this.akenro.enableTransfer({ from: akenroTreasury });
    await this.akenro.grantRole(minter_role, akenroTreasury, { from: akenroTreasury });
    await this.akenro.mint(offeringOwner1, OFFERINGCREATIONFEE, { from: akenroTreasury });
    this.calculations = await AkemonaCrowdsaleCalculations.new({ from: akemona });
    this.usdc = await USDC.new({ from: usdcOwner });

    } catch (e) {
      console.log('ERROR')
      console.log(e);
    }
    
    assert(await this.usdc.transfer(investor, toBN(1000000), { from: usdcOwner }));
    (await this.usdc.balanceOf(investor)).should.be.bignumber.equal(toBN(1000000));

    this.tokenFactory = await AkemonaSecurityTokenFactory.new();

    this.protocol = await AkemonaProtocol.new(
        this.akenro.address,
        akenroTreasury,
        OFFERINGCREATIONFEE,
        this.usdc.address,
        this.tokenFactory.address,
        { from: akemona }
    );

    this.akenro.approve(this.protocol.address, OFFERINGCREATIONFEE, { from: offeringOwner1 });

    this.tracker = await AkemonaWhitelistTracker.new({ from: akemona });
    this.whitelist = await AkemonaWhitelist.new(this.protocol.address, { from: akemona });
    await this.tracker.addWhitelist(this.whitelist.address, { from: akemona });
    this.whitelist2 = await AkemonaWhitelistPermissionless.new(this.protocol.address, { from: akemona });
    await this.tracker.addWhitelist(this.whitelist2.address, { from: akemona });

    var tx = await this.protocol.createOffering(
      escrow,
      Math.floor(Date.now() / 1000) - 1,
      Math.floor(Date.now() / 1000) + 90 * 24 * 3600,
      MATURITYTIME,
      toBN(MININVEST),
      toBN(GOAL),
      toBN(CAP),
      EFFDAILYRATE,
      false,
      "securityType",
      "ake",
      "ake",
      { from: offeringOwner1 }
    );

    var offeringId = tx.logs[tx.logs.length - 1].args.offeringId;
    var offering = await this.protocol.offerings(offeringId);
    this.token = await AkemonaSecurityToken.at(offering.securityToken);

  });

  it('should pass the beforeEach', async function () {

  })
if(0) {
  it('should throw an error if the wrong transaction ID is used', async function () {

    let purchaseAmounts = [toBN(50000)];
    let userId = "abcabcabcabcabcabcabcabc";
    let investors = [web3.utils.fromAscii(userId)];
    let daysCredit = [0];

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(toBN(50000), 0, MATURITYTIME, EFFDAILYRATE);

    var transactionId = await this.crowdsale.transactionId();

    transactionId = transactionId - 1;

    return new Promise((resolve, reject) => {
      this.crowdsale.processNoWalletPurchase(investors, purchaseAmounts, [numTokensExpected], [web3.utils.fromAscii("test")], transactionId, { from: akemona }).then(function () {
        reject('error did not trigger');
      }).catch(function () {
        resolve();
      });

    });

  });


  it('should process purchases and refunds for no wallet users', async function () {

    let purchaseAmounts = [toBN(50000)];
    let userId = "abcabcabcabcabcabcabcabc";
    let investors = [web3.utils.fromAscii(userId)];
    let daysCredit = [0];

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(toBN(50000), 0, MATURITYTIME, EFFDAILYRATE);

    let transactionId = await this.crowdsale.transactionId();
    await this.crowdsale.processNoWalletPurchase(investors, purchaseAmounts, [numTokensExpected], [web3.utils.fromAscii("test")], transactionId, { from: akemona });

    var purchase = await this.crowdsale.purchases(0);

    assert(purchase.investor == 0x0000000000000000000000000000000000000000, "Purchase has a wallet address")

    let userId2 = web3.utils.toAscii(purchase.investorId).substring(0, 24);

    assert(userId2 == userId, "Purchase.investorId does not equal investor");

    await this.crowdsale.requestRefundForPurchaseOnBehalfOf(0, { from: akemona });

    purchase = await this.crowdsale.purchases(0);

    await this.crowdsale.processManualRefund(0, { from: akemona });

  });

  
  it('should allow conversion from nowallet to wallet', async function () {

    let purchaseAmounts = [toBN(50000)];
    let userId = "abcabcabcabcabcabcabcabc";
    let investors = [web3.utils.fromAscii(userId)];
    let daysCredit = [0];

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(toBN(50000), 0, MATURITYTIME, EFFDAILYRATE);

    let transactionId = await this.crowdsale.transactionId();
    await this.crowdsale.processNoWalletPurchase(investors, purchaseAmounts, [numTokensExpected], [web3.utils.fromAscii("test")], transactionId, { from: akemona });

    var purchase = await this.crowdsale.purchases(0);

    assert(purchase.investor == 0x0000000000000000000000000000000000000000, "Purchase has a wallet address")

    let userId2 = web3.utils.toAscii(purchase.investorId).substring(0, 24);

    assert(userId2 == userId, "Purchase.investorId does not equal investor");

    (await this.token.balanceOf(akemona)).should.be.bignumber.equal(numTokensExpected);

    await this.crowdsale.convertNoWalletToWallet([0], investor, { from: akemona });

    (await this.token.balanceOf(investor)).should.be.bignumber.equal(numTokensExpected);

  });

  it('should process purchases and refunds on behalf of', async function () {

    let purchaseAmounts = [toBN(50000)];
    let investors = [investor];
    let daysCredit = [0];

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(toBN(50000), 0, MATURITYTIME, EFFDAILYRATE);

    await this.whitelist.addWhitelistedAddresses(investors, { from: akemona });

    let transactionId = await this.crowdsale.transactionId();
    await this.crowdsale.processPurchaseOnBehalfOf(investors, purchaseAmounts, [numTokensExpected], [web3.utils.fromAscii("test")], transactionId, { from: akemona });

    var purchase = await this.crowdsale.purchases(0);
    
    assert(purchase.investor == investor, "Purchase.investor does not equal investor");

    (await this.token.balanceOf(investor)).should.be.bignumber.equal(numTokensExpected, "invalid token balance");

    await this.crowdsale.requestRefundForPurchaseOnBehalfOf(0, { from: akemona });

    purchase = await this.crowdsale.purchases(0);

    await this.crowdsale.processManualRefund(0, { from: akemona });

    var newBalance = await this.token.balanceOf(investor);

    newBalance.should.be.bignumber.equal(toBN(0), "token was not properly burned");

  });

  it('should process purchases on behalf of and allow user to request refund', async function () {

    let purchaseAmounts = [toBN(50000)];
    let investors = [investor];
    let daysCredit = [0];

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(toBN(50000), 0, MATURITYTIME, EFFDAILYRATE);

    await this.whitelist.addWhitelistedAddresses(investors, { from: akemona });

    let transactionId = await this.crowdsale.transactionId();
    await this.crowdsale.processPurchaseOnBehalfOf(investors, purchaseAmounts, [numTokensExpected], [web3.utils.fromAscii("test")], transactionId, { from: akemona });

    var purchase = await this.crowdsale.purchases(0);
    
    assert(purchase.investor == investor, "Purchase.investor does not equal investor");

    (await this.token.balanceOf(investor)).should.be.bignumber.equal(numTokensExpected, "invalid token balance");

    await this.crowdsale.requestRefundForPurchase(0, { from: investor });

    purchase = await this.crowdsale.purchases(0);

    await this.crowdsale.processManualRefund(0, { from: akemona });

    var newBalance = await this.token.balanceOf(investor);

    newBalance.should.be.bignumber.equal(toBN(0), "token was not properly burned");

  });


  it('should have a correct purchase price', async function () {
    var purchaseAmountDec = 50000;
    let purchaseAmount = toBN(purchaseAmountDec);

    var blockTime = await this.calculations.getTime();
    var maturityTime = await this.crowdsale.maturityTime();
    var numDays = await this.calculations.getNumDaysRemaining(MATURITYTIME);
    var expectedInterest = await this.calculations.getExpectedInterest(MATURITYTIME, EFFDAILYRATE);
    var dailyRate = await this.crowdsale.effectiveDailyRate();
    var numTokensExpected = await this.calculations.getNumTokensPerNumDollars(purchaseAmount, MATURITYTIME, EFFDAILYRATE);
    var numTokensDec = parseInt(numTokensExpected.toString()) / 1e6;
    var pricePerToken = await this.calculations.getPricePerToken(MATURITYTIME, EFFDAILYRATE);
    var priceDec = parseInt(pricePerToken.toString()) / 1e6;
    var eiDec = parseInt(expectedInterest.toString()) / 1e6;


    var numDaysNumber = numDays.toNumber();

    assert(numDaysNumber > 0 && numDaysNumber < 365 * 10);

    var earnedAtMaturity = purchaseAmountDec * Math.pow(1 + DAILYRATE, numDaysNumber);

    var difference = numTokensDec / earnedAtMaturity;
  
    console.log('dailyRate', dailyRate.toString());
    console.log('dailyRateDecimal', dailyRate.toNumber() / 1e18);
    console.log('dailyRateSupposedToBe', DAILYRATE);
    console.log('blockTime', blockTime.toString());
    console.log('maturityTime', maturityTime.toString());
    console.log('numDays', numDays.toString());
    console.log('expectedInterest', expectedInterest.toString());
    console.log('expectedInterestDecimal', eiDec);
    console.log('pricePerToken', pricePerToken);
    console.log('pricePerTokenDec', priceDec);
    console.log('numTokens', numTokensDec);
    console.log('earnedAmount', earnedAtMaturity);
    console.log('diff', difference);

    assert(difference < 1.001 && difference > 0.999);

  })

  it('emits a approval event', async function () {
    let purchaseAmount = toBN(50000);

    const { logs } = await this.usdc.approve(this.crowdsale.address, purchaseAmount, { from: investor });

    expectEvent.inLogs(logs, 'Approval', {
      _owner: investor,
      _spender: this.crowdsale.address,
      _value: purchaseAmount
    });
  });

  it.skip('should send purchases to the escrow address', async function () {

    let purchaseAmount = toBN(50000);


    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });
    await this.crowdsale.purchase.sendTransaction({ from: investor });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);
  });

  it('should process purchases', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);
  });

  it('should process purchases >= minimum investment', async function () {

    let purchaseAmount = toBN(MININVEST);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);
  });

  it('should accept refund requests', async function () {

    var startBalance = await this.usdc.balanceOf(investor);

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });
    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });
    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await this.crowdsale.requestRefundForPurchase(0, { from: investor });

    var purchase = await this.crowdsale.purchases(0);

    assert(purchase.refundRequested === true && purchase.refundAllocated === false);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: escrow });
    
    var pendings = await this.crowdsale.getPurchasesPendingRefund();
    var purchaseIndices = [];
    pendings.forEach(function (isPending, i) {
      if (isPending) purchaseIndices.push(i);
    })

    await this.crowdsale.allocateRefunds(purchaseIndices, { from: akemona });

    purchase = await this.crowdsale.purchases(0);

    assert(purchase.refundRequested === true && purchase.refundAllocated === true);

    await this.crowdsale.processRefund(0, { from: investor });

    purchase = await this.crowdsale.purchases(0);

    assert(purchase.refunded === true);

    var endBalance = await this.usdc.balanceOf(investor);

    assert(startBalance .eq(endBalance));

  });

  it('should not throw an error if no refund requests', async function () {
    let purchaseAmount = toBN(50000);

    assert(await this.usdc.transfer(escrow, toBN(1000000), { from: usdcOwner }));

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: escrow });

    var pendings = await this.crowdsale.getPurchasesPendingRefund();
    var purchaseIndices = [];
    pendings.forEach(function (isPending, i) {
      if (isPending) purchaseIndices.push(i);
    })

    await this.crowdsale.allocateRefunds(purchaseIndices, { from: akemona });

  });

  it('should work with multiple investors', async function () {

    var startBalance = await this.usdc.balanceOf(investor);

    assert(await this.usdc.transfer(investor2, toBN(1000000), { from: usdcOwner }));

    let purchaseAmount = toBN(50000);
    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor2 });
    await this.whitelist.addWhitelistedAddresses([investor2], { from: akemona });
    await this.crowdsale.processPurchases([investor2], [purchaseAmount], [numTokensExpected], { from: akemona });
    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });
    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });
    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount.mul((new BN(2))));

    await this.crowdsale.requestRefundForPurchase(1, { from: investor });

    var purchase = await this.crowdsale.purchases(1);

    assert(purchase.refundRequested === true && purchase.refundAllocated === false);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: escrow });

    var pendings = await this.crowdsale.getPurchasesPendingRefund();
    var purchaseIndices = [];
    pendings.forEach(function (isPending, i) {
      if (isPending) purchaseIndices.push(i);
    })

    await this.crowdsale.allocateRefunds(purchaseIndices, { from: akemona });

    purchase = await this.crowdsale.purchases(1);

    assert(purchase.refundRequested === true && purchase.refundAllocated === true);

    await this.crowdsale.processRefund(1, { from: investor });

    purchase = await this.crowdsale.purchases(1);

    assert(purchase.refunded === true);

    var endBalance = await this.usdc.balanceOf(investor);

    assert(startBalance .eq(endBalance));

  });

  it('should work with multiple investors 2', async function () {

    var startBalance = await this.usdc.balanceOf(investor);

    assert(await this.usdc.transfer(investor2, toBN(1000000), { from: usdcOwner }));

    let purchaseAmount = toBN(50000);
    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor2 });
    await this.whitelist.addWhitelistedAddresses([investor2], { from: akemona });
    await this.crowdsale.processPurchases([investor2], [purchaseAmount], [numTokensExpected], { from: akemona });
    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await this.crowdsale.requestRefundForPurchase(0, { from: investor2 });

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });
    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });
    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount.mul((new BN(2))));

    await this.crowdsale.requestRefundForPurchase(1, { from: investor });

    var purchase = await this.crowdsale.purchases(1);

    assert(purchase.refundRequested === true && purchase.refundAllocated === false);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount.mul((new BN(2))), { from: escrow });


    var pendings = await this.crowdsale.getPurchasesPendingRefund();
    var purchaseIndices = [];
    pendings.forEach(function (isPending, i) {
      if (isPending) purchaseIndices.push(i);
    })

    await this.crowdsale.allocateRefunds(purchaseIndices, { from: akemona });

    purchase = await this.crowdsale.purchases(1);

    assert(purchase.refundRequested === true && purchase.refundAllocated === true);

    await this.crowdsale.processRefund(1, { from: investor });

    purchase = await this.crowdsale.purchases(1);

    assert(purchase.refunded === true);

    var endBalance = await this.usdc.balanceOf(investor);

    assert(startBalance .eq(endBalance));



  });

  it('should process purchases', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);
  });

  it('should allow recover of lost token if admin', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor, investor2], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await debug ( this.crowdsale.recoverLostTokens([0], investor2, { from: akemona }) );

    (await this.token.balanceOf(investor2)).should.be.bignumber.equal(numTokensExpected);

  });

  it('should NOT allow recover of lost token if not admin', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor, investor2], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    return new Promise((resolve, reject) => {
      this.crowdsale.recoverLostTokens([0], investor2, { from: investor2 }).then(function () {
        reject('error did not trigger');
      }).catch(function () {
        resolve();
      });

    });

  });

  it('should trigger Transfer event on transfer', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor, investor2], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await this.whitelist.addException(investor, investor2, { from: akemona });

    const { logs } = await this.token.transfer(investor2, numTokensExpected, { from: investor });

    (await this.token.balanceOf(investor2)).should.be.bignumber.equal(numTokensExpected);
    
    expectEvent.inLogs(logs, 'Transfer', {
      from: investor,
      to: investor2
    });

  });

  it('should should not allow transfer when not using permissionless', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor, investor2], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    return new Promise((resolve, reject) => {
      this.token.transfer(investor2, numTokensExpected, { from: investor }).then(function () {
        reject('error did not trigger');
      }).catch(function () {
        resolve();
      });

    });

  });

  it('should should allow transfer when using permissionless', async function () {

    let purchaseAmount = toBN(50000);

    var numTokensExpected = await this.calculations.getNumTokensPerNumDollarsWithCredit(purchaseAmount, 0, MATURITYTIME, EFFDAILYRATE);

    await this.usdc.approve.sendTransaction(this.crowdsale.address, purchaseAmount, { from: investor });

    await this.whitelist.addWhitelistedAddresses([investor, investor2], { from: akemona });
  
    await this.crowdsale.processPurchases([investor], [purchaseAmount], [numTokensExpected], { from: akemona });

    (await this.usdc.balanceOf(escrow)).should.be.bignumber.equal(purchaseAmount);

    await this.whitelist2.addWhitelistedAddresses([investor, investor2], { from: akemona });

    await this.crowdsale.addWhitelist(this.whitelist2.address, { from: akemona });

    return new Promise((resolve, reject) => {
      this.token.transfer(investor2, numTokensExpected, { from: investor }).then(function () {
        resolve()
      }).catch(function (e) {
        console.log(e);
        reject(e);
      });
    });
    

  });
}
  /*
    beforeEach(async function () {
      this.openingTime = (await time.latest()).add(time.duration.weeks(1));
      this.closingTime = this.openingTime.add(time.duration.weeks(1));
      this.afterClosingTime = this.closingTime.add(time.duration.seconds(1));
  
      this.token = await AkemonaCrowdsaleToken.new({ from: deployer });
      this.crowdsale = await SampleCrowdsale.new(
        this.openingTime, this.closingTime, RATE, wallet, CAP, this.token.address, GOAL,
        { from: owner }
      );
  
      await this.token.addMinter(this.crowdsale.address, { from: deployer });
      await this.token.renounceMinter({ from: deployer });
    });
  
    it('should create crowdsale with correct parameters', async function () {
      should.exist(this.crowdsale);
      should.exist(this.token);
  
      (await this.crowdsale.openingTime()).should.be.bignumber.equal(this.openingTime);
      (await this.crowdsale.closingTime()).should.be.bignumber.equal(this.closingTime);
      (await this.crowdsale.rate()).should.be.bignumber.equal(RATE);
      (await this.crowdsale.wallet()).should.be.equal(wallet);
      (await this.crowdsale.goal()).should.be.bignumber.equal(GOAL);
      (await this.crowdsale.cap()).should.be.bignumber.equal(CAP);
    });
  
    it('should not accept payments before start', async function () {
      await shouldFail.reverting(this.crowdsale.send(ether('1')));
      await shouldFail.reverting(this.crowdsale.buyTokens(investor, { from: investor, value: ether('1') }));
    });
  
    it('should accept payments during the sale', async function () {
      const investmentAmount = ether('1');
      const expectedTokenAmount = RATE.mul(investmentAmount);
  
      await time.increaseTo(this.openingTime);
      await this.crowdsale.buyTokens(investor, { value: investmentAmount, from: investor });
  
      (await this.token.balanceOf(investor)).should.be.bignumber.equal(expectedTokenAmount);
      (await this.token.totalSupply()).should.be.bignumber.equal(expectedTokenAmount);
    });
  
    it('should reject payments after end', async function () {
      await time.increaseTo(this.afterClosingTime);
      await shouldFail.reverting(this.crowdsale.send(ether('1')));
      await shouldFail.reverting(this.crowdsale.buyTokens(investor, { value: ether('1'), from: investor }));
    });
  
    it('should reject payments over cap', async function () {
      await time.increaseTo(this.openingTime);
      await this.crowdsale.send(CAP);
      await shouldFail.reverting(this.crowdsale.send(1));
    });
  
    it('should allow finalization and transfer funds to wallet if the goal is reached', async function () {
      await time.increaseTo(this.openingTime);
      await this.crowdsale.send(GOAL);
  
      (await balance.difference(wallet, async () => {
        await time.increaseTo(this.afterClosingTime);
        await this.crowdsale.finalize({ from: owner });
      })).should.be.bignumber.equal(GOAL);
    });
  
    it('should allow refunds if the goal is not reached', async function () {
      (await balance.difference(investor, async () => {
        await time.increaseTo(this.openingTime);
        await this.crowdsale.sendTransaction({ value: ether('1'), from: investor, gasPrice: 0 });
        await time.increaseTo(this.afterClosingTime);
  
        await this.crowdsale.finalize({ from: owner });
        await this.crowdsale.claimRefund(investor, { gasPrice: 0 });
      })).should.be.bignumber.equal('0');
    });
  
    describe('when goal > cap', function () {
      // goal > cap
      const HIGH_GOAL = ether('30');
  
      it('creation reverts', async function () {
        await shouldFail.reverting(SampleCrowdsale.new(
          this.openingTime, this.closingTime, RATE, wallet, CAP, this.token.address, HIGH_GOAL
        ));
      });
    });*/
});