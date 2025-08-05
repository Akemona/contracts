pragma solidity ^0.8.19;

import "./AkemonaWhitelist.sol";
import "./Usdc.sol";

contract AkemonaCrowdsaleCalculations {

    function getPricePerToken(uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        uint256 faceValue = 1e6;

        if (getTime() > maturityTime) {
            return faceValue;
        }

        uint256 expectedInterest = getExpectedInterest(maturityTime, effectiveDailyRate);

        return (1e6 * faceValue) / (expectedInterest / 1e12);
    }

    function getNumTokensPerNumDollars(uint256 usdcAmount, uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        return (usdcAmount * 1e6) / getPricePerToken(maturityTime, effectiveDailyRate);
    }

    // debug
    function getTime() public view returns (uint256) {
        return block.timestamp;
    }

    function getNumDaysRemaining(uint256 maturityTime) public view returns (uint256) {
        return (maturityTime - block.timestamp) / (24 * 60 * 60);
    }

    function getExpectedInterest(uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        uint256 numDaysRemaining = getNumDaysRemaining(maturityTime);

        uint256 expectedInterest = 1e18;
        
        for (uint i = 0; i < numDaysRemaining; i++) {
            expectedInterest = (expectedInterest * (1e18 + effectiveDailyRate)) / 1e18;
        }
        return expectedInterest;
    }

    function getNumTokensPerNumDollarsWithCredit(uint256 usdcAmount, uint256 _numDays, uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        return (usdcAmount * 1e6) / getPricePerTokenWithCredit(_numDays, maturityTime, effectiveDailyRate);
    }

    function getPricePerTokenWithCredit(uint256 _numDays, uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        uint256 faceValue = 1e6;

        if (getTime() > maturityTime) {
            return faceValue;
        }

        uint256 expectedInterest = getExpectedInterestWithCredit(_numDays, maturityTime, effectiveDailyRate);

        return (1e6 * faceValue) / (expectedInterest / 1e12);
    }

    function getExpectedInterestWithCredit(uint256 _numDays, uint256 maturityTime, uint256 effectiveDailyRate) public view returns (uint256) {
        uint256 numDaysRemaining = getNumDaysRemaining(maturityTime) + _numDays;

        uint256 expectedInterest = 1e18;
        
        for (uint i = 0; i < numDaysRemaining; i++) {
            expectedInterest = (expectedInterest * (1e18 + effectiveDailyRate)) / 1e18;
        }
        return expectedInterest;
    }


}