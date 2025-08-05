/*

the flattened file is used for manual verification of polgyon/etherscan contracts

*/
var fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);



async function commentCircular() {
    fs.readdir('./contracts', function(err, files) {

        for (let i=0; i < files.length; i++) {

            fs.readFile('./contracts/'+files[i], 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
      
              var result = data.replace(/(.+) \/\/#circular/g, '//#circular $1');
              fs.writeFile('./contracts/'+files[i], result, 'utf8', function (err) {
                  if (err) return console.log(err);
              });
           
            });
      
        }

    });
}


async function uncommentCircular() {
    fs.readdir('./contracts', function(err, files) {

        for (let i=0; i < files.length; i++) {

            fs.readFile('./contracts/'+files[i], 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
      
              var result = data.replace(/\/\/#circular +(.*)/g, '$1 //#circular');
              fs.writeFile('./contracts/'+files[i], result, 'utf8', function (err) {
                  if (err) return console.log(err);
              });
           
            });
      
        }

    });
}

async function removeSPDX() {
    fs.readFile('./flattened/AkemonaCrowdsale.sol', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        var license = "// SPDX-License-Identifier: Business Source License 1.1";

        var result = license + "\r\n" + data.replace(/\/\/ SPDX-License-Identifier: MIT/g, '');
        fs.writeFile('./flattened/AkemonaCrowdsale.sol', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
     
    });
}

async function flatten() {
    console.log('flattening contracts for etherscan verification');
    console.log('commenting out circular dependencies');
    await commentCircular();
    console.log('generating flat file');
    const { stdout, stderr } = await exec('truffle-flattener contracts/AkemonaCrowdsale.sol > flattened/AkemonaCrowdsale.sol');
    if (stderr) console.log(stderr);
    // verification fails if theres multiple licenses
    console.log('removing SPDX licenses');
    removeSPDX();
    await uncommentCircular();
    console.log('flat file completed');
}
flatten();




