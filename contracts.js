const contracts = {
   "AkemonaProtocol": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_akenroToken",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_treasuryWallet",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_offeringCreationFee",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "_usdc",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_securityTokenFactoryAddress",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               }
            ],
            "name": "ConvertNoWalletEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "OfferingClosedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "securityToken",
                  "type": "address"
               }
            ],
            "name": "OfferingCreated",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "_purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_purchaser",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_received",
                  "type": "uint256"
               }
            ],
            "name": "PurchaseClosedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "investor",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "received",
                  "type": "uint256"
               }
            ],
            "name": "PurchaseEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "_purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_purchaser",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_received",
                  "type": "uint256"
               }
            ],
            "name": "ReconfirmEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "_purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_oldAddress",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "_newAddress",
                  "type": "address"
               }
            ],
            "name": "RecoverTokenEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "_purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_purchaser",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_received",
                  "type": "uint256"
               }
            ],
            "name": "RefundAllocatedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "purchaser",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "received",
                  "type": "uint256"
               }
            ],
            "name": "RefundProcessedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "purchaser",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "received",
                  "type": "uint256"
               }
            ],
            "name": "RefundRequestedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
               }
            ],
            "name": "RollingClosedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "whitelistId",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "whitelistContract",
                  "type": "address"
               }
            ],
            "name": "WhitelistCreated",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "PROTOCOL_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "akenroToken",
            "outputs": [
               {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "nextOfferingId",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "nextWhitelistId",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "offeringCreationFee",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "offeringPurchases",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "investor",
                  "type": "address"
               },
               {
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "paid",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "received",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "refunded",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "refundRequested",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "refundAllocated",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "requiresReconfirm",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "noWallet",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "offchain",
                  "type": "bool"
               },
               {
                  "internalType": "bytes32",
                  "name": "offchainPurchaseId",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "isClosed",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "offeringRefundRequests",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "isReconfirm",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "offeringToWhitelists",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "offerings",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "escrow",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "goal",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "cap",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "raised",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "openingTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "closingTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "maturityTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "disbursementTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "minimumInvestment",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "effectiveDailyRate",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "directRefund",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "isDisbursed",
                  "type": "bool"
               },
               {
                  "internalType": "string",
                  "name": "securityType",
                  "type": "string"
               },
               {
                  "internalType": "address",
                  "name": "securityToken",
                  "type": "address"
               },
               {
                  "internalType": "bool",
                  "name": "closed",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "exists",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "transactionId",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "securityTokenFactoryAddress",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "treasuryWallet",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "usdc",
            "outputs": [
               {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "whitelists",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "whitelistContract",
                  "type": "address"
               },
               {
                  "internalType": "bool",
                  "name": "exists",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "escrow",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "openingTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "closingTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "maturityTime",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "minimumInvestment",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "goal",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "cap",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "effectiveDailyRate",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "directRefund",
                  "type": "bool"
               },
               {
                  "internalType": "string",
                  "name": "securityType",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "tokenName",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "tokenSymbol",
                  "type": "string"
               }
            ],
            "name": "createOffering",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "newCap",
                  "type": "uint256"
               }
            ],
            "name": "updateOfferingCap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "whitelistContract",
                  "type": "address"
               }
            ],
            "name": "attachWhitelistToOffering",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "investor",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "usdcAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "amountToIssue",
                  "type": "uint256"
               }
            ],
            "name": "processPurchase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "amountToIssue",
                  "type": "uint256[]"
               },
               {
                  "internalType": "bytes32[]",
                  "name": "_offchainInvestmentIds",
                  "type": "bytes32[]"
               },
               {
                  "internalType": "uint256",
                  "name": "_transactionId",
                  "type": "uint256"
               }
            ],
            "name": "processPurchasesOnBehalfOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "usdcAmount",
                  "type": "uint256[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "amountToIssue",
                  "type": "uint256[]"
               }
            ],
            "name": "processPurchases",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "usdcAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "offchain",
                  "type": "bool"
               }
            ],
            "name": "processNoWalletPurchase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "newWallet",
                  "type": "address"
               }
            ],
            "name": "convertNoWalletToWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "isClosed",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "closeOffering",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256[]",
                  "name": "purchaseIndices",
                  "type": "uint256[]"
               }
            ],
            "name": "closePurchases",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "beforeDateTime",
                  "type": "uint256"
               }
            ],
            "name": "rollingClose",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               }
            ],
            "name": "requestRefund",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "maxLength",
                  "type": "uint256"
               }
            ],
            "name": "requestRefundAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               }
            ],
            "name": "processRefund",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               }
            ],
            "name": "processManualRefund",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "getPurchasesPendingRefund",
            "outputs": [
               {
                  "internalType": "bool[]",
                  "name": "",
                  "type": "bool[]"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256[]",
                  "name": "purchaseIndices",
                  "type": "uint256[]"
               }
            ],
            "name": "allocateRefunds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               }
            ],
            "name": "moveSentTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "i",
                  "type": "uint256"
               }
            ],
            "name": "reconfirmPurchase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "i",
                  "type": "uint256"
               }
            ],
            "name": "reconfirmPurchaseOnBehalfOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "requireReconfirm",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256[]",
                  "name": "purchaseIndices",
                  "type": "uint256[]"
               }
            ],
            "name": "requireReconfirm",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256[]",
                  "name": "purchaseIndices",
                  "type": "uint256[]"
               }
            ],
            "name": "processReconfirm",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "processReconfirm",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256[]",
                  "name": "purchaseIndices",
                  "type": "uint256[]"
               }
            ],
            "name": "requestRefundForPurchases",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "i",
                  "type": "uint256"
               }
            ],
            "name": "requestRefundForPurchase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "i",
                  "type": "uint256"
               }
            ],
            "name": "requestRefundForPurchaseOnBehalfOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "_isDisbursed",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "_disbursementTime",
                  "type": "uint256"
               }
            ],
            "name": "setDisbursed",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "purchaseIndex",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "newAddress",
                  "type": "address"
               }
            ],
            "name": "recoverLostTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               }
            ],
            "name": "isTransferAuthorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "getOfferingOwnerAddress",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "getOfferingIsDisbursed",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               }
            ],
            "name": "getOfferingDisbursementTime",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x608034620002b157601f62005bc538819003918201601f1916830191906001600160401b03831184841017620002b6578160a09285926040958652833981010312620002b1576200005082620002cc565b60209062000060828501620002cc565b83850151916200008160806200007960608901620002cc565b9701620002cc565b6001600160a01b039182169283156200026d57821696871562000229578216938415620001e5576200015e969760018060a01b0319948560025416176002558460035416176003556004551681600554161760055560065416176006556001600091828052828152848320338452815260ff858420541615620001ae575b8280528181526200011333868520620002e1565b507fd0c934f24ef5a377dc3832429ce607cbe940a3ca3c6cd7e532bd35b4b212d196808452838252858420338552825260ff86852054161562000177575b83525282339120620002e1565b50600160075560016009555161583690816200036f8239f35b80845283825285842033855282528584208360ff1982541617905533338260008051602062005ba58339815191528780a462000151565b82805282815284832033845281528483208260ff1982541617905533338460008051602062005ba58339815191528180a4620000ff565b865162461bcd60e51b815260048101879052601360248201527f757364632063616e6e6f74206265207a65726f000000000000000000000000006044820152606490fd5b865162461bcd60e51b815260048101879052601d60248201527f747265617375727957616c6c65742063616e6e6f74206265207a65726f0000006044820152606490fd5b865162461bcd60e51b815260048101879052601b60248201527f414b454e524f20746f6b656e2063616e6e6f74206265207a65726f00000000006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620002b157565b919060018301600090828252806020526040822054156000146200036857845494680100000000000000008610156200035457600186018082558610156200034057836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe6080604052600436101561001257600080fd5b6000803560e01c8062e6652a14613ee557806301ffc9a714613e745780630700f2eb14613a7857806309dcb46f146139485780630f4af4b01461371957806311168ede146136fb578063144b116a146136d2578063202b4850146136b4578063248a9ca31461368857806329eba91d146135c15780632f2ff15d1461350757806331243615146134d457806333aa51301461348957806336568abe146133f65780633c6fe52f14612e895780633e413bee14612e605780634582ce0214612e335780634626402b14612e0a5780634dd291fb14612de15780635dc117b214612c5e5780635eb1e30014612ae35780636110840314612a01578063666a7d1b146126995780636d4835a614612681578063724fcfed146125185780638745444e146123cf578063875869a5146122cd5780638a97987e1461210c5780639010d07c146120c657806391d148541461207b57806392a9cbf614611eb757806397aced12146115975780639aba6f961461156b578063a1d4646f14611425578063a217fddf14611409578063aee2bc86146113e0578063b22437f4146111e3578063bb21b32a146111c5578063bb8c0cf214611013578063bc85e8bb14610f8d578063ca15c87314610f63578063ce09a4fb14610f2e578063d218279114610dc5578063d547741f14610d88578063d5526bec14610bdf578063d5c78a2814610baa578063d92ba72314610b6a578063db5c959b14610a9d578063ddd2a662146108e7578063e34fec1d1461072a578063e3786664146106c9578063ebd6fcdd1461067f578063f58358f4146104b6578063f78073b414610372578063fc8cc916146102c55763fe4d5add1461028457600080fd5b346102c25760203660031901126102c257604080916004358152600a602052205460ff82519160018060a01b038116835260a01c1615156020820152f35b80fd5b50346102c25760603660031901126102c257602435801515810361036d576004358252600860205261032e604083209161030860ff600d85015460a81c1661452c565b82546001600160a01b031633148015610339575b61032590614566565b600b83016144b9565b600860443591015580f35b506000805160206157c1833981519152845283602052604084203360005260205261032560ff60406000205416905061031c565b600080fd5b50346102c257610381366142ec565b90918281526020926008845260408220926103a560ff600d86015460a81c1661452c565b92546001600160a01b039390841633148015610489575b6103c590614566565b825b81518110156104855761048090838552600b80885260076103f6604088206103ef8588614c43565b519061431e565b5001805460ff1916600117905561040d8285614c43565b518587528189528560008051602061576183398151915260408a610437828c206103ef898c614c43565b50541694838b52808d526002610453838d206103ef8a8d614c43565b50015490848c528d52600361046e838d206103ef8a8d614c43565b50015482519182528d820152a46144ee565b6103c7565b8380f35b506000805160206157c183398151915283528285526040808420336000908152908752205460ff166103bc565b50346102c25761054c6104c836614128565b8184526008602090815260408520546001600160a01b039290831633148015610652575b6104f590614566565b83865260088252600b9361051560ff8660408a20015460081c1615614eab565b869481885280845260ff600461052e8560408c2061431e565b50015416158061062d575b8061060b575b61054f575b878787614ef0565b80f35b8192939495506040906000805160206157a1833981519152928952808652600461057b86848c2061431e565b5001805461ff001916610100179055838952600c865281892082516105b0916105a38261419c565b8782528b89830152614e27565b600196848a528187526105c586848c2061431e565b50541695848a5281815260026105dd87858d2061431e565b50015491858b52815260036105f487858d2061431e565b500154908351928352820152a43880808080610544565b5081885280845260ff60076106238560408c2061431e565b500154161561053f565b5081885280845260ff60046106458560408c2061431e565b50015460081c1615610539565b506000805160206157c183398151915286528582526040808720336000908152908452205460ff166104ec565b50346102c25760803660031901126102c25761069961413e565b6044356001600160a01b038116810361036d576020916106bf91606435916004356150f9565b6040519015158152f35b50346102c2576106d8366142ec565b818392935260086020526106f960ff600d60408520015460a01c16156145a4565b815b8151811015610726578061071c6107156107219385614c43565b5186614f36565b6144ee565b6106fb565b8280f35b50346102c25760203660031901126102c25760043581526008602052604081209060018060a01b038254169160018060a01b0360018201541691816002810154916003820154600483015460058401546006850154600786015490600887015492600988015494600a89015496600b8a0154986040519a81600c8d939201908154916107b5836143d2565b80865292600181169081156108c7575060011461088c575b505050036107db908b6141e6565b600d8c01549b600e01549a6040519e8f9e8f91825260208201526040015260608d015260808c015260a08b015260c08a015260e089015261010088015261012087015261014086015260ff8116151561016086015260081c60ff161515610180850152610240806101a086015284016108539161442f565b91600160a01b6001900381166101c08501528060a01c60ff1615156101e085015260a81c60ff1615156102008401526102208301520390f35b9080935052602082205b8183106108ac57505081016020013880806107cd565b80602092948385600194549201015201910190918c92610896565b925050506020925060ff191682840152151560051b8201013880806107cd565b50346102c2576108f636614390565b828493929352602090600882526040852090600d82019161092c60ff8454610922828260a81c1661452c565b60a01c1615614d6a565b848752600b8452610940866040892061431e565b5090600482019384549460ff86881c1615610a6057869594926109be97949260039260018060a01b038093541633148015610a33575b61097f90614566565b828616978860018060a01b031987541617865560ff60201b191690555416910154918960405180988195829463a9059cbb60e01b8452600484016146e3565b03925af1928315610a28577ff5b47406e09353c2a909c0c60016bf3048f551462825c3adf0358d699d886819936109fb575b50604051908152a380f35b610a1a90833d8511610a21575b610a1281836141e6565b81019061446e565b50386109f0565b503d610a08565b6040513d88823e3d90fd5b506000805160206157c18339815191528d528c87526040808e20336000908152908952205460ff16610976565b60405162461bcd60e51b8152600481018890526015602482015274141d5c98da185cd9481b9bdd081b9bd5d85b1b195d605a1b6044820152606490fd5b50346102c257610aac366142ec565b81835260206008815260018060a01b0360408520541633148015610b3d575b610ad490614566565b82845260088152600b90610af460ff8360408820015460081c1615614eab565b845b8351811015610b3957610b34908587528383526004610b1c604089206103ef8489614c43565b5001805463ff000000191663010000001790556144ee565b610af6565b8580f35b506000805160206157c183398151915284528381526040808520336000908152908352205460ff16610acb565b50346102c257610b7936614128565b91908152600d602052604081209081548310156102c2576020610b9c84846143ba565b90546040519160031b1c8152f35b50346102c25760203660031901126102c25760ff600d604060209360043581526008855220015460a01c166040519015158152f35b50346102c257610bee36614390565b929190818352602093600885526040842092600d84015493610c1560ff8660a81c1661452c565b546001600160a01b0390811633148015610d5b575b610c3390614566565b818652600b8752610c47846040882061431e565b5094610c5a60ff60048801541615614de8565b81865416908115610d1f57978091889986899a866003610c959b9c0154946040519b8c96879586936323b872dd60e01b855260048501614486565b0393165af1948515610d14577f8c5d910a156c63cbe6eea3c45bc893d1b0d69c1cfff98d57f5ac5291a64eadf995610cf6575b505085546001600160a01b031916908316908117909555604051918291610cf0919083614513565b0390a380f35b81610d0c92903d10610a2157610a1281836141e6565b503880610cc8565b6040513d8a823e3d90fd5b60405162461bcd60e51b8152600481018a905260146024820152734e6f20696e766573746f7220616464726573733f60601b6044820152606490fd5b506000805160206157c183398151915286528587526040808720336000908152908952205460ff16610c2a565b50346102c25760403660031901126102c25761054c600435610da861413e565b9080845283602052610dc06001604086200154615234565b61553e565b50346102c257602080600319360112610f2a57610de0614154565b6000805160206157c1833981519152835282825260408320336000528252610e0f60ff60406000205416614566565b6006546040516370a0823160e01b81523060048201526001600160a01b03909116918382602481865afa908115610f1f5784928692610eec575b5092610e6c938660405180968195829463a9059cbb60e01b8452600484016146e3565b03925af1908115610ee1578391610ec4575b5015610e88575080f35b6064906040519062461bcd60e51b8252600482015260156024820152742aa9a221903a3930b739b332b9103330b4b632b21760591b6044820152fd5b610edb9150823d8411610a2157610a1281836141e6565b38610e7e565b6040513d85823e3d90fd5b8381949293503d8311610f18575b610f0481836141e6565b8101031261036d5790518391610e6c610e49565b503d610efa565b6040513d87823e3d90fd5b5080fd5b50346102c25760203660031901126102c25760ff600b604060209360043581526008855220015460081c166040519015158152f35b50346102c25760203660031901126102c25760406020916004358152600183522054604051908152f35b50346102c257610f9c36614128565b9082526008602052600360408320610fbd60ff600d83015460a81c1661452c565b80546001600160a01b031633148015610fdf575b610fda90614566565b015580f35b506000805160206157c18339815191528452836020526040842033600052602052610fda60ff604060002054169050610fd1565b50346102c257611022366142ec565b81835260086020818152604085205491949390926001600160a01b0392831633148015611198575b61105390614566565b845b8151811015610b3957828652600b8552611076604087206103ef8385614c43565b5060048101805460ff808260281c166111185790816110aa95949392821615908161110c575b506110af575b5050506144ee565b611055565b62ff00001916620100001790556110c68285614c43565b51857f8d21b9c00d1f2d3a5c36ace7ab45232e9747ca3a08facbbc1c826f1f3bc02018604089855416946003600282015491015482519182528c820152a43880806110a2565b9050818c1c163861109c565b60405162461bcd60e51b8152600481018a9052604c60248201527f4f6e65206f72206d6f7265207075726368617365496e6469636573207761732060448201527f616e206f6666636861696e20707572636861736520616e642063616e6e6f742060648201526b189948185b1b1bd8d85d195960a21b608482015260a490fd5b506000805160206157c183398151915285528484526040808620336000908152908652205460ff1661104a565b50346102c257806003193601126102c2576020600754604051908152f35b50346102c25760403660031901126102c25760043561120061413e565b906001600160a01b03808316919082156113a9577fcb35a830e6cf5dc5248b3b7114d1b7945368ab798d358d784789259c514cd5e561129960095495604051956112498761419c565b865261127e60209687810160018152898b52600a89528660408c2092511660018060a01b0319835416178255511515906144d1565b6112896009546144ee565b6009556040519182918883614513565b0390a181855260088352604085206112ba60ff600d83015460a81c1661452c565b54163314801561137c575b6112ce90614566565b828452600a825260ff604085205460a01c1615611343578352600d905260408220805490600160401b82101561132f578161131191600161132a940181556143ba565b819391549060031b600019811b9283911b169119161790565b905580f35b634e487b7160e01b84526041600452602484fd5b60405162461bcd60e51b8152600481018390526011602482015270139bc81cdd58da081dda1a5d195b1a5cdd607a1b6044820152606490fd5b506000805160206157c183398151915284528382526040808520336000908152908452205460ff166112c5565b60405162461bcd60e51b815260206004820152600f60248201526e4e6f207a65726f206164647265737360881b6044820152606490fd5b50346102c257806003193601126102c25760206040516000805160206157c18339815191528152f35b50346102c257806003193601126102c257602090604051908152f35b50346102c25760203660031901126102c257600435808252600860205260408220600d8101805460ff9261145d848360a81c1661452c565b546001600160a01b031633148015611538575b61147990614566565b611488838260a01c1615614620565b60ff60a01b1916600160a01b179055818352600b6020526040832092805b845481101561150f57808360046114c06114d4948961431e565b5001541615806114f7575b6114d9576144ee565b6114a6565b60076114e5828861431e565b5001805460ff191660011790556144ee565b50836007611505838961431e565b50015416156114cb565b50827f7917729fec4d6101a004ba682cfe3d36413e5d43e7e36b0c3dfa28eec926f1308280a280f35b506000805160206157c1833981519152855284602052604085203360005260205261147983604060002054169050611470565b50346102c25760203660031901126102c257600860406020926004358152828452200154604051908152f35b50346102c2576101803660031901126102c2576115b2614154565b61010435801515810361036d57610124356001600160401b038111611eb3576115df90369060040161433a565b91610144356001600160401b038111611eaf5761160090369060040161433a565b92610164356001600160401b038111611c4b5761162190369060040161433a565b600254604051636eb1769f60e11b8152919491906001600160a01b031660208280611650303360048401614454565b0381845afa918215610d14578892611e7b575b50600454809210611e36576003546040516323b872dd60e01b8152926020928492909183918c9183916116a491906001600160a01b03163360048501614486565b03925af18015611e2b57611e0c575b506024356044351115611db9576044356064351115611d6557602061171c6007549660018060a01b036005541690898961172e6040519a8b9687958694635115a9bb60e11b8652866004870152866024870152604486015260e0606486015260e485019061442f565b8381036003190160848501529061442f565b3060a48301528260c483015203925af1938415610a28578694611d21575b506040516352a9c8d760e01b81528690602081600481856001600160a01b038b165af1908115611c4f578291611cec575b506001600160a01b0386163b15610f2a57816117af9160405180938192632f2ff15d60e01b8352339060048401614513565b0381836001600160a01b038b165af18015611c4f57611cd8575b50604051633a8d7cdb60e21b8152602081600481856001600160a01b038b165af1908115611c4f578291611ca3575b506001600160a01b0386163b15610f2a578161182a9160405180938192632f2ff15d60e01b8352309060048401614513565b0381836001600160a01b038b165af18015611c4f57611c8f575b506040516352a9c8d760e01b8152602081600481856001600160a01b038b165af1908115611c4f578291611c5a575b506001600160a01b0386163b15610f2a57816118a59160405180938192631b2b455f60e11b8352309060048401614513565b0381836001600160a01b038b165af18015611c4f57611c37575b5050604051926001600160401b03610240850190811190851117611c2157610240840160405233845260018060a01b0316602084015260a435604084015260c435606084015285608084015260243560a084015260443560c084015260643560e08401528561010084015260843561012084015260e4356101408401521515610160830152846101808301526101a082015260018060a01b0382166101c0820152836101e0820152600161020082015260016102208201528284526008602052604084209060018060a01b0381511660018060a01b03198354161782556001820160018060a01b0360208301511660018060a01b031982541617905560408101516002830155606081015160038301556080810151600483015560a0810151600583015560c0810151600683015560e0810151600783015561010081015160088301556101208101516009830155610140810151600a830155611a3e600b8301611a306101608401511515826144a8565b6101808301511515906144b9565b6101a0810151805190956001600160401b038211611c0d57611a63600c8501546143d2565b96601f8811611bc8575b602097508791601f8411600114611b5a5792600e949281926102209592611b4f575b50508160011b916000199060031b1c191617600c8501555b6101c0810151600d850180546001600160a01b0319166001600160a01b03929092169190911781556101e0820151611ae1901515826144d1565b610200820151815460ff60a81b191690151560a81b60ff60a81b161790550151910155600754611b10906144ee565b6007556040519060018060a01b03168152817fd6f8e5e5d464307c888e2a24347edf8111c8f1df9d9e9f17aa8c03d092d61825843393a3604051908152f35b015190503880611a8f565b9190601f198416600c87018452898420935b818110611bb1575092600192859261022096600e989610611b98575b505050811b01600c850155611aa7565b015160001960f88460031b161c19169055388080611b88565b92938a600181928786015181550195019301611b6c565b600c8501825260208220601f840160051c810160208510611c06575b601f8a0160051c82018110611bfa575050611a6d565b60008155600101611be4565b5080611be4565b634e487b7160e01b81526041600452602490fd5b634e487b7160e01b600052604160045260246000fd5b611c40906141b7565b611c4b5785386118bf565b8580fd5b6040513d84823e3d90fd5b9150506020813d602011611c87575b81611c76602093836141e6565b8101031261036d5786905138611873565b3d9150611c69565b611c98906141b7565b611c4b578538611844565b9150506020813d602011611cd0575b81611cbf602093836141e6565b8101031261036d57869051386117f8565b3d9150611cb2565b611ce1906141b7565b611c4b5785386117c9565b9150506020813d602011611d19575b81611d08602093836141e6565b8101031261036d578690513861177d565b3d9150611cfb565b9093506020813d602011611d5d575b81611d3d602093836141e6565b81010312611c4b57516001600160a01b0381168103611c4b57923861174c565b3d9150611d30565b60405162461bcd60e51b815260206004820152602660248201527f6d6174757269747954696d65206d75737420626520616674657220636c6f73696044820152656e6754696d6560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f636c6f73696e6754696d65206d757374206265206166746572206f70656e696e6044820152646754696d6560d81b6064820152608490fd5b611e249060203d602011610a2157610a1281836141e6565b50386116b3565b6040513d89823e3d90fd5b60405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420414b454e524f20616c6c6f77616e63650000006044820152606490fd5b9091506020813d602011611ea7575b81611e97602093836141e6565b8101031261036d57519038611663565b3d9150611e8a565b8480fd5b8380fd5b50346102c257611ec636614128565b81839293526008906020918083526040842090600d820154611ef360ff8261092282809560a81c1661452c565b611f2281600b60018060a01b0395868154163314801561204f575b611f1790614566565b0154841c1615614da8565b868652600b85526040862093865b85548110156120215780826006611f4a611f69948a61431e565b5001541080612009575b80611fef575b80611fd7575b611f6e576144ee565b611f30565b6007611f7a828961431e565b5001805460ff1916600117905585611f92828961431e565b505416818b60008051602061576183398151915260408b8d6003611fc5876002611fbc828761431e565b5001549461431e565b500154908351928352820152a46144ee565b50836007611fe5838a61431e565b5001541615611f60565b50836004611ffd838a61431e565b500154861c1615611f5a565b50836004612017838a61431e565b5001541615611f54565b87897f43b1eed4741f433f52199afd28ce22119c9cdc39a8510a100b1ed620167b742f89604051428152a280f35b506000805160206157c18339815191528a528989526040808b20336000908152908b5220548316611f0e565b50346102c25760403660031901126102c257604061209761413e565b91600435815280602052209060018060a01b0316600052602052602060ff604060002054166040519015158152f35b50346102c25760403660031901126102c2576120f3602091600435815260018352604060243591206143ba565b905460405160039290921b1c6001600160a01b03168152f35b50346102c25760803660031901126102c257600435906044359160643580151580910361036d57818352600860205260408320600d81015461215360ff8260a81c1661452c565b61216360ff8260a01c1615614d6a565b61217360058301544210156145e5565b6121836006830154421115614620565b6121a26004830192600361219885548a61465d565b910154101561466a565b6001600160a01b0316803b15611eaf578460405180926340c10f1960e01b82528183816121d38c30600484016146e3565b03925af18015610f1f579085916122b9575b505090816121f786612269945461465d565b905560405190612206826141ca565b84825260243560208301528560408301528560608301528460808301528460a08301528460c08301528460e08301526001610100830152610120820152836101408201524261016082015283610180820152828452600b602052604084206146fe565b808252600b60205260408220546000198101919082116122a5576000805160206157e1833981519152604084958151908082526020820152a480f35b634e487b7160e01b83526011600452602483fd5b6122c2906141b7565b611eb35783386121e5565b50346102c2576122dc36614128565b8183526020916008835260018060a01b0380604086205416331480156123a2575b61230690614566565b818552600b845261231a836040872061431e565b50908286526008855261233a60ff600b60408920015460081c1615614eab565b600482019182549160ff83161580612394575b612355578780f35b6000805160206157418339815191529360409363ff000000191690558154169560036002830154920154908351928352820152a4388080808080808780f35b5060ff8360081c161561234d565b506000805160206157c183398151915285528484526040808620336000908152908652205460ff166122fd565b50346102c25760803660031901126102c2576001600160401b03600435602435828111611eb357612404903690600401614220565b90604435838111611eaf5761241d90369060040161428e565b92606435908111611eaf5761243690369060040161428e565b845b8351811015610b39576006546001600160a01b0390811691906124828161245f8489614c43565b51166040518095636eb1769f60e11b825281806020958695309060048401614454565b03915afa90811561250d5789916124dd575b506124a593506124aa575b506144ee565b612438565b6124d7906124b88388614c43565b51166124c48389614c43565b516124cf8487614c43565b519187614827565b3861249f565b905083813d8311612506575b6124f381836141e6565b8101031261036d576124a5925138612494565b503d6124e9565b6040513d8b823e3d90fd5b50346102c257602080600319360112610f2a5760043580835260089182815260018060a01b0360408520541633148015612654575b61255690614566565b81845282815260ff93600b906125768683604084200154871c1615614eab565b805b8482528284526040822054811015612650578087600461259e6125ba946040872061431e565b50015460181c168061262f575b8061260c575b6125bf576144ee565b612578565b85835283855260046125d4826040862061431e565b500161010061ff0019825416179055858352600c855261071c60408420604051906125fe8261419c565b838252600188830152614e27565b50858352838552876004612623836040872061431e565b500154881c16156125b1565b50858352838552876004612646836040872061431e565b50015416156125ab565b5080f35b506000805160206157c183398151915284528381526040808520336000908152908352205460ff1661254d565b50346102c25761054c61269336614128565b90614f36565b50346102c25760203660031901126102c25760043581526008602052604081206126cd60ff600b83015460081c1615614e5f565b60065460019190910154604051636eb1769f60e11b81526001600160a01b039283169290911660208280612705308560048401614454565b0381865afa9182156129f65784926129c2575b508115612960576020906024604051809581936370a0823160e01b835260048301525afa918215610ee157839261292c575b508180156128f15781106128e9575b506004358252600b602052604082205460019261278e61277883614209565b9261278660405194856141e6565b808452614209565b602083019390601f1901368537815b6004358352600c60205260408320548110156128a157856127c7575b6127c2906144ee565b61279d565b90600b6020526127ee60408420600c6020526127e6846040872061416a565b50549061431e565b5060048101549060ff82161580612894575b80612886575b612813575b5050906127b9565b6002015490818310612877576127c292919060101c60ff1615612843576128399161481a565b915b91903861280b565b612871916004358652600c602052600161286b6128638760408a2061416a565b505489614c43565b5261481a565b9161283b565b50509094506127c2829561283b565b5060ff8260281c1615612806565b5060ff8260081c16612800565b5050925090604051928392602084019060208552518091526040840192915b8181106128ce575050500390f35b825115158452859450602093840193909201916001016128c0565b905038612759565b60405162461bcd60e51b815260206004820152601360248201527224b739bab33334b1b4b2b73a10333ab732399760691b6044820152606490fd5b9091506020813d602011612958575b81612948602093836141e6565b8101031261036d5751903861274a565b3d915061293b565b60405162461bcd60e51b815260206004820152603460248201527f436f6e747261637420646f6573206e6f74206861766520617574686f72697a616044820152733a34b7b7103a37903932b33ab732102aa9a2219760611b6064820152608490fd5b9091506020813d6020116129ee575b816129de602093836141e6565b8101031261036d57519038612718565b3d91506129d1565b6040513d86823e3d90fd5b50346102c257612a1036614128565b91908152600b602052604081209081548310156102c2576101a0612a34848461431e565b5060018060a01b038154169060018101549060028101546007600383015460048401549060058501549360068601549560ff9485910154169660405198895260208901526040880152606087015281811615156080870152818160081c16151560a0870152818160101c16151560c0870152818160181c16151560e0870152818160201c16151561010087015260281c1615156101208501526101408401526101608301521515610180820152f35b50346102c257612af2366142ec565b919080825260089260209084825260018060a01b0360408520541633148015612c31575b612b1f90614566565b82845284825260ff93600b93612b3f8686604085200154891c1615614eab565b815b835181101561072657612b8490828452868652876004612b68604087206103ef858a614c43565b50015460181c1680612c0c575b80612be5575b612b89576144ee565b612b41565b8284528686526004612ba2604086206103ef8489614c43565b500161010061ff0019825416179055828452600c865261071c60408520612bc98388614c43565b519060405191612bd88361419c565b8252600189830152614e27565b50828452868652876004612c00604087206103ef858a614c43565b5001548a1c1615612b7b565b50828452868652876004612c27604087206103ef858a614c43565b5001541615612b75565b506000805160206157c183398151915284528382526040808520336000908152908452205460ff16612b16565b50346102c257612c6d36614128565b818352600860208181526040808620600b835290862090549394919391926001600160a01b039283163303612da357865b8254811080612d9a575b15612d9657806004612cbd612cdd938661431e565b50015460ff908116159081612d7a575b81612d61575b50612ce2576144ee565b612c9e565b6004612cee828661431e565b500161010061ff0019825416179055858952600c8752612d2560408a2060405190612d188261419c565b8382528b8a830152614e27565b84612d30828661431e565b50541681876000805160206157a183398151915260406002612d52858b61431e565b500154600361046e868c61431e565b90506007612d6f838761431e565b500154161538612cd3565b8091506004612d89848861431e565b500154851c161590612ccd565b8780f35b50868110612ca8565b60405162461bcd60e51b81526004810186905260166024820152752737ba103a34329037b33332b934b7339037bbb732b960511b6044820152606490fd5b50346102c257806003193601126102c2576002546040516001600160a01b039091168152602090f35b50346102c257806003193601126102c2576003546040516001600160a01b039091168152602090f35b50346102c25760803660031901126102c25761054c612e5061413e565b6064359060443590600435614827565b50346102c257806003193601126102c2576006546040516001600160a01b039091168152602090f35b50346102c25760c03660031901126102c2576001600160401b036024358181116133f257612ebb903690600401614220565b91604435828111610f2a57612ed490369060040161428e565b6064358381116133f257612eec90369060040161428e565b916084359384116102c257366023850112156102c2578360040135612f1081614209565b94612f1e60405196876141e6565b81865260208601903660248460051b83010111611eb3579060248201915b60248460051b82010183106133dd575050505060043581526008602052604081209360018060a01b03855416331480156133a9575b612f7a90614566565b600e850180549060a435820361336a5760018201809211613356575560ff600b86015460081c166133195760058501544211156132c457815b865181101561072657600486015460038701548082101561327f57612fe3612fdb8488614c43565b51809361465d565b116132265761301061300b826001600160a01b03613001868d614c43565b5116600435614c57565b6146a5565b600987015481106131d057600d8701546001600160a01b0390811690613036848b614c43565b5116906130438489614c43565b5191813b156131cc5791869161307093836040518096819582946340c10f1960e01b8452600484016146e3565b03925af18015610f1f579085916131b8575b505061309281600489015461465d565b60048801556004358452600b6020526131336040852060018060a01b036130b9858c614c43565b5116906130c6858a614c43565b516130d18688614c43565b5190604051936130e0856141ca565b845288602085015285604085015260608401528760808401528760a08401528760c08401528760e084015287610100840152600161012084015261014083015242610160830152866101808301526146fe565b6004358452600b602052604084205490816000198101116131a45761319f9291906001600160a01b03613166848c614c43565b511691613173848a614c43565b51604051928352602083015260001901906000805160206157e1833981519152604060043592a46144ee565b612fb3565b634e487b7160e01b85526011600452602485fd5b6131c1906141b7565b611eb3578338613082565b8680fd5b60405162461bcd60e51b815260206004820152602860248201527f5553444320616d6f756e74206c657373207468616e206d696e696d756d20696e6044820152671d995cdd1b595b9d60c21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602b60248201527f416d6f756e74207468617420776f756c6420626520726169736564206973206f60448201526a076657220746865206361760ac1b6064820152608490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e7420726169736564206973206f76657220746865206361700000006044820152606490fd5b60405162461bcd60e51b815260206004820152602760248201527f4f66666572696e67206f70656e696e6754696d65206973206e6f7420796574206044820152663830b9b9b2b21760c91b6064820152608490fd5b60405162461bcd60e51b815260206004820152601560248201527413d999995c9a5b99c81a5cc8191a5cd89d5c9cd959605a1b6044820152606490fd5b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b81526020600482015260176024820152760a8e4c2dce6c2c6e8d2dedc40928840dad2e6dac2e8c6d604b1b6044820152606490fd5b506000805160206157c18339815191528252816020526040822033600052602052612f7a60ff604060002054169050612f71565b60208060249385358152019301929150612f3c565b8280fd5b50346102c25760403660031901126102c25761341061413e565b336001600160a01b0382160361342c5761054c9060043561553e565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b50346102c25761349836614128565b91908152600c602052604081209081548310156102c25760406134bb848461416a565b5060ff6001825492015416825191825215156020820152f35b50346102c25760203660031901126102c257602090600435815260088252604060018060a01b0391205416604051908152f35b50346102c25760403660031901126102c257612650600435600161352961413e565b9180855260209085825261354283604088200154615234565b8086528582526040862093838060a01b03169384600052825260ff6040600020541615613576575b855252604083206155d6565b8086528582526040862084600052825260406000208360ff198254161790553384827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8980a461356a565b50346102c2576135d036614128565b818352600b6020526135e5816040852061431e565b5091808452600860205261360660ff600b60408720015460081c1615614eab565b82546001600160a01b03169233841480613679575b80613667575b613629578480f35b6040816004600080516020615741833981519152930163ff0000001981541690556003600282015491015482519182526020820152a4388080808480f35b5060ff600482015460081c1615613621565b5060ff6004820154161561361b565b50346102c25760203660031901126102c257600160406020926004358152808452200154604051908152f35b50346102c257806003193601126102c2576020600954604051908152f35b50346102c257806003193601126102c2576005546040516001600160a01b039091168152602090f35b50346102c257806003193601126102c2576020600454604051908152f35b50346102c25761372836614128565b818352600860209081526040842080549093916001600160a01b039182163314801561391b575b61375890614566565b61376c60ff600b87015460081c1615614e5f565b828652600b8152613780846040882061431e565b50906004820192835460ff81166138c25760ff8160081c161561386657821c60ff16156137f7575b9060036040939260008051602061578183398151915295600160ff1982541617905560028401986137e060048b54920191825461481a565b90558354169754920154908351928352820152a480f35b8781600d89015416828554166003860154823b15611eb3576138329284928360405180968195829463079cc67960e41b8452600484016146e3565b03925af18015611c4f57613848575b50506137a8565b61385590949392946141b7565b6138625790918738613841565b8780fd5b60405162461bcd60e51b815260048101849052602e60248201527f54686973207075726368617365206973206e6f74206d61726b6564206173207260448201526d19599d5b9914995c5d595cdd195960921b6064820152608490fd5b60405162461bcd60e51b815260048101849052602b60248201527f5468697320707572636861736520697320616c7265616479206d61726b65642060448201526a185cc81c99599d5b99195960aa1b6064820152608490fd5b506000805160206157c183398151915286528581526040808720336000908152908352205460ff1661374f565b50346102c257602080600319360112610f2a576004359081835260089081815260018060a01b0360408520541633148015613a4b575b61398790614566565b82845281815260ff92600b926139a78585604089200154831c1615614eab565b855b8287528484526040872054811015613a4757808660046139cf6139e99460408c2061431e565b500154161580613a24575b80613a03575b6139ee576144ee565b6139a9565b8388528585526004610b1c8260408b2061431e565b50838852858552866007613a1a8360408c2061431e565b50015416156139e0565b50838852858552866004613a3b8360408c2061431e565b500154841c16156139da565b8680f35b506000805160206157c183398151915284528381526040808520336000908152908352205460ff1661397e565b50346102c257613a8736614128565b8183526020916008835260408420600d810193613aaa60ff865460a81c1661452c565b60ff600b830154613ac0828260081c1615614da8565b16613e3457828652600b8152613ad9846040882061431e565b50916004830192835460ff8160081c1615613df95760ff613afb911615614de8565b6006546001830154604051636eb1769f60e11b81526001600160a01b03918216999194928516868280613b32308f60048401614454565b0381845afa918215613dee578c92613dbb575b50600285019a8b54809310613d68578c6040516370a0823160e01b81528260048201528981602481875afa908115611c4f57859291613d33575b5010613cf257918791613baf938e8989541691604051968795869485936323b872dd60e01b855260048501614486565b03925af1908115613c87578b91613cd5575b5015613c92578390541694838354168a6003850197885490803b156133f257613c01938360405180968195829463079cc67960e41b8452600484016146e3565b03925af18015613c8757613c59575b509160008051602061578183398151915295939160409593600160ff19825416179055613c4460048b54920191825461481a565b9055541696549154908351928352820152a480f35b9160409593919a613c7a6000805160206157818339815191529896946141b7565b9a91939550919395613c10565b6040513d8d823e3d90fd5b60405162461bcd60e51b815260048101869052601b60248201527a1554d110c81c99599d5b99081d1c985b9cd9995c8819985a5b1959602a1b6044820152606490fd5b613cec9150863d8811610a2157610a1281836141e6565b38613bc1565b60405162461bcd60e51b81526004810189905260196024820152784e6f7420656e6f756768205553444320696e20657363726f7760381b6044820152606490fd5b8092508a8092503d8311613d61575b613d4c81836141e6565b81010312613d5d5783905138613b7f565b8d80fd5b503d613d42565b60405162461bcd60e51b815260048101899052602560248201527f4e6f7420656e6f756768205553444320616c6c6f77616e63652066726f6d20656044820152647363726f7760d81b6064820152608490fd5b9091508681813d8311613de7575b613dd381836141e6565b81010312613de357519038613b45565b8b80fd5b503d613dc9565b6040513d8e823e3d90fd5b60405162461bcd60e51b8152600481018590526013602482015272139bc81c99599d5b99081c995c5d595cdd1959606a1b6044820152606490fd5b6064906040519062461bcd60e51b82526004820152601960248201527813d999995c9a5b99c81a5cc8191a5c9958dd081c99599d5b99603a1b6044820152fd5b50346102c25760203660031901126102c25760043563ffffffff60e01b8116809103610f2a57602090635a05180f60e01b8114908115613eba575b506040519015158152f35b637965db0b60e01b811491508115613ed4575b5082613eaf565b6301ffc9a760e01b14905082613ecd565b50346102c257613ef436614128565b818352602091600883526040842092600d8401549360ff85613f1b82809860a81c1661452c565b613f2e82600b85015460081c1615614da8565b60a01c166140bf57828652600b8252613f4a846040882061431e565b50946004860191825491613f6081841615614de8565b808360081c1661408657600788015416614037578654336001600160a01b0391821614918215614029575b505015613ff05761ff001916610100179055818552600c815260408086209051613fc591613fb88261419c565b8582528784830152614e27565b60036002850154940154906040519485528401526000805160206157a183398151915260403394a480f35b60405162461bcd60e51b81526004810184905260116024820152704e6f7420796f757220707572636861736560781b6044820152606490fd5b909150541633143880613f8b565b60405162461bcd60e51b815260048101859052602160248201527f507572636861736520697320636c6f7365642c2063616e6e6f7420726566756e6044820152601960fa1b6064820152608490fd5b60405162461bcd60e51b8152600481018690526011602482015270105b1c9958591e481c995c5d595cdd1959607a1b6044820152606490fd5b60405162461bcd60e51b815260048101839052603b60248201527f4f66666572696e6720636c6f736564203d3e206e6f206e657720726566756e6460448201527a733f20284966207468617420697320796f7572206c6f6769632e2960281b6064820152608490fd5b604090600319011261036d576004359060243590565b602435906001600160a01b038216820361036d57565b600435906001600160a01b038216820361036d57565b80548210156141865760005260206000209060011b0190600090565b634e487b7160e01b600052603260045260246000fd5b604081019081106001600160401b03821117611c2157604052565b6001600160401b038111611c2157604052565b6101a081019081106001600160401b03821117611c2157604052565b601f909101601f19168101906001600160401b03821190821017611c2157604052565b6001600160401b038111611c215760051b60200190565b81601f8201121561036d5780359161423783614209565b9261424560405194856141e6565b808452602092838086019260051b82010192831161036d578301905b82821061426f575050505090565b81356001600160a01b038116810361036d578152908301908301614261565b81601f8201121561036d578035916142a583614209565b926142b360405194856141e6565b808452602092838086019260051b82010192831161036d578301905b8282106142dd575050505090565b813581529083019083016142cf565b90604060031983011261036d5760043591602435906001600160401b03821161036d5761431b9160040161428e565b90565b80548210156141865760005260206000209060031b0190600090565b81601f8201121561036d578035906001600160401b038211611c21576040519261436e601f8401601f1916602001856141e6565b8284526020838301011161036d57816000926020809301838601378301015290565b606090600319011261036d5760043590602435906044356001600160a01b038116810361036d5790565b80548210156141865760005260206000200190600090565b90600182811c92168015614402575b60208310146143ec57565b634e487b7160e01b600052602260045260246000fd5b91607f16916143e1565b60005b83811061441f5750506000910152565b818101518382015260200161440f565b906020916144488151809281855285808601910161440c565b601f01601f1916010190565b6001600160a01b0391821681529116602082015260400190565b9081602091031261036d5751801515810361036d5790565b6001600160a01b03918216815291166020820152604081019190915260600190565b9060ff801983541691151516179055565b9061ff00825491151560081b169061ff001916179055565b805460ff60a01b191691151560a01b60ff60a01b16919091179055565b60001981146144fd5760010190565b634e487b7160e01b600052601160045260246000fd5b9081526001600160a01b03909116602082015260400190565b1561453357565b60405162461bcd60e51b815260206004820152600b60248201526a4e6f206f66666572696e6760a81b6044820152606490fd5b1561456d57565b60405162461bcd60e51b815260206004820152600f60248201526e2737ba1037bbb732b917b0b236b4b760891b6044820152606490fd5b156145ab57565b60405162461bcd60e51b815260206004820152601260248201527113d999995c9a5b99c81a5cc818db1bdcd95960721b6044820152606490fd5b156145ec57565b60405162461bcd60e51b815260206004820152600c60248201526b139bdd081bdc195b881e595d60a21b6044820152606490fd5b1561462757565b60405162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e4818db1bdcd95960921b6044820152606490fd5b919082018092116144fd57565b1561467157565b60405162461bcd60e51b815260206004820152600c60248201526b10d85c08195e18d95959195960a21b6044820152606490fd5b156146ac57565b60405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606490fd5b6001600160a01b039091168152602081019190915260400190565b8054600160401b811015611c215761471b9160018201815561431e565b61480457815181546001600160a01b0319166001600160a01b03919091161781556020820151600182015560408201516002820155606082015160038201556080820151614802926007916101809190600485019061477c901515826144a8565b61478c60a08301511515826144b9565b60c08201511515815463ff00000060e0850151151560181b1660ff60201b610100860151151560201b169162ff000060ff60281b610120880151151560281b169460101b169065ffffffff00001916171717179055610140810151600585015561016081015160068501550151151591016144a8565b565b634e487b7160e01b600052600060045260246000fd5b919082039182116144fd57565b9392909193600091818352602095600887526040918285209760018060a01b03808a541633148015614c1a575b61485d90614566565b600d8a01998a5460ff8160a81c1615614be15760ff6148809160a01c16156145a4565b61489060058201544210156145e5565b6148a06006820154421115614620565b8415614bad5760049a8b8201916148c76148bb84548961465d565b6003830154101561466a565b60098101548710614b6f578a90614908868f6148e861300b8c8f8890614c57565b8760065416948c519384928392636eb1769f60e11b845230918401614454565b0381865afa908115614b65579089918d91614b34575b5010614af5578888928f8d8f916149508a60018d980154169551978896879586946323b872dd60e01b86528501614486565b03925af1908115614aeb578a91614ace575b5015614a9457548216803b15614a90578885614996928c8f84908c51968795869485936340c10f1960e01b855284016146e3565b03925af18015614a8657614a6f575b5090816149b686614a23945461465d565b90558551986149c48a6141ca565b1697888152878382015284868201528360608201528760808201528760a08201528760c08201528760e08201528761010082015287610120820152876101408201524261016082015287610180820152868852600b83528588206146fe565b848652600b815283862054600019810196908711614a5c57506000805160206157e18339815191529495969798508351928352820152a4565b634e487b7160e01b815260118a52602490fd5b97614a7e614a239392996141b7565b9790916149a5565b87513d8b823e3d90fd5b8880fd5b865162461bcd60e51b8152808d0185905260146024820152731554d110c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b614ae59150853d8711610a2157610a1281836141e6565b38614962565b88513d8c823e3d90fd5b885162461bcd60e51b8152808f0187905260196024820152784e6f7420656e6f756768205553444320616c6c6f77616e636560381b6044820152606490fd5b809250888092503d8311614b5e575b614b4d81836141e6565b81010312613de3578890513861491e565b503d614b43565b8a513d8e823e3d90fd5b875162461bcd60e51b8152808e01869052601860248201527710995b1bddc81b5a5b9a5b5d5b481a5b9d995cdd1b595b9d60421b6044820152606490fd5b855162461bcd60e51b815260048101849052600d60248201526c5a65726f20707572636861736560981b6044820152606490fd5b865162461bcd60e51b815260048101859052601260248201527113d999995c9a5b99c81b9bdd08199bdd5b9960721b6044820152606490fd5b506000805160206157c1833981519152875286825284872033885282528487205460ff16614854565b80518210156141865760209160051b010190565b9160009283526020600d8152604091828520938351808685829854938481520190895285892092895b87828210614d5457505050614c97925003866141e6565b845115614d4957855b8551811015614d4057614cb38187614c43565b518752600a84528487205485516318a340f960e11b815290859082906001600160a01b03168180614ce88989600484016146e3565b03915afa908115614d36578891614d19575b50614d0d57614d08906144ee565b614ca0565b50505050505050600190565b614d309150853d8711610a2157610a1281836141e6565b38614cfa565b86513d8a823e3d90fd5b50505050505090565b505050505050600190565b855484526001958601958b955093019201614c80565b15614d7157565b60405162461bcd60e51b815260206004820152600f60248201526e13d999995c9a5b99c818db1bdcd959608a1b6044820152606490fd5b15614daf57565b60405162461bcd60e51b8152602060048201526011602482015270105b1c9958591e48191a5cd89d5c9cd959607a1b6044820152606490fd5b15614def57565b60405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e481c99599d5b99195960821b6044820152606490fd5b8054600160401b811015611c2157614e449160018201815561416a565b614804576001602083614802945184550151151591016144a8565b15614e6657565b60405162461bcd60e51b815260206004820152601d60248201527f436f6e747261637420697320616c7265616479206469736275727365640000006044820152606490fd5b15614eb257565b60405162461bcd60e51b815260206004820152601660248201527527b33332b934b7339034b9903234b9b13ab939b2b21760511b6044820152606490fd5b15614ef757565b60405162461bcd60e51b8152602060048201526017602482015276139bc81c99599d5b99081dd85cc81c1c9bd8d95cdcd959604a1b6044820152606490fd5b600091818352602091600883526040614f5b60ff600d838820015460a01c16156145a4565b8493828652600b90818152614f728584892061431e565b50546001600160a01b039081163314806150d8575b806150b4575b80615093575b614fa8575b5050505050506148029150614ef0565b909192938095965087528282526004614fc387868a2061431e565b5001805461ff001916610100179055848752600c82528387208451908186016001600160401b0381118382101761507f576150678988809661502c8e9d9b976148029f9d9b98978e6003986000805160206157a18339815191529d9a5286835289830152614e27565b615040838360019f8d81528a8a522061431e565b5054169a89815286865260026150588484842061431e565b500154968a825286522061431e565b500154908351928352820152a4388080808080614f98565b634e487b7160e01b8a52604160045260248afd5b5084885282825260ff60076150aa88878c2061431e565b5001541615614f93565b5084885282825260ff60046150cb88878c2061431e565b50015460081c1615614f8d565b5084885282825260ff60046150ef88878c2061431e565b5001541615614f87565b91929060008381526020916008835260409460ff600b878520015460081c161561522a57600d8452858320968651808987829b54938481520190875287872092875b8982821061521457505050615152925003896141e6565b835b885181101561520857615167818a614c43565b518552600a865287852054885163ebd6fcdd60e01b8152600481018590526001600160a01b0386811660248301528481166044830152606482018a90529091889183916084918391165afa9081156151fe5786916151e1575b506151d3576151ce906144ee565b615154565b505050505050505050600190565b6151f89150873d8911610a2157610a1281836141e6565b386151c0565b89513d88823e3d90fd5b50505050935050505090565b855484526001958601958e95509301920161513b565b5050935050505090565b600090808252602090828252604092838120338252835260ff84822054161561525d5750505050565b8351916001600160401b039033606085018381118682101761552a578752602a855285850191873684378551156155165760308353855191600192831015615502576078602188015360295b8381116154985750615468579087519360808501908582109082111761545457885260428452868401946060368737845115615440576030865384518210156154405790607860218601536041915b8183116153d2575050506153a25761539e9386936153829361537360489461534a9a519a8b9576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c880152518092603788019061440c565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180938684019061440c565b010360288101875201856141e6565b5192839262461bcd60e51b84526004840152602483019061442f565b0390fd5b60648587519062461bcd60e51b825280600483015260248201526000805160206157218339815191526044820152fd5b909192600f8116601081101561542c576f181899199a1a9b1b9c1cb0b131b232b360811b901a61540285886155c5565b5360041c928015615418576000190191906152f8565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b86526041600452602486fd5b60648789519062461bcd60e51b825280600483015260248201526000805160206157218339815191526044820152fd5b90600f811660108110156154ee576f181899199a1a9b1b9c1cb0b131b232b360811b901a6154c6838a6155c5565b5360041c9080156154da57600019016152a9565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b85526041600452602485fd5b90604061557b92600090808252816020528282209360018060a01b03169384835260205260ff838320541661557e575b8152600160205220615644565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a461556e565b908151811015614186570160200190565b9190600183016000908282528060205260408220541560001461563e57845494600160401b86101561562a578361561a611311886001604098999a018555846143ba565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b9060018201906000928184528260205260408420549081151560001461571957600019918083018181116154da57825490848201918211615705578082036156d0575b505050805480156156bc5782019161569f83836143ba565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6156f06156e061131193866143ba565b90549060031b1c928392866143ba565b90558652846020526040862055388080615687565b634e487b7160e01b88526011600452602488fd5b505050509056fe537472696e67733a20686578206c656e67746820696e73756666696369656e74614513b8605f08439c8502648322de009acb098e85db060ff118e6af7dcca6a28db767dd941ec5214d3ca530151fea96f27a439b986072fdfa9327719f60d627e5a1134e2864053f95e668534c780ba859012011578ae0c2b513800e7ac797b0fab788b1b4678f56e5913a92e58f86391815eb07437c8c0dcec8d5f70e5dec61d0c934f24ef5a377dc3832429ce607cbe940a3ca3c6cd7e532bd35b4b212d19606cc40b88c7fd9ebf4f958a14fe06793524f6a6e2b961128d1413ea32b31c2b5a26469706673582212205993f877207b844b8f19eb61b8e7515639cd1934969fb398cd430a70b68af90164736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"
   },
   "AkemonaSecurityToken": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_identityRegistry",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_compliance",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "symbol",
                  "type": "string"
               },
               {
                  "internalType": "address",
                  "name": "_protocol",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_onchainID",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "bool",
                  "name": "_isFrozen",
                  "type": "bool"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
               }
            ],
            "name": "AddressFrozen",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               }
            ],
            "name": "Approval",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_compliance",
                  "type": "address"
               }
            ],
            "name": "ComplianceAdded",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_identityRegistry",
                  "type": "address"
               }
            ],
            "name": "IdentityRegistryAdded",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Paused",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_lostWallet",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_newWallet",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_investorOnchainID",
                  "type": "address"
               }
            ],
            "name": "RecoverySuccess",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "TokensFrozen",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "TokensUnfrozen",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               }
            ],
            "name": "Transfer",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Unpaused",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "string",
                  "name": "_newName",
                  "type": "string"
               },
               {
                  "indexed": true,
                  "internalType": "string",
                  "name": "_newSymbol",
                  "type": "string"
               },
               {
                  "indexed": false,
                  "internalType": "uint8",
                  "name": "_newDecimals",
                  "type": "uint8"
               },
               {
                  "indexed": false,
                  "internalType": "string",
                  "name": "_newVersion",
                  "type": "string"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_newOnchainID",
                  "type": "address"
               }
            ],
            "name": "UpdatedTokenInformation",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "AGENT_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "PAUSER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               }
            ],
            "name": "allowance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "approve",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "balanceOf",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "decimals",
            "outputs": [
               {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
               }
            ],
            "name": "decreaseAllowance",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "disbursement",
            "outputs": [
               {
                  "internalType": "contract AkemonaDisbursement",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
               }
            ],
            "name": "increaseAllowance",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "protocol",
            "outputs": [
               {
                  "internalType": "contract IAkemonaProtocol",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "transfer",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "name",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "symbol",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "paused",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_onchainID",
                  "type": "address"
               }
            ],
            "name": "setOnchainID",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_identityRegistry",
                  "type": "address"
               }
            ],
            "name": "setIdentityRegistry",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_compliance",
                  "type": "address"
               }
            ],
            "name": "setCompliance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "string",
                  "name": "_tokenName",
                  "type": "string"
               }
            ],
            "name": "setName",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "string",
                  "name": "_tokenSymbol",
                  "type": "string"
               }
            ],
            "name": "setSymbol",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               }
            ],
            "name": "forcedTransfer",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_toList",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_fromList",
                  "type": "address[]"
               },
               {
                  "internalType": "address[]",
                  "name": "_toList",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchForcedTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_toList",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_userAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchBurn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "internalType": "bool",
                  "name": "_freeze",
                  "type": "bool"
               }
            ],
            "name": "setAddressFrozen",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "freezePartialTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "unfreezePartialTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_userAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "bool[]",
                  "name": "_freeze",
                  "type": "bool[]"
               }
            ],
            "name": "batchSetAddressFrozen",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_userAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchFreezePartialTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_userAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "batchUnfreezePartialTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "identityRegistry",
            "outputs": [
               {
                  "internalType": "contract IIdentityRegistry",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "compliance",
            "outputs": [
               {
                  "internalType": "contract IModularCompliance",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               }
            ],
            "name": "isFrozen",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_userAddress",
                  "type": "address"
               }
            ],
            "name": "getFrozenTokens",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "onchainID",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "version",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "pure",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "toArray",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "amountArray",
                  "type": "uint256[]"
               }
            ],
            "name": "mintMultiple",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "accounts",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "burnFromAdminMultiple",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_disbursement",
                  "type": "address"
               }
            ],
            "name": "setDisbursement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "hasDisbursement",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupplyNonWalletless",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getDefaultAdminRole",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getMinterRole",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "burnFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "transferFrom",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x6080806040523462000a365760006200552d803803809162000022828662000a65565b843982019160e08184031262000486576200003d8162000a89565b6200004b6020830162000a89565b604083015160608401519192916001600160401b03811162000a3257866200007591860162000a9e565b60808501519096906001600160401b03811162000a2e57906200009a91860162000a9e565b90620000b760c0620000af60a0880162000a89565b960162000a89565b87519095906001600160401b0381116200093357600554600181811c9116801562000a23575b60208210146200091457601f8111620009dc575b50806020601f82116001146200095357899162000947575b508160011b916000199060031b1c1916176005555b82516001600160401b0381116200093357600654600181811c9116801562000928575b60208210146200091457601f8111620008bd575b50806020601f8211600114620008465789916200083a575b508160011b916000199060031b1c1916176006555b60ff198060075416600755878052876020526040882033895260205260ff6040892054161562000800575b8780526001602052620001c43360408a2062000b47565b507f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68089528860205260408920338a5260205260ff60408a20541615620007c6575b885260016020526200021c3360408a2062000b47565b507f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a908189528860205260408920338a5260205260ff60408a205416156200078b575b508752600160205262000276336040892062000b47565b5060078054610100600160a81b03191660089290921b610100600160a81b0316919091179055600955600a80546001600160a01b03199081166001600160a01b0396871617909155865194969094906001600160401b0382116200077757600f54600181811c911680156200076c575b602082101462000758579081601f849311620006f6575b50602090601f83116001146200067f57889262000673575b50508160011b916000199060031b1c191617600f555b8051906001600160401b0382116200065f57601054600181811c9116801562000654575b602082101462000640579081601f899695949311620005e4575b50602090601f83116001146200055757859392918891836200054b575b50508160011b916000199060031b1c1916176010555b1680620004f3575b50169283620003be575b6040516148f8908162000bd58239f35b839183918280528260205260408320338452602052620003e560ff60408520541662000b15565b600e5416806200048a575b5082600e5491821617600e551617803b156200048657818091602460405180948193631ffad50160e11b83523060048401525af180156200047b5762000460575b50807f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b691a238808080620003ae565b6200046c829162000a3b565b62000478573862000431565b80fd5b6040513d84823e3d90fd5b5080fd5b91509150803b15620004ef5782809160246040518094819363040db3b560e41b83523060048401525af18015620004e45790849291620004ce575b908391620003f0565b620004dc9093919362000a3b565b9138620004c5565b6040513d85823e3d90fd5b8280fd5b84805284602052604085203386526020526200051660ff60408720541662000b15565b8084600d541617600d557fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c8580a238620003a4565b01519050388062000386565b601088527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6729190601f198416895b818110620005c857509160019391858997969410620005ae575b505050811b016010556200039c565b015160001960f88460031b161c191690553880806200059f565b8284015185558b98506001909401936020938401930162000585565b9091929394506010875260208720601f840160051c8101916020851062000635575b90601f8a9796959493920160051c01905b81811062000626575062000369565b88815589965060010162000617565b909150819062000606565b634e487b7160e01b87526022600452602487fd5b90607f16906200034f565b634e487b7160e01b86526041600452602486fd5b01519050388062000315565b600f89526000805160206200550d8339815191529250601f198416895b818110620006dd5750908460019594939210620006c3575b505050811b01600f556200032b565b015160001960f88460031b161c19169055388080620006b4565b929360206001819287860151815501950193016200069c565b600f89529091506000805160206200550d833981519152601f840160051c810191602085106200074d575b90601f859493920160051c01905b8181106200073e5750620002fd565b8981558493506001016200072f565b909150819062000721565b634e487b7160e01b88526022600452602488fd5b90607f1690620002e6565b634e487b7160e01b87526041600452602487fd5b8189528860205260408920338a52602052600160408a2091825416179055333382600080516020620054cd8339815191528b80a4386200025f565b8089528860205260408920338a5260205260408920600183825416179055333382600080516020620054cd8339815191528c80a462000206565b878052876020526040882033895260205260408820600182825416179055333389600080516020620054cd8339815191528180a4620001ad565b9050840151386200016d565b60068a52899250600080516020620054ed833981519152905b601f1983168410620008a4576001935082601f198116106200088a575b5050811b0160065562000182565b86015160001960f88460031b161c1916905538806200087c565b868101518255602093840193600190920191016200085f565b60068952600080516020620054ed833981519152601f830160051c8101916020841062000909575b601f0160051c01905b818110620008fd575062000155565b898155600101620008ee565b9091508190620008e5565b634e487b7160e01b89526022600452602489fd5b90607f169062000141565b634e487b7160e01b88526041600452602488fd5b90508901513862000109565b60058a528992507f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0905b8b601f1984168510620009c457506001935082601f19811610620009aa575b5050811b016005556200011e565b8b015160001960f88460031b161c1916905538806200099c565b8101518255602093840193600190920191016200097d565b6005895260208920601f830160051c81016020841062000a1b575b601f830160051c8201811062000a0f575050620000f1565b8a8155600101620009f7565b5080620009f7565b90607f1690620000dd565b8680fd5b8580fd5b600080fd5b6001600160401b03811162000a4f57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000a4f57604052565b51906001600160a01b038216820362000a3657565b919080601f8401121562000a36578251906001600160401b03821162000a4f576040519160209162000ada601f8301601f191684018562000a65565b81845282828701011162000a365760005b81811062000b0157508260009394955001015290565b858101830151848201840152820162000aeb565b1562000b1d57565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b9190600183016000908282528060205260408220541560001462000bce578454946801000000000000000086101562000bba576001860180825586101562000ba657836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe60c0604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a7146126da5750806306fdde031461261d57806307ea547714612567578063095ea7b31461253d578063125c4a3314612455578063134e18f41461242c578063158b1a57146123f457806318160ddd146123d75780631a7af379146122f45780631fe56f7d1461220657806322459e18146121dd57806323b872dd146121b9578063248a9ca3146121905780632f2ff15d146120d6578063313ce567146120ba57806336568abe146120095780633950935114611fb95780633d1ddc5b14611f3d5780633f4ba83a14611de857806340c10f1914611be857806342966c6814611b4a57806342a47abc14611a985780634710362d146119ba5780634a6cc6771461181c57806352a9c8d714610db357806354fd4d50146117eb5780635c975abb146117c75780635fff709d146116345780636290865d1461160b57806368573107146113ad5780637006bed3146112ea57806370a08231146112b257806379cc6790146112125780637cdb5449146111eb5780638456cb59146110c457806388d695b2146110745780638ce74426146110475780639010d07c1461100757806391d1485414610fc357806395d89b4114610f815780639dc29fac14610dea5780639fc1d0e714610dce578063a217fddf14610db3578063a457c2d714610d03578063a68cef6814610c47578063a9059cbb14610c15578063aba6370514610bec578063b84c824614610a1e578063c368b160146109f5578063c47f0027146107d4578063c69c09cf14610711578063ca15c873146106ea578063cbf3f86114610668578063d53913931461053b578063d547741f1461062b578063dd62ed3e146105dd578063e58398361461059f578063e63ab1e914610576578063ea35f36c1461053b57838163f8981789146103f7575063fc7e5fa8146102c457600080fd5b346103f3576102d236612968565b90929391865b8181106102e3578780f35b6102f66102f18284896132ce565b6132f4565b6103018285886132ce565b35908980526020908a8252898b2033600052825261032f60ff808c60002054169081156103c8575b50612af0565b60018060a01b031691828b52600282528a8a812054610356838d600c948588522054613308565b1161039f57916000805160206147c38339815191529184938c8e61039a989781528285526103878483832054613308565b92878252855220558b51908152a26132bf565b6102d8565b8a5162461bcd60e51b8152808901849052600360248201526204631360ec1b6044820152606490fd5b90506000805160206147e38339815191528d528c84528b8d203360005284528b600020541638610329565b8280fd5b919050346104d15760203660031901126104d15761041361280e565b828052826020528383203360005260205261043460ff856000205416612af0565b600e546001600160a01b0391908216806104e2575b5016928383600e548260018060a01b0319821617600e55161791823b156104de5783926024849284519586938492631ffad50160e11b845230908401525af19081156104d557506104bd575b50807f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b691a280f35b6104c690612790565b6104d1578138610495565b5080fd5b513d84823e3d90fd5b8380fd5b803b1561053757848091602488518094819363040db3b560e41b8352308a8401525af190811561052d578591610519575b50610449565b61052290612790565b6104de578338610513565b86513d87823e3d90fd5b8480fd5b5050346104d157816003193601126104d157602090517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b5050346104d157816003193601126104d157602090516000805160206148238339815191528152f35b5050346104d15760203660031901126104d15760209160ff9082906001600160a01b036105ca61280e565b168152600b855220541690519015158152f35b5050346104d157806003193601126104d1576020916105fa61280e565b82610603612829565b6001600160a01b03928316845260038652922091166000908152908352819020549051908152f35b5090346103f357806003193601126103f3576106659135610660600161064f612829565b93838752866020528620015461358c565b613876565b80f35b5050346104d15760203660031901126104d1576106a460ff61068861280e565b9284805284602052808520336000526020526000205416612af0565b600d80546001600160a01b0319166001600160a01b039290921691821790557fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c8280a280f35b50346103f35760203660031901126103f35760209282913581526001845220549051908152f35b5050346104d157806003193601126104d15761072b61280e565b60243590811515918281036105375761078b91858052856020528486203360005260205260ff85600020541680156107a2575b61076790612af0565b60018060a01b031693848652600b60205285209060ff801983541691151516179055565b33916000805160206148038339815191528480a480f35b506000805160206147e38339815191528652856020528486203360005260205261076760ff866000205416905061075e565b509190346104d1576107e5366129e7565b9083805260209084825283852033600052825261080860ff856000205416612af0565b835195828701908382528486890152848360608a0137866060868a010152601f850191601f19986108476060828c87168101038a8101845201826127d4565b519020865185810190868252600089820152888152610865816127b9565b519020146109cd576001600160401b0385116109ba5750610887600f54612a31565b90601f821161097d575b50508491601f841160011461091857508483949596509261090d575b50508160011b916000199060031b1c191617600f555b6108cb612b21565b600a546001600160a01b031691906000805160206148838339815191526109076108f3612b52565b926108fc612be0565b945191829182612c68565b0390a480f35b0135905038806108ad565b9195831695600f86528286209286905b8882106109655750508360019596971061094b575b505050811b01600f556108c3565b0135600019600384901b60f8161c1916905538808061093d565b80600184968294958701358155019501920190610928565b600f87528387209060051c8101918486106109b0575b601f0160051c01905b81811015610891576000815560010161099c565b9091508190610993565b634e487b7160e01b875260419052602486fd5b855162461bcd60e51b81529081018490526002602482015261463160f01b6044820152606490fd5b5050346104d157816003193601126104d15760085490516001600160a01b039091168152602090f35b509190346104d157610a2f366129e7565b90838052602090848252838520336000528252610a5260ff856000205416612af0565b83519582870183815287610a67878201612a6b565b0397610a7b601f19998a81018352826127d4565b519020855184810190858252600088820152878152610a99816127b9565b51902014610bc4576001600160401b038411610bb15750610abb601054612a31565b601f8111610b6c575b508491601f8411600114610b07575084839495965092610afc575b50508160011b916000199060031b1c1916176010556108cb612b21565b013590503880610adf565b9195831695601086528286209286905b888210610b5457505083600195969710610b3a575b505050811b016010556108c3565b0135600019600384901b60f8161c19169055388080610b2c565b80600184968294958701358155019501920190610b17565b60108652828620601f850160051c810191848610610ba7575b601f0160051c01905b818110610b9b5750610ac4565b60008155600101610b8e565b9091508190610b85565b634e487b7160e01b865260419052602485fd5b845162461bcd60e51b81529081018390526002602482015261231960f11b6044820152606490fd5b5050346104d157816003193601126104d157600a5490516001600160a01b039091168152602090f35b5050346104d157806003193601126104d157602090610c3e610c3561280e565b60243590613941565b90519015158152f35b50346103f357826003193601126103f35780546007546009548451633124361560e01b815293840152602094906001600160a01b039086908590602490829060081c85165afa8015610cf957908291869390610cb9575b610cb2955016815260028652205490612cee565b9051908152f35b50915091928581813d8311610cf2575b610cd381836127d4565b810103126103f3575181811681036103f357918491610cb29493610c9e565b503d610cc9565b85513d84823e3d90fd5b508234610db05782600319360112610db057610d1d61280e565b91836024359233815260036020522060018060a01b038416600052602052836000205490828210610d5f57602085610d588585038733614371565b5160018152f35b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050346104d157816003193601126104d15751908152602090f35b5050346104d157602090610c3e610de4366129b2565b91612c83565b509190346104d157806003193601126104d157610e0561280e565b906024359383805260209484865282852033600052865260ff8360002054168015610f51575b610e3490612af0565b6001600160a01b0384811680875260028852848720548311610f2857869781885260028152610e6e86892054600c8352878a205490612cee565b90818511610ee2575b505050610e85823387614473565b610e8f828661426e565b600e5416803b15610ede57610ebb9486809486519788958694859363469753b960e11b85528401613329565b03925af19081156104d55750610ece5750f35b610ed790612790565b610db05780f35b8580fd5b610efb6000805160206147a38339815191529286612cee565b838a52600c8252610f0f81898c2054612cee565b848b52600c8352888b20558751908152a2388080610e77565b845162461bcd60e51b8152808501899052600360248201526246313760e81b6044820152606490fd5b506000805160206147e38339815191528552848652828520336000528652610e3460ff8460002054169050610e2b565b5050346104d157816003193601126104d1578051610fbf91610fad82610fa681612a6b565b03836127d4565b5191829160208352602083019061276b565b0390f35b50346103f357816003193601126103f35781602093610fe0612829565b92358152808552209060018060a01b0316600052825260ff81600020541690519015158152f35b50346103f357816003193601126103f35760209261103191358152600184528260243591206145b3565b905491519160018060a01b039160031b1c168152f35b5050346104d157816003193601126104d157600754905160089190911c6001600160a01b03168152602090f35b8334610db05761108336612968565b9091845b818110611092578580f35b806110b96110a76102f16110bf94868a6132ce565b6110b28387896132ce565b3590613941565b506132bf565b611087565b508290346104d157816003193601126104d15781805260209082825283832033600052825260ff84600020541680156111bb575b61110190612af0565b600080516020614823833981519152835282825283832033600052825260ff8460002054161561116c57507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25891926111576138fd565b600160ff19600754161760075551338152a180f35b60849184519162461bcd60e51b83528201526037602482015260008051602061478383398151915260448201527676652070617573657220726f6c6520746f20706175736560481b6064820152fd5b506000805160206147e3833981519152835282825283832033600052825261110160ff85600020541690506110f8565b5050346104d157816003193601126104d15760209060ff60085460a01c1690519015158152f35b509190346104d157806003193601126104d15761122d61280e565b906024359383805260209484865282852033600052865260ff8360002054168015611282575b61125c90612af0565b84805284865282852033600052865260ff8360002054168015610f5157610e3490612af0565b506000805160206147e3833981519152855284865282852033600052865261125c60ff8460002054169050611253565b5050346104d15760203660031901126104d15760209181906001600160a01b036112da61280e565b1681526002845220549051908152f35b509190346104d1576112fb3661283f565b939091838052836020528084203360005260205261131f60ff826000205416612af0565b838052836020528084203360005260205260ff81600020541615611384575050815b81518110156113805761137b906113766001600160a01b036113638386613315565b511661136f8388613315565b519061426e565b6132bf565b611341565b8280f35b906020606492519162461bcd60e51b8352820152600360248201526246313560e81b6044820152fd5b50346103f3576113bc36612968565b94929091865b8181106113cd578780f35b6113db6102f18284866132ce565b6113e68289876132ce565b359089805260208a8152878b2033600052815261141260ff808a60002054169081156115e05750612af0565b600d546001600160a01b039190821680611569575b50600e908c8a8c858554161515600014611555578761146192888693898954169251958694859384936372331c7360e11b85528401612d29565b03915afa91821561154a579161151d575b50156114f55750908291611488858e969561450b565b541691823b156104de576114b4928492838c8c5196879586948593635f8dead360e01b85528401613329565b03925af180156114eb576114d3575b50506114ce906132bf565b6113c2565b6114dc90612790565b6114e75787386114c3565b8780fd5b87513d84823e3d90fd5b8a6064918b519162461bcd60e51b8352820152600360248201526246313960e81b6044820152fd5b61153d9150823d8411611543575b61153581836127d4565b810190612d11565b38611472565b503d61152b565b8c51903d90823e3d90fd5b5050505050506114ce92916113769161450b565b8c8b838c518094819363b9209e3360e01b8352888a169083015260249586915afa91821561154a57916115c3575b506114275760038b916064938c519362461bcd60e51b85528401528201526208c62760eb1b6044820152fd5b6115da9150833d85116115435761153581836127d4565b38611597565b90506000805160206147e38339815191528d528c8352898d2033600052835289600020541638610329565b5050346104d157816003193601126104d157600e5490516001600160a01b039091168152602090f35b508290346104d157602092836003193601126103f35761165261280e565b83805283855281842033600052855261167160ff836000205416612af0565b6008549260ff8460a01c16611748575b506116fa9394600191828060a01b03168094838060a01b031916176008558580528581528286203360005281526116be60ff846000205416612af0565b8580528581526116d282848820015461358c565b85805285815282862084600052815260ff83600020541615611711575b8580525283206145cb565b506008805460ff60a01b1916600160a01b17905580f35b858052858152828620846000528152826000208260ff198254161790553384876000805160206147438339815191528180a46116ef565b82516330adad6360e21b8152868183816001600160a01b0389165afa9081156117bd5786916117a0575b5061168157825162461bcd60e51b8152908101869052600360248201526223189b60e91b6044820152606490fd5b6117b79150873d89116115435761153581836127d4565b87611772565b84513d88823e3d90fd5b5050346104d157816003193601126104d15760209060ff6007541690519015158152f35b5050346104d157816003193601126104d157610fbf90611809612b21565b905191829160208352602083019061276b565b50346103f35761182b36612968565b94929091865b81811061183c578780f35b61184a6102f18284866132ce565b6118558289876132ce565b359089805260208a8152878b2033600052815261188160ff808a60002054169081156115e05750612af0565b6001600160a01b03828116808d5260028084528a8e2054929391928611611991579082918e96959493875281528a862054908b6118c7600c93848452828a205490612cee565b9283881161194b575b50505050506118e0833384614473565b6118ea838361426e565b600e541691823b156104de57611918928492838c8c519687958694859363469753b960e11b85528401613329565b03925af180156114eb57611937575b5050611932906132bf565b611831565b61194090612790565b6114e7578738611927565b6119776119676000805160206147a3833981519152958a612cee565b8093878c528386528b2054612cee565b90858a5283528d8920558c51908152a23880808b816118d0565b8a5162461bcd60e51b8152808d01839052600360248201526246313760e81b6044820152606490fd5b50346103f3576119c936612968565b90929391865b8181106119da578780f35b6119e86102f18284896132ce565b6119f38285886132ce565b35908980526020908a8252898b20336000528252611a2060ff808c60002054169081156103c85750612af0565b6001600160a01b0316808b52600c8083528a8c20549193918211611a6f57916000805160206147a38339815191529184938c8e611a6a989781528285526103878483832054612cee565b6119cf565b8a5162461bcd60e51b8152808901849052600360248201526246313160e81b6044820152606490fd5b8382346104d15760603660031901126104d1576001600160401b039080358281116104de57611aca9036908301612938565b9092602435818111610ede57611ae39036908501612938565b919093604435918211611b4657611afc91369101612938565b919092865b818110611b0c578780f35b806110b9611b216102f1611b4194868c6132ce565b611b2f6102f184888c6132ce565b611b3a84898b6132ce565b3591612c83565b611b01565b8680fd5b5090346103f357602090816003193601126104de578084806064965280845281812033600052845260ff826000205416908115611bb9575b50611b8d9150612af0565b5162461bcd60e51b815291820152600c60248201526b557365206275726e46726f6d60a01b6044820152fd5b90506000805160206147e3833981519152815280845220336000528252611b8d60ff8260002054168291611b82565b5090346103f357806003193601126103f357611c0261280e565b602435908480526020858152838620338752815260ff84872054168015611dbf575b611c2d90612af0565b600d546001600160a01b03919082168181611d42575b5050600e54821615611d3357600e5485516372331c7360e11b8152908290829085168180611c748a8a838f01612d29565b03915afa908115611d29578891611d0c575b5015611ce45750908291611c9b87948361450b565b600e541690813b156104de5783611cc696865197889586948593635f8dead360e01b85528401613329565b03925af19081156104d55750611cdb575b5080f35b61066590612790565b8560649186519162461bcd60e51b8352820152600360248201526246313960e81b6044820152fd5b611d239150823d84116115435761153581836127d4565b38611c86565b86513d8a823e3d90fd5b5050909150610665925061450b565b865163b9209e3360e01b81528585168982015291829060249082905afa908115611d29578891611da2575b5015611d7a573881611c43565b8560649186519162461bcd60e51b8352820152600360248201526208c62760eb1b6044820152fd5b611db99150823d84116115435761153581836127d4565b38611d6d565b506000805160206147e3833981519152865285815283862033875281528386205460ff16611c24565b509190346104d157816003193601126104d157818052602090828252808320338452825260ff81842054168015611f14575b611e2390612af0565b6000805160206148238339815191528352828252808320338452825260ff818420541615611ec3576007549360ff851615611e8b57507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa929360ff191660075551338152a180f35b82606492519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b5162461bcd60e51b815292830152506039602482015260008051602061478383398151915260448201527876652070617573657220726f6c6520746f20756e706175736560381b6064820152608490fd5b506000805160206147e3833981519152835282825280832033845282528083205460ff16611e1a565b5050346104d15760203660031901126104d157611f5861280e565b82805282602052818320338452602052611f7760ff8385205416612af0565b600a80546001600160a01b0319166001600160a01b0392909216918217905590611f9f612b21565b6000805160206148838339815191526109076108f3612b52565b5050346104d157806003193601126104d157610d58602092612002611fdc61280e565b338352600386528483206001600160a01b03821684528652918490205460243590613308565b9033614371565b508290346104d157826003193601126104d157612024612829565b908280528260205283832033845260205261204460ff8585205416612af0565b336001600160a01b0383160361205f57906106659135613876565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b5050346104d157816003193601126104d1576020905160128152f35b5090346103f357806003193601126103f357611cd791359060016120f8612829565b92858052602090868252838720338852825261211960ff8589205416612af0565b80875286825261212d83858920015461358c565b80875286825283872094838060a01b031694858852825260ff84882054161561215b575b86525283206145cb565b8087528682528387208588528252838720805460ff1916841790553385826000805160206147438339815191528a80a4612151565b50346103f35760203660031901126103f357816020936001923581528085522001549051908152f35b5050346104d157602090610c3e6121cf366129b2565b916121d86138fd565b613344565b5050346104d157816003193601126104d157602090516000805160206147e38339815191528152f35b5090346103f357806003193601126103f35761222061280e565b9060243590848052602092858452818620338752845260ff828720541680156122cb575b61224d90612af0565b6001600160a01b0316808652600c84528186205490949083116122a45750906000805160206147a38339815191529291848652600c83526122918282882054612cee565b858752600c84528187205551908152a280f35b83606492519162461bcd60e51b8352820152600360248201526246313160e81b6044820152fd5b506000805160206147e3833981519152865285845281862033875284528186205460ff16612244565b5050346104d15761230436612968565b909391855b818110612314578680f35b6123226102f18284886132ce565b908761232f82868a6132ce565b3592831515908185036103f3576123a994600b612390928580526020908682528b872033885282526123708c60ff80918a2054169081156123ae5750612af0565b60018060a01b031680965252888c209060ff801983541691151516179055565b33916000805160206148038339815191528b80a46132bf565b612309565b90506000805160206147e383398151915289528884528d8920338a5284528d8920541638610329565b50346103f357826003193601126103f35760209250549051908152f35b5050346104d15760203660031901126104d15760209181906001600160a01b0361241c61280e565b168152600c845220549051908152f35b5050346104d157816003193601126104d157600d5490516001600160a01b039091168152602090f35b5090346103f357806003193601126103f35761246f61280e565b9060243590848052602092858452818620338752845260ff82872054168015612514575b61249c90612af0565b60018060a01b0316938486526002845281862054600c85526124c18484892054613308565b116124ed5750906000805160206147c38339815191529291848652600c83526122918282882054613308565b83606492519162461bcd60e51b8352820152600360248201526204631360ec1b6044820152fd5b506000805160206147e3833981519152865285845281862033875284528186205460ff16612493565b5050346104d157806003193601126104d157602090610d5861255d61280e565b6024359033614371565b509190346104d1576125783661283f565b9390918380528360205280842033855260205261259a60ff8286205416612af0565b8380528360205280842033855260205260ff8185205416156125f4575050815b8151811015611380576125ef906113766001600160a01b036125dc8386613315565b51166125e88388613315565b51906141d2565b6125ba565b906020606492519162461bcd60e51b83528201526003602482015262118c4d60ea1b6044820152fd5b5050346104d157816003193601126104d15780519082600f5461263f81612a31565b808552906001908181169081156126b2575060011461266b575b505050610fad82610fbf9403836127d4565b600f8352602095506000805160206148a38339815191525b82841061269f5750505082610fbf94610fad9282010194612659565b8054868501880152928601928101612683565b610fbf9750610fad9450602092508693915060ff191682840152151560051b82010194612659565b925050346103f35760203660031901126103f3573563ffffffff60e01b81168091036103f35760209250635a05180f60e01b811490811561271d575b5015158152f35b637965db0b60e01b811491508115612737575b5038612716565b6301ffc9a760e01b14905038612730565b60005b83811061275b5750506000910152565b818101518382015260200161274b565b9060209161278481518092818552858086019101612748565b601f01601f1916010190565b6001600160401b0381116127a357604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176127a357604052565b601f909101601f19168101906001600160401b038211908210176127a357604052565b6001600160401b0381116127a35760051b60200190565b600435906001600160a01b038216820361282457565b600080fd5b602435906001600160a01b038216820361282457565b906040600319830112612824576001600160401b03600435818111612824578360238201121561282457806004013590612878826127f7565b9061288660405192836127d4565b82825260209260248484019160051b8301019187831161282457602401905b828210612919575050509360243592831161282457806023840112156128245782600401356128d3816127f7565b936128e160405195866127d4565b81855260248486019260051b82010192831161282457602401905b82821061290a575050505090565b813581529083019083016128fc565b81356001600160a01b03811681036128245781529084019084016128a5565b9181601f84011215612824578235916001600160401b038311612824576020808501948460051b01011161282457565b6040600319820112612824576001600160401b0391600435838111612824578261299491600401612938565b93909392602435918211612824576129ae91600401612938565b9091565b6060906003190112612824576001600160a01b0390600435828116810361282457916024359081168103612824579060443590565b906020600319830112612824576001600160401b03916004359083821161282457806023830112156128245781600401359384116128245760248483010111612824576024019190565b90600182811c92168015612a61575b6020831014612a4b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691612a40565b60105460009291612a7b82612a31565b908181526001928381169081600014612ad55750600114612a9b57505050565b9092935060106000526020928360002092846000945b838610612ac15750505050010190565b805485870183015294019385908201612ab1565b91935050602093945060ff191683830152151560051b010190565b15612af757565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b60408051919082016001600160401b038111838210176127a35760405260058252640312e302e360dc1b6020830152565b604051806000600f54612b6481612a31565b90600190818116908115612bc95750600114612b83575b505003902090565b600f6000908152919250602091906000805160206148a38339815191525b848310612bb5575050505081013880612b7b565b805487840152869550918301918101612ba1565b60ff19168552505080151502820190503880612b7b565b604051806000601054612bf281612a31565b90600190818116908115612bc95750600114612c1057505003902090565b60106000908152919250602091907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6725b848310612c54575050505081013880612b7b565b805487840152869550918301918101612c40565b906040612c809260128152816020820152019061276b565b90565b3360009081526000805160206148638339815191526020526040812054612c8094939291612cbb9160ff16908115612cc05750612af0565b612d6d565b60ff9150806000805160206147e3833981519152604092528060205281812033825260205220541638610329565b91908203918211612cfb57565b634e487b7160e01b600052601160045260246000fd5b90816020910312612824575180151581036128245790565b600081526001600160a01b039091166020820152604081019190915260600190565b6001600160a01b03918216815291166020820152604081019190915260600190565b919091600091829160018060a01b039485821695868652602060a052600260a0515260409584878220541061329557878152600260a0515287612dbd88832054600c60a051528984205490612cee565b808711613248575b505081600d54169787519863b9209e3360e01b91828b52848616916004608052826080518d015260249b8c8160a0519181855afa90811561323e57869161321f575b50612e36578a5162461bcd60e51b815260a0516080518201526002818e015261463960f01b6044820152606490fd5b612e469b9495969798999b6138fd565b1580613213575b1561309f57818552600b60a0515260ff8a86205416158061308e575b15613064578452600260a05152612e8d89852054600c60a051528a86205490612cee565b881161303a5784600d541690895192835260805183015281838160a051935afa90811561301157839161301b575b5080612fb0575b15612f865750612ed3858486614012565b81600e5416803b156104d15781875180926322ebca6d60e21b8252818381612f018c8b8d6080518501612d4b565b03925af180156114eb57612f72575b50505b600e541691823b15610ede5791849391868094612f469751978895869485936322ebca6d60e21b85526080518501612d4b565b03925af19081156104d55750612f5e575b5050600190565b612f688291612790565b610db05780612f57565b612f7e91929750612790565b943880612f10565b606490600288519162461bcd60e51b835260a05160805184015282015261463560f01b6044820152fd5b5082600e54168751906372331c7360e11b82528160a051918180612fda8c8b8d6080518501612d4b565b03915afa908115613011578391612ff2575b50612ec2565b60a05161300b92503d81116115435761153581836127d4565b38612fec565b88513d85823e3d90fd5b60a05161303492503d81116115435761153581836127d4565b38612ebb565b885162461bcd60e51b815260a05160805182015260028185015261118d60f21b6044820152606490fd5b895162461bcd60e51b815260a05160805182015260028186015261463360f01b6044820152606490fd5b5080855260ff8a8620541615612e69565b915083809394528260a0515288832033845260a0515260ff8984205416156130d6575b505050506130d1848385614012565b612f13565b60075490600954928a519363ebd6fcdd60e01b8552608051850152858401526044830152876064830152816084818760a0519460081c165afa9081156132095782916131ea575b50156131c05760085460ff8160a01c16613138575b806130c2565b8751906347535d7b60e01b82528160a05191818760805192165afa9182156131b55791613196575b5061316c578080613132565b606490600287519162461bcd60e51b835260a05160805184015282015261463760f01b6044820152fd5b60a0516131af92503d81116115435761153581836127d4565b38613160565b8851903d90823e3d90fd5b865162461bcd60e51b815260a05160805182015260028184015261231b60f11b6044820152606490fd5b60a05161320392503d81116115435761153581836127d4565b3861311d565b88513d84823e3d90fd5b5085600e541615612e4d565b60a05161323892503d81116115435761153581836127d4565b38612e07565b8c513d88823e3d90fd5b6132616000805160206147a38339815191529188612cee565b828452600c60a05152613277818b862054612cee565b838552600c60a051528a852055895190815260a05190a28738612dc5565b865162461bcd60e51b815260a0516004820152600260248201526108c760f31b6044820152606490fd5b6000198114612cfb5760010190565b91908110156132de5760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036128245790565b91908201809211612cfb57565b80518210156132de5760209160051b010190565b6001600160a01b039091168152602081019190915260400190565b919260009360018060a01b039384841693848752602095600b875260409560ff878a2054161580613579575b1561354f57818416895260028852613393878a2054600c8a52888b205490612cee565b85116135255781600d5416151580613518575b15613506578782600d541691602489518094819363b9209e3360e01b835260048301525afa9081156134df5789916134e9575b5080613484575b61340e57855162461bcd60e51b815260048101889052600360248201526223191960e91b6044820152606490fd5b90919293955061341f848385613ca3565b50600e541691823b15611b465791869391846134539798948751988995869485936322ebca6d60e21b855260048501612d4b565b03925af191821561347a57505061346b575b50600190565b61347490612790565b38613465565b51903d90823e3d90fd5b5080600e541687875180926372331c7360e11b825281806134aa8a898b60048501612d4b565b03915afa9081156134df5789916134c2575b506133e0565b6134d99150883d8a116115435761153581836127d4565b386134bc565b87513d8b823e3d90fd5b6135009150883d8a116115435761153581836127d4565b386133d9565b50509295509092506134659350613ca3565b5081600e541615156133a6565b865162461bcd60e51b815260048101899052600360248201526246323160e81b6044820152606490fd5b865162461bcd60e51b815260048101899052600360248201526204632360ec1b6044820152606490fd5b50818416895260ff878a20541615613370565b600090808252602090828252604092838120338252835260ff8482205416156135b55750505050565b338451926135c2846127b9565b602a84528484019086368337845115613862576030825384519260019384101561384e576078602187015360295b8481116137e457506137b457865192608084016001600160401b038111858210176137a05788526042845286840194606036873784511561378c5760308653845182101561378c5790607860218601536041915b81831161371e575050506136ee576136ea9386936136ce936136bf6048946136969a519a8b9576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c8801525180926037880190612748565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190612748565b010360288101875201856127d4565b5192839262461bcd60e51b84526004840152602483019061276b565b0390fd5b60648587519062461bcd60e51b825280600483015260248201526000805160206147638339815191526044820152fd5b909192600f81166010811015613778576f181899199a1a9b1b9c1cb0b131b232b360811b901a61374e85886145a2565b5360041c92801561376457600019019190613644565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b86526041600452602486fd5b60648688519062461bcd60e51b825280600483015260248201526000805160206147638339815191526044820152fd5b90600f8116601081101561383a576f181899199a1a9b1b9c1cb0b131b232b360811b901a61381283896145a2565b5360041c90801561382657600019016135f0565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b9060406138b392600090808252816020528282209360018060a01b03169384835260205260ff83832054166138b6575b8152600160205220614652565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a46138a6565b60ff6007541661390957565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b91909161394c6138fd565b600d546001600160a01b039081161580613c97575b15613b2857808216916000918383526020600b815260409460ff86862054161580613b17575b15613aee57338552600282526139a886862054600c84528787205490612cee565b8811613ac5578183600d541691602488518094819363b9209e3360e01b835260048301525afa90811561052d578591613aa8575b5080613a4d575b15613a2557506139f4868333614012565b600e541690813b156103f35794829161345395968386518098819582946322ebca6d60e21b84523360048501612d4b565b60649085519062461bcd60e51b825260048201526002602482015261463560f01b6044820152fd5b5081600e541681865180926372331c7360e11b82528180613a738d8a3360048501612d4b565b03915afa90811561052d578591613a8b575b506139e3565b613aa29150823d84116115435761153581836127d4565b38613a85565b613abf9150823d84116115435761153581836127d4565b386139dc565b855162461bcd60e51b8152600481018390526002602482015261118d60f21b6044820152606490fd5b855162461bcd60e51b8152600481018390526002602482015261463360f01b6044820152606490fd5b5033855260ff868620541615613987565b3360009081526000805160206148638339815191526020908152604080832054909694939192919060ff1615613b6d575b505050613b6892935033614012565b600190565b808360075460846009548b51948593849263ebd6fcdd60e01b84526004840152336024840152818b1660448401528b606484015260081c165afa908115613011578391613c7a575b5015613c515760085460ff8160a01c16613bd0575b50613b59565b839060048951809481936347535d7b60e01b8352165afa918215613c465791613c29575b50613c0157808080613bca565b60649085519062461bcd60e51b825260048201526002602482015261463760f01b6044820152fd5b613c409150823d84116115435761153581836127d4565b38613bf4565b8751903d90823e3d90fd5b865162461bcd60e51b8152600481018490526002602482015261231b60f11b6044820152606490fd5b613c919150843d86116115435761153581836127d4565b38613bb5565b5080600e541615613961565b9291613cb0813386614473565b613cb86138fd565b600d546001600160a01b03949085161580614006575b15613e9b57848316926000958487526020600b815260409560ff878a2054161580613e88575b15613e5f57828516895260028252613d17878a2054600c8452888b205490612cee565b8611613e36578183600d541691602489518094819363b9209e3360e01b835260048301525afa9081156134df578991613e19575b5080613dbe575b15613d965750613d63848385614012565b600e541691823b15611b465791869391846134539798948751988995869485936322ebca6d60e21b855260048501612d4b565b60649086519062461bcd60e51b825260048201526002602482015261463560f01b6044820152fd5b5081600e541681875180926372331c7360e11b82528180613de48b8a8c60048501612d4b565b03915afa9081156134df578991613dfc575b50613d52565b613e139150823d84116115435761153581836127d4565b38613df6565b613e309150823d84116115435761153581836127d4565b38613d4b565b865162461bcd60e51b8152600481018390526002602482015261118d60f21b6044820152606490fd5b865162461bcd60e51b8152600481018390526002602482015261463360f01b6044820152606490fd5b50828516895260ff878a20541615613cf4565b336000908152600080516020614863833981519152602090815260408083205490979495949192919060ff1615613edb575b505050613b68939450614012565b808360075460846009548c51948593849263ebd6fcdd60e01b84526004840152818b166024840152818c1660448401528c606484015260081c165afa908115613ffc578391613fdf575b5015613fb65760085460ff8160a01c16613f40575b50613ecd565b839060048a51809481936347535d7b60e01b8352165afa9182156131b55791613f99575b50613f7157808080613f3a565b60649086519062461bcd60e51b825260048201526002602482015261463760f01b6044820152fd5b613fb09150823d84116115435761153581836127d4565b38613f64565b875162461bcd60e51b8152600481018490526002602482015261231b60f11b6044820152606490fd5b613ff69150843d86116115435761153581836127d4565b38613f25565b89513d85823e3d90fd5b5084600e541615613cce565b6001600160a01b0390811691821561417f571691821561412e5760ff600754166140d65760008281526002602052604081205491808310614082576040828260008051602061484383398151915295876020965260028652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03169081156142295760ff600754166140d65760008051602061484383398151915260208261420c600094600454613308565b6004558484526002825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b6001600160a01b031680156143225760ff600754166140d657806000526002602052604060002054918083106142d25760208160008051602061484383398151915292600095858752600284520360408620558060045403600455604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b6001600160a01b0390811691821561442257169182156143d25760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260038252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b03808316600052600360205260406000209082166000526020526040600020549260001984036144ab575b50505050565b8084106144c6576144bd930391614371565b388080806144a5565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b3360009081527f0781d7cac9c378efa22a7481e4d4d29704a680ddf504b3bc50b517700ee11e6c602052604090205490919060ff16156145505761454e916141d2565b565b60405162461bcd60e51b815260206004820152603660248201526000805160206147838339815191526044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b6064820152608490fd5b9081518110156132de570160200190565b80548210156132de5760005260206000200190600090565b9190600183016000908282528060205260408220541560001461464c57845494600160401b861015614638578361462861460f886001604098999a018555846145b3565b819391549060031b600019811b9283911b169119161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b9060018201906000928184528260205260408420549081151560001461473b576000199180830181811161472757825490848201918211614713578082036146de575b505050805480156146ca578201916146ad83836145b3565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6146fe6146ee61460f93866145b3565b90549060031b1c928392866145b3565b90558652846020526040862055388080614695565b634e487b7160e01b88526011600452602488fd5b634e487b7160e01b87526011600452602487fd5b505050509056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d537472696e67733a20686578206c656e67746820696e73756666696369656e7445524332305072657365744d696e7465725061757365723a206d7573742068619bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d6a065e63c631c86f1b9f66a4a2f63f2093bf1c2168d23290259dbd969e0222a45cab5a0bfe0b79d2c4b1c2e02599fa044d115b7511f9659307cb42769509677097fa523c84ab8d7fc5b72f08b9e46dbbf10c39e119a075b3e317002d14bc9f43665d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862addf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d18d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802a26469706673582212201948275aa38021e160428065117c24c29275504ba5bf8d6e1dbb144944d6abdf64736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0df652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802"
   },
   "AkemonaSecurityTokenFactory": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "identityRegistry",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "compliance",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "symbol",
                  "type": "string"
               },
               {
                  "internalType": "address",
                  "name": "protocolAddress",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "onchainID",
                  "type": "address"
               }
            ],
            "name": "deployToken",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x608080604052346100165761594a908161001c8239f35b600080fdfe6040608081526004803610156200001557600080fd5b600091823560e01c63a22b5376146200002d57600080fd5b346200021f5760e03660031901126200021f5781356001600160a01b038181169491859003620002df57602435948186168096036200021f576001600160401b03606435818111620002db5762000088903690880162000331565b608435828111620002d757620000a2903690890162000331565b9160a43592858416809403620002d35760c43592868416809403620002cf5788519561552d80880194851188861017620002bc57926200011088979695936200011f9360c096620003e88b39855260209e8f8601526044358d86015260e0606086015260e08501906200038c565b9083820360808501526200038c565b9360a08201520152039083f0801562000215571692825163a217fddf60e01b9081815286818481895afa9081156200027b57849162000289575b50853b156200028557836200018391865180938192632f2ff15d60e01b83523390888401620003ce565b0381838a5af180156200027b5762000265575b50835190815285818381885afa9081156200025b57839162000223575b50843b156200021f578351631b2b455f60e11b815291839183918291620001df913091908401620003ce565b038183885af180156200021557620001fa575b505051908152f35b620002068291620002e3565b620002125780620001f2565b80fd5b83513d84823e3d90fd5b8280fd5b90508581813d831162000253575b6200023d81836200030d565b810103126200024e575138620001b3565b600080fd5b503d62000231565b84513d85823e3d90fd5b6200027390939193620002e3565b913862000196565b85513d86823e3d90fd5b8380fd5b90508681813d8311620002b4575b620002a381836200030d565b810103126200028557513862000159565b503d62000297565b634e487b7160e01b8a5260418c5260248afd5b8780fd5b8680fd5b8580fd5b8480fd5b5080fd5b6001600160401b038111620002f757604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017620002f757604052565b81601f820112156200024e578035906001600160401b038211620002f7576040519262000369601f8401601f1916602001856200030d565b828452602083830101116200024e57816000926020809301838601378301015290565b919082519283825260005b848110620003b9575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520162000397565b9081526001600160a01b0390911660208201526040019056fe6080806040523462000a365760006200552d803803809162000022828662000a65565b843982019160e08184031262000486576200003d8162000a89565b6200004b6020830162000a89565b604083015160608401519192916001600160401b03811162000a3257866200007591860162000a9e565b60808501519096906001600160401b03811162000a2e57906200009a91860162000a9e565b90620000b760c0620000af60a0880162000a89565b960162000a89565b87519095906001600160401b0381116200093357600554600181811c9116801562000a23575b60208210146200091457601f8111620009dc575b50806020601f82116001146200095357899162000947575b508160011b916000199060031b1c1916176005555b82516001600160401b0381116200093357600654600181811c9116801562000928575b60208210146200091457601f8111620008bd575b50806020601f8211600114620008465789916200083a575b508160011b916000199060031b1c1916176006555b60ff198060075416600755878052876020526040882033895260205260ff6040892054161562000800575b8780526001602052620001c43360408a2062000b47565b507f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68089528860205260408920338a5260205260ff60408a20541615620007c6575b885260016020526200021c3360408a2062000b47565b507f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a908189528860205260408920338a5260205260ff60408a205416156200078b575b508752600160205262000276336040892062000b47565b5060078054610100600160a81b03191660089290921b610100600160a81b0316919091179055600955600a80546001600160a01b03199081166001600160a01b0396871617909155865194969094906001600160401b0382116200077757600f54600181811c911680156200076c575b602082101462000758579081601f849311620006f6575b50602090601f83116001146200067f57889262000673575b50508160011b916000199060031b1c191617600f555b8051906001600160401b0382116200065f57601054600181811c9116801562000654575b602082101462000640579081601f899695949311620005e4575b50602090601f83116001146200055757859392918891836200054b575b50508160011b916000199060031b1c1916176010555b1680620004f3575b50169283620003be575b6040516148f8908162000bd58239f35b839183918280528260205260408320338452602052620003e560ff60408520541662000b15565b600e5416806200048a575b5082600e5491821617600e551617803b156200048657818091602460405180948193631ffad50160e11b83523060048401525af180156200047b5762000460575b50807f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b691a238808080620003ae565b6200046c829162000a3b565b62000478573862000431565b80fd5b6040513d84823e3d90fd5b5080fd5b91509150803b15620004ef5782809160246040518094819363040db3b560e41b83523060048401525af18015620004e45790849291620004ce575b908391620003f0565b620004dc9093919362000a3b565b9138620004c5565b6040513d85823e3d90fd5b8280fd5b84805284602052604085203386526020526200051660ff60408720541662000b15565b8084600d541617600d557fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c8580a238620003a4565b01519050388062000386565b601088527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6729190601f198416895b818110620005c857509160019391858997969410620005ae575b505050811b016010556200039c565b015160001960f88460031b161c191690553880806200059f565b8284015185558b98506001909401936020938401930162000585565b9091929394506010875260208720601f840160051c8101916020851062000635575b90601f8a9796959493920160051c01905b81811062000626575062000369565b88815589965060010162000617565b909150819062000606565b634e487b7160e01b87526022600452602487fd5b90607f16906200034f565b634e487b7160e01b86526041600452602486fd5b01519050388062000315565b600f89526000805160206200550d8339815191529250601f198416895b818110620006dd5750908460019594939210620006c3575b505050811b01600f556200032b565b015160001960f88460031b161c19169055388080620006b4565b929360206001819287860151815501950193016200069c565b600f89529091506000805160206200550d833981519152601f840160051c810191602085106200074d575b90601f859493920160051c01905b8181106200073e5750620002fd565b8981558493506001016200072f565b909150819062000721565b634e487b7160e01b88526022600452602488fd5b90607f1690620002e6565b634e487b7160e01b87526041600452602487fd5b8189528860205260408920338a52602052600160408a2091825416179055333382600080516020620054cd8339815191528b80a4386200025f565b8089528860205260408920338a5260205260408920600183825416179055333382600080516020620054cd8339815191528c80a462000206565b878052876020526040882033895260205260408820600182825416179055333389600080516020620054cd8339815191528180a4620001ad565b9050840151386200016d565b60068a52899250600080516020620054ed833981519152905b601f1983168410620008a4576001935082601f198116106200088a575b5050811b0160065562000182565b86015160001960f88460031b161c1916905538806200087c565b868101518255602093840193600190920191016200085f565b60068952600080516020620054ed833981519152601f830160051c8101916020841062000909575b601f0160051c01905b818110620008fd575062000155565b898155600101620008ee565b9091508190620008e5565b634e487b7160e01b89526022600452602489fd5b90607f169062000141565b634e487b7160e01b88526041600452602488fd5b90508901513862000109565b60058a528992507f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0905b8b601f1984168510620009c457506001935082601f19811610620009aa575b5050811b016005556200011e565b8b015160001960f88460031b161c1916905538806200099c565b8101518255602093840193600190920191016200097d565b6005895260208920601f830160051c81016020841062000a1b575b601f830160051c8201811062000a0f575050620000f1565b8a8155600101620009f7565b5080620009f7565b90607f1690620000dd565b8680fd5b8580fd5b600080fd5b6001600160401b03811162000a4f57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101762000a4f57604052565b51906001600160a01b038216820362000a3657565b919080601f8401121562000a36578251906001600160401b03821162000a4f576040519160209162000ada601f8301601f191684018562000a65565b81845282828701011162000a365760005b81811062000b0157508260009394955001015290565b858101830151848201840152820162000aeb565b1562000b1d57565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b9190600183016000908282528060205260408220541560001462000bce578454946801000000000000000086101562000bba576001860180825586101562000ba657836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe60c0604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a7146126da5750806306fdde031461261d57806307ea547714612567578063095ea7b31461253d578063125c4a3314612455578063134e18f41461242c578063158b1a57146123f457806318160ddd146123d75780631a7af379146122f45780631fe56f7d1461220657806322459e18146121dd57806323b872dd146121b9578063248a9ca3146121905780632f2ff15d146120d6578063313ce567146120ba57806336568abe146120095780633950935114611fb95780633d1ddc5b14611f3d5780633f4ba83a14611de857806340c10f1914611be857806342966c6814611b4a57806342a47abc14611a985780634710362d146119ba5780634a6cc6771461181c57806352a9c8d714610db357806354fd4d50146117eb5780635c975abb146117c75780635fff709d146116345780636290865d1461160b57806368573107146113ad5780637006bed3146112ea57806370a08231146112b257806379cc6790146112125780637cdb5449146111eb5780638456cb59146110c457806388d695b2146110745780638ce74426146110475780639010d07c1461100757806391d1485414610fc357806395d89b4114610f815780639dc29fac14610dea5780639fc1d0e714610dce578063a217fddf14610db3578063a457c2d714610d03578063a68cef6814610c47578063a9059cbb14610c15578063aba6370514610bec578063b84c824614610a1e578063c368b160146109f5578063c47f0027146107d4578063c69c09cf14610711578063ca15c873146106ea578063cbf3f86114610668578063d53913931461053b578063d547741f1461062b578063dd62ed3e146105dd578063e58398361461059f578063e63ab1e914610576578063ea35f36c1461053b57838163f8981789146103f7575063fc7e5fa8146102c457600080fd5b346103f3576102d236612968565b90929391865b8181106102e3578780f35b6102f66102f18284896132ce565b6132f4565b6103018285886132ce565b35908980526020908a8252898b2033600052825261032f60ff808c60002054169081156103c8575b50612af0565b60018060a01b031691828b52600282528a8a812054610356838d600c948588522054613308565b1161039f57916000805160206147c38339815191529184938c8e61039a989781528285526103878483832054613308565b92878252855220558b51908152a26132bf565b6102d8565b8a5162461bcd60e51b8152808901849052600360248201526204631360ec1b6044820152606490fd5b90506000805160206147e38339815191528d528c84528b8d203360005284528b600020541638610329565b8280fd5b919050346104d15760203660031901126104d15761041361280e565b828052826020528383203360005260205261043460ff856000205416612af0565b600e546001600160a01b0391908216806104e2575b5016928383600e548260018060a01b0319821617600e55161791823b156104de5783926024849284519586938492631ffad50160e11b845230908401525af19081156104d557506104bd575b50807f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b691a280f35b6104c690612790565b6104d1578138610495565b5080fd5b513d84823e3d90fd5b8380fd5b803b1561053757848091602488518094819363040db3b560e41b8352308a8401525af190811561052d578591610519575b50610449565b61052290612790565b6104de578338610513565b86513d87823e3d90fd5b8480fd5b5050346104d157816003193601126104d157602090517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b5050346104d157816003193601126104d157602090516000805160206148238339815191528152f35b5050346104d15760203660031901126104d15760209160ff9082906001600160a01b036105ca61280e565b168152600b855220541690519015158152f35b5050346104d157806003193601126104d1576020916105fa61280e565b82610603612829565b6001600160a01b03928316845260038652922091166000908152908352819020549051908152f35b5090346103f357806003193601126103f3576106659135610660600161064f612829565b93838752866020528620015461358c565b613876565b80f35b5050346104d15760203660031901126104d1576106a460ff61068861280e565b9284805284602052808520336000526020526000205416612af0565b600d80546001600160a01b0319166001600160a01b039290921691821790557fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c8280a280f35b50346103f35760203660031901126103f35760209282913581526001845220549051908152f35b5050346104d157806003193601126104d15761072b61280e565b60243590811515918281036105375761078b91858052856020528486203360005260205260ff85600020541680156107a2575b61076790612af0565b60018060a01b031693848652600b60205285209060ff801983541691151516179055565b33916000805160206148038339815191528480a480f35b506000805160206147e38339815191528652856020528486203360005260205261076760ff866000205416905061075e565b509190346104d1576107e5366129e7565b9083805260209084825283852033600052825261080860ff856000205416612af0565b835195828701908382528486890152848360608a0137866060868a010152601f850191601f19986108476060828c87168101038a8101845201826127d4565b519020865185810190868252600089820152888152610865816127b9565b519020146109cd576001600160401b0385116109ba5750610887600f54612a31565b90601f821161097d575b50508491601f841160011461091857508483949596509261090d575b50508160011b916000199060031b1c191617600f555b6108cb612b21565b600a546001600160a01b031691906000805160206148838339815191526109076108f3612b52565b926108fc612be0565b945191829182612c68565b0390a480f35b0135905038806108ad565b9195831695600f86528286209286905b8882106109655750508360019596971061094b575b505050811b01600f556108c3565b0135600019600384901b60f8161c1916905538808061093d565b80600184968294958701358155019501920190610928565b600f87528387209060051c8101918486106109b0575b601f0160051c01905b81811015610891576000815560010161099c565b9091508190610993565b634e487b7160e01b875260419052602486fd5b855162461bcd60e51b81529081018490526002602482015261463160f01b6044820152606490fd5b5050346104d157816003193601126104d15760085490516001600160a01b039091168152602090f35b509190346104d157610a2f366129e7565b90838052602090848252838520336000528252610a5260ff856000205416612af0565b83519582870183815287610a67878201612a6b565b0397610a7b601f19998a81018352826127d4565b519020855184810190858252600088820152878152610a99816127b9565b51902014610bc4576001600160401b038411610bb15750610abb601054612a31565b601f8111610b6c575b508491601f8411600114610b07575084839495965092610afc575b50508160011b916000199060031b1c1916176010556108cb612b21565b013590503880610adf565b9195831695601086528286209286905b888210610b5457505083600195969710610b3a575b505050811b016010556108c3565b0135600019600384901b60f8161c19169055388080610b2c565b80600184968294958701358155019501920190610b17565b60108652828620601f850160051c810191848610610ba7575b601f0160051c01905b818110610b9b5750610ac4565b60008155600101610b8e565b9091508190610b85565b634e487b7160e01b865260419052602485fd5b845162461bcd60e51b81529081018390526002602482015261231960f11b6044820152606490fd5b5050346104d157816003193601126104d157600a5490516001600160a01b039091168152602090f35b5050346104d157806003193601126104d157602090610c3e610c3561280e565b60243590613941565b90519015158152f35b50346103f357826003193601126103f35780546007546009548451633124361560e01b815293840152602094906001600160a01b039086908590602490829060081c85165afa8015610cf957908291869390610cb9575b610cb2955016815260028652205490612cee565b9051908152f35b50915091928581813d8311610cf2575b610cd381836127d4565b810103126103f3575181811681036103f357918491610cb29493610c9e565b503d610cc9565b85513d84823e3d90fd5b508234610db05782600319360112610db057610d1d61280e565b91836024359233815260036020522060018060a01b038416600052602052836000205490828210610d5f57602085610d588585038733614371565b5160018152f35b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050346104d157816003193601126104d15751908152602090f35b5050346104d157602090610c3e610de4366129b2565b91612c83565b509190346104d157806003193601126104d157610e0561280e565b906024359383805260209484865282852033600052865260ff8360002054168015610f51575b610e3490612af0565b6001600160a01b0384811680875260028852848720548311610f2857869781885260028152610e6e86892054600c8352878a205490612cee565b90818511610ee2575b505050610e85823387614473565b610e8f828661426e565b600e5416803b15610ede57610ebb9486809486519788958694859363469753b960e11b85528401613329565b03925af19081156104d55750610ece5750f35b610ed790612790565b610db05780f35b8580fd5b610efb6000805160206147a38339815191529286612cee565b838a52600c8252610f0f81898c2054612cee565b848b52600c8352888b20558751908152a2388080610e77565b845162461bcd60e51b8152808501899052600360248201526246313760e81b6044820152606490fd5b506000805160206147e38339815191528552848652828520336000528652610e3460ff8460002054169050610e2b565b5050346104d157816003193601126104d1578051610fbf91610fad82610fa681612a6b565b03836127d4565b5191829160208352602083019061276b565b0390f35b50346103f357816003193601126103f35781602093610fe0612829565b92358152808552209060018060a01b0316600052825260ff81600020541690519015158152f35b50346103f357816003193601126103f35760209261103191358152600184528260243591206145b3565b905491519160018060a01b039160031b1c168152f35b5050346104d157816003193601126104d157600754905160089190911c6001600160a01b03168152602090f35b8334610db05761108336612968565b9091845b818110611092578580f35b806110b96110a76102f16110bf94868a6132ce565b6110b28387896132ce565b3590613941565b506132bf565b611087565b508290346104d157816003193601126104d15781805260209082825283832033600052825260ff84600020541680156111bb575b61110190612af0565b600080516020614823833981519152835282825283832033600052825260ff8460002054161561116c57507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25891926111576138fd565b600160ff19600754161760075551338152a180f35b60849184519162461bcd60e51b83528201526037602482015260008051602061478383398151915260448201527676652070617573657220726f6c6520746f20706175736560481b6064820152fd5b506000805160206147e3833981519152835282825283832033600052825261110160ff85600020541690506110f8565b5050346104d157816003193601126104d15760209060ff60085460a01c1690519015158152f35b509190346104d157806003193601126104d15761122d61280e565b906024359383805260209484865282852033600052865260ff8360002054168015611282575b61125c90612af0565b84805284865282852033600052865260ff8360002054168015610f5157610e3490612af0565b506000805160206147e3833981519152855284865282852033600052865261125c60ff8460002054169050611253565b5050346104d15760203660031901126104d15760209181906001600160a01b036112da61280e565b1681526002845220549051908152f35b509190346104d1576112fb3661283f565b939091838052836020528084203360005260205261131f60ff826000205416612af0565b838052836020528084203360005260205260ff81600020541615611384575050815b81518110156113805761137b906113766001600160a01b036113638386613315565b511661136f8388613315565b519061426e565b6132bf565b611341565b8280f35b906020606492519162461bcd60e51b8352820152600360248201526246313560e81b6044820152fd5b50346103f3576113bc36612968565b94929091865b8181106113cd578780f35b6113db6102f18284866132ce565b6113e68289876132ce565b359089805260208a8152878b2033600052815261141260ff808a60002054169081156115e05750612af0565b600d546001600160a01b039190821680611569575b50600e908c8a8c858554161515600014611555578761146192888693898954169251958694859384936372331c7360e11b85528401612d29565b03915afa91821561154a579161151d575b50156114f55750908291611488858e969561450b565b541691823b156104de576114b4928492838c8c5196879586948593635f8dead360e01b85528401613329565b03925af180156114eb576114d3575b50506114ce906132bf565b6113c2565b6114dc90612790565b6114e75787386114c3565b8780fd5b87513d84823e3d90fd5b8a6064918b519162461bcd60e51b8352820152600360248201526246313960e81b6044820152fd5b61153d9150823d8411611543575b61153581836127d4565b810190612d11565b38611472565b503d61152b565b8c51903d90823e3d90fd5b5050505050506114ce92916113769161450b565b8c8b838c518094819363b9209e3360e01b8352888a169083015260249586915afa91821561154a57916115c3575b506114275760038b916064938c519362461bcd60e51b85528401528201526208c62760eb1b6044820152fd5b6115da9150833d85116115435761153581836127d4565b38611597565b90506000805160206147e38339815191528d528c8352898d2033600052835289600020541638610329565b5050346104d157816003193601126104d157600e5490516001600160a01b039091168152602090f35b508290346104d157602092836003193601126103f35761165261280e565b83805283855281842033600052855261167160ff836000205416612af0565b6008549260ff8460a01c16611748575b506116fa9394600191828060a01b03168094838060a01b031916176008558580528581528286203360005281526116be60ff846000205416612af0565b8580528581526116d282848820015461358c565b85805285815282862084600052815260ff83600020541615611711575b8580525283206145cb565b506008805460ff60a01b1916600160a01b17905580f35b858052858152828620846000528152826000208260ff198254161790553384876000805160206147438339815191528180a46116ef565b82516330adad6360e21b8152868183816001600160a01b0389165afa9081156117bd5786916117a0575b5061168157825162461bcd60e51b8152908101869052600360248201526223189b60e91b6044820152606490fd5b6117b79150873d89116115435761153581836127d4565b87611772565b84513d88823e3d90fd5b5050346104d157816003193601126104d15760209060ff6007541690519015158152f35b5050346104d157816003193601126104d157610fbf90611809612b21565b905191829160208352602083019061276b565b50346103f35761182b36612968565b94929091865b81811061183c578780f35b61184a6102f18284866132ce565b6118558289876132ce565b359089805260208a8152878b2033600052815261188160ff808a60002054169081156115e05750612af0565b6001600160a01b03828116808d5260028084528a8e2054929391928611611991579082918e96959493875281528a862054908b6118c7600c93848452828a205490612cee565b9283881161194b575b50505050506118e0833384614473565b6118ea838361426e565b600e541691823b156104de57611918928492838c8c519687958694859363469753b960e11b85528401613329565b03925af180156114eb57611937575b5050611932906132bf565b611831565b61194090612790565b6114e7578738611927565b6119776119676000805160206147a3833981519152958a612cee565b8093878c528386528b2054612cee565b90858a5283528d8920558c51908152a23880808b816118d0565b8a5162461bcd60e51b8152808d01839052600360248201526246313760e81b6044820152606490fd5b50346103f3576119c936612968565b90929391865b8181106119da578780f35b6119e86102f18284896132ce565b6119f38285886132ce565b35908980526020908a8252898b20336000528252611a2060ff808c60002054169081156103c85750612af0565b6001600160a01b0316808b52600c8083528a8c20549193918211611a6f57916000805160206147a38339815191529184938c8e611a6a989781528285526103878483832054612cee565b6119cf565b8a5162461bcd60e51b8152808901849052600360248201526246313160e81b6044820152606490fd5b8382346104d15760603660031901126104d1576001600160401b039080358281116104de57611aca9036908301612938565b9092602435818111610ede57611ae39036908501612938565b919093604435918211611b4657611afc91369101612938565b919092865b818110611b0c578780f35b806110b9611b216102f1611b4194868c6132ce565b611b2f6102f184888c6132ce565b611b3a84898b6132ce565b3591612c83565b611b01565b8680fd5b5090346103f357602090816003193601126104de578084806064965280845281812033600052845260ff826000205416908115611bb9575b50611b8d9150612af0565b5162461bcd60e51b815291820152600c60248201526b557365206275726e46726f6d60a01b6044820152fd5b90506000805160206147e3833981519152815280845220336000528252611b8d60ff8260002054168291611b82565b5090346103f357806003193601126103f357611c0261280e565b602435908480526020858152838620338752815260ff84872054168015611dbf575b611c2d90612af0565b600d546001600160a01b03919082168181611d42575b5050600e54821615611d3357600e5485516372331c7360e11b8152908290829085168180611c748a8a838f01612d29565b03915afa908115611d29578891611d0c575b5015611ce45750908291611c9b87948361450b565b600e541690813b156104de5783611cc696865197889586948593635f8dead360e01b85528401613329565b03925af19081156104d55750611cdb575b5080f35b61066590612790565b8560649186519162461bcd60e51b8352820152600360248201526246313960e81b6044820152fd5b611d239150823d84116115435761153581836127d4565b38611c86565b86513d8a823e3d90fd5b5050909150610665925061450b565b865163b9209e3360e01b81528585168982015291829060249082905afa908115611d29578891611da2575b5015611d7a573881611c43565b8560649186519162461bcd60e51b8352820152600360248201526208c62760eb1b6044820152fd5b611db99150823d84116115435761153581836127d4565b38611d6d565b506000805160206147e3833981519152865285815283862033875281528386205460ff16611c24565b509190346104d157816003193601126104d157818052602090828252808320338452825260ff81842054168015611f14575b611e2390612af0565b6000805160206148238339815191528352828252808320338452825260ff818420541615611ec3576007549360ff851615611e8b57507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa929360ff191660075551338152a180f35b82606492519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b5162461bcd60e51b815292830152506039602482015260008051602061478383398151915260448201527876652070617573657220726f6c6520746f20756e706175736560381b6064820152608490fd5b506000805160206147e3833981519152835282825280832033845282528083205460ff16611e1a565b5050346104d15760203660031901126104d157611f5861280e565b82805282602052818320338452602052611f7760ff8385205416612af0565b600a80546001600160a01b0319166001600160a01b0392909216918217905590611f9f612b21565b6000805160206148838339815191526109076108f3612b52565b5050346104d157806003193601126104d157610d58602092612002611fdc61280e565b338352600386528483206001600160a01b03821684528652918490205460243590613308565b9033614371565b508290346104d157826003193601126104d157612024612829565b908280528260205283832033845260205261204460ff8585205416612af0565b336001600160a01b0383160361205f57906106659135613876565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b5050346104d157816003193601126104d1576020905160128152f35b5090346103f357806003193601126103f357611cd791359060016120f8612829565b92858052602090868252838720338852825261211960ff8589205416612af0565b80875286825261212d83858920015461358c565b80875286825283872094838060a01b031694858852825260ff84882054161561215b575b86525283206145cb565b8087528682528387208588528252838720805460ff1916841790553385826000805160206147438339815191528a80a4612151565b50346103f35760203660031901126103f357816020936001923581528085522001549051908152f35b5050346104d157602090610c3e6121cf366129b2565b916121d86138fd565b613344565b5050346104d157816003193601126104d157602090516000805160206147e38339815191528152f35b5090346103f357806003193601126103f35761222061280e565b9060243590848052602092858452818620338752845260ff828720541680156122cb575b61224d90612af0565b6001600160a01b0316808652600c84528186205490949083116122a45750906000805160206147a38339815191529291848652600c83526122918282882054612cee565b858752600c84528187205551908152a280f35b83606492519162461bcd60e51b8352820152600360248201526246313160e81b6044820152fd5b506000805160206147e3833981519152865285845281862033875284528186205460ff16612244565b5050346104d15761230436612968565b909391855b818110612314578680f35b6123226102f18284886132ce565b908761232f82868a6132ce565b3592831515908185036103f3576123a994600b612390928580526020908682528b872033885282526123708c60ff80918a2054169081156123ae5750612af0565b60018060a01b031680965252888c209060ff801983541691151516179055565b33916000805160206148038339815191528b80a46132bf565b612309565b90506000805160206147e383398151915289528884528d8920338a5284528d8920541638610329565b50346103f357826003193601126103f35760209250549051908152f35b5050346104d15760203660031901126104d15760209181906001600160a01b0361241c61280e565b168152600c845220549051908152f35b5050346104d157816003193601126104d157600d5490516001600160a01b039091168152602090f35b5090346103f357806003193601126103f35761246f61280e565b9060243590848052602092858452818620338752845260ff82872054168015612514575b61249c90612af0565b60018060a01b0316938486526002845281862054600c85526124c18484892054613308565b116124ed5750906000805160206147c38339815191529291848652600c83526122918282882054613308565b83606492519162461bcd60e51b8352820152600360248201526204631360ec1b6044820152fd5b506000805160206147e3833981519152865285845281862033875284528186205460ff16612493565b5050346104d157806003193601126104d157602090610d5861255d61280e565b6024359033614371565b509190346104d1576125783661283f565b9390918380528360205280842033855260205261259a60ff8286205416612af0565b8380528360205280842033855260205260ff8185205416156125f4575050815b8151811015611380576125ef906113766001600160a01b036125dc8386613315565b51166125e88388613315565b51906141d2565b6125ba565b906020606492519162461bcd60e51b83528201526003602482015262118c4d60ea1b6044820152fd5b5050346104d157816003193601126104d15780519082600f5461263f81612a31565b808552906001908181169081156126b2575060011461266b575b505050610fad82610fbf9403836127d4565b600f8352602095506000805160206148a38339815191525b82841061269f5750505082610fbf94610fad9282010194612659565b8054868501880152928601928101612683565b610fbf9750610fad9450602092508693915060ff191682840152151560051b82010194612659565b925050346103f35760203660031901126103f3573563ffffffff60e01b81168091036103f35760209250635a05180f60e01b811490811561271d575b5015158152f35b637965db0b60e01b811491508115612737575b5038612716565b6301ffc9a760e01b14905038612730565b60005b83811061275b5750506000910152565b818101518382015260200161274b565b9060209161278481518092818552858086019101612748565b601f01601f1916010190565b6001600160401b0381116127a357604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176127a357604052565b601f909101601f19168101906001600160401b038211908210176127a357604052565b6001600160401b0381116127a35760051b60200190565b600435906001600160a01b038216820361282457565b600080fd5b602435906001600160a01b038216820361282457565b906040600319830112612824576001600160401b03600435818111612824578360238201121561282457806004013590612878826127f7565b9061288660405192836127d4565b82825260209260248484019160051b8301019187831161282457602401905b828210612919575050509360243592831161282457806023840112156128245782600401356128d3816127f7565b936128e160405195866127d4565b81855260248486019260051b82010192831161282457602401905b82821061290a575050505090565b813581529083019083016128fc565b81356001600160a01b03811681036128245781529084019084016128a5565b9181601f84011215612824578235916001600160401b038311612824576020808501948460051b01011161282457565b6040600319820112612824576001600160401b0391600435838111612824578261299491600401612938565b93909392602435918211612824576129ae91600401612938565b9091565b6060906003190112612824576001600160a01b0390600435828116810361282457916024359081168103612824579060443590565b906020600319830112612824576001600160401b03916004359083821161282457806023830112156128245781600401359384116128245760248483010111612824576024019190565b90600182811c92168015612a61575b6020831014612a4b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691612a40565b60105460009291612a7b82612a31565b908181526001928381169081600014612ad55750600114612a9b57505050565b9092935060106000526020928360002092846000945b838610612ac15750505050010190565b805485870183015294019385908201612ab1565b91935050602093945060ff191683830152151560051b010190565b15612af757565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b60408051919082016001600160401b038111838210176127a35760405260058252640312e302e360dc1b6020830152565b604051806000600f54612b6481612a31565b90600190818116908115612bc95750600114612b83575b505003902090565b600f6000908152919250602091906000805160206148a38339815191525b848310612bb5575050505081013880612b7b565b805487840152869550918301918101612ba1565b60ff19168552505080151502820190503880612b7b565b604051806000601054612bf281612a31565b90600190818116908115612bc95750600114612c1057505003902090565b60106000908152919250602091907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6725b848310612c54575050505081013880612b7b565b805487840152869550918301918101612c40565b906040612c809260128152816020820152019061276b565b90565b3360009081526000805160206148638339815191526020526040812054612c8094939291612cbb9160ff16908115612cc05750612af0565b612d6d565b60ff9150806000805160206147e3833981519152604092528060205281812033825260205220541638610329565b91908203918211612cfb57565b634e487b7160e01b600052601160045260246000fd5b90816020910312612824575180151581036128245790565b600081526001600160a01b039091166020820152604081019190915260600190565b6001600160a01b03918216815291166020820152604081019190915260600190565b919091600091829160018060a01b039485821695868652602060a052600260a0515260409584878220541061329557878152600260a0515287612dbd88832054600c60a051528984205490612cee565b808711613248575b505081600d54169787519863b9209e3360e01b91828b52848616916004608052826080518d015260249b8c8160a0519181855afa90811561323e57869161321f575b50612e36578a5162461bcd60e51b815260a0516080518201526002818e015261463960f01b6044820152606490fd5b612e469b9495969798999b6138fd565b1580613213575b1561309f57818552600b60a0515260ff8a86205416158061308e575b15613064578452600260a05152612e8d89852054600c60a051528a86205490612cee565b881161303a5784600d541690895192835260805183015281838160a051935afa90811561301157839161301b575b5080612fb0575b15612f865750612ed3858486614012565b81600e5416803b156104d15781875180926322ebca6d60e21b8252818381612f018c8b8d6080518501612d4b565b03925af180156114eb57612f72575b50505b600e541691823b15610ede5791849391868094612f469751978895869485936322ebca6d60e21b85526080518501612d4b565b03925af19081156104d55750612f5e575b5050600190565b612f688291612790565b610db05780612f57565b612f7e91929750612790565b943880612f10565b606490600288519162461bcd60e51b835260a05160805184015282015261463560f01b6044820152fd5b5082600e54168751906372331c7360e11b82528160a051918180612fda8c8b8d6080518501612d4b565b03915afa908115613011578391612ff2575b50612ec2565b60a05161300b92503d81116115435761153581836127d4565b38612fec565b88513d85823e3d90fd5b60a05161303492503d81116115435761153581836127d4565b38612ebb565b885162461bcd60e51b815260a05160805182015260028185015261118d60f21b6044820152606490fd5b895162461bcd60e51b815260a05160805182015260028186015261463360f01b6044820152606490fd5b5080855260ff8a8620541615612e69565b915083809394528260a0515288832033845260a0515260ff8984205416156130d6575b505050506130d1848385614012565b612f13565b60075490600954928a519363ebd6fcdd60e01b8552608051850152858401526044830152876064830152816084818760a0519460081c165afa9081156132095782916131ea575b50156131c05760085460ff8160a01c16613138575b806130c2565b8751906347535d7b60e01b82528160a05191818760805192165afa9182156131b55791613196575b5061316c578080613132565b606490600287519162461bcd60e51b835260a05160805184015282015261463760f01b6044820152fd5b60a0516131af92503d81116115435761153581836127d4565b38613160565b8851903d90823e3d90fd5b865162461bcd60e51b815260a05160805182015260028184015261231b60f11b6044820152606490fd5b60a05161320392503d81116115435761153581836127d4565b3861311d565b88513d84823e3d90fd5b5085600e541615612e4d565b60a05161323892503d81116115435761153581836127d4565b38612e07565b8c513d88823e3d90fd5b6132616000805160206147a38339815191529188612cee565b828452600c60a05152613277818b862054612cee565b838552600c60a051528a852055895190815260a05190a28738612dc5565b865162461bcd60e51b815260a0516004820152600260248201526108c760f31b6044820152606490fd5b6000198114612cfb5760010190565b91908110156132de5760051b0190565b634e487b7160e01b600052603260045260246000fd5b356001600160a01b03811681036128245790565b91908201809211612cfb57565b80518210156132de5760209160051b010190565b6001600160a01b039091168152602081019190915260400190565b919260009360018060a01b039384841693848752602095600b875260409560ff878a2054161580613579575b1561354f57818416895260028852613393878a2054600c8a52888b205490612cee565b85116135255781600d5416151580613518575b15613506578782600d541691602489518094819363b9209e3360e01b835260048301525afa9081156134df5789916134e9575b5080613484575b61340e57855162461bcd60e51b815260048101889052600360248201526223191960e91b6044820152606490fd5b90919293955061341f848385613ca3565b50600e541691823b15611b465791869391846134539798948751988995869485936322ebca6d60e21b855260048501612d4b565b03925af191821561347a57505061346b575b50600190565b61347490612790565b38613465565b51903d90823e3d90fd5b5080600e541687875180926372331c7360e11b825281806134aa8a898b60048501612d4b565b03915afa9081156134df5789916134c2575b506133e0565b6134d99150883d8a116115435761153581836127d4565b386134bc565b87513d8b823e3d90fd5b6135009150883d8a116115435761153581836127d4565b386133d9565b50509295509092506134659350613ca3565b5081600e541615156133a6565b865162461bcd60e51b815260048101899052600360248201526246323160e81b6044820152606490fd5b865162461bcd60e51b815260048101899052600360248201526204632360ec1b6044820152606490fd5b50818416895260ff878a20541615613370565b600090808252602090828252604092838120338252835260ff8482205416156135b55750505050565b338451926135c2846127b9565b602a84528484019086368337845115613862576030825384519260019384101561384e576078602187015360295b8481116137e457506137b457865192608084016001600160401b038111858210176137a05788526042845286840194606036873784511561378c5760308653845182101561378c5790607860218601536041915b81831161371e575050506136ee576136ea9386936136ce936136bf6048946136969a519a8b9576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c8801525180926037880190612748565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190612748565b010360288101875201856127d4565b5192839262461bcd60e51b84526004840152602483019061276b565b0390fd5b60648587519062461bcd60e51b825280600483015260248201526000805160206147638339815191526044820152fd5b909192600f81166010811015613778576f181899199a1a9b1b9c1cb0b131b232b360811b901a61374e85886145a2565b5360041c92801561376457600019019190613644565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b86526041600452602486fd5b60648688519062461bcd60e51b825280600483015260248201526000805160206147638339815191526044820152fd5b90600f8116601081101561383a576f181899199a1a9b1b9c1cb0b131b232b360811b901a61381283896145a2565b5360041c90801561382657600019016135f0565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b9060406138b392600090808252816020528282209360018060a01b03169384835260205260ff83832054166138b6575b8152600160205220614652565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a46138a6565b60ff6007541661390957565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b91909161394c6138fd565b600d546001600160a01b039081161580613c97575b15613b2857808216916000918383526020600b815260409460ff86862054161580613b17575b15613aee57338552600282526139a886862054600c84528787205490612cee565b8811613ac5578183600d541691602488518094819363b9209e3360e01b835260048301525afa90811561052d578591613aa8575b5080613a4d575b15613a2557506139f4868333614012565b600e541690813b156103f35794829161345395968386518098819582946322ebca6d60e21b84523360048501612d4b565b60649085519062461bcd60e51b825260048201526002602482015261463560f01b6044820152fd5b5081600e541681865180926372331c7360e11b82528180613a738d8a3360048501612d4b565b03915afa90811561052d578591613a8b575b506139e3565b613aa29150823d84116115435761153581836127d4565b38613a85565b613abf9150823d84116115435761153581836127d4565b386139dc565b855162461bcd60e51b8152600481018390526002602482015261118d60f21b6044820152606490fd5b855162461bcd60e51b8152600481018390526002602482015261463360f01b6044820152606490fd5b5033855260ff868620541615613987565b3360009081526000805160206148638339815191526020908152604080832054909694939192919060ff1615613b6d575b505050613b6892935033614012565b600190565b808360075460846009548b51948593849263ebd6fcdd60e01b84526004840152336024840152818b1660448401528b606484015260081c165afa908115613011578391613c7a575b5015613c515760085460ff8160a01c16613bd0575b50613b59565b839060048951809481936347535d7b60e01b8352165afa918215613c465791613c29575b50613c0157808080613bca565b60649085519062461bcd60e51b825260048201526002602482015261463760f01b6044820152fd5b613c409150823d84116115435761153581836127d4565b38613bf4565b8751903d90823e3d90fd5b865162461bcd60e51b8152600481018490526002602482015261231b60f11b6044820152606490fd5b613c919150843d86116115435761153581836127d4565b38613bb5565b5080600e541615613961565b9291613cb0813386614473565b613cb86138fd565b600d546001600160a01b03949085161580614006575b15613e9b57848316926000958487526020600b815260409560ff878a2054161580613e88575b15613e5f57828516895260028252613d17878a2054600c8452888b205490612cee565b8611613e36578183600d541691602489518094819363b9209e3360e01b835260048301525afa9081156134df578991613e19575b5080613dbe575b15613d965750613d63848385614012565b600e541691823b15611b465791869391846134539798948751988995869485936322ebca6d60e21b855260048501612d4b565b60649086519062461bcd60e51b825260048201526002602482015261463560f01b6044820152fd5b5081600e541681875180926372331c7360e11b82528180613de48b8a8c60048501612d4b565b03915afa9081156134df578991613dfc575b50613d52565b613e139150823d84116115435761153581836127d4565b38613df6565b613e309150823d84116115435761153581836127d4565b38613d4b565b865162461bcd60e51b8152600481018390526002602482015261118d60f21b6044820152606490fd5b865162461bcd60e51b8152600481018390526002602482015261463360f01b6044820152606490fd5b50828516895260ff878a20541615613cf4565b336000908152600080516020614863833981519152602090815260408083205490979495949192919060ff1615613edb575b505050613b68939450614012565b808360075460846009548c51948593849263ebd6fcdd60e01b84526004840152818b166024840152818c1660448401528c606484015260081c165afa908115613ffc578391613fdf575b5015613fb65760085460ff8160a01c16613f40575b50613ecd565b839060048a51809481936347535d7b60e01b8352165afa9182156131b55791613f99575b50613f7157808080613f3a565b60649086519062461bcd60e51b825260048201526002602482015261463760f01b6044820152fd5b613fb09150823d84116115435761153581836127d4565b38613f64565b875162461bcd60e51b8152600481018490526002602482015261231b60f11b6044820152606490fd5b613ff69150843d86116115435761153581836127d4565b38613f25565b89513d85823e3d90fd5b5084600e541615613cce565b6001600160a01b0390811691821561417f571691821561412e5760ff600754166140d65760008281526002602052604081205491808310614082576040828260008051602061484383398151915295876020965260028652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03169081156142295760ff600754166140d65760008051602061484383398151915260208261420c600094600454613308565b6004558484526002825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b6001600160a01b031680156143225760ff600754166140d657806000526002602052604060002054918083106142d25760208160008051602061484383398151915292600095858752600284520360408620558060045403600455604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b6001600160a01b0390811691821561442257169182156143d25760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260038252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b03808316600052600360205260406000209082166000526020526040600020549260001984036144ab575b50505050565b8084106144c6576144bd930391614371565b388080806144a5565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b3360009081527f0781d7cac9c378efa22a7481e4d4d29704a680ddf504b3bc50b517700ee11e6c602052604090205490919060ff16156145505761454e916141d2565b565b60405162461bcd60e51b815260206004820152603660248201526000805160206147838339815191526044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b6064820152608490fd5b9081518110156132de570160200190565b80548210156132de5760005260206000200190600090565b9190600183016000908282528060205260408220541560001461464c57845494600160401b861015614638578361462861460f886001604098999a018555846145b3565b819391549060031b600019811b9283911b169119161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b9060018201906000928184528260205260408420549081151560001461473b576000199180830181811161472757825490848201918211614713578082036146de575b505050805480156146ca578201916146ad83836145b3565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6146fe6146ee61460f93866145b3565b90549060031b1c928392866145b3565b90558652846020526040862055388080614695565b634e487b7160e01b88526011600452602488fd5b634e487b7160e01b87526011600452602487fd5b505050509056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d537472696e67733a20686578206c656e67746820696e73756666696369656e7445524332305072657365744d696e7465725061757365723a206d7573742068619bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d6a065e63c631c86f1b9f66a4a2f63f2093bf1c2168d23290259dbd969e0222a45cab5a0bfe0b79d2c4b1c2e02599fa044d115b7511f9659307cb42769509677097fa523c84ab8d7fc5b72f08b9e46dbbf10c39e119a075b3e317002d14bc9f43665d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862addf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb56a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d18d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802a26469706673582212201948275aa38021e160428065117c24c29275504ba5bf8d6e1dbb144944d6abdf64736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0df652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802a2646970667358221220a5df8b26dac598dfc765ffc3872d99fa8c3882b8f9ad63e8b24f0feabb7b536d64736f6c63430008110033"
   },
   "AkemonaWhitelist": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_protocol",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "accredited",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "exceptions",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "owner",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "whitelisted",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_investor",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "isPurchaseAuthorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "_offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "isTransferAuthorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "addAccreditedStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "addWhitelistedAddresses",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "removeAccreditedStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "removeWhitelistedAddresses",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               }
            ],
            "name": "addException",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               }
            ],
            "name": "removeException",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               }
            ],
            "name": "hasException",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x60803461007a57601f61089338819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b03193381600054161760005560015416176001556040516107fd90816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c80630e31f5ed14610444578063314681f21461041f57806376778b12146103c05780637b06bc7c146103825780638b8f24dd1461031c5780638da5cb5b146102f4578063993a972f1461029e578063bf4c04c41461021a578063ca2cfc20146101ae578063d7deff501461018e578063d936547e1461014c578063ebd6fcdd146101005763fc366d1c146100b057600080fd5b346100fc57816003193601126100fc578160209360ff926100cf61049d565b6100d76104b8565b6001600160a01b03918216845291875283832091168252855220549151911615158152f35b8280fd5b50346100fc5760803660031901126100fc5761011a6104b8565b604435939091906001600160a01b038516850361014957509261014091602094356105c1565b90519015158152f35b80fd5b50503461018a57602036600319011261018a5760209160ff9082906001600160a01b0361017761049d565b1681526003855220541690519015158152f35b5080fd5b50346100fc57816003193601126100fc578160209360ff926100cf61049d565b828434610149576101be36610507565b9160018060a01b03916101d5838254163314610748565b805b84518110156102105780846101ef61020b938861079d565b511683526003602052838320805460ff19166001179055610778565b6101d7565b6020835160018152f35b50503461018a5761022a36610507565b82546001600160a01b0392906102439084163314610748565b835b825181101561029a57808461025d610295938661079d565b5116865260206002815260038488209160ff199283815416905587610282858961079d565b5116895252838720908154169055610778565b610245565b8480f35b50346100fc57816003193601126100fc576102b761049d565b6102bf6104b8565b9160018060a01b0380926102d7828854163314610748565b16855260205282842091168352602052812060ff19815416905580f35b50503461018a578160031936011261018a57905490516001600160a01b039091168152602090f35b8284346101495761032c36610507565b9160018060a01b0391610343838254163314610748565b805b845181101561037e57808461035d610379938861079d565b511683526002602052838320805460ff19166001179055610778565b610345565b5080f35b50503461018a57602036600319011261018a5760209160ff9082906001600160a01b036103ad61049d565b1681526002855220541690519015158152f35b828434610149576103d036610507565b9160018060a01b03916103e7838254163314610748565b805b845181101561037e57808461040161041a938861079d565b511683526002602052838320805460ff19169055610778565b6103e9565b50503461018a578060031936011261018a5760209061014061043f61049d565b610597565b50346100fc57816003193601126100fc5761045d61049d565b6104656104b8565b9160018060a01b03809261047d828854163314610748565b168552602052828420911683526020528120600160ff1982541617905580f35b600435906001600160a01b03821682036104b357565b600080fd5b602435906001600160a01b03821682036104b357565b601f909101601f19168101906001600160401b038211908210176104f157604052565b634e487b7160e01b600052604160045260246000fd5b6020806003198301126104b3576001600160401b03916004358381116104b357816023820112156104b35780600401359384116104f1578360051b9060405194610553858401876104ce565b85526024848601928201019283116104b357602401905b828210610578575050505090565b81356001600160a01b03811681036104b357815290830190830161056a565b6001600160a01b031660009081526003602052604090205460ff16156105bc57600190565b600090565b9060018060a01b038091166000938185526020936004855260409380858820931692838852865260ff858820541661073c576001541691845163ce09a4fb60e01b81528260048201528681602481875afa9081156107325788916106f8575b50156106ef5786526003855260ff8487205416156106e75784906024855180948193634d5d37cb60e11b835260048301525afa9081156106dd5785916106ac575b504203428111610698576301e133801061068f5760ff92600291855252822054166106895790565b50600190565b50505050600190565b634e487b7160e01b85526011600452602485fd5b90508381813d83116106d6575b6106c381836104ce565b810103126106d2575138610661565b8480fd5b503d6106b9565b83513d87823e3d90fd5b505050505090565b50505050505090565b90508681813d831161072b575b61070f81836104ce565b81010312610727575180151581036107275738610620565b8780fd5b503d610705565b86513d8a823e3d90fd5b50505050505050600190565b1561074f57565b60405162461bcd60e51b81526020600482015260016024820152602960f91b6044820152606490fd5b60001981146107875760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156107b15760209160051b010190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212201d03864f3a48835cd76755e2da71ef0699488e62960a8b570a7b6e62f5cc260e64736f6c63430008110033"
   },
   "Usdc": {
      "abi": [
         {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "Approval",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "Transfer",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "TransferFrom",
            "type": "event"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "allowed",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "balanceOf",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "decimals",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "name",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "symbol",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "transfer",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "transferFrom",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_toAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "multiPartyTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address[]",
                  "name": "_toAddresses",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "multiPartyTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_value",
                  "type": "uint256"
               }
            ],
            "name": "approve",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_owner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_spender",
                  "type": "address"
               }
            ],
            "name": "allowance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "remaining",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x60808060405234610044573360008181526001602052604081206a52b7d2dcc80cd2e4000000905580546001600160a01b03191690911790556107f4908161004a8239f35b600080fdfe60406080815260049081361015610016575b600080fd5b600091823560e01c90816306fdde03146101d8578163095ea7b31461036057816318160ddd1461033a57816323b872dd14610308578163313ce567146102ec5781635c658165146102ce5781636e96433f1461021c57816370a08231146101e457816395d89b41146101d8578163a9059cbb146101a6578163b22c14c7146100f3575063dd62ed3e146100a857600080fd5b346100ef57806003193601126100ef57806020926100c46104a9565b6100cc6104bf565b6001600160a01b0391821683526002865283832091168252845220549051908152f35b5080fd5b8383346100ef573660031901126101a3576001600160401b0391803583811161019b5761012390369083016104ec565b9260243590811161019b5761013a91369101610557565b9180519060ff9182811161019f5784510361019b57825b81518382169081101561019757610192919061018c906101856001600160a01b0361017c8388610774565b51169189610774565b51906105ad565b50610763565b610151565b8480f35b8280fd5b8380fd5b80fd5b5050346100ef57806003193601126100ef576020906101cf6101c66104a9565b602435906105ad565b90519015158152f35b5050505061001161040e565b5050346100ef5760203660031901126100ef5760209181906001600160a01b0361020c6104a9565b1681526001845220549051908152f35b83346101a35760603660031901126101a3576102366104a9565b916001600160401b039060243582811161019f5761025790369083016104ec565b9160443590811161019f5761026e91369101610557565b9080519060ff918281116102ca5783510361019f57835b8151838216908110156102c6576102c1919061018c906102b96001600160a01b036102b08388610774565b51169188610774565b51908961065e565b610285565b8580f35b8480fd5b5050346100ef57806003193601126100ef57806020926100c46104a9565b5050346100ef57816003193601126100ef576020905160068152f35b5050346100ef5760603660031901126100ef576020906101cf6103296104a9565b6103316104bf565b6044359161065e565b5050346100ef57816003193601126100ef57602090516a52b7d2dcc80cd2e40000008152f35b5050346100ef57806003193601126100ef5761037a6104a9565b6001600160a01b0316602435811561019f578083602095338152600287528181208582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b6040519190601f01601f191682016001600160401b038111838210176103f857604052565b634e487b7160e01b600052604160045260246000fd5b5034610011576000806003193601126101a357604080518082016001600160401b0381118282101761049557825260048152602090635553444360e01b8282015282519382859384528251928382860152825b84811061047f57505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201610461565b634e487b7160e01b84526041600452602484fd5b600435906001600160a01b038216820361001157565b602435906001600160a01b038216820361001157565b6001600160401b0381116103f85760051b60200190565b9080601f830112156100115781359061050c610507836104d5565b6103d3565b9182938184526020808095019260051b820101928311610011578301905b828210610538575050505090565b81356001600160a01b038116810361001157815290830190830161052a565b9080601f8301121561001157813590610572610507836104d5565b9182938184526020808095019260051b820101928311610011578301905b82821061059e575050505090565b81358152908301908301610590565b6001600160a01b031690811561001157600033815260016020526105d582604083205461061e565b3382526001602052604082205582815260406105f48382842054610649565b918481526001602052205560405190815260008051602061079f83398151915260203392a3600190565b91908203918083116106335782101561001157565b634e487b7160e01b600052601160045260246000fd5b91908201918281116106335782111561001157565b9192916001600160a01b03918216919082156100115716600093818552602090600282526040808720338852835280872054821180159061075a575b1561075657868560008051602061079f8339815191529596979852600184526106c68383832054610649565b87825260018552828220558581526106e1838383205461061e565b86825260018552828220556002845281812033825284528181205460001914158061074c575b610717575b5051908152a3600190565b85815260028452818120338252845281610734848284205461061e565b9187815260028652818120338252865220553861070c565b5033861415610707565b8680fd5b5033841461069a565b60ff1660ff81146106335760010190565b80518210156107885760209160051b010190565b634e487b7160e01b600052603260045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220a0b23bbda5a9466b446f231e7ccec8ac7896d7d6b63df71b1a473a3306edb9d264736f6c63430008110033"
   },
   "AkemonaERC721": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "symbol",
                  "type": "string"
               },
               {
                  "internalType": "string",
                  "name": "baseTokenURI",
                  "type": "string"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "approved",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "Approval",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
               }
            ],
            "name": "ApprovalForAll",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Paused",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "Transfer",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Unpaused",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "PAUSER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               }
            ],
            "name": "balanceOf",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "getApproved",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
               }
            ],
            "name": "isApprovedForAll",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "name",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "ownerOf",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "paused",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
               },
               {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
               }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "symbol",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "tokenByIndex",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "tokenURI",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
               }
            ],
            "name": "mintToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x604060808152346200060a5762002b80803803806200001e816200060f565b9283398101906060818303126200060a5780516001600160401b0392908381116200060a57816200005191840162000635565b92602092838101518281116200060a57836200006f91830162000635565b92868201518381116200060a5762000088920162000635565b8451928284116200044857600254936001968786811c96168015620005ff575b8787101462000427578190601f96878111620005a8575b5087908783116001146200053e5760009262000532575b5050600019600383901b1c191690871b176002555b805183811162000448576003918254908882811c9216801562000527575b8883101462000427578187849311620004d1575b5087908783116001146200046a576000926200045e575b505060001982841b1c191690871b1781555b60ff199384600c5416600c5582519384116200044857600e54928784811c941680156200043d575b8785101462000427578382869511620003cc575b50869184116001146200035f5760009362000353575b505082861b92600019911b1c191617600e555b60008052600082528360002033600052825260ff8460002054161562000318575b60008052828252620001e23385600020620006a7565b507f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a680600052600083528460002033600052835260ff85600020541615620002dd575b6000528282526200023a3385600020620006a7565b507f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9081600052600083528460002033600052835260ff85600020541615620002a1575b5060005252620002923382600020620006a7565b505161242b9081620007358239f35b81600052600083528460002033600052835283856000209182541617905533338260008051602062002b60833981519152600080a4386200027e565b80600052600083528460002033600052835284600020848382541617905533338260008051602062002b60833981519152600080a462000225565b6000805260008252836000203360005282528360002083828254161790553333600060008051602062002b608339815191528180a4620001cc565b01519150388062000198565b9190879450601f19841692600e600052876000209360005b89828210620003b557505085116200039a575b50505050811b01600e55620001ab565b01519060f884600019921b161c19169055388080806200038a565b8385015187558b9890960195938401930162000377565b9091929350600e600052866000208380870160051c8201928988106200041d575b918a918897969594930160051c01915b8281106200040d57505062000182565b600081558796508a9101620003fd565b92508192620003ed565b634e487b7160e01b600052602260045260246000fd5b93607f16936200016e565b634e487b7160e01b600052604160045260246000fd5b01519050388062000134565b90899350601f1983169185600052896000209260005b8b828210620004ba5750508411620004a1575b505050811b01815562000146565b015160001983861b60f8161c1916905538808062000493565b8385015186558d9790950194938401930162000480565b90915083600052876000208780850160051c8201928a86106200051d575b918b91869594930160051c01915b8281106200050d5750506200011d565b600081558594508b9101620004fd565b92508192620004ef565b91607f169162000109565b015190503880620000d6565b90899350601f198316916002600052896000209260005b8b82821062000591575050841162000577575b505050811b01600255620000eb565b015160001960f88460031b161c1916905538808062000568565b8385015186558d9790950194938401930162000555565b9091506002600052876000208780850160051c8201928a8610620005f5575b918b91869594930160051c01915b828110620005e5575050620000bf565b600081558594508b9101620005d5565b92508192620005c7565b95607f1695620000a8565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200044857604052565b919080601f840112156200060a5782516001600160401b03811162000448576020906200066b601f8201601f191683016200060f565b928184528282870101116200060a5760005b8181106200069357508260009394955001015290565b85810183015184820184015282016200067d565b919060018301600090828252806020526040822054156000146200072e57845494680100000000000000008610156200071a57600186018082558610156200070657836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146113875750816306fdde03146112d8578163081812fc146112b8578163095ea7b31461114757816318160ddd1461112857816323b872dd14611103578163248a9ca3146110d95781632f2ff15d146110255781632f745c5914610f7957816336568abe14610ee75781633f4ba83a14610dda57816342842e0e14610d8b57816342966c6814610b0e5781634f6ccce714610a7a5781635c975abb14610a565781636352211e14610a255781636a627842146109ec57816370a08231146109bf57816379c650681461096b5781638456cb591461085f5781639010d07c1461081e57816391d14854146107d857816395d89b41146106ee578163a217fddf146106d3578163a22cb46514610607578163b88d4fde14610580578163c87b56dd14610290578163ca15c87314610268578163d53913931461023f578163d547741f146101fd57508063e63ab1e9146101d55763e985e9c51461018557600080fd5b346101d157806003193601126101d15760ff816020936101a3611488565b6101ab6114a3565b6001600160a01b0391821683526007875283832091168252855220549151911615158152f35b5080fd5b50346101d157816003193601126101d157602090516000805160206123568339815191528152f35b9190503461023b578060031936011261023b57610238913561023360016102226114a3565b9383875286602052862001546115a2565b6118ac565b80f35b8280fd5b5050346101d157816003193601126101d157602090516000805160206123768339815191528152f35b90503461023b57602036600319011261023b5760209282913581526001845220549051908152f35b839150346101d1576020918260031936011261057d5781356102b96102b482611d33565b6119aa565b8451928291600e549260019084821c90828616958615610573575b898310871461056057828952898901968992918b908215610545575050600114610507575b610305925003876114ee565b8551156104c35786949388939092918291869072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b84818110156104b6575b508990506904ee2d6d415b85acef8160201b808710156104a7575b5050662386f26fc1000080861015610498575b506305f5e10080861015610489575b506127108086101561047d575b5050606484101561046f575b60219082600a80961015610468575b939291906103c58382016103bd6103b482611527565b9a519a8b6114ee565b808a52611527565b888b019990601f1901368b3750870101905b610432575b505050509361041d92610402949261041161042e978a5197889551809288880190611440565b84019151809386840190611440565b010380845201826114ee565b925b51928284938452830190611463565b0390f35b600019019083906f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304918215610463579190826103d7565b6103dc565b018261039e565b60649093049260020161038f565b90940493018b80610383565b6008919295049401908c610376565b6010919295049401908c610367565b9091929504940190888d610354565b0494508691508c80610339565b5050855190959493509190508183016001600160401b038111838210176104f4578452815292509061042e9061041f565b634e487b7160e01b825260418652602482fd5b5050600e865286888088208489915b85831061052c57505061030593508201016102f9565b80919294505483858d0101520191018990848a93610516565b60ff1916895261030594151560051b84010191506102f99050565b634e487b7160e01b885260228652602488fd5b91607f16916102d4565b80fd5b9190503461023b57608036600319011261023b5761059c611488565b6105a46114a3565b6064359385906001600160401b0386116101d157366023870112156101d157850135946105dc6105d387611527565b955195866114ee565b85855236602487830101116101d1578561023896602460209301838801378501015260443591611aa0565b9190503461023b578060031936011261023b57610622611488565b90602435918215158093036106cf576001600160a01b0316923384146106915750338452600760205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152fd5b8480fd5b5050346101d157816003193601126101d15751908152602090f35b82843461057d578060031936011261057d578151918160035492600184811c918186169586156107ce575b60209687851081146107bb578899509688969785829a529182600014610794575050600114610756575b50505061042e929161041f9103856114ee565b9190869350600383528383205b82841061077c575050508201018161041f61042e610743565b8054848a018601528895508794909301928101610763565b60ff19168782015293151560051b8601909301935084925061041f915061042e9050610743565b634e487b7160e01b835260228a52602483fd5b92607f1692610719565b90503461023b578160031936011261023b578160209360ff926107f96114a3565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b90503461023b578160031936011261023b5760209261084991358152600184528260243591206121a2565b905491519160018060a01b039160031b1c168152f35b90503461023b578260031936011261023b5760008051602061235683398151915283528260205281832033845260205260ff82842054161561091557600c549060ff82166108df575060ff1916600117600c55513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602090a180f35b606490602084519162461bcd60e51b8352820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152fd5b6020608492519162461bcd60e51b8352820152603e60248201526000805160206123d683398151915260448201527f6d75737420686176652070617573657220726f6c6520746f20706175736500006064820152fd5b5050346101d157806003193601126101d157610238906109b660ff61098e611488565b9260008051602061237683398151915286528560205280862033875260205285205416611542565b60243590611bd2565b5050346101d15760203660031901126101d1576020906109e56109e0611488565b611933565b9051908152f35b5050346101d15760203660031901126101d157610a1990610a1060ff61098e611488565b600d5490611bd2565b6001600d5401600d5580f35b82843461057d57602036600319011261057d5750610a45602092356119f1565b90516001600160a01b039091168152f35b5050346101d157816003193601126101d15760209060ff600c541690519015158152f35b9050823461057d57602036600319011261057d5750803590600a54821015610ab657602083610aa884612171565b91905490519160031b1c8152f35b608490602084519162461bcd60e51b8352820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152fd5b8383346101d1576020928360031936011261023b57803591610b38610b338433611b19565b611a3e565b610b41836119f1565b6001600160a01b0391908281169081610cf7575050600a54848652600b8752818620819055600160401b811015610ce457610b9f610b86826001889401600a55612171565b819391549060031b600019811b9283911b169119161790565b90555b600a546000199390848101908111610cd157858752600b8852610bc88388205491612171565b90549060031b1c80610bdc610b8684612171565b90558752600b8852828720558486528582812055600a548015610cbe578401610c0481612171565b8682549160031b1b19169055600a5560ff600c5416610c7b578596610c2a8697966119f1565b8787526006825283872080546001600160a01b03199081169091559416808752600582528387208054909601909555868652528320805490911690556000805160206123968339815191528280a480f35b86608492519162461bcd60e51b8352820152602b60248201526000805160206123b683398151915260448201526a1a1a5b19481c185d5cd95960aa1b6064820152fd5b634e487b7160e01b875260318252602487fd5b634e487b7160e01b875260118252602487fd5b634e487b7160e01b865260418452602486fd5b610d0090611933565b600019810191908211610d78578587526009885282872054828103610d41575b50858752868381205586526008875281862090865286528481812055610ba2565b8188526008895283882083895289528388205482895260088a52848920828a528a5280858a20558852600989528388205588610d20565b634e487b7160e01b875260118552602487fd5b8383346101d157610d9b366114b9565b83519390929060208501906001600160401b03821186831017610dc75761023896975052858452611aa0565b634e487b7160e01b875260418852602487fd5b90503461023b578260031936011261023b5760008051602061235683398151915283528260205281832033845260205260ff828420541615610e9257600c549060ff821615610e58575060ff1916600c55513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b606490602084519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b816020608493519262461bcd60e51b845283015260248201526000805160206123d683398151915260448201527f6d75737420686176652070617573657220726f6c6520746f20756e70617573656064820152fd5b839150346101d157826003193601126101d157610f026114a3565b90336001600160a01b03831603610f1e579061023891356118ac565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b82843461057d578160031936011261057d57610f93611488565b60243590610fa081611933565b821015610fce576001600160a01b031682526008602090815283832091835290815290829020548251908152f35b835162461bcd60e51b8152602081870152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608490fd5b9190503461023b578060031936011261023b5761108e91359060016110486114a3565b928086526020908682526110608385892001546115a2565b80875286825283872094838060a01b031694858852825260ff848820541615611092575b86525283206121cb565b5080f35b8087528682528387208588528252838720805460ff1916841790553385827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8a80a4611084565b90503461023b57602036600319011261023b57816020936001923581528085522001549051908152f35b833461057d57610238611115366114b9565b91611123610b338433611b19565b611daa565b5050346101d157816003193601126101d157602090600a549051908152f35b90503461023b578160031936011261023b57611161611488565b6024359290916001600160a01b039190828061117c876119f1565b1694169380851461126b5780331490811561124c575b50156111e457508385526006602052842080546001600160a01b031916831790556111bc836119f1565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600760205281862033875260205260ff828720541638611192565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b82843461057d57602036600319011261057d5750610a4560209235611a17565b82843461057d578060031936011261057d578151918160025492600184811c9181861695861561137d575b60209687851081146107bb578899509688969785829a52918260001461079457505060011461133f5750505061042e929161041f9103856114ee565b9190869350600283528383205b828410611365575050508201018161041f61042e610743565b8054848a01860152889550879490930192810161134c565b92607f1692611303565b84913461023b57602036600319011261023b573563ffffffff60e01b811680910361023b576020925063780e9d6360e01b81149081156113c9575b5015158152f35b6380ac58cd60e01b81149150811561142f575b81156113ea575b50836113c2565b635a05180f60e01b811491508115611404575b50836113e3565b637965db0b60e01b81149150811561141e575b50836113fd565b6301ffc9a760e01b14905083611417565b635b5e139f60e01b811491506113dc565b60005b8381106114535750506000910152565b8181015183820152602001611443565b9060209161147c81518092818552858086019101611440565b601f01601f1916010190565b600435906001600160a01b038216820361149e57565b600080fd5b602435906001600160a01b038216820361149e57565b606090600319011261149e576001600160a01b0390600435828116810361149e5791602435908116810361149e579060443590565b601f909101601f19168101906001600160401b0382119082101761151157604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161151157601f01601f191660200190565b1561154957565b60405162461bcd60e51b815260206004820152603d60248201526000805160206123d683398151915260448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e740000006064820152608490fd5b600090808252602090828252604092838120338252835260ff8482205416156115cb5750505050565b8351916001600160401b0390336060850183811186821017611898578752602a855285850191873684378551156118845760308353855191600192831015611870576078602188015360295b83811161180657506117d657908751936080850190858210908211176117c2578852604284528684019460603687378451156117ae576030865384518210156117ae5790607860218601536041915b818311611740575050506117105761170c9386936116f0936116e16048946116b89a519a8b9576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c8801525180926037880190611440565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190611440565b010360288101875201856114ee565b5192839262461bcd60e51b845260048401526024830190611463565b0390fd5b60648587519062461bcd60e51b825280600483015260248201526000805160206123168339815191526044820152fd5b909192600f8116601081101561179a576f181899199a1a9b1b9c1cb0b131b232b360811b901a61177085886121ba565b5360041c92801561178657600019019190611666565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b86526041600452602486fd5b60648789519062461bcd60e51b825280600483015260248201526000805160206123168339815191526044820152fd5b90600f8116601081101561185c576f181899199a1a9b1b9c1cb0b131b232b360811b901a611834838a6121ba565b5360041c9080156118485760001901611617565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b85526041600452602485fd5b9060406118e992600090808252816020528282209360018060a01b03169384835260205260ff83832054166118ec575b8152600160205220612239565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a46118dc565b6001600160a01b0316801561195357600052600560205260406000205490565b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608490fd5b156119b157565b60405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606490fd5b6000908152600460205260409020546001600160a01b0316611a148115156119aa565b90565b611a236102b482611d33565b6000908152600660205260409020546001600160a01b031690565b15611a4557565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b90611ac4939291611ab4610b338433611b19565b611abf838383611daa565b61201b565b15611acb57565b60405162461bcd60e51b8152602060048201526032602482015260008051602061233683398151915260448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b906001600160a01b038080611b2d846119f1565b16931691838314938415611b60575b508315611b4a575b50505090565b611b5691929350611a17565b1614388080611b44565b909350600052600760205260406000208260005260205260ff604060002054169238611b3c565b15611b8e57565b60405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606490fd5b6001600160a01b038116908115611cef57611bf5611bef84611d33565b15611b87565b600a54600091848352602090600b82526040928084862055600160401b811015611898579086611c31610b86846001611c389601600a55612171565b9055611933565b8484526008825282842081855282528583852055858452600982528284205560ff600c5416611cab57600490611c70611bef87611d33565b848452600581528284208054600101905585845252812080546001600160a01b031916831790556000805160206123968339815191528180a4565b608491519062461bcd60e51b82526004820152602b60248201526000805160206123b683398151915260448201526a1a1a5b19481c185d5cd95960aa1b6064820152fd5b606460405162461bcd60e51b815260206004820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b6000908152600460205260409020546001600160a01b0316151590565b15611d5757565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90611dd090611db8846119f1565b6001600160a01b038481169390929183168414611d50565b818116938415611fca5783611f1e5750600a5485600052600b60205280604060002055600160401b81101561151157611e13610b86826001899401600a55612171565b90555b828403611eeb575b5060ff600c5416611ea45781611e3e91611e37866119f1565b1614611d50565b600080516020612396833981519152600084815260066020526040812060018060a01b03199081815416905583825260056020526040822060001981540190558482526040822060018154019055858252600460205284604083209182541617905580a4565b60405162461bcd60e51b815260206004820152602b60248201526000805160206123b683398151915260448201526a1a1a5b19481c185d5cd95960aa1b6064820152608490fd5b611ef490611933565b60406000858152600860205281812083825260205286828220558681526009602052205538611e1e565b848403611f2c575b50611e16565b611f3590611933565b6000198101908111611fb4576000908682526020906009825260409182842054828103611f7d575b508884528383812055868452600881528284209184525281205538611f26565b8785526008825283852083865282528385205488865260088352848620828752835280858720558552600982528385205538611f5d565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9293600093909291803b15612166579484916120759660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c976084830190611463565b0393165af1849181612126575b50612115575050503d60001461210d573d61209c81611527565b906120aa60405192836114ee565b81528091833d92013e5b8051918261210a5760405162461bcd60e51b8152602060048201526032602482015260008051602061233683398151915260448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b01fd5b5060606120b4565b6001600160e01b0319161492509050565b9091508581813d831161215f575b61213e81836114ee565b810103126106cf57516001600160e01b0319811681036106cf579038612082565b503d612134565b505050915050600190565b600a5481101561218c57600a60005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b805482101561218c5760005260206000200190600090565b90815181101561218c570160200190565b9190600183016000908282528060205260408220541560001461223357845494600160401b86101561221f578361220f610b86886001604098999a018555846121a2565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b9060018201906000928184528260205260408420549081151560001461230e5760001991808301818111611848578254908482019182116122fa578082036122c5575b505050805480156122b15782019161229483836121a2565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6122e56122d5610b8693866121a2565b90549060031b1c928392866121a2565b9055865284602052604086205538808061227c565b634e487b7160e01b88526011600452602488fd5b505050509056fe537472696e67733a20686578206c656e67746820696e73756666696369656e744552433732313a207472616e7366657220746f206e6f6e20455243373231526565d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4552433732315061757361626c653a20746f6b656e207472616e7366657220774552433732315072657365744d696e7465725061757365724175746f49643a20a2646970667358221220f9d1e951f6d408e0d50ec62043d62ca765eff8e220a31c7eabe4ad3a5aed25d764736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"
   },
   "AkemonaDisbursement": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_protocol",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "_crowdsaleToken",
                  "type": "address"
               },
               {
                  "internalType": "address[]",
                  "name": "_disbursementWallets",
                  "type": "address[]"
               },
               {
                  "internalType": "address payable",
                  "name": "_usdc",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_serialNumber",
                  "type": "uint256"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "allocatedAmount",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "burnAmount",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "disbursementWalletIndex",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "serialNumber",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "name": "DisbursementAllocatedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "serialNumber",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "name": "DisbursementClosedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "allocatedAmount",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "burnAmount",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "disbursementWalletIndex",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "serialNumber",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "name": "DisbursementRedeemedEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "openingTime",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "isFinal",
                  "type": "bool"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "serialNumber",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amountDisbursedPerToken",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "name": "DisbursementSetupEvent",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "onBehalfOf",
                  "type": "bool"
               },
               {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "serialNumber",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "name": "RedemptionRequestEvent",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "currentRound",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "owner",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "walletRedemptionRequest",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "onBehalfOf",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "redemptionAllocated",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "redemptionClaimed",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "allocatedAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "burnAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "disbursementWalletIndex",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               },
               {
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               },
               {
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "internalType": "bool",
                  "name": "exists",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "name": "walletlessRedemptionRequest",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "onBehalfOf",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "redemptionAllocated",
                  "type": "bool"
               },
               {
                  "internalType": "bool",
                  "name": "redemptionClaimed",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "allocatedAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "burnAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "disbursementWalletIndex",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               },
               {
                  "internalType": "address",
                  "name": "wallet",
                  "type": "address"
               },
               {
                  "internalType": "bytes32",
                  "name": "investorId",
                  "type": "bytes32"
               },
               {
                  "internalType": "bool",
                  "name": "exists",
                  "type": "bool"
               },
               {
                  "internalType": "uint256",
                  "name": "round",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "isOpen",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "isClosed",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "close",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "amountDisbursedPerToken",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "openingTime",
                  "type": "uint256"
               },
               {
                  "internalType": "bool",
                  "name": "isFinal",
                  "type": "bool"
               }
            ],
            "name": "setupDisbursement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getSerialNumber",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bool",
                  "name": "offchainRedemption",
                  "type": "bool"
               }
            ],
            "name": "requestRedemption",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "wallets",
                  "type": "address[]"
               },
               {
                  "internalType": "bool[]",
                  "name": "offchainRedemption",
                  "type": "bool[]"
               }
            ],
            "name": "requestRedemptionOnBehalfOfWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32[]",
                  "name": "_investorIds",
                  "type": "bytes32[]"
               }
            ],
            "name": "requestRedemptionOnBehalfOf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32[]",
                  "name": "_investorIds",
                  "type": "bytes32[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_walletIndexes",
                  "type": "uint256[]"
               }
            ],
            "name": "allocateDisbursementsByInvestorId",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_wallets",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_burnAmounts",
                  "type": "uint256[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_walletIndexes",
                  "type": "uint256[]"
               }
            ],
            "name": "allocateDisbursementsByWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "redeemDisbursement",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_wallets",
                  "type": "address[]"
               }
            ],
            "name": "redeemDisbursementOnBehalfOfWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32[]",
                  "name": "_investorIds",
                  "type": "bytes32[]"
               }
            ],
            "name": "redeemDisbursementsOffchain",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x608060405234620001c657620024fc803803806200001d81620001fc565b92833981019060c081830312620001c657620000398162000222565b916020918281015193620000506040830162000222565b606083015190946001600160401b03949091858111620001c65784019080601f83011215620001c657815190868211620001e6578160051b928462000097818601620001fc565b809481520190858295820101928311620001c65785809101915b838310620001cb575050505060808501516001600160a01b039586821691829003620001c65760a0015198866001998a60ff1960055416176005558160009889600c5560018060a01b03199433868c5416178b5560065516838c5416178b5516816002541617600255600354161760035551948511620001b257680100000000000000008511620001b2576004548560045580861062000187575b509260048352818320925b858110620001735787600b556040516122c49081620002388239f35b845182168482015593820193860162000157565b60048452868684862092830192015b828110620001a65750506200014c565b85815501879062000196565b634e487b7160e01b83526041600452602483fd5b600080fd5b8190620001d88462000222565b8152019101908590620000b1565b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f191682016001600160401b03811183821017620001e657604052565b51906001600160a01b0382168203620001c65756fe608080604052600436101561001357600080fd5b60003560e01c90816301cc65bf14611c54575080630386aacb14611a345780631ce7f4ee146116205780632c2e9b7d146113cf5780632d79838a146113b15780633f34f0d0146110bc57806343d726d61461105357806347535d7b1461102e578063501b092214610e5557806353951fde14610a2d5780637db31f62146107ca5780638a19c8bc146107ac5780638da5cb5b146107835780639bfe0bd214610698578063ba11ed85146103d0578063c2b6b58c146103ad5763d63bd786146100da57600080fd5b346103a85760403660031901126103a8576001600160401b036004358181116103a85761010b903690600401611dfb565b6024359182116103a857366023830112156103a857816004013561012e81611d86565b9261013c6040519485611d63565b8184526024602085019260051b820101903682116103a857602401915b81831061038f5750505061017860018060a01b03600054163314611e94565b60005b815181101561038d57610358906001600160a01b0361019a8285611fff565b5116600052600e60205260ff6006604060002001541615801561035d575b6101c190611f73565b60008051602061226f8339815191526101da8286611fff565b511515600c54604051906101ed82611d47565b6001825260006020830152600060408301526000606083015260006080830152600060a083015260c092838301523360e08301526000610100830152600161012083015261014082015260018060a01b036102488588611fff565b5116600052600e602052600761014060406000209261026a8151151585611ec5565b61027a6020820151151585611fcd565b61028a6040820151151585611fe5565b606081015160018501556080810151600285015560a08101516003850155600484016102bb86830151151582611ec5565b60e08201518154610100600160a81b03191660089190911b610100600160a81b0316179055610100810151600585015561012081015161030090151560068601611ec5565b015191015561030f8387611fff565b51600b54901515906001600160a01b036103298689611fff565b5116600c549160405193600185526020850152604084015260608301526000608083015260a0820152a1611ed6565b61017b565b506001600160a01b036103708285611fff565b51166000908152600e6020526040902060070154600c54116101b8565b005b823580151581036103a857815260209283019201610159565b600080fd5b346103a85760003660031901126103a857602060ff600554166040519015158152f35b346103a85760803660031901126103a8576001600160401b036004358181116103a857610401903690600401611dfb565b9060249182358281116103a85761041c903690600401611d9d565b604480358481116103a857610435903690600401611d9d565b9260649485359081116103a857610450903690600401611d9d565b9160018060a01b0361046781600054163314611e94565b60005b835181101561038d578161047e8286611fff565b5116600052600e60209080825260ff916104a383600660406000200154161515612013565b846104ae8589611fff565b51166000528181526104ca8360406000205460101c1615612058565b846104d58589611fff565b51166000528181528260046040600020015416158015610686575b1561061d578861061089898796868f968b6105ec8b6105e5816106189f8060008051602061222f8339815191529f8f928f6105cf8f8f8d6105d7966105ae8f966105de9b6105678a8098610545828096611fff565b518c610551848c611fff565b5116600052878952600160406000200155611fff565b51896105738489611fff565b51166000528486526003604060002001558861058f8388611fff565b5116600052838552604060002061010061ff0019825416179055611fff565b5191866105bb8686611fff565b511660005252600260406000200155611fff565b51169f611fff565b519e611fff565b5199611fff565b5196611fff565b51166000525260046040600020015416600b5491600c5493604051978897886120ae565b0390a1611ed6565b61046a565b60405162461bcd60e51b81526004810191909152603e818d01527f63616e6e6f7420616c6c6f63617465206e6f6e2d7a65726f20616d6f756e7420818701527f746f206f6666636861696e20726564656d7074696f6e20726571756573740000818c0152608490fd5b50610691848a611fff565b51156104f0565b346103a85760203660031901126103a8576004356001600160a01b03818116918290036103a85760ff91600052600e60205261077f604060002080549060018101549160028201549060038301549060048401549160058501549360078a600688015416960154966040519a8b9a8660081c1695169360ff8160101c169060ff808260081c1691168c979491926101409996939c9b9a9794919c6101608a019d15158a52151560208a0152151560408901526060880152608087015260a0860152151560c085015260018060a01b031660e084015261010083015215156101208201520152565b0390f35b346103a85760003660031901126103a8576000546040516001600160a01b039091168152602090f35b346103a85760003660031901126103a8576020600c54604051908152f35b346103a85760203660031901126103a8576004356001600160401b0381116103a8576107fa903690600401611d9d565b61080f60018060a01b03600054163314611e94565b60005b815181101561038d576108258183611fff565b51600052600d60205260ff60066040600020015416158015610a07575b156109c957806108556109c49284611fff565b51600c546040519161086683611d47565b6001835260006020840152600060408401526000606084015260006080840152600060a0840152600160c0840152600060e084015261010083015260016101208301526101408201526108b98285611fff565b51600052600d60205260076101406040600020926108da8151151585611ec5565b6108ea6020820151151585611fcd565b6108fa6040820151151585611fe5565b606081015160018501556080810151600285015560a081015160038501556004840161092c60c0830151151582611ec5565b60e08201518154610100600160a81b03191660089190911b610100600160a81b0316179055610100810151600585015561012081015161097190151560068601611ec5565b015191015560008051602061226f83398151915260c0600b546109948487611fff565b51600c5490604051926001845260016020850152604084015260006060840152608083015260a0820152a1611ed6565b610812565b60405162461bcd60e51b81526020600482015260166024820152757265717565737420616c72656164792065786973747360501b6044820152606490fd5b50610a128183611fff565b51600052600d602052600760406000200154600c5411610842565b346103a85760003660031901126103a857610a4e610a49611e69565b611f2c565b33600052600e602090808252610a73600160ff60406000205460081c161515146120ee565b3360005280825260ff60046040600020015416610e015760018060a01b039060039180835416336000528285528482610ab28660406000200154611efb565b905490871b1c16604460405180948193636eb1769f60e11b835260048301523060248301525afa908115610cb557600091610dd4575b503360005282855260016040600020015411610d8f5733600052818452610b1a60ff60406000205460101c161561213a565b3360005281845260406000206201000062ff000019825416179055610b87848285541683610b4e8760406000200154611efb565b905490881b1c1690336000528583526001604060002001549160006040518096819582946323b872dd60e01b84523390600485016121ad565b03925af18015610cb557610ba391600091610d62575b506121cf565b3360005281845260026040600020015415600014610cf05760ff600a5416610c20575b5060008051602061224f833981519152925b3360005252600160406000200154610c1b600260406000200154926040600020015460ff60046040600020015416600b5490600c549260405196879633886120ae565b0390a1005b6002546040516370a0823160e01b81523360048201529491168185602481845afa948515610cb557600095610cc1575b50803b156103a85760405163079cc67960e41b8152946000918691829084908290610c7f903360048401612213565b03925af1938415610cb55760008051602061224f83398151915294610ca6575b5092610bc6565b610caf90611d1e565b84610c9f565b6040513d6000823e3d90fd5b9094508181813d8311610ce9575b610cd98183611d63565b810103126103a857519385610c50565b503d610ccf565b600254169260026040600020015493803b156103a85760405163079cc67960e41b8152946000918691829084908290610d2d903360048401612213565b03925af1938415610cb55760008051602061224f83398151915294610d53575b50610bd8565b610d5c90611d1e565b84610d4d565b610d829150863d8811610d88575b610d7a8183611d63565b810190612195565b86610b9d565b503d610d70565b60405162461bcd60e51b815260048101859052601f60248201527f696e73756666696369656e7420617070726f76616c20696e2077616c6c6574006044820152606490fd5b90508481813d8311610dfa575b610deb8183611d63565b810103126103a8575185610ae8565b503d610de1565b60405162461bcd60e51b815260048101839052602660248201527f64697362757273656d656e742069732064657369676e61746564206173206f666044820152653331b430b4b760d11b6064820152608490fd5b346103a8576060806003193601126103a8576001600160401b03906004358281116103a857610e88903690600401611d9d565b906024358381116103a857610ea1903690600401611d9d565b926044359081116103a857610eba903690600401611d9d565b90610ed060018060a01b03600054163314611e94565b60005b835181101561038d5780610eea6110299286611fff565b5160005260008051602061222f833981519152600d602081815288878960ff610f1e81600660406000200154161515612013565b610f288883611fff565b51600052858552610f438160406000205460101c1615612058565b610f4d8885611fff565b51610f588984611fff565b51600052868652600160406000200155610f728884611fff565b51610f7d8984611fff565b51600052868652600360406000200155610f978883611fff565b51600052858552604060002095610100968761ff0019825416179055610fde89610fd781610fd081610fc9818a611fff565b519a611fff565b5197611fff565b5194611fff565b5160005285526004604060002001541690600b5492600c54946040519660008852870152604086015260008a8601526080850152151560a084015260c083015260e0820152a1611ed6565b610ed3565b346103a85760003660031901126103a8576020611049611e69565b6040519015158152f35b346103a85760003660031901126103a85761107960018060a01b03600054163314611e94565b600160ff1960055416176005557f023de3d3e5c6db0f4a5c0f369e37c8d51b71b753d0cf143694bb63e9863ef8cb6040600b54600c5482519182526020820152a1005b346103a85760603660031901126103a8576024803560443580151590600435908290036103a8576000546001600160a01b03906110fc9082163314611e94565b60055492600160ff851615150361134957600c5493600185018095116113345784600c5560ff198091166005558360075585600955600a541660ff821617600a556000916000600454600383815416905b8284106112915750505050600254169160405180936314d19ded60e31b825281600460209687935afa8015610cb557600090611261575b620f42409150049081850291858304148515171561124c57106111e8579160a093917fd6d15fe1524973a6203bc040654781e3d37a46281a95f158ce39607976454e6c9593600b5491604051958652850152604084015260608301526080820152a1005b60405162461bcd60e51b8152600481018390526037818801527f4e6f7420656e6f7567682066756e647320696e2077616c6c65747320746f20636044820152761bdd995c88191a5cd89d5c9cd95b595b9d105b5bdd5b9d604a1b6064820152608490fd5b87634e487b7160e01b60005260116004526000fd5b508381813d831161128a575b6112778183611d63565b810103126103a857620f42409051611184565b503d61126d565b909192958461129f88611efb565b90546040516370a0823160e01b815291851b1c91909116600482015260209081818e81885afa918215610cb557600092611306575b505081018091116112f1576112e99096611ed6565b92919061114d565b8a634e487b7160e01b60005260116004526000fd5b90809250813d831161132d575b61131d8183611d63565b810103126103a857518c806112d4565b503d611313565b86634e487b7160e01b60005260116004526000fd5b60405162461bcd60e51b815260206004820152603b818801527f5468652061637469766520726f756e64206d7573742062656520636c6f73656460448201527a103132b337b932903a3434b99031b0b71031329031b0b63632b21760291b6064820152608490fd5b346103a85760003660031901126103a8576020600b54604051908152f35b346103a8576020806003193601126103a8576004358015158091036103a8576113f9610a49611e69565b6002546040516370a0823160e01b8152336004820152908390829060249082906001600160a01b03165afa908115610cb5576000916115f3575b50156115ae5733600052600e825260ff6006604060002001541615801561159b575b61145e90611f73565b600c546040519061146e82611d47565b60008252838201600081526040830160008152606084016000815260808501906000825260a086016000815260c087019288845260e0880192338452610100890195600087526101208a0197600189526101408b01998a5233600052600e8d5260406000209a5115156114e1908c611ec5565b5115156114ee908b611fcd565b5115156114fb908a611fe5565b516001890155516002880155516003870155600486019151151561151f9083611ec5565b518154610100600160a81b03191660089190911b610100600160a81b03161790555160058401555161155690151560068401611ec5565b519060070155600b54600c549160405193600085528401526040830152336060830152608082016000905260a082015260c060008051602061226f83398151915291a1005b50604060002060070154600c5411611455565b60405162461bcd60e51b815260048101839052601f60248201527f6e6f20746f6b656e7320666f756e6420666f7220746869732077616c6c6574006044820152606490fd5b90508281813d8311611619575b61160a8183611d63565b810103126103a8575183611433565b503d611600565b346103a8576020806003193601126103a8576004356001600160401b0381116103a857611651903690600401611dfb565b6000546001600160a01b03919061166b9083163314611e94565b60005b815181101561038d57826116828284611fff565b5116600052600e90818552600160ff906116a9818360406000205460081c161515146120ee565b856116b48487611fff565b51166000528387526116d08260406000205460101c161561213a565b856116db8487611fff565b511660005283875260406000206201000062ff000019825416179055856117028487611fff565b511660005283875281600460406000200154161561197a575b856117268487611fff565b51166000528387526002918260406000200154156000146118e35780600a54166117fb575b9061061060008051602061224f83398151915293926117f6965b89611770888b611fff565b5116938a61177e898c611fff565b5116600052818c5260406000200154948a611799898c611fff565b5116600052818c5260406000200154918a6117b4898c611fff565b5116600052818c52600360406000200154918b6117d18a8d611fff565b51166000528c5260046040600020015416600b5491600c5493604051978897886120ae565b61166e565b919086825416928761180d8689611fff565b51168861181a878a611fff565b516040516370a0823160e01b8152911660048201528a81602481895afa908115610cb5576000916118b6575b50853b156103a857611872956000928360405180998195829463079cc67960e41b845260048401612213565b03925af1908115610cb5576117f69660008051602061224f83398151915295610610936118a7575b509650919293505061174b565b6118b090611d1e565b8b61189a565b90508a81813d83116118dc575b6118cd8183611d63565b810103126103a857518b611846565b503d6118c3565b91908682541692876118f58689611fff565b511688611902878a611fff565b5116600052868a528360406000200154853b156103a85761193d956000928360405180998195829463079cc67960e41b845260048401612213565b03925af1908115610cb5576117f69660008051602061224f833981519152956106109361196b575b50611765565b61197490611d1e565b8b611965565b6119f787600388808254169181611991898c611fff565b51166000528884526119a98160406000200154611efb565b9054911b1c1690896119bb888b611fff565b51168a6119c8898c611fff565b511660005288845260008660408220015493604051968795869485936323b872dd60e01b8552600485016121ad565b03925af18015610cb557611a1291600091611a1757506121cf565b61171b565b611a2e9150893d8b11610d8857610d7a8183611d63565b89610b9d565b346103a8576020806003193601126103a8576004356001600160401b0381116103a857611a65903690600401611d9d565b611a7a60018060a01b03600054163314611e94565b611a85610a49611e69565b60005b815181101561038d57611a9b8183611fff565b51600052600d80845260019060ff611ac0838260406000205460081c161515146120ee565b611aca8486611fff565b51600052818652828160046040600020015416151503611bfc57839260008051602061224f8339815191529261010092611b07611bf79789611fff565b51600052818952611b228160406000205460101c161561213a565b611b2c8689611fff565b5160005281895260406000206201000062ff000019825416179055611b518689611fff565b5192611b5d878a611fff565b51600052828a526040600020015491611b76878a611fff565b51600052808a5260026040600020015491611b91888b611fff565b51600052818b5260036040600020015491611bac898c611fff565b516000528b526004604060002001541690600b5492600c549460405196600088528d880152604087015260608601526080850152151560a084015260c083015260e0820152a1611ed6565b611a88565b60405162461bcd60e51b815260048101879052602a60248201527f64697362757273656d656e74206973206e6f742064657369676e617465642061604482015269399037b33331b430b4b760b11b6064820152608490fd5b346103a85760203660031901126103a857600480356000908152600d60209081526040918290208054600182015460028301546003840154968401546005850154600686015460079096015460ff80871615158c52600887811c82161515998d019990995260109690961c86161515988b019890985260608a0193909352608089019190915260a0880196909652818616151560c08801529490921c6001600160a01b031660e0860152610100850193909352909116151561012083015261014082015261016090f35b6001600160401b038111611d3157604052565b634e487b7160e01b600052604160045260246000fd5b61016081019081106001600160401b03821117611d3157604052565b601f909101601f19168101906001600160401b03821190821017611d3157604052565b6001600160401b038111611d315760051b60200190565b81601f820112156103a857803591611db483611d86565b92611dc26040519485611d63565b808452602092838086019260051b8201019283116103a8578301905b828210611dec575050505090565b81358152908301908301611dde565b81601f820112156103a857803591611e1283611d86565b92611e206040519485611d63565b808452602092838086019260051b8201019283116103a8578301905b828210611e4a575050505090565b81356001600160a01b03811681036103a8578152908301908301611e3c565b6009548015159081611e86575b81611e7f575090565b9050421190565b60055460ff16159150611e76565b15611e9b57565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b9060ff801983541691151516179055565b6000198114611ee55760010190565b634e487b7160e01b600052601160045260246000fd5b600454811015611f1657600460005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b15611f3357565b60405162461bcd60e51b81526020600482015260186024820152773234b9b13ab939b2b6b2b73a1034b9903737ba1037b832b760411b6044820152606490fd5b15611f7a57565b60405162461bcd60e51b815260206004820152602560248201527f7265717565737420616c72656164792065786973747320666f722074686973206044820152641c9bdd5b9960da1b6064820152608490fd5b9061ff00825491151560081b169061ff001916179055565b9062ff0000825491151560101b169062ff00001916179055565b8051821015611f165760209160051b010190565b1561201a57565b60405162461bcd60e51b81526020600482015260166024820152751c995c5d595cdd08191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b1561205f57565b60405162461bcd60e51b815260206004820152602160248201527f726571756573742068617320616c7265616479206265656e2072656465656d656044820152601960fa1b6064820152608490fd5b93909796959260e0959261010086019960018060a01b0316865260006020870152604086015260608501526080840152151560a083015260c08201520152565b156120f557565b60405162461bcd60e51b815260206004820152601d60248201527f64697362757273656d656e74206973206e6f7420616c6c6f63617465640000006044820152606490fd5b1561214157565b60405162461bcd60e51b815260206004820152602660248201527f64697362757273656d656e742068617320616c7265616479206265656e2072656044820152651919595b595960d21b6064820152608490fd5b908160209103126103a8575180151581036103a85790565b6001600160a01b03918216815291166020820152604081019190915260600190565b156121d657565b60405162461bcd60e51b81526020600482015260156024820152742aa9a221903a3930b739b332b9103330b4b632b21760591b6044820152606490fd5b6001600160a01b03909116815260208101919091526040019056fe32be61c022f3d3645b8a4c93455f6e6ca1d1053bbbe8c13c645e9fbf7a1a2d22c53f3630c41eca414912a4a9172b7a933385f023689dd2fabccb3a4e29b335c93e1d82848d6d397fd9a82bd70c395bb0179c2fc16257151f41a5580fbd53d472a2646970667358221220b09ed0a6f3809e9b0fa55cec154444a91f45b80a26d556550d2d92d595060d5164736f6c63430008110033"
   },
   "AkemonaWhitelistPermissionless": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_protocol",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "inputs": [],
            "name": "owner",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "whitelisted",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_investor",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "isPurchaseAuthorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "_offeringId",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "_from",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
               }
            ],
            "name": "isTransferAuthorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "addWhitelistedAddresses",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_addresses",
                  "type": "address[]"
               }
            ],
            "name": "removeWhitelistedAddresses",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x60803461007a57601f61049738819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b031933816000541617600055600154161760015560405161040190816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe604060808152600436101561001357600080fd5b600090813560e01c8063314681f2146101e45780638da5cb5b146101bd578063bf4c04c41461015a578063ca2cfc20146100ee578063d936547e146100b15763ebd6fcdd1461006157600080fd5b346100ad5760803660031901126100ad576001600160a01b03916024359083821682036100aa5760443593841684036100aa57506020926100a191610301565b90519015158152f35b80fd5b5080fd5b50346100ad5760203660031901126100ad5760209160ff9082906001600160a01b036100db610208565b1681526002855220541690519015158152f35b5090346100aa576100fe36610223565b9160018060a01b039161011583825416331461034c565b805b845181101561015057808461012f61014b93886103a1565b511683526002602052838320805460ff1916600117905561037c565b610117565b6020835160018152f35b5090346100aa5761016a36610223565b9160018060a01b039161018183825416331461034c565b805b84518110156101b957808461019b6101b493886103a1565b511683526002602052838320805460ff1916905561037c565b610183565b5080f35b50346100ad57816003193601126100ad57905490516001600160a01b039091168152602090f35b50346100ad57806003193601126100ad576020906100a1610203610208565b6102d7565b600435906001600160a01b038216820361021e57565b600080fd5b60208060031983011261021e576001600160401b039160043583811161021e578160238201121561021e578060040135908482116102c1578160051b9160405195601f19603f850116870190878210908211176102c157604052855260248486019282010192831161021e57602401905b8282106102a2575050505090565b81356001600160a01b038116810361021e578152908301908301610294565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b031660009081526002602052604090205460ff16156102fc57600190565b600090565b6001600160a01b0390811660009081526002602052604090205460ff169182610335575b505061033057600090565b600190565b9091501660005260ff604060002054163880610325565b1561035357565b60405162461bcd60e51b81526020600482015260016024820152602960f91b6044820152606490fd5b600019811461038b5760010190565b634e487b7160e01b600052601160045260246000fd5b80518210156103b55760209160051b010190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220f06f375245570eb83f8a1ed4d3f59b740aca297fb82764786916d034f8e15f6e64736f6c63430008110033"
   },
   "AkemonaProxy": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_con",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "_contract",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_con",
                  "type": "address"
               }
            ],
            "name": "setContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "addAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getContract",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x6080346100f157601f610cb038819003918201601f1916830192916001600160401b038411838510176100f657808392604095865283396020928391810103126100f157516001600160a01b03811691908290036100f157610088906001600091828052828152858320338452815260ff8684205416156100aa575b828052528333912061010c565b50600280546001600160a01b03191691909117905551610b1990816101978239f35b82805282815285832033845281528583208260ff198254161790553333847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a461007b565b600080fd5b634e487b7160e01b600052604160045260246000fd5b91906001830160009082825280602052604082205415600014610190578454946801000000000000000086101561017c576001860180825586101561016857836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a71461048757508163248a9ca31461045d5781632f2ff15d146103bf57816336568abe1461032d578163704802751461027157816375f890ab146102145781639010d07c146101d357816391d148541461018d578163958f85bd14610164578163a217fddf14610149578163ca15c87314610121578163d547741f146100df575063df9117b8146100b457600080fd5b346100db57816003193601126100db5760025490516001600160a01b039091168152602090f35b5080fd5b9190503461011d578060031936011261011d5761011a913561011560016101046104f4565b938387528660205286200154610556565b61089a565b80f35b8280fd5b90503461011d57602036600319011261011d5760209282913581526001845220549051908152f35b5050346100db57816003193601126100db5751908152602090f35b5050346100db57816003193601126100db5760025490516001600160a01b039091168152602090f35b90503461011d578160031936011261011d578160209360ff926101ae6104f4565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b90503461011d578160031936011261011d576020926101fe9135815260018452826024359120610948565b905491519160018060a01b039160031b1c168152f35b5050346100db5760203660031901126100db5761024e60ff61023461050f565b928480528460205280852033865260205284205416610525565b600280546001600160a01b0319166001600160a01b039290921691909117905580f35b5050346100db5760208060031936011261011d576102f491600161029361050f565b9285805285815282862033875281526102b160ff8488205416610525565b8580528581526102c5828488200154610556565b85805285815282862093828060a01b031693848752815260ff8387205416156102f8575b858052528320610960565b5080f35b8580528581528286208487528152828620805460ff191683179055338487600080516020610ac48339815191528180a46102e9565b839150346100db57826003193601126100db576103486104f4565b90336001600160a01b03831603610364579061011a913561089a565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b9190503461011d578060031936011261011d576102f491359060016103e26104f4565b928086526020908682526103fa838589200154610556565b80875286825283872094838060a01b031694858852825260ff848820541615610428575b8652528320610960565b8087528682528387208588528252838720805460ff191684179055338582600080516020610ac48339815191528a80a461041e565b90503461011d57602036600319011261011d57816020936001923581528085522001549051908152f35b84913461011d57602036600319011261011d573563ffffffff60e01b811680910361011d5760209250635a05180f60e01b81149081156104c9575b5015158152f35b637965db0b60e01b8114915081156104e3575b50836104c2565b6301ffc9a760e01b149050836104dc565b602435906001600160a01b038216820361050a57565b600080fd5b600435906001600160a01b038216820361050a57565b1561052c57565b60405162461bcd60e51b8152602060048201526002602482015261453360f01b6044820152606490fd5b6000818152602091818352604092838320338452815260ff84842054161561057e5750505050565b83516001600160401b03939092336060850186811186821017610863578752602a8552838501918736843785511561084f576030835385519160019283101561083b576078602188015360295b8381116107d157506106fb5787519060808201828110898211176107bd578952604282528582019260603685378251156107a9576030845382518110156107a957607860218401536041905b80821161073d5750506106fb5791610690949391889360679899519687936106668886019a76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c525180926037880190610877565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180936048840190610877565b0103602881018552601f199687910116840196848810908811176106e75750926106de60449593601f938880975262461bcd60e51b8752600487015251809281602488015287870190610877565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610795576f181899199a1a9b1b9c1cb0b131b232b360811b901a61076c8486610921565b5360041c918015610781576000190190610617565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f81166010811015610827576f181899199a1a9b1b9c1cb0b131b232b360811b901a6107ff838a610921565b5360041c90801561081357600019016105cb565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b60005b83811061088a5750506000910152565b818101518382015260200161087a565b9060406108d792600090808252816020528282209360018060a01b03169384835260205260ff83832054166108da575b81526001602052206109e7565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a46108ca565b908151811015610932570160200190565b634e487b7160e01b600052603260045260246000fd5b80548210156109325760005260206000200190600090565b919060018301600090828252806020526040822054156000146109e157845494600160401b8610156109cd57836109bd6109a4886001604098999a01855584610948565b819391549060031b600019811b9283911b169119161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b90600182019060009281845282602052604084205490811515600014610abc576000199180830181811161078157825490848201918211610aa857808203610a73575b50505080548015610a5f57820191610a428383610948565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b610a93610a836109a49386610948565b90549060031b1c92839286610948565b90558652846020526040862055388080610a2a565b634e487b7160e01b88526011600452602488fd5b505050509056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0da26469706673582212203a2cf18b54bf5f4e63f926622abc1bbec2c1ba6c3cb02ff4a1b83e64e9aac7e264736f6c63430008110033"
   },
   "AkemonaWhitelistTracker": {
      "abi": [
         {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "whitelists",
            "outputs": [
               {
                  "internalType": "contract IAkemonaWhitelist",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_whitelist",
                  "type": "address"
               }
            ],
            "name": "addWhitelist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "removeWhitelist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x604060808152346100955761003d60008080528060205282812033825260205260ff83822054161561004b575b80805260016020528233912061009a565b5051610b7b90816101258239f35b80805280602052828120338252602052828120600160ff198254161790553333827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a461002c565b600080fd5b9190600183016000908282528060205260408220541560001461011e578454946801000000000000000086101561010a57600186018082558610156100f657836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a7146104d057508063248a9ca3146104a75780632f2ff15d146103f457806336568abe146103625780639010d07c1461032257806391d14854146102dd578063a217fddf146102c2578063ae865ed7146101f3578063ca15c873146101cc578063d547741f14610192578063f80f5dd5146101055763fe4d5add146100a757600080fd5b3461010157602036600319011261010157356002548110156101015760029092527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9091015490516001600160a01b039091168152602090f35b8280fd5b5091903461018e57602036600319011261018e5782356001600160a01b03811691908290036101015760ff61014d9184805284602052808520338652602052842054166105a2565b60025492600160401b84101561017b5750610172836001610178949501600255610559565b906105df565b80f35b634e487b7160e01b835260419052602482fd5b5080fd5b50903461010157806003193601126101015761017891356101c760016101b661053e565b938387528660205286200154610606565b61094a565b50346101015760203660031901126101015760209282913581526001845220549051908152f35b50346101015760203660031901126101015761022660ff82359385805285602052808620338752602052852054166105a2565b60025490818310156102be57600019918083019081116102ab5761025861024f61026f92610559565b91905495610559565b909160018060a01b0396879160031b1c16916105df565b6002549081156102985750019061028582610559565b909182549160031b1b1916905560025580f35b634e487b7160e01b855260319052602484fd5b634e487b7160e01b855260118252602485fd5b8380fd5b50503461018e578160031936011261018e5751908152602090f35b50346101015781600319360112610101578160209360ff926102fd61053e565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b503461010157816003193601126101015760209261034c913581526001845282602435912061058a565b905491519160018060a01b039160031b1c168152f35b5082903461018e578260031936011261018e5761037d61053e565b90336001600160a01b038316036103995790610178913561094a565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b50903461010157806003193601126101015761045c913590600161041661053e565b9280865260209086825261042e838589200154610606565b80875286825283872094838060a01b031694858852825260ff848820541615610460575b86525283206109e2565b5080f35b8087528682528387208588528252838720805460ff1916841790553385827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8a80a4610452565b503461010157602036600319011261010157816020936001923581528085522001549051908152f35b92505034610101576020366003190112610101573563ffffffff60e01b81168091036101015760209250635a05180f60e01b8114908115610513575b5015158152f35b637965db0b60e01b81149150811561052d575b503861050c565b6301ffc9a760e01b14905038610526565b602435906001600160a01b038216820361055457565b600080fd5b60025481101561057457600260005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b80548210156105745760005260206000200190600090565b156105a957565b60405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b6044820152606490fd5b80546001600160a01b0360039390931b83811b80199092169390941690931b909216179055565b6000818152602091818352604092838320338452815260ff84842054161561062e5750505050565b83516001600160401b03939092336060850186811186821017610913578752602a855283850191873684378551156108ff57603083538551916001928310156108eb576078602188015360295b83811161088157506107ab57875190608082018281108982111761086d578952604282528582019260603685378251156108595760308453825181101561085957607860218401536041905b8082116107ed5750506107ab5791610740949391889360679899519687936107168886019a76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c525180926037880190610927565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180936048840190610927565b0103602881018552601f1996879101168401968488109088111761079757509261078e60449593601f938880975262461bcd60e51b8752600487015251809281602488015287870190610927565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f81166010811015610845576f181899199a1a9b1b9c1cb0b131b232b360811b901a61081c84866109d1565b5360041c9180156108315760001901906106c7565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f811660108110156108d7576f181899199a1a9b1b9c1cb0b131b232b360811b901a6108af838a6109d1565b5360041c9080156108c3576000190161067b565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b60005b83811061093a5750506000910152565b818101518382015260200161092a565b90604061098792600090808252816020528282209360018060a01b03169384835260205260ff838320541661098a575b8152600160205220610a69565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a461097a565b908151811015610574570160200190565b91906001830160009082825280602052604082205415600014610a6357845494600160401b861015610a4f5783610a3f610a26886001604098999a0185558461058a565b819391549060031b600019811b9283911b169119161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b90600182019060009281845282602052604084205490811515600014610b3e576000199180830181811161083157825490848201918211610b2a57808203610af5575b50505080548015610ae157820191610ac4838361058a565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b610b15610b05610a26938661058a565b90549060031b1c9283928661058a565b90558652846020526040862055388080610aac565b634e487b7160e01b88526011600452602488fd5b505050509056fea2646970667358221220a1dbd8f6bccf542fe35c536c244e2115e62cc74fcf10c5cfd8077c90142db89464736f6c63430008110033"
   },
   "AkemonaCrowdsaleTracker": {
      "abi": [
         {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "name": "crowdsaleProxies",
            "outputs": [
               {
                  "internalType": "contract AkemonaProxy",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "getRoleMember",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleMemberCount",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_crowdsaleProxy",
                  "type": "address"
               }
            ],
            "name": "addCrowdsaleProxy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "removeCrowdsaleProxy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x604060808152346100955761003d60008080528060205282812033825260205260ff83822054161561004b575b80805260016020528233912061009a565b5051610b8090816101258239f35b80805280602052828120338252602052828120600160ff198254161790553333827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a461002c565b600080fd5b9190600183016000908282528060205260408220541560001461011e578454946801000000000000000086101561010a57600186018082558610156100f657836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a7146104d557508063248a9ca3146104ab5780632f2ff15d146103f957806336568abe146103675780636fc2628d146102e15780639010d07c146102a057806391d148541461025a5780639ce85fb0146101fe578063a217fddf146101df578063ae05e9d41461010f578063ca15c873146100e75763d547741f146100a857600080fd5b346100e357806003193601126100e3576100e091356100db60016100ca610543565b93838752866020528620015461060b565b61094f565b80f35b8280fd5b5090346100e35760203660031901126100e35760209282913581526001845220549051908152f35b5090346100e35760203660031901126100e35761014360ff82359385805285602052808620338752602052852054166105a7565b60025490818310156101db57600019918083019081116101c85761017561016c61018c9261055e565b9190549561055e565b909160018060a01b0396879160031b1c16916105e4565b6002549081156101b5575001906101a28261055e565b909182549160031b1b1916905560025580f35b634e487b7160e01b855260319052602484fd5b634e487b7160e01b855260118252602485fd5b8380fd5b8382346101fa57816003193601126101fa5751908152602090f35b5080fd5b5090346100e35760203660031901126100e357356002548110156100e35760029092527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9091015490516001600160a01b039091168152602090f35b5090346100e357816003193601126100e3578160209360ff9261027b610543565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b5090346100e357816003193601126100e3576020926102cb913581526001845282602435912061058f565b905491519160018060a01b039160031b1c168152f35b508290346101fa5760203660031901126101fa5782356001600160a01b03811691908290036100e35760ff6103299184805284602052808520338652602052842054166105a7565b60025492600160401b841015610354575061034e8360016100e094950160025561055e565b906105e4565b634e487b7160e01b835260419052602482fd5b509190346101fa57826003193601126101fa57610382610543565b90336001600160a01b0383160361039e57906100e0913561094f565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b50346100e357806003193601126100e357610460913590600161041a610543565b9280865260209086825261043283858920015461060b565b80875286825283872094838060a01b031694858852825260ff848820541615610464575b86525283206109e7565b5080f35b8087528682528387208588528252838720805460ff1916841790553385827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8a80a4610456565b5090346100e35760203660031901126100e357816020936001923581528085522001549051908152f35b849084346100e35760203660031901126100e3573563ffffffff60e01b81168091036100e35760209250635a05180f60e01b8114908115610518575b5015158152f35b637965db0b60e01b811491508115610532575b5083610511565b6301ffc9a760e01b1490508361052b565b602435906001600160a01b038216820361055957565b600080fd5b60025481101561057957600260005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b80548210156105795760005260206000200190600090565b156105ae57565b60405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08185d5d1a1bdc9a5e995960921b6044820152606490fd5b80546001600160a01b0360039390931b83811b80199092169390941690931b909216179055565b6000818152602091818352604092838320338452815260ff8484205416156106335750505050565b83516001600160401b03939092336060850186811186821017610918578752602a8552838501918736843785511561090457603083538551916001928310156108f0576078602188015360295b83811161088657506107b05787519060808201828110898211176108725789526042825285820192606036853782511561085e5760308453825181101561085e57607860218401536041905b8082116107f25750506107b057916107459493918893606798995196879361071b8886019a76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8c52518092603788019061092c565b8401917001034b99036b4b9b9b4b733903937b6329607d1b6037840152518093604884019061092c565b0103602881018552601f1996879101168401968488109088111761079c57509261079360449593601f938880975262461bcd60e51b875260048701525180928160248801528787019061092c565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f8116601081101561084a576f181899199a1a9b1b9c1cb0b131b232b360811b901a61082184866109d6565b5360041c9180156108365760001901906106cc565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f811660108110156108dc576f181899199a1a9b1b9c1cb0b131b232b360811b901a6108b4838a6109d6565b5360041c9080156108c85760001901610680565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b60005b83811061093f5750506000910152565b818101518382015260200161092f565b90604061098c92600090808252816020528282209360018060a01b03169384835260205260ff838320541661098f575b8152600160205220610a6e565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a461097f565b908151811015610579570160200190565b91906001830160009082825280602052604082205415600014610a6857845494600160401b861015610a545783610a44610a2b886001604098999a0185558461058f565b819391549060031b600019811b9283911b169119161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b90600182019060009281845282602052604084205490811515600014610b43576000199180830181811161083657825490848201918211610b2f57808203610afa575b50505080548015610ae657820191610ac9838361058f565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b610b1a610b0a610a2b938661058f565b90549060031b1c9283928661058f565b90558652846020526040862055388080610ab1565b634e487b7160e01b88526011600452602488fd5b505050509056fea26469706673582212201f434828a18497a03abb790e23eeeb51b1728d5c48f1e490cb8c98055ea791cd64736f6c63430008110033"
   },
   "Akenro": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_governance",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_cliffTimestamp",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "_tranche1VestingPeriod",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "_tranche2VestingPeriod",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "_seedVestingPeriod",
                  "type": "uint256"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "Approval",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newTimestamp",
                  "type": "uint256"
               }
            ],
            "name": "CliffTimestampUpdate",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "delegator",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "fromDelegate",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "toDelegate",
                  "type": "address"
               }
            ],
            "name": "DelegateChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "delegate",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "previousBalance",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "newBalance",
                  "type": "uint256"
               }
            ],
            "name": "DelegateVotesChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "Transfer",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "TransferEnabled",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "DELEGATION_TYPEHASH",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "DOMAIN_TYPEHASH",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "TIMELOCK_UPDATE_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "TRANSFER_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               },
               {
                  "internalType": "uint32",
                  "name": "",
                  "type": "uint32"
               }
            ],
            "name": "checkpoints",
            "outputs": [
               {
                  "internalType": "uint32",
                  "name": "fromBlock",
                  "type": "uint32"
               },
               {
                  "internalType": "uint96",
                  "name": "votes",
                  "type": "uint96"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "cliffTimestamp",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "decimals",
            "outputs": [
               {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "delegates",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "getVestedBalance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "governanceAddress",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "name",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "nonces",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "numCheckpoints",
            "outputs": [
               {
                  "internalType": "uint32",
                  "name": "",
                  "type": "uint32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "passedAllVestingPeriods",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "passedCliff",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "seedVestingPeriod",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "symbol",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "tranche1VestingPeriod",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "tranche2VestingPeriod",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "transferAllowed",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               }
            ],
            "name": "allowance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "rawAmount",
                  "type": "uint256"
               }
            ],
            "name": "approve",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "balanceOf",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "getFreedBalance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "rawAmount",
                  "type": "uint256"
               }
            ],
            "name": "transfer",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "rawAmount",
                  "type": "uint256"
               }
            ],
            "name": "transferFrom",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "delegatee",
                  "type": "address"
               }
            ],
            "name": "delegate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "delegatee",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
               },
               {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
               },
               {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
               },
               {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
               }
            ],
            "name": "delegateBySig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "getCurrentVotes",
            "outputs": [
               {
                  "internalType": "uint96",
                  "name": "",
                  "type": "uint96"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "blockNumber",
                  "type": "uint256"
               }
            ],
            "name": "getPriorVotes",
            "outputs": [
               {
                  "internalType": "uint96",
                  "name": "",
                  "type": "uint96"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "rawAmount",
                  "type": "uint256"
               }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "enableTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "beneficiary",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "rawAmount",
                  "type": "uint256"
               },
               {
                  "internalType": "enum IAkenro.InvestorType",
                  "name": "investorType",
                  "type": "uint8"
               }
            ],
            "name": "updateTrancheBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeTranche",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x60e034620001f857601f62002fcc38819003918201601f191683019291906001600160401b03841183851017620001fd578160a09284926040968752833981010312620001f85780516001600160a01b0381169190829003620001f857602090818101519084810151608060608301519201519260015560805260a05260c0527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6b033b2e3c9fd0803ce800000091826004558360018060a01b03196005541617600555600092848452600782528584209060018060601b0319825416179055828052828152848320848452815260ff858420541615620001c0575b7f8502233096d909befbda0999bb8ea2f3a6be3c138b9fbf003752a4c8bce86f6c808452838252858420858552825260ff86852054161562000187575b506004548551908152a351612d989081620002148239608051818181610bcc0152611f0c015260a0518181816105600152611f4f015260c05181818161101601528181611db60152611f940152f35b8084528382528584208585528252858420600160ff1982541617905584339160008051602062002fac8339815191528680a43862000138565b8280528281528483208484528152848320805460ff1916600117905533848460008051602062002fac8339815191528180a4620000fb565b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a714611c085750806306fdde0314611bca578063095ea7b314611b1f5780630f36554a14611af657806318160ddd14611ad957806320606b7014611ab0578063206b60f914611a8757806323b872dd1461168e578063248a9ca3146116655780632f2ff15d14611567578063313ce5671461154b57806334fec4671461152757806336568abe1461149557806340c10f191461123157806344f61ab714611210578063587cde1e146111d55780635c19a95c146111b25780636cde20ab146111855780636fcfff451461114657806370a0823114611104578063782d6fe1146110ca578063795053d3146110a15780637ecebe00146110695780637f58b9d31461103957806391c903a614610ffe57806391d1485414610fb957806394d8307614610f9357806395d89b4114610f51578063a217fddf14610f36578063a9059cbb14610bef578063ab65f09a14610bb4578063b4b5ea5714610b37578063c3cda520146108a2578063c59ba686146106ba578063d539139314610691578063d547741f146105f6578063dd62ed3e146105a2578063e07edfdc14610583578063e09c370214610548578063e17ddf871461034d578063e7a324dc14610320578063f1127ed8146102b75763f1b50c1d146101fc57600080fd5b346102b357826003193601126102b3578280528260205281832033845260205260ff828420541615610262575060207f5285f0ad5858236d5f2ce2ec9ff0b2d3aa04320499b71f022e64d9c7549a325c91600160ff19600354161760035551338152a180f35b6020608492519162461bcd60e51b8352820152602660248201527f416b656e726f3a3a656e61626c655472616e736665723a206e6f7420617574686044820152651bdc9a5e995960d21b6064820152fd5b8280fd5b82843461031d578160031936011261031d576102d1611d0c565b9060243563ffffffff928382168092036102b3576001600160a01b0316825260096020908152848320918352908152908390205483519281168352811c6001600160601b031690820152f35b80fd5b50503461034957816003193601126103495760209051600080516020612bc38339815191528152f35b5080fd5b50346102b35760603660031901126102b357610367611d0c565b6044359260243591600385101561054457600080516020612ca38339815191528652602090868252828720338852825260ff8388205416156105405783156104f6576001600160a01b031680875260028252828720546001600160601b039060081c811661048f57906002929161042185516103e281611c8d565b60348152600080516020612c0383398151915285820152736f756e742065786365656473203936206269747360601b87820152600160601b881061215d565b6104368551986104308a611c5c565b89611df9565b828801951685528752528420925191600383101561047c575082549051610100600160681b0360089190911b1660ff929092166001600160681b03199091161717905580f35b634e487b7160e01b855260219052602484fd5b835162461bcd60e51b8152808701849052603b60248201527f416b656e726f3a3a7570646174655472616e63686542616c616e63653a20616c60448201527a7265616479206861732074696d656c6f636b656420416b656e726f60281b6064820152608490fd5b825162461bcd60e51b815280860183905260306024820152600080516020612c0383398151915260448201526f06f756e74206d757374206265203e20360841b6064820152608490fd5b8680fd5b8580fd5b505034610349578160031936011261034957602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b5050346103495781600319360112610349576020906001549051908152f35b5050346103495780600319360112610349576020916105bf611d0c565b6105c7611d27565b6001600160a01b039182168352600685528383209116825283528190205490516001600160601b039091168152f35b508290346103495782600319360112610349578035610613611d27565b918184528360205260018585200154845284842033855260205260ff85852054161561064757509061064491611d3d565b80f35b608490602086519162461bcd60e51b835282015260306024820152600080516020612d2383398151915260448201526f2061646d696e20746f207265766f6b6560801b6064820152fd5b50503461034957816003193601126103495760209051600080516020612c638339815191528152f35b5090346102b3576020908160031936011261089e576106d7611d0c565b90848052848352808520338652835260ff81862054161561084e576001600160a01b03918216808652600284528186205490936001600160601b039390916107259060081c85161515612885565b610736610730611db1565b15612885565b848752600282528287208484519161074d83611c5c565b5461075b60ff821684611df9565b60081c169683820197808952600154421160001461082b57508151906003821015610818575091886107b4876107a6610806958c61079b60079a99611ee7565b949091511693612074565b6107ae612989565b9161223b565b98528689528383526107ce86868b205416896107ae6128f7565b9689528383528489208660018060601b0319981688825416179055600554169687895285858a20541690610800612941565b91612185565b95875252842092169082541617905580f35b634e487b7160e01b8a5260219052602489fd5b97505050906108066007928689528383526107ce86868b205416896107ae6128f7565b5162461bcd60e51b8152808401839052602560248201527f416b656e726f3a3a7265766f6b655472616e6368653a206e6f7420617574686f6044820152641c9a5e995960da1b6064820152608490fd5b8380fd5b508290346103495760c0366003190112610349576108be611d0c565b90602490813591604435926064359360ff8516809503610540578751916108e483611c5c565b600683526006602080940165416b656e726f60d01b81522089519084820190600080516020612ba383398151915282528b830152466060830152608091308382015282815261093281611ca8565b5190208a51600080516020612bc38339815191528682019081526001600160a01b038b8116838f015260608301869052848301879052848352999161097681611ca8565b519020908c51918783019361190160f01b855260228401526042830152604282528382019282841060018060401b03851117610b2557838e5282519020835260a082015260843560c082015260a43560e09091015289805284918a9160015afa15610b1b5787519586168015610ac8578852600b8352888820805491906000198314610ab65760018301905503610a69574211610a185785610644868661247b565b865162461bcd60e51b8152928301526028908201527f416b656e726f3a3a64656c656761746542795369673a207369676e617475726560448201526708195e1c1a5c995960c21b6064820152608490fd5b50865162461bcd60e51b815292830152808201527f416b656e726f3a3a64656c656761746542795369673a20696e76616c6964206e6044820152636f6e636560e01b606482015260849150fd5b634e487b7160e01b8a5260118752858afd5b895162461bcd60e51b81528087018590526028818701527f416b656e726f3a3a64656c656761746542795369673a20696e76616c6964207360448201526769676e617475726560c01b6064820152608490fd5b88513d89823e3d90fd5b634e487b7160e01b8d5260418a52888dfd5b505034610349576020918260031936011261031d576001600160a01b03610b5c611d0c565b168152600a83528181205463ffffffff908116908115610bac5760098552610b8684842092612264565b168252835281902054821c6001600160601b0316905b516001600160601b039091168152f35b505090610b9c565b505034610349578160031936011261034957602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b5090346102b357806003193601126102b357610c09611d0c565b81519260243591610c1985611c8d565b60288552610c646020957f416b656e726f3a3a7472616e736665723a20616d6f756e7420657863656564738782015267203936206269747360c01b86820152600160601b851061215d565b6003546001600160601b03938416939060ff168015610f0d575b15610eb9573315610e74576001600160a01b03918216928315610e1e5733885260028752818689205460081c16610dbe575b5093809596610db79533825260078952808383205416610d718a88610d188751610cd981611c8d565b6038815282600080516020612d03833981519152968786840152777220616d6f756e7420657863656564732062616c616e636560401b8b84015261223b565b93338752600783528787208660018060601b031996168682541617905589875285888820541690885193610d4b85611c8d565b60328552840152717220616d6f756e74206f766572666c6f777360701b88840152612185565b9186845260078b52848420921690825416179055838251868152600080516020612c838339815191528a3392a333815260088852828282205416938152205416906124f6565b5160018152f35b81610dc8336129dc565b16851115610cb057855162461bcd60e51b815290810187905260346024820152600080516020612ce383398151915260448201527375676820756e6c6f636b65642062616c616e636560601b6064820152608490fd5b855162461bcd60e51b8152908101879052603c6024820152600080516020612c2383398151915260448201527b7472616e7366657220746f20746865207a65726f206164647265737360201b6064820152608490fd5b845162461bcd60e51b8152808401879052603e6024820152600080516020612c238339815191526044820152600080516020612c438339815191526064820152608490fd5b845162461bcd60e51b8152808401879052603a6024820152600080516020612b638339815191526044820152796564206f72206e6f742072696768742070726976696c6c65676560301b6064820152608490fd5b50600080516020612b838339815191528752868652848720338852865260ff8588205416610c7e565b50503461034957816003193601126103495751908152602090f35b5050346103495781600319360112610349578051610f8f91610f7282611c5c565b6006825265414b454e524f60d01b60208301525191829182611cc3565b0390f35b505034610349578160031936011261034957602090610fb0611db1565b90519015158152f35b50346102b357816003193601126102b3578160209360ff92610fd9611d27565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b505034610349578160031936011261034957602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b82843461031d57602036600319011261031d575061105d611058611d0c565b611e1b565b82519182526020820152f35b5050346103495760203660031901126103495760209181906001600160a01b03611091611d0c565b168152600b845220549051908152f35b50503461034957816003193601126103495760055490516001600160a01b039091168152602090f35b5050346103495780600319360112610349576020906110f36110ea611d0c565b60243590612290565b90516001600160601b039091168152f35b505034610349576020366003190112610349576020916001600160a01b0361112a611d0c565b168152600783528190205490516001600160601b039091168152f35b5050346103495760203660031901126103495760209163ffffffff9082906001600160a01b03611174611d0c565b168152600a85522054169051908152f35b505034610349576020366003190112610349576020906111ab6111a6611d0c565b6121f5565b9051908152f35b833461031d57602036600319011261031d576106446111cf611d0c565b3361247b565b505034610349576020366003190112610349576020916001600160a01b03908290826111ff611d0c565b168152600885522054169051908152f35b50503461034957816003193601126103495760209060015442119051908152f35b5090346102b357806003193601126102b35761124b611d0c565b9060243590600080516020612c638339815191528552602092858452818620338752845260ff828720541615611453576001600160a01b031693841561141257918161139d600080516020612c838339815191529488969451936112ae85611c8d565b602485527f416b656e726f3a3a6d696e743a20616d6f756e7420657863656564732039362086860152636269747360e01b84860152600160601b946112f59086831061215d565b60018060601b0392838092169561135584549187519061131482611c8d565b602982527f416b656e726f3a3a6d696e743a20746f74616c537570706c79206578636565648b8301526873203936206269747360b81b89830152831061215d565b868387519261136384611c8d565b602384527f416b656e726f3a3a6d696e743a20746f6b656e20737570706c79206f766572668b850152626c6f7760e81b8985015216612185565b169055868652600784526113eb818388205416848451916113bd83611c5c565b601e83527f416b656e726f3a3a6d696e743a2062616c616e6365206f766572666c6f77000088840152612185565b878752600785528287208054919092166001600160601b031990911617905551908152a380f35b83606492519162461bcd60e51b8352820152601f60248201527f63616e6e6f74206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b815162461bcd60e51b8152808601859052601c60248201527b105ad95b9c9bce8e9b5a5b9d0e881b9bdd08185d5d1a1bdc9a5e995960221b6044820152606490fd5b508290346103495782600319360112610349576114b0611d27565b90336001600160a01b038316036114cc57906106449135611d3d565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b50503461034957816003193601126103495760209060ff6003541690519015158152f35b5050346103495781600319360112610349576020905160128152f35b50346102b357816003193601126102b357803591611583611d27565b91838552602090858252600183872001548652828620338752825260ff83872054161561161e57508385528481528185206001600160a01b039093168086529281528185205460ff16156115d5578480f35b83855284815281852083865290528320805460ff1916600117905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8480a4388080808480f35b915162461bcd60e51b815291820152602f6024820152600080516020612d2383398151915260448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608490fd5b50346102b35760203660031901126102b357816020936001923581528085522001549051908152f35b5090346102b35760603660031901126102b3576116a9611d0c565b926116b2611d27565b6001600160a01b0380861680845260066020908152858520338652815285852054919790966001600160601b03928316959194919291826044356117036116f76121ac565b600160601b831061215d565b16968a33141580611a7d575b6119d0575b5060ff6003541680156119a7575b1561195357891561190e5784169485156118b85789845260028952828885205460081c16611853575b5050908786979892610db79793835260078a5280848420541661180f8b896117b6885161177781611c8d565b6038815282600080516020612d03833981519152968786840152777220616d6f756e7420657863656564732062616c616e636560401b8c84015261223b565b93868852600783528888208660018060601b03199616868254161790558a8852858989205416908951936117e985611c8d565b60328552840152717220616d6f756e74206f766572666c6f777360701b89840152612185565b9187855260078c528585209216908254161790558481600080516020612c838339815191528b86518a8152a3815260088852828282205416938152205416906124f6565b61185d83916129dc565b16861161186a578061174b565b865162461bcd60e51b815290810188905260346024820152600080516020612ce383398151915260448201527375676820756e6c6f636b65642062616c616e636560601b6064820152608490fd5b875162461bcd60e51b81528083018a9052603c6024820152600080516020612c2383398151915260448201527b7472616e7366657220746f20746865207a65726f206164647265737360201b6064820152608490fd5b875162461bcd60e51b81528083018a9052603e6024820152600080516020612c238339815191526044820152600080516020612c438339815191526064820152608490fd5b875162461bcd60e51b81528083018a9052603a6024820152600080516020612b638339815191526044820152796564206f72206e6f742072696768742070726976696c6c65676560301b6064820152608490fd5b50600080516020612b838339815191528452838952878420338552895260ff8885205416611722565b611a3490888a51916119e183611c8d565b603f83527f416b656e726f3a3a7472616e7366657246726f6d3a207472616e7366657220618d8401527f6d6f756e742065786365656473207370656e64657220616c6c6f77616e6365008c84015261223b565b8a855260068a5288852033808752908b5289862080546001600160601b03191692861692831790558951918252908b90600080516020612cc3833981519152908c90a338611714565b508381141561170f565b50503461034957816003193601126103495760209051600080516020612b838339815191528152f35b50503461034957816003193601126103495760209051600080516020612ba38339815191528152f35b50346102b357826003193601126102b35760209250549051908152f35b50503461034957816003193601126103495760209051600080516020612ca38339815191528152f35b505034610349578060031936011261034957602091611b3c611d0c565b90826024356000198103611bb057506001600160601b03915b33808252600687528282206001600160a01b0390951680835294875291902080546001600160601b0319166001600160601b039093169283179055835191825290600080516020612cc3833981519152908590a35160018152f35b611bbb6116f76121ac565b6001600160601b031691611b55565b5050346103495781600319360112610349578051610f8f91611beb82611c5c565b6006825265416b656e726f60d01b60208301525191829182611cc3565b925050346102b35760203660031901126102b3573563ffffffff60e01b81168091036102b35760209250637965db0b60e01b8114908115611c4b575b5015158152f35b6301ffc9a760e01b14905038611c44565b604081019081106001600160401b03821117611c7757604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b03821117611c7757604052565b60a081019081106001600160401b03821117611c7757604052565b6020808252825181830181905290939260005b828110611cf857505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611cd6565b600435906001600160a01b0382168203611d2257565b600080fd5b602435906001600160a01b0382168203611d2257565b9060009180835282602052604083209160018060a01b03169182845260205260ff604084205416611d6d57505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b6001547f00000000000000000000000000000000000000000000000000000000000000008101809111611de357421190565b634e487b7160e01b600052601160045260246000fd5b6003821015611e055752565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03166000908152600260205260408120549091906001600160601b039060081c811615611ee2576040832060405190611e5a82611c5c565b5493611e6960ff861683611df9565b82602083019560081c168552611e7d611db1565b15611e925750508080845116935b5116921690565b826001544211600014611eda57508151906003821015611ec657508291611ebb611ec092611ee7565b612074565b93611e8b565b634e487b7160e01b81526021600452602490fd5b915093611e8b565b508190565b6000906000916001544203428111611fd75780926003811015611fc35780611f4457507f00000000000000000000000000000000000000000000000000000000000000009350505081811115611f3f5750805b90915b565b611f3a565b60018103611f7f57507f00000000000000000000000000000000000000000000000000000000000000009350505081811115611f3f57508091565b9194929391600214611f8f575050565b9193507f000000000000000000000000000000000000000000000000000000000000000092505081811115611f3f57508091565b634e487b7160e01b85526021600452602485fd5b634e487b7160e01b84526011600452602484fd5b81810292918115918404141715611de357565b8115612008570490565b634e487b7160e01b600052601260045260246000fd5b6040519061202b82611c8d565b60348252736f756e742065786365656473203936206269747360601b6040837f416b656e726f3a3a5f70726f706f7274696f6e417661696c61626c653a20616d60208201520152565b9180516003811015611e05576002036121305760206120a89101916120a360018060601b039485855116611feb565b611ffe565b918260011b9280840460021490151715611de3576003818161212d9504936120dd6120d161201e565b600160601b871061215d565b51160490604051926120ee84611c8d565b602684527f416b656e726f3a3a5f70726f706f7274696f6e417661696c61626c653a206f766020850152656572666c6f7760d01b604085015216612185565b90565b602001516001600160601b039261214e92916120a391908516611feb565b6121596116f761201e565b1690565b156121655750565b60405162461bcd60e51b81529081906121819060048301611cc3565b0390fd5b6001600160601b039182169082169081019290828411611de35761212d928416101561215d565b604051906121b982611c8d565b60278252663936206269747360c81b6040837f416b656e726f3a3a617070726f76653a20616d6f756e7420657863656564732060208201520152565b6001600160a01b0381166000908152600260205260409020546001600160601b03919060081c82161561222b57612159906129dc565b5060076020526040600020541690565b6001600160601b03929183169190831690612259908284111561215d565b03908111611de35790565b63ffffffff9081166000190191908211611de357565b63ffffffff9182169082160391908211611de357565b438210156124245760018060a01b0316600091818352602091600a835263ffffffff60409281848720541692831561241b57600991828752858820846122d587612264565b16895287528084878a20541611156123f35781885282875285882088805287528084878a205416116123e95761230b8895612264565b905b848616858316116123395750508652845282852091168452825290912054901c6001600160601b031690565b91849896949286612362637fffffff6123586123819c9a87999761227a565b60011c168761227a565b9081848b52858a52888b208782168c528a5289898c208a519d8e611c5c565b549d8e169c8d8152019b60018060601b03809e8c1c168d528481146000146123b457505050505050505050505050511690565b90929496989a9c50839597999b50929092106000146123d7575050945b9061230d565b9096506123e49150612264565b6123d1565b5050505050505090565b508652845261240483862092612264565b168452825290912054901c6001600160601b031690565b50505050505090565b60405162461bcd60e51b815260206004820152602960248201527f416b656e726f3a3a6765745072696f72566f7465733a206e6f74207965742064604482015268195d195c9b5a5b995960ba1b6064820152608490fd5b6001600160a01b03908116600081815260086020818152604080842080546007845291852054939092528686166001600160a01b031982168117909255611f3d966001600160601b03909316959294921692909183917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a45b6001600160a01b038281169391908116908185141580612678575b61251d575b5050505050565b816125d9575b505082612532575b8080612516565b6000928352600a60205260408320546125ca9363ffffffff918216916125c4919083156125d2576009602052604082209061256c85612264565b1682526020908152604090912054901c6001600160601b0316925b6040519061259482611c8d565b60298252600080516020612be38339815191526020830152686f766572666c6f777360b81b604083015284612185565b926126b3565b38808061252b565b5092612587565b6000918252600a602052604082205461266a9263ffffffff918216918215612671576009602052604082209061260e84612264565b1682526020908152604090912054901c6001600160601b0316905b6125c460405161263881611c8d565b602a8152600080516020612be3833981519152602082015269756e646572666c6f777360b01b6040820152868461223b565b3880612523565b5090612629565b506001600160601b0383161515612511565b8054600160201b600160801b03191660209290921b600160201b600160801b0316919091179055565b93929190936040918251906126c782611c8d565b603682526127206020927f416b656e726f3a3a5f7772697465436865636b706f696e743a20626c6f636b2084820152756e756d6265722065786365656473203332206269747360501b86820152600160201b431061215d565b63ffffffff9687431688821680151580612850575b156127a0575050600080516020612d4383398151915295969760018060a01b0385166000526009845261276b8660002092612264565b16600052825261277e868560002061268a565b83516001600160601b0391821681529516908501526001600160a01b031692a2565b90915085988651926127b184611c5c565b83526001600160601b038881168685019081526001600160a01b0388166000818152600989528d812086825289529c8d209551865490851663ffffffff19918216178755915190959194926128089291169061268a565b6001019281841161283c578a8891600080516020612d438339815191529a9b9c52600a87522092169082541617905561277e565b634e487b7160e01b8b52601160045260248bfd5b506001600160a01b0386166000908152600986528790208a61287185612264565b166000528552818a88600020541614612735565b1561288c57565b60405162461bcd60e51b815260206004820152603e60248201527f416b656e726f3a3a7570646174655472616e63686542616c616e63653a20616360448201527f636f756e7420686173206e6f2074696d656c6f636b656420416b656e726f00006064820152608490fd5b6040519061290482611c8d565b60288252676e646572666c6f7760c01b6040837f416b656e726f3a3a7265766f6b655472616e6368653a2062616c616e6365207560208201520152565b6040519061294e82611c8d565b60268252656572666c6f7760d01b6040837f416b656e726f3a7265766f6b655472616e6368653a2062616c616e6365206f7660208201520152565b6040519061299682611c8d565b603182527062616c616e636520756e646572666c6f7760781b6040837f416b656e726f3a3a676574467265656442616c616e63653a206c6f636b65642060208201520152565b6129e4611db1565b15612a0d576001600160a01b03166000908152600760205260409020546001600160601b031690565b6001600160a01b031660008181526002602090815260408083208151939594929390612a3882611c5c565b5490612a4760ff831682611df9565b84810160018060601b03809360081c1681526001544211600014612afe5781516003811015612aea5797612aa3846107a675726565642062616c616e636520756e646572666c6f7760501b9695889561079b61212d9d9e611ee7565b95815260078752205416917f416b656e726f3a3a676574467265656442616c616e63653a20746f74616c2066815195612adb87611c8d565b6036875286015284015261223b565b634e487b7160e01b89526021600452602489fd5b92938291509184886920756e646572666c6f7760b01b9461212d999a5260078852205416925116927f416b656e726f3a3a676574467265656442616c616e63653a2062616c616e6365815195612b5387611c8d565b602a875286015284015261223b56fe416b656e726f546f6b656e3a205472616e7366657273206e6f7420616c6c6f778502233096d909befbda0999bb8ea2f3a6be3c138b9fbf003752a4c8bce86f6c8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866e48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf416b656e726f3a3a5f6d6f7665566f7465733a20766f746520616d6f756e7420416b656e726f3a3a7570646174655472616e63686542616c616e63653a20616d416b656e726f3a3a5f7472616e73666572546f6b656e733a2063616e6e6f74207472616e736665722066726f6d20746865207a65726f206164647265737300009f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efe9e4b2738f1e9267d0154d71b194ef672f39d2af6023224d4ae9de871574b6e08c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925416b656e726f3a3a5f7472616e73666572546f6b656e733a206e6f7420656e6f416b656e726f3a3a5f7472616e73666572546f6b656e733a207472616e736665416363657373436f6e74726f6c3a2073656e646572206d75737420626520616edec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724a2646970667358221220f38bb3e092a4c2706cab90b0e01bb9b360d0a3fdd5f7e86cdcc31156a726789064736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"
   },
   "AkenroDistributor": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_akenro",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_akenroMultisig",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_registry",
                  "type": "address"
               },
               {
                  "internalType": "bytes32",
                  "name": "_merkleRoot",
                  "type": "bytes32"
               },
               {
                  "internalType": "enum IAkenro.InvestorType",
                  "name": "_investorType",
                  "type": "uint8"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               }
            ],
            "name": "Claimed",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "newMultisig",
                  "type": "address"
               }
            ],
            "name": "MultiSigUpdated",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Paused",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Unpaused",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "akenro",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "akenroMultisig",
            "outputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "denominator",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "investorType",
            "outputs": [
               {
                  "internalType": "enum IAkenro.InvestorType",
                  "name": "",
                  "type": "uint8"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "merkleRoot",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "paused",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "registry",
            "outputs": [
               {
                  "internalType": "contract IRegistry",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_tokens",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256[]",
                  "name": "_amounts",
                  "type": "uint256[]"
               }
            ],
            "name": "rescueTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               }
            ],
            "name": "isClaimed",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_newMultisig",
                  "type": "address"
               }
            ],
            "name": "updateMultisig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "index",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes32[]",
                  "name": "merkleProof",
                  "type": "bytes32[]"
               }
            ],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x60c0604090808252346200025d5760a08162001445803803809162000025828562000262565b8339810103126200025d576200003b816200029c565b906020916200004c8383016200029c565b620000598584016200029c565b91608060608501519401519460038610156200025d576001805560025460009182549160ff8360081c16928315938462000251575b15620001f65783620001e4575b506001600160a01b039680881615620001a0576001600160a81b0319909116600891821b610100600160a81b03161760028190558a516396ce079560e01b8152918391839160049183911c8b165afa918215620001965784926200015e575b50506003556200014e575b506080521660018060a01b0319600454161760045560055560a052516111939081620002b2823960805181818161033101526107ee015260a05181818161039901526106bf0152f35b805461ff00191690553862000105565b90809250813d83116200018e575b62000178818362000262565b810103126200018a57513880620000fa565b8280fd5b503d6200016c565b8a513d86823e3d90fd5b8a5162461bcd60e51b815260048101849052601860248201527f496e76616c6964207265676973747279206164647265737300000000000000006044820152606490fd5b61ffff1916610101178455386200009b565b8a5162461bcd60e51b815260048101849052602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b5060ff8116156200008e565b600080fd5b601f909101601f19168101906001600160401b038211908210176200028657604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200025d5756fe60806040526004361015610013575b600080fd5b60003560e01c80632929c25c146101175780632e7ba6ef1461010e5780632eb4a7ab146101055780633bf8d620146100fc5780633f4ba83a146100f35780633f569a3f146100ea5780635c975abb146100e1578063779dada9146100d85780637b103999146100cf5780638456cb59146100c657806396ce0795146100bd5780639e34070f146100b45763bff52b68146100ac57600080fd5b61000e6107d7565b5061000e6107b8565b5061000e610799565b5061000e610713565b5061000e6106e5565b5061000e6106a2565b5061000e610659565b5061000e61062f565b5061000e6105a7565b5061000e610500565b5061000e610446565b5061000e610232565b5061000e610131565b6001600160a01b0381160361000e57565b503461000e57602036600319011261000e576101c560043561015281610120565b600254604051631fe1defb60e11b81527f71840dc4906352362b0cdaf79870196c8e42acafade72d5d5a6d59291253ceb160048201523360248201526101c0916020908290604490829060081c6001600160a01b03165afa9081156101f5575b6000916101c7575b50610862565b61089d565b005b6101e8915060203d81116101ee575b6101e081836104b7565b81019061083d565b386101ba565b503d6101d6565b6101fd610855565b6101b2565b9181601f8401121561000e578235916001600160401b03831161000e576020808501948460051b01011161000e57565b503461000e57608036600319011261000e5760043560243561025381610120565b604435916064356001600160401b03811161000e5761030961027c610304923690600401610202565b6001600160a01b0393919061029433888716146108e9565b6102ac6102a76102a38861081d565b1590565b61093f565b604080516020810188815260608a901b6001600160601b03191692820192909252605481018a90526102ff91906102f081607481015b03601f1981018352826104b7565b5190209260055492369161098b565b6110c0565b6109d9565b61032f828060081c6000526006602052600160ff60406000205492161b17604060002055565b7f000000000000000000000000000000000000000000000000000000000000000016803b1561000e57836103e87f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed02695856104109460405163e17ddf8760e01b8152600081806103c37f0000000000000000000000000000000000000000000000000000000000000000888860048501610a1e565b038183865af1801561042e575b610415575b506004546001600160a01b031690610e6d565b604080519384526001600160a01b039094166020840152928201929092529081906060820190565b0390a1005b806104226104289261047c565b8061043b565b386103d5565b610436610855565b6103d0565b600091031261000e57565b503461000e57600036600319011261000e576020600554604051908152f35b50634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161048f57604052565b610497610465565b604052565b604081019081106001600160401b0382111761048f57604052565b601f909101601f19168101906001600160401b0382119082101761048f57604052565b6020906001600160401b0381116104f3575b60051b0190565b6104fb610465565b6104ec565b503461000e57604036600319011261000e576001600160401b0360043581811161000e57610532903690600401610202565b60249291923591821161000e573660238301121561000e57816004013592610559846104da565b9261056760405194856104b7565b84845260209460248686019160051b8301019136831161000e57602401905b828210610598576101c5868686610b02565b81358152908601908601610586565b503461000e5760008060031936011261062c57600254604051631fe1defb60e11b815260008051602061113e8339815191526004820152336024820152610614916020908290604490829060081c6001600160a01b03165afa90811561061f575b83916101c75750610862565b61061c610dd0565b80f35b610627610855565b610608565b80fd5b503461000e57600036600319011261000e576004546040516001600160a01b039091168152602090f35b503461000e57600036600319011261000e576020610675610a48565b6040519015158152f35b90600382101561068c5752565b634e487b7160e01b600052602160045260246000fd5b503461000e57600036600319011261000e5760206040516106e3817f000000000000000000000000000000000000000000000000000000000000000061067f565bf35b503461000e57600036600319011261000e5760025460405160089190911c6001600160a01b03168152602090f35b503461000e5760008060031936011261062c57600254604051631fe1defb60e11b81527fb3e53bff87a96979079674767cfa1a09f3cf2847ba695cbaae933c232f4bf7f06004820152336024820152610791916020908290604490829060081c6001600160a01b03165afa90811561061f5783916101c75750610862565b61061c610d53565b503461000e57600036600319011261000e576020600354604051908152f35b503461000e57602036600319011261000e57602061067560043561081d565b503461000e57600036600319011261000e576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8060081c6000526006602052600160ff60406000205492161b8091161490565b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b1561086957565b60405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b6044820152606490fd5b600480546001600160a01b0319166001600160a01b0390921691821790556040519081527f7ca1bb3a0b8a33b929834f1be025e2a6c15b7273b9f8efc6978a86d84af395cc90602090a1565b156108f057565b60405162461bcd60e51b815260206004820152602160248201527f43616e277420636c61696d20616e6f746865722075736572277320746f6b656e6044820152607360f81b6064820152608490fd5b1561094657565b60405162461bcd60e51b815260206004820152601d60248201527f416b656e726f3a2044726f7020616c726561647920636c61696d65642e0000006044820152606490fd5b9291610996826104da565b916109a460405193846104b7565b829481845260208094019160051b810192831161000e57905b8282106109ca5750505050565b813581529083019083016109bd565b156109e057565b60405162461bcd60e51b815260206004820152601660248201527520b5b2b739379d1024b73b30b634b210383937b7b31760511b6044820152606490fd5b6001600160a01b0390911681526020810191909152606081019291610a46916040019061067f565b565b600254604051635c975abb60e01b815290602082600481600885901c6001600160a01b03165afa918215610ab2575b600092610a92575b508115610a8a575090565b60ff91501690565b610aab91925060203d81116101ee576101e081836104b7565b9038610a7f565b610aba610855565b610a77565b15610ac657565b60405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606490fd5b610b12610b0d610a48565b610abf565b60018060a01b0360025460081c1691604092835190631fe1defb60e11b8252610b708260049260008051602061113e8339815191528483015233602483015281604460209687935afa908115610cb4575b600091610c9d5750610862565b85518303610c665760005b838110610b8b5750505050505050565b80610b99610bd29289610cfd565b518015610bd7575b610bcd9033610bc8610bbc610bb7868b8d610d1f565b610d37565b6001600160a01b031690565b610e11565b610cc1565b610b7b565b50610bcd610bef610bbc610bbc610bb7858a8c610d1f565b88516370a0823160e01b815230868201908152909187918391908290819060200103915afa908115610c59575b600091610c2c575b509050610ba1565b610c4c9150863d8811610c52575b610c4481836104b7565b810190610d44565b38610c24565b503d610c3a565b610c61610855565b610c1c565b60649185519162461bcd60e51b83528201526013602482015272496e76616c69642061727261792073697a657360681b6044820152fd5b6101e89150843d86116101ee576101e081836104b7565b610cbc610855565b610b63565b6000198114610cd05760010190565b634e487b7160e01b600052601160045260246000fd5b50634e487b7160e01b600052603260045260246000fd5b6020918151811015610d12575b60051b010190565b610d1a610ce6565b610d0a565b9190811015610d2f5760051b0190565b6104fb610ce6565b35610d4181610120565b90565b9081602091031261000e575190565b610d5b610a48565b610d9857600160ff1960025416176002557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a1565b60405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606490fd5b610ddb610b0d610a48565b60ff19600254166002557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a1565b60405163a9059cbb60e01b60208201526001600160a01b039092166024830152604480830193909352918152610a4691608082016001600160401b03811183821017610e60575b604052610f23565b610e68610465565b610e58565b6040516323b872dd60e01b60208201526001600160a01b039283166024820152929091166044830152606480830193909352918152610a469160a082018281106001600160401b03821117610e6057604052610f23565b15610ecb57565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b6040516001600160a01b039190911691610f3c8261049c565b6020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656484840152803b15610fb35760008281928287610f8e9796519301915af1610f88610ff8565b90611045565b80519081610f9b57505050565b82610a4693610fae93830101910161083d565b610ec4565b60405162461bcd60e51b815260048101859052601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b3d15611040573d906001600160401b038211611033575b60405191611027601f8201601f1916602001846104b7565b82523d6000602084013e565b61103b610465565b61100f565b606090565b90919015611051575090565b8151156110615750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106110a7575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350611084565b929091906000915b84518310156111355761110f906110df8487610cfd565b518082116111155760408051602081019384529081019190915261110681606081016102e2565b51902092610cc1565b916110c8565b6040805160208101928352908101929092529061110681606081016102e2565b91509250149056fe55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a2646970667358221220eb8d76c956a79332693ef105deed3f7d46e594bea062ec0fd696521edc98529c64736f6c63430008110033"
   },
   "AkenroRegistry": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_governance",
                  "type": "address"
               },
               {
                  "internalType": "address payable",
                  "name": "_fallbackRecipient",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "_weth",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Paused",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
               }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleGranted",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               }
            ],
            "name": "RoleRevoked",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "Unpaused",
            "type": "event"
         },
         {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "denominator",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "fallbackRecipient",
            "outputs": [
               {
                  "internalType": "address payable",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               }
            ],
            "name": "getRoleAdmin",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "hasRole",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
               }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "strategistNames",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
               }
            ],
            "name": "supportsInterface",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "tokenMinting",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "weth",
            "outputs": [
               {
                  "internalType": "contract IWETH",
                  "name": "",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "_role",
                  "type": "bytes32"
               },
               {
                  "internalType": "address",
                  "name": "_account",
                  "type": "address"
               }
            ],
            "name": "authorized",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_strategist",
                  "type": "address"
               },
               {
                  "internalType": "string",
                  "name": "_name",
                  "type": "string"
               }
            ],
            "name": "addStrategist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "enableTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "disableTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "paused",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_tokens",
                  "type": "address[]"
               }
            ],
            "name": "tokensDeclaredDead",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "_tranches",
                  "type": "uint256"
               }
            ],
            "name": "recycleDeadTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address payable",
                  "name": "_target",
                  "type": "address"
               }
            ],
            "name": "setFallbackRecipient",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x60a034620002bb57601f6200135b38819003918201601f191683019291906001600160401b03841183851017620002c0578160609284926040968752833981010312620002bb576200005181620002d6565b6020828101516001600160a01b03939192848216929091839003620002bb57856200007d9101620002d6565b9282151580620002b0575b156200027b5760009182805282825285878420911690818452825260ff87842054161562000243575b7f71840dc4906352362b0cdaf79870196c8e42acafade72d5d5a6d59291253ceb190818452838352878420818552835260ff8885205416156200020a575b5050817f31e0210044b4f6757ce6aa31f9c6e8d4896d24a755014887391a926c5224d9599182825252857ffc425f2263d0df187444b70e47283d622c70181c5baebb1306a01edba1ce184c9283600193818585852001547fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff92838680a481858585200155817ff0983e2b51e2b2ff224c42b1eabc9a0c5025d7bfb63557cd50ce5287048e680880855286868620015490838680a4818585852001557f928286c473ded01ff8bf61a1986f14a0579066072fa8261442d9fea514d93a4c808452858585200154918480a4200155600480546001600160a01b031916919091179055166080525161104f9081620002ec8239608051816109bd0152f35b8184528383528784208185528352878420805460ff1916600117905533916000805160206200133b8339815191528580a43880620000ef565b8280528282528683208184528252868320805460ff191660011790553381846000805160206200133b8339815191528180a4620000b1565b60649086519062461bcd60e51b82526004820152600f60248201526e496e76616c6964206164647265737360881b6044820152fd5b503083141562000088565b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620002bb5756fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610c9757508163248a9ca314610c6d5781632b92490e14610c055781632bfa450414610bde5781632f2ff15d14610af157816336568abe14610a5f5781633f4ba83a146109ec5781633fc3bdf61461076b5781633fc8cef3146109a8578163452f3ce0146109805781635c975abb1461095c578163772dbac714610885578163843edaf9146108385781638456cb59146107b157816391d148541461076b57816396ce07951461074e578163a217fddf14610733578163a6243e89146105fd578163bd0be669146103b1578163d1cf038a14610205578163d547741f1461016a575063e7c42b921461011757600080fd5b3461016657816003193601126101665760ff61015491600080516020610fba83398151915284528360205280842033855260205283205416610dc9565b61010061ff0019600154161760015580f35b5080fd5b839150346101665782600319360112610166578035610187610cea565b918184528360205260018585200154845284842033855260205260ff8585205416156101bb5750906101b891610d55565b80f35b608490602086519162461bcd60e51b835282015260306024820152600080516020610ffa83398151915260448201526f2061646d696e20746f207265766f6b6560801b6064820152fd5b919050346103ad57602091826003193601126103a95780357f31e0210044b4f6757ce6aa31f9c6e8d4896d24a755014887391a926c5224d9598552848452828520338652845261025a60ff8487205416610dc9565b600280549091908181106103a257505b805b610274578580f35b81546000199081810181811161038f57808211156103415781111561032e578388528688200181015484546001600160a01b03908116929116803b1561032a5786519262f55d9d60e01b8452868401526024928981858183865af1610300575b506102de90610ec2565b5082019182116102ef57508061026c565b634e487b7160e01b87526011845286fd5b6001600160401b0381116103185787526102de6102d4565b634e487b7160e01b8a5260418752838afd5b8880fd5b634e487b7160e01b885260328552602488fd5b865162461bcd60e51b8152808701899052602260248201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e604482015261647360f01b6064820152608490fd5b634e487b7160e01b895260118652602489fd5b905061026a565b8380fd5b8280fd5b9050346103ad57816003193601126103ad576103cb610d05565b60248035936001600160401b0392908386116105f957366023870112156105f957858501359384116105f957368385880101116105f9577f17a8e30262c1f919c33056d877a3c22b95c2f5e4dac44683c1c2323cd79fbdb080885260209288845260019687848b2001548a52838a20338b52855260ff848b205416156105b157508189528884528289206001600160a01b03909116808a529084528289205460ff161561057b575b5050600582528620946104868654610d1b565b601f8111610535575b508691601f85116001146104cd575091839491849388956104c0575b5050501b916000199060031b1c191617905580f35b01013592503880806104ab565b92909184601f198116888a52858a20958a905b8983831061051957505050106104fd575b50505050811b01905580f35b60001960f88660031b161c1992010135169055388080806104f1565b87860187013589559097019693840193889350908101906104e0565b868852828820601f860160051c810191848710610571575b601f0160051c019086905b82811061056657505061048f565b898155018690610558565b909150819061054d565b818952888452828920818a528452828920805460ff1916881790553391600080516020610f9a8339815191528a80a43880610473565b835162461bcd60e51b8152908101859052602f81870152600080516020610ffa83398151915260448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608490fd5b8680fd5b8284346107305760209081600319360112610730576001600160a01b03610622610d05565b168152600582528281209083519283928290805461063f81610d1b565b918287526001918583821691826000146107125750506001146106dd575b505050601f801995869203011683019583871060018060401b038811176106ca575085929391838652818452845191828186015281955b8387106106b25750508394508582601f949501015201168101030190f35b86810182015189880189015295810195889550610694565b634e487b7160e01b835260419052602482fd5b85528385208593505b8284106106fc575050508301810187808061065d565b80548885018601528796509284019281016106e6565b93509450505060ff191682860152151560051b84010187808061065d565b80fd5b50503461016657816003193601126101665751908152602090f35b505034610166578160031936011261016657602090516127108152f35b9050346103ad57816003193601126103ad578160209360ff9261078c610cea565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b50503461016657816003193601126101665760207f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258917fb3e53bff87a96979079674767cfa1a09f3cf2847ba695cbaae933c232f4bf7f08452838252808420338552825261082460ff8286205416610dc9565b600160ff198154161760015551338152a180f35b50503461016657816003193601126101665760ff61087791600080516020610fba83398151915284528360205280842033855260205283205416610dc9565b61ff00196001541660015580f35b9050346103ad5760203660031901126103ad576001600160401b039080358281116109585736602382011215610958578082013592831161095857602493600590368686841b850101116105f95760ff61090091600080516020610fda833981519152895288602052808920338a5260205288205416610dc9565b855b84811061090d578680f35b80821b83018601356001600160a01b038116908190036109545761093090610e43565b50600019811461094257600101610902565b634e487b7160e01b8752601184528587fd5b8780fd5b8480fd5b50503461016657816003193601126101665760209060ff6001541690519015158152f35b9050346103ad57826003193601126103ad575490516001600160a01b03909116815260209150f35b505034610166578160031936011261016657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461016657816003193601126101665760207f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa91600080516020610fda83398151915284528382528084203385528252610a4d60ff8286205416610dc9565b60ff196001541660015551338152a180f35b83915034610166578260031936011261016657610a7a610cea565b90336001600160a01b03831603610a9657906101b89135610d55565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b9050346103ad57816003193601126103ad57803591610b0e610cea565b91838552602090858252600183872001548652828620338752825260ff838720541615610b9757508385528481528185206001600160a01b039093168086529281528185205460ff1615610b60578480f35b83855284815281852083865290528320805460ff191660011790553391600080516020610f9a8339815191528480a4388080808480f35b915162461bcd60e51b815291820152602f6024820152600080516020610ffa83398151915260448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608490fd5b50503461016657816003193601126101665760209060ff60015460081c1690519015158152f35b919050346103ad5760203660031901126103ad5781356001600160a01b03811691908290036103a95760ff610c5b91600080516020610fba83398151915286528560205280862033875260205285205416610dc9565b81546001600160a01b03191617905580f35b9050346103ad5760203660031901126103ad57816020936001923581528085522001549051908152f35b8491346103ad5760203660031901126103ad573563ffffffff60e01b81168091036103ad5760209250637965db0b60e01b8114908115610cd9575b5015158152f35b6301ffc9a760e01b14905083610cd2565b602435906001600160a01b0382168203610d0057565b600080fd5b600435906001600160a01b0382168203610d0057565b90600182811c92168015610d4b575b6020831014610d3557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d2a565b9060009180835282602052604083209160018060a01b03169182845260205260ff604084205416610d8557505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b15610dd057565b60405162461bcd60e51b815260206004820152601a602482015279556e617574686f72697a65643a20496e76616c696420726f6c6560301b6044820152606490fd5b600254811015610e2d57600260005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b600081815260036020526040812054610ebd57600254600160401b811015610ea9579082610e95610e7c84600160409601600255610e12565b819391549060031b600019811b9283911b169119161790565b905560025492815260036020522055600190565b634e487b7160e01b82526041600452602482fd5b905090565b6000818152600360205260408120549091908015610f945760001990808201818111610f8057600254838101908111610f6c5790610f14610f05610e7c93610e12565b90549060031b1c928392610e12565b90558452600360205260408420556002548015610f5857810190610f3782610e12565b909182549160031b1b19169055600255815260036020526040812055600190565b634e487b7160e01b84526031600452602484fd5b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b85526011600452602485fd5b50509056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d71840dc4906352362b0cdaf79870196c8e42acafade72d5d5a6d59291253ceb155435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041416363657373436f6e74726f6c3a2073656e646572206d75737420626520616ea264697066735822122087406bc1e0876efbd5dc7e9b5bb1ae8e3d95dc68e4e0b2e23c436fc0bfd2ebb064736f6c634300081100332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d"
   },
   "GnosisSafeProxy": {
      "abi": [
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "_singleton",
                  "type": "address"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "stateMutability": "payable",
            "type": "fallback"
         }
      ],
      "bytecode": "0x6080346100c957601f61015e38819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051607990816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600080546001600160a01b031690803563530ca43760e11b14603c57808092368280378136915af43d82803e156038573d90f35b3d90fd5b6020918152f3fea264697066735822122037658e6d085bb4b5a8b2dcc9fd054f70adb15218d97517f88f2fa53f8dfc48de64736f6c63430008110033"
   },
   "GnosisSafe": {
      "abi": [
         {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               }
            ],
            "name": "AddedOwner",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "approvedHash",
                  "type": "bytes32"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               }
            ],
            "name": "ApproveHash",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "handler",
                  "type": "address"
               }
            ],
            "name": "ChangedFallbackHandler",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "guard",
                  "type": "address"
               }
            ],
            "name": "ChangedGuard",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "threshold",
                  "type": "uint256"
               }
            ],
            "name": "ChangedThreshold",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "DisabledModule",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "EnabledModule",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "txHash",
                  "type": "bytes32"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
               }
            ],
            "name": "ExecutionFailure",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "ExecutionFromModuleFailure",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "ExecutionFromModuleSuccess",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "txHash",
                  "type": "bytes32"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
               }
            ],
            "name": "ExecutionSuccess",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               }
            ],
            "name": "RemovedOwner",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               }
            ],
            "name": "SafeReceived",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "initiator",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "address[]",
                  "name": "owners",
                  "type": "address[]"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "threshold",
                  "type": "uint256"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "initializer",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "address",
                  "name": "fallbackHandler",
                  "type": "address"
               }
            ],
            "name": "SafeSetup",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "msgHash",
                  "type": "bytes32"
               }
            ],
            "name": "SignMsg",
            "type": "event"
         },
         {
            "stateMutability": "nonpayable",
            "type": "fallback"
         },
         {
            "inputs": [],
            "name": "VERSION",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_threshold",
                  "type": "uint256"
               }
            ],
            "name": "addOwnerWithThreshold",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               },
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "name": "approvedHashes",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "_threshold",
                  "type": "uint256"
               }
            ],
            "name": "changeThreshold",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "prevModule",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "disableModule",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "enableModule",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               }
            ],
            "name": "execTransactionFromModule",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               }
            ],
            "name": "execTransactionFromModuleReturnData",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               },
               {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "start",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "pageSize",
                  "type": "uint256"
               }
            ],
            "name": "getModulesPaginated",
            "outputs": [
               {
                  "internalType": "address[]",
                  "name": "array",
                  "type": "address[]"
               },
               {
                  "internalType": "address",
                  "name": "next",
                  "type": "address"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getOwners",
            "outputs": [
               {
                  "internalType": "address[]",
                  "name": "",
                  "type": "address[]"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "offset",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
               }
            ],
            "name": "getStorageAt",
            "outputs": [
               {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getThreshold",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "module",
                  "type": "address"
               }
            ],
            "name": "isModuleEnabled",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               }
            ],
            "name": "isOwner",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "nonce",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "prevOwner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_threshold",
                  "type": "uint256"
               }
            ],
            "name": "removeOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "handler",
                  "type": "address"
               }
            ],
            "name": "setFallbackHandler",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "guard",
                  "type": "address"
               }
            ],
            "name": "setGuard",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "name": "signedMessages",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "targetContract",
                  "type": "address"
               },
               {
                  "internalType": "bytes",
                  "name": "calldataPayload",
                  "type": "bytes"
               }
            ],
            "name": "simulateAndRevert",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "prevOwner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "oldOwner",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
               }
            ],
            "name": "swapOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "stateMutability": "payable",
            "type": "receive"
         },
         {
            "inputs": [
               {
                  "internalType": "address[]",
                  "name": "_owners",
                  "type": "address[]"
               },
               {
                  "internalType": "uint256",
                  "name": "_threshold",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "address",
                  "name": "fallbackHandler",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "paymentToken",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
               },
               {
                  "internalType": "address payable",
                  "name": "paymentReceiver",
                  "type": "address"
               }
            ],
            "name": "setup",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               },
               {
                  "internalType": "uint256",
                  "name": "safeTxGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "baseGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "gasPrice",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "gasToken",
                  "type": "address"
               },
               {
                  "internalType": "address payable",
                  "name": "refundReceiver",
                  "type": "address"
               },
               {
                  "internalType": "bytes",
                  "name": "signatures",
                  "type": "bytes"
               }
            ],
            "name": "execTransaction",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
               }
            ],
            "stateMutability": "payable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "dataHash",
                  "type": "bytes32"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "bytes",
                  "name": "signatures",
                  "type": "bytes"
               }
            ],
            "name": "checkSignatures",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "dataHash",
                  "type": "bytes32"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "bytes",
                  "name": "signatures",
                  "type": "bytes"
               },
               {
                  "internalType": "uint256",
                  "name": "requiredSignatures",
                  "type": "uint256"
               }
            ],
            "name": "checkNSignatures",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               }
            ],
            "name": "requiredTxGas",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "bytes32",
                  "name": "hashToApprove",
                  "type": "bytes32"
               }
            ],
            "name": "approveHash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "getChainId",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "domainSeparator",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               },
               {
                  "internalType": "uint256",
                  "name": "safeTxGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "baseGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "gasPrice",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "gasToken",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "refundReceiver",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_nonce",
                  "type": "uint256"
               }
            ],
            "name": "encodeTransactionData",
            "outputs": [
               {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
               },
               {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
               },
               {
                  "internalType": "enum Enum.Operation",
                  "name": "operation",
                  "type": "uint8"
               },
               {
                  "internalType": "uint256",
                  "name": "safeTxGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "baseGas",
                  "type": "uint256"
               },
               {
                  "internalType": "uint256",
                  "name": "gasPrice",
                  "type": "uint256"
               },
               {
                  "internalType": "address",
                  "name": "gasToken",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "refundReceiver",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "_nonce",
                  "type": "uint256"
               }
            ],
            "name": "getTransactionHash",
            "outputs": [
               {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         }
      ],
      "bytecode": "0x6080806040523461001b576001600455612a3390816100218239f35b600080fdfe60806040526004361015610030575b361561002857346100235761002161229f565b005b600080fd5b6100216127cd565b60003560e01c80630d582f131461029c57806312fb68e0146102935780632d9ad53d1461028a5780632f54bf6e146102815780633408e47014610278578063468721a71461026f5780635229073f146102665780635624b25b1461025d5780635ae6bd3714610254578063610b59251461024b578063694e80c3146102425780636a761202146102395780637d83297414610230578063934f3a1114610227578063a0e67e2b1461021e578063affed0e014610215578063b4faba091461020c578063b63e800d14610203578063c4ca3a9c146101fa578063cc2f8452146101f1578063d4d9bdcd146101e8578063d8d11f78146101df578063e009cfde146101d6578063e19a9dd9146101cd578063e318b52b146101c4578063e75235b8146101bb578063e86637db146101b2578063f08a0323146101a9578063f698da25146101a0578063f8dc5dd9146101975763ffa1ad740361000e57610192611438565b61000e565b5061019261138a565b50610192611366565b506101926112f8565b506101926112cf565b506101926112b0565b506101926111a1565b50610192611133565b50610192611039565b50610192611005565b50610192610edd565b50610192610e16565b50610192610d38565b50610192610ca0565b50610192610c40565b50610192610c21565b50610192610b8e565b50610192610afb565b50610192610aaf565b506101926109a3565b50610192610912565b50610192610860565b50610192610833565b50610192610799565b5061019261073c565b506101926106d5565b5061019261065f565b506101926105f7565b50610192610599565b50610192610540565b506101926102ec565b6001600160a01b0381160361002357565b60e435906102c3826102a5565b565b604435906102c3826102a5565b608435906102c3826102a5565b60a435906102c3826102a5565b50346100235760403660031901126100235760043561030a816102a5565b60008051602061291e8339815191526103e7602435926103286127fb565b61034b6001600160a01b0382168015159081610409575b816103fe575b506125e3565b61037461036e61036261035d84610a45565b611e46565b6001600160a01b031690565b15612617565b600160005260026020526103a661039860008051602061299e833981519152611e46565b6103a183610a45565b6122df565b600160005260026020526103c88160008051602061299e8339815191526122df565b6103db6103d6600354611628565b600355565b6040519182918261228c565b0390a180600454036103f557005b6100219061278b565b905030141538610345565b6001811415915061033f565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161043f57604052565b610447610415565b604052565b604081019081106001600160401b0382111761043f57604052565b608081019081106001600160401b0382111761043f57604052565b61018081019081106001600160401b0382111761043f57604052565b601f909101601f19168101906001600160401b0382119082101761043f57604052565b6020906001600160401b0381116104de575b601f01601f19160190565b6104e6610415565b6104d3565b9291926104f7826104c1565b91610505604051938461049e565b829481845281830111610023578281602093846000960137010152565b9080601f830112156100235781602061053d933591016104eb565b90565b5034610023576080366003190112610023576001600160401b0360243581811161002357610572903690600401610522565b6044359182116100235761058d610021923690600401610522565b60643591600435611e87565b50346100235760203660031901126100235760206004356105b9816102a5565b6001600160a01b0390811660018114159190826105dd575b50506040519015158152f35b9091506000526001825260406000205416151538806105d1565b5034610023576020366003190112610023576020600435610617816102a5565b6001600160a01b03908116600181141591908261063a5750506040519015158152f35b9091506000526002825260406000205416151538806105d1565b600091031261002357565b5034610023576000366003190112610023576020604051468152f35b60643590600282101561002357565b6080600319820112610023576004356106a2816102a5565b9160243591604435906001600160401b038211610023576106c591600401610522565b9060643560028110156100235790565b50346100235760206106f26106e93661068a565b92919091612427565b6040519015158152f35b919082519283825260005b848110610728575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610707565b50346100235761074e6106e93661068a565b6040519060203d8301016040523d82523d6000602084013e610784604051928392151583526040602084015260408301906106fc565b0390f35b90602061053d9281815201906106fc565b503461002357604036600319011261002357600435602435600581811b92602090838504821484151715610826575b6107d1856104c1565b946107df604051968761049e565b8086526107ee601f19916104c1565b01368387013760005b84811061080c57604051806107848882610788565b80610821918301548482871b89010152611628565b6107f7565b61082e611611565b6107c8565b50346100235760203660031901126100235760043560005260076020526020604060002054604051908152f35b5034610023576020366003190112610023577fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f84406109026004356108a2816102a5565b6108aa6127fb565b6108df6001600160a01b0382811680151580610907575b6108ca906123bf565b600052600160205260406000205416156123f3565b6108f66108ed61035d610a5f565b6103a183610a7b565b6103db816103a1610a5f565b0390a1005b5060018114156108c1565b50346100235760203660031901126100235760008051602061295e83398151915260206004356109406127fb565b61094e60035482111561257b565b61095b60018210156125af565b80600455604051908152a1005b9181601f84011215610023578235916001600160401b038311610023576020838186019501011161002357565b61010435906102c3826102a5565b50610140366003190112610023576004356109bd816102a5565b6001600160401b03604435818111610023576109dd903690600401610968565b906109e661067b565b9160e435906109f4826102a5565b6109fc610995565b92610124359586116100235761078496610a1d610a33973690600401610522565b9560c4359360a43593608435936024359061180d565b60405190151581529081906020820190565b6001600160a01b0316600090815260026020526040902090565b6001600081905260205260008051602061293e83398151915290565b6001600160a01b0316600090815260016020526040902090565b6001600160a01b0316600090815260086020526040902090565b503461002357604036600319011261002357600435610acd816102a5565b60018060a01b0316600052600860205260406000206024356000526020526020604060002054604051908152f35b5034610023576060366003190112610023576001600160401b0360243581811161002357610b2d903690600401610522565b60443591821161002357610b48610021923690600401610522565b90600435611c56565b90815180825260208080930193019160005b828110610b71575050505090565b83516001600160a01b031685529381019392810192600101610b63565b503461002357600080600319360112610c1e57610bac6003546124eb565b9080600191828252600260209281845260018060a01b039160409386848685205416905b610be7575b855187815280610784818a018c610b51565b8416878114610c195790818892610bfe838c61251d565b528452828752610c1385878620541691611628565b91610bd0565b610bd5565b80fd5b5034610023576000366003190112610023576020600554604051908152f35b503461002357604036600319011261002357600435610c5e816102a5565b6024356001600160401b03811161002357600091610c8183923690600401610522565b90602082519201905af46000523d6020523d600060403e60403d016000fd5b503461002357610100366003190112610023576001600160401b036004358181116100235736602382011215610023578060040135828111610023573660248260051b8401011161002357610cf36102c5565b60643593841161002357610d0e610021943690600401610968565b610d166102d2565b91610d1f6102df565b93610d286102b6565b9660c43596602480359201611513565b503461002357608036600319011261002357600435610d56816102a5565b6044356001600160401b03811161002357610d78610d9b913690600401610968565b9092610d8261067b565b90610d915a955a9436916104eb565b906024359061225c565b1561002357610ddd905a8103908111610de1575b60405190602082015260208152610dc58161044c565b60405162461bcd60e51b815291829160048301610788565b0390fd5b610de9611611565b610daf565b90610e06602091949394604084526040840190610b51565b6001600160a01b03909416910152565b503461002357604036600319011261002357600435610e34816102a5565b60243590610e41826124eb565b9060009060018060a01b03809116825260019384918260205280604085205416955b610e7c575b505050815261078460405192839283610dee565b9091929481811680151580610ed3575b80610eca575b15610ec257610eb461035d869493610eba93610eae8b8b61251d565b52610a7b565b96611628565b939291610e63565b509492610e68565b50838710610e92565b5084811415610e8c565b50346100235760203660031901126100235733600090815260026020526040812054600435906001600160a01b031615610f5f57610f36610f3082610f2133610a95565b90600052602052604060002090565b60019055565b33907ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c8380a380f35b60405162461bcd60e51b8152602060048201526005602482015264047533033360dc1b6044820152606490fd5b61014060031982011261002357600435610fa5816102a5565b9160243591604435906001600160401b03821161002357610fc891600401610968565b9091606435600281101561002357906084359060a4359060c4359060e435610fef816102a5565b9061010435610ffd816102a5565b906101243590565b503461002357602061102b61101936610f8c565b9998909897919796929695939561217c565b818151910120604051908152f35b503461002357604036600319011261002357600435611057816102a5565b60243590611064826102a5565b61106c6127fb565b6001600160a01b038281169081151580611128575b61108a906123bf565b808316600052600160205260406000205416036110fb57816110df610902926103a16110d961035d7faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427697610a7b565b91610a7b565b6103db6110eb82610a7b565b80546001600160a01b0319169055565b60405162461bcd60e51b8152602060048201526005602482015264475331303360d81b6044820152606490fd5b506001821415611081565b5034610023576020366003190112610023577f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa26020600435611174816102a5565b61117c6127fb565b6000805160206129be8339815191528190556040516001600160a01b039091168152a1005b50346100235760603660031901126100235760008051602061291e8339815191526109026103a160008051602061297e8339815191526112966004356111e6816102a5565b61128a602435916111f6836102a5565b604435958691611205836102a5565b61120d6127fb565b61126d6001600160a01b03611232858216801515908161040957816103fe57506125e3565b61124461036e61036261035d88610a45565b8616801515806112a5575b611258906125e3565b61126761036261035d85610a45565b1461273c565b61128561127c61035d87610a45565b6103a185610a45565b610a45565b6103db6110eb82610a45565b0390a16040519182918261228c565b50600181141561124f565b5034610023576000366003190112610023576020600454604051908152f35b5034610023576107846112e461101936610f8c565b6040519182916020835260208301906106fc565b5034610023576020366003190112610023577f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b06020600435611339816102a5565b6113416127fb565b6000805160206129de8339815191528190556040516001600160a01b039091168152a1005b5034610023576000366003190112610023576020611382612132565b604051908152f35b5034610023576060366003190112610023576004356113a8816102a5565b60008051602061297e8339815191526103e76024356113c6816102a5565b61141e604435946113d56127fb565b6113eb866113e46003546117ba565b101561257b565b6114096001600160a01b038416801515806112a557611258906125e3565b6103a161141861035d85610a45565b91610a45565b61142a6110eb82610a45565b6103db6103d6600354612770565b5034610023576000366003190112610023576107846040516114598161044c565b60058152640312e332e360dc1b60208201526040519182916020835260208301906106fc565b6020906001600160401b038111611498575b60051b0190565b6114a0610415565b611491565b93929594918060808601608087525260a08501919060005b8181106114e85750505060208401959095526001600160a01b03918216604084015216606090910152565b90919260019084356114f9816102a5565b828060a01b031681526020809101940191019190916114bd565b9892949793909691976115258861147f565b611532604051918261049e565b88815260208082018a60051b8d0190368211610023578d905b8282106115f857505050506115a96115c69795938b9a999795936115937f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a89d6115af9561264b565b6001600160a01b0389166115dd575b36916104eb565b856122fe565b826115cb575b5050506040519485943398866114a5565b0390a2565b6115d492611b09565b503880806115b5565b6115f3896000805160206129de83398151915255565b6115a2565b8380918335611606816102a5565b81520191019061154b565b50634e487b7160e01b600052601160045260246000fd5b6001906000198114611638570190565b611640611611565b0190565b9060028210156116515752565b634e487b7160e01b600052602160045260246000fd5b9c9b9992959760c08e6102c39d9961170a9b6116cb6116f8996101409f97986116e79960018060a01b03168652602086015280610160806040880152860152806101809d8e87013760008582018e0152601f01601f191684019a6060850190611644565b608083015260a082015201526001600160a01b031660e08d0152565b6001600160a01b03166101008b0152565b81898203016101208a015201906106fc565b6001600160a01b03909216940193909352565b506040513d6000823e3d90fd5b908160061b918083046040149015171561174057565b6102c3611611565b8115611752570490565b634e487b7160e01b600052601260045260246000fd5b906109c4820180921161174057565b906101f4820180921161174057565b1561178d57565b60405162461bcd60e51b8152602060048201526005602482015264047533031360dc1b6044820152606490fd5b60001981019190821161174057565b6109c31981019190821161174057565b156117e057565b60405162461bcd60e51b8152602060048201526005602482015264475330313360d81b6044820152606490fd5b838a899583859f9e9d9995968b978f9d9e8b9f839e8a839e600554988997600160a01b60019003809c16976118419a61217c565b9061184b90611628565b600555805160208201209c611860918e611c56565b6000805160206129be8339815191525416998a1515998a611a1d575b50906118e5916118ed936118be5a6118b76118b26118a361189c8b61172a565b603f900490565b6118ac8b611768565b9061290c565b611777565b1115611786565b5a9f6118df89159c8d600014611a16576118d75a6117c9565b9536916104eb565b9161225c565b9b5a906128b9565b908b908c15611a0c575b508015611a04575b611908906117d9565b600095156119f0575b5050505050856000146119b9576040805185815260208101929092527f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e91a15b611959575050565b803b1561002357604051631264e26d60e31b8152600481019290925283151560248301526000908290604490829084905af180156119ac575b6119995750565b806119a66102c39261042c565b80610654565b6119b461171d565b611992565b6040805185815260208101929092527f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d2391a1611951565b6119fa9550611bea565b3880808080611911565b5085156118ff565b90501515386118f7565b88956115a2565b91908b3b1561002357838f6000848f8e838f958f8f9c8f9c8f996118ed9f936118e59f94611a67958f9d6040519e8f9d8e9c8d9b8c9a633af85da960e11b8c526004339c01611667565b03925af18015611a94575b611a81575b509350909161187c565b806119a6611a8e9261042c565b38611a77565b611a9c61171d565b611a72565b15611aa857565b60405162461bcd60e51b815260206004820152600560248201526423a998189960d91b6044820152606490fd5b15611adc57565b60405162461bcd60e51b8152602060048201526005602482015264475330313160d81b6044820152606490fd5b9092916001600160a01b0390818116611be4575032935b808216611b6c5750600080808093611b476102c3963a6001108414611b6557600190612895565b97889183918315611b5b575b1690f1611ad5565b6108fc9250611b53565b3a90612895565b611b7760209361286b565b9460008093604051908682019363a9059cbb60e01b855216602482015287604482015260448152611ba781610467565b519261270f195a01f13d8015611bda57602014611bc957506102c36000611aa1565b6102c3906000511590151715611aa1565b506102c390611aa1565b93611b20565b92949390926001600160a01b039291838116611c50575032955b808416611c3b575060008093611b478294611c236102c39885966128f8565b903a81108514611c335790612895565b503a90612895565b91611c4b602095611b77936128f8565b612895565b95611c04565b91600454918215611c6a576102c393611e87565b60405162461bcd60e51b8152602060048201526005602482015264475330303160d81b6044820152606490fd5b15611c9e57565b60405162461bcd60e51b8152602060048201526005602482015264047533032360dc1b6044820152606490fd5b9094939260ff6060936080840197845216602083015260408201520152565b60ff6003199116019060ff821161174057565b15611d0457565b60405162461bcd60e51b8152602060048201526005602482015264475330323560d81b6044820152606490fd5b15611d3857565b60405162461bcd60e51b8152602060048201526005602482015264475330323160d81b6044820152606490fd5b15611d6c57565b60405162461bcd60e51b815260206004820152600560248201526423a998191960d91b6044820152606490fd5b15611da057565b60405162461bcd60e51b8152602060048201526005602482015264475330323360d81b6044820152606490fd5b9081602091031261002357516001600160e01b0319811681036100235790565b9091611e0461053d936040845260408401906106fc565b9160208184039101526106fc565b15611e1957565b60405162461bcd60e51b815260206004820152600560248201526411d4cc0c8d60da1b6044820152606490fd5b546001600160a01b031690565b15611e5a57565b60405162461bcd60e51b815260206004820152600560248201526423a998191b60d91b6044820152606490fd5b929190611e9f8251611e9885612831565b1115611c97565b600091825b848410611eb357505050505050565b611fc1908684611ed98786906041020160208101519060ff604160408301519201511692565b93909160ff81169081612026575050506001600160a01b031692611fbb929091611f9691611f11611f098c612831565b821015611d31565b611f26611f1d826128d5565b89511015611d65565b611f6f8882611f53611f4a602080968195010192611f458451916128d5565b6128f8565b8c511015611d99565b604051809381926320c13b0b60e01b9788845260048401611ded565b03818a5afa918215612019575b600092611fec575b50506001600160e01b03191614611e12565b6001600160a01b039081168382169081119182611fd3575b5081611fc7575b50611e53565b93611628565b92611ea4565b60019150141538611fb5565b909150611fe261035d85610a45565b1615159038611fae565b61200b9250803d10612012575b612003818361049e565b810190611dcd565b3880611f84565b503d611ff9565b61202161171d565b611f7c565b929350909160019182810361207a5750505050611fbb915060018060a01b031691823314801561205f575b61205a90611cfd565b611f96565b5061205a6120708a610f2186610a95565b5415159050612051565b92939192601e101561211b576120f5600094956040936120ea8551986020996120e1816120d38d82019485603c917b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b8252601c8201520190565b03601f19810183528261049e565b51902094611cea565b945194859485611ccb565b84805203915afa1561210e575b611fbb60005191611f96565b61211661171d565b612102565b90926120f560209560009560405194859485611ccb565b60405160208101907f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921882524660408201523060608201526060815261217681610467565b51902090565b94909895917fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d89a98946121b76121ec9260409a9636916104eb565b6020815191012089519b60208d019d8e528c60018060a01b039b8c809b1691015260608d015260808c015260a08b0190611644565b60c089015260e088015261010087015216610120850152166101408301526101609081830152815261221d81610482565b51902061053d61222b612132565b604051601960f81b6020820152600160f81b60218201526022810191909152604281019290925281606281016120d3565b9390936002841015611651576000948594600103612280575060208351930191f490565b9060208451940192f190565b6001600160a01b03909116815260200190565b506000805160206129de833981519152548015610021576000808092368280373360601b3652818060143601925af13d82803e156122db573d90f35b3d90fd5b80546001600160a01b0319166001600160a01b03909216919091179055565b6001600081905260205260008051602061293e833981519152546001600160a01b0390811661239257612345612332610a5f565b80546001600160a01b0319166001179055565b811661234f575050565b60009182915a9060208351930191f41561236557565b60405162461bcd60e51b8152602060048201526005602482015264047533030360dc1b6044820152606490fd5b60405162461bcd60e51b8152602060048201526005602482015264047533130360dc1b6044820152606490fd5b156123c657565b60405162461bcd60e51b8152602060048201526005602482015264475331303160d81b6044820152606490fd5b156123fa57565b60405162461bcd60e51b815260206004820152600560248201526423a998981960d91b6044820152606490fd5b919290926001331415806124ca575b1561249d57612446935a9361225c565b90811561247557337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a2565b60405162461bcd60e51b815260206004820152600560248201526411d4cc4c0d60da1b6044820152606490fd5b50336000908152600160205260409020546001600160a01b03161515612436565b906124f58261147f565b612502604051918261049e565b8281528092612513601f199161147f565b0190602036910137565b80518210156125315760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b1561254e57565b60405162461bcd60e51b8152602060048201526005602482015264047533230360dc1b6044820152606490fd5b1561258257565b60405162461bcd60e51b8152602060048201526005602482015264475332303160d81b6044820152606490fd5b156125b657565b60405162461bcd60e51b815260206004820152600560248201526423a999181960d91b6044820152606490fd5b156125ea57565b60405162461bcd60e51b8152602060048201526005602482015264475332303360d81b6044820152606490fd5b1561261e57565b60405162461bcd60e51b815260206004820152600560248201526411d4cc8c0d60da1b6044820152606490fd5b61265760045415612547565b612664815183111561257b565b6001612672818410156125af565b600081805b61269d575b50506102c3929161269261233261269893610a45565b51600355565b600455565b909183518310156127365761270d6103a1611fbb84936126cd6126c0888a61251d565b516001600160a01b031690565b9283916126fb6001600160a01b03808516801515918261272b575b82612720575b82612713575b50506125e3565b61128561036e61036261035d86610a45565b91612677565b84161415905038806126f4565b3082141592506126ee565b818b141592506126e8565b9161267c565b1561274357565b60405162461bcd60e51b8152602060048201526005602482015264475332303560d81b6044820152606490fd5b801561277e575b6000190190565b612786611611565b612777565b602060008051602061295e833981519152916127a56127fb565b6127b360035482111561257b565b6127c060018210156125af565b80600455604051908152a1565b6040513481527f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d60203392a2565b30330361280457565b60405162461bcd60e51b8152602060048201526005602482015264475330333160d81b6044820152606490fd5b8015612865576041612850818302928084048303612858575b83611748565b036100235790565b612860611611565b61284a565b50600090565b801561286557808004600103612888575b60016128508280611748565b612890611611565b61287c565b9081156128b2576128508183029280840483036128585783611748565b5050600090565b908181116100235781039081116128cd5790565b61053d611611565b60208101908181116128eb575b81106100235790565b6128f3611611565b6128e2565b908101908181116128eb5781106100235790565b90808210612918575090565b90509056fe9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea26cc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c93f8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eafe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e04a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c86c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5a26469706673582212201c68e5370436ba05f76efa963be5b8f40ab79e42ea5477033145fe8f3edfe4ed64736f6c63430008110033"
   },
   "WETH9": {
      "abi": [
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "guy",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "Approval",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "Deposit",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
               },
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "Transfer",
            "type": "event"
         },
         {
            "anonymous": false,
            "inputs": [
               {
                  "indexed": true,
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
               },
               {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "Withdrawal",
            "type": "event"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "allowance",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
               }
            ],
            "name": "balanceOf",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "decimals",
            "outputs": [
               {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "name",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "symbol",
            "outputs": [
               {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "stateMutability": "payable",
            "type": "receive"
         },
         {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
               {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
               }
            ],
            "stateMutability": "view",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "guy",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "approve",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "transfer",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         },
         {
            "inputs": [
               {
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
               },
               {
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
               },
               {
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
               }
            ],
            "name": "transferFrom",
            "outputs": [
               {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
               }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
         }
      ],
      "bytecode": "0x6080604052346100cb57600061001581546100d0565b601f81116100a1575b50601a6c2bb930b83832b21022ba3432b960991b01815560019061004282546100d0565b90601f8211610075575b6008630ae8aa8960e31b0183556002805460ff19166012179055604051610717908161010b8239f35b82815282601f60208320930160051c8301925b83811061009657505061004c565b828155018390610088565b818052601f60208320910160051c8101905b8181106100c0575061001e565b8281556001016100b3565b600080fd5b90600182811c92168015610100575b60208310146100ea57565b634e487b7160e01b600052602260045260246000fd5b91607f16916100df56fe60806040818152600480361015610029575b505050361561001f57600080fd5b61002761056e565b005b600092833560e01c90816306fdde03146103fc57508063095ea7b31461038e57806318160ddd1461037357806323b872dd146103415780632e1a7d4d146102a4578063313ce5671461028257806370a082311461024a57806395d89b4114610147578063a9059cbb14610110578063d0e30db0146100f65763dd62ed3e0361001157346100f257816003193601126100f25760209282916100c861051a565b6100d0610535565b6001600160a01b03918216845291865283832091168252845220549051908152f35b8280fd5b838060031936011261010d5761010a61056e565b80f35b80fd5b50503461014357806003193601126101435760209061013a61013061051a565b60243590336105ea565b90519015158152f35b5080fd5b5091903461014357816003193601126101435780519082600180549081811c90808316928315610240575b602093848410811461022d5783885290811561021157506001146101d9575b505050829003601f01601f19168201926001600160401b038411838510176101c657508291826101c29252826104d1565b0390f35b634e487b7160e01b815260418552602490fd5b809293508652828620918387935b8385106101fd5750505050830101388080610191565b8054888601830152930192849082016101e7565b60ff1916878501525050151560051b8401019050388080610191565b634e487b7160e01b895260228a52602489fd5b91607f1691610172565b5050346101435760203660031901126101435760209181906001600160a01b0361027261051a565b1681526003845220549051908152f35b50503461014357816003193601126101435760209060ff600254169051908152f35b50346100f25760203660031901126100f257359033835260036020526102cf828285205410156105b7565b33835260036020528083206102e58382546105dd565b90558280838015610337575b8280929181923390f11561032c57519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a280f35b51913d9150823e3d90fd5b6108fc91506102f1565b5050346101435760603660031901126101435760209061013a61036261051a565b61036a610535565b604435916105ea565b50503461014357816003193601126101435751478152602090f35b50346100f257816003193601126100f2576020926103aa61051a565b918360243592839233825287528181209460018060a01b0316948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b84915083346100f257826003193601126100f257828354600181811c908083169283156104c7575b602093848410811461022d578388529081156104ab575060011461047357505050829003601f01601f19168201926001600160401b038411838510176101c657508291826101c29252826104d1565b919250858052828620918387935b8385106104975750505050830101858080610191565b805488860183015293019284908201610481565b60ff1916878501525050151560051b8401019050858080610191565b91607f1691610424565b6020808252825181830181905290939260005b82811061050657505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016104e4565b600435906001600160a01b038216820361053057565b600080fd5b602435906001600160a01b038216820361053057565b9190820180921161055857565b634e487b7160e01b600052601160045260246000fd5b336000526003602052604060002061058734825461054b565b90556040513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a2565b156105be57565b60405162461bcd60e51b81526020600482015260006024820152604490fd5b9190820391821161055857565b91907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060018060a01b038094169260009484865260209260038452604091829161063a85848b205410156105b7565b33881415806106c3575b610681575b8789526003865282892061065e8682546105dd565b90551696878152600385522061067583825461054b565b905551908152a3600190565b87895260048652828920338a52865261069f85848b205410156105b7565b87895260048652828920338a5286528289206106bc8682546105dd565b9055610649565b5087895260048652828920338a52865282892054600019141561064456fea264697066735822122065a3e7581556f63338a3bd62665d24fc6addb7ab9f32175d2edeb6ce94daa5e564736f6c63430008110033"
   }
}; module.exports.contracts = contracts;