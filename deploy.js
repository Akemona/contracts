/*
Trouble with scrypt? Try:

npm install github:barrysteyn/node-scrypt#fb60a8d3c158fe115a624b5ffa7480f3a24b03fb

note: Node was v14.15.1

*/
var glob = require("glob");
var fs = require("fs");

var newFileObj = {};

var files = ['AkemonaProtocol', 'AkemonaSecurityToken', 'AkemonaSecurityTokenFactory', 'AkemonaWhitelist', 'Usdc', 'AkemonaERC721', 'AkemonaDisbursement', 'AkemonaWhitelistPermissionless', 'AkemonaProxy', 'AkemonaWhitelistTracker', 'AkemonaCrowdsaleTracker', 'Akenro', 'AkenroDistributor', 'AkenroRegistry', 'GnosisSafeProxy', 'GnosisSafe', 'WETH9'];

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function deploy() {
    const { stdout, stderr } = await exec('npx truffle compile');

    files.forEach(function (key) {
        var file = "./build/contracts/" + key + ".json";
        var data = fs.readFileSync(file, 'utf8');

        var obj = JSON.parse(data);
        newFileObj[key] = {
            abi: obj.abi,
            bytecode: obj.bytecode
        };
    })

    var str = "const contracts = ";

    str += JSON.stringify(newFileObj, null, "   ").replace(/\[\],/g, "[] as any[],");

    str += "; module.exports.contracts = contracts;";

    var jsStr = "const contracts = ";

    jsStr += JSON.stringify(newFileObj, null, "   ");

    jsStr += "; module.exports.contracts = contracts;";

    fs.writeFileSync("./contracts.ts", str);

    fs.writeFileSync("../surety-frontend/src/client/app/contractTesting/contracts.ts", str);

    // for ethsync
    fs.writeFileSync("../ethsync/contracts.js", jsStr);
    fs.writeFileSync("./contracts.js", jsStr);

    // for mobile app
    fs.writeFileSync('./contracts.json', JSON.stringify(newFileObj, null, "   "));

    console.log('saved compiled contracts');

    //const { stdout2, stderr2 } = await exec('node flatten.js');

    console.log('done.');
}
deploy();




