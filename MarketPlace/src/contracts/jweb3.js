var contractABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"name": "_weapon",
				"type": "string"
			},
			{
				"name": "_armor",
				"type": "string"
			},
			{
				"name": "_image",
				"type": "string"
			},
			{
				"name": "_achievements",
				"type": "uint256[]"
			},
			{
				"name": "_ratCount",
				"type": "uint256"
			},
			{
				"name": "_skeletonCount",
				"type": "uint256"
			},
			{
				"name": "_totalKills",
				"type": "uint256"
			},
			{
				"name": "_totalDmg",
				"type": "uint256"
			},
			{
				"name": "_totalRevives",
				"type": "uint256"
			}
		],
		"name": "save",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "ownerCharacterCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			}
		],
		"name": "viewAchievements",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "characterToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"name": "_characterName",
				"type": "string"
			}
		],
		"name": "changeCharacterName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "characterCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCharactersPerUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "characters",
		"outputs": [
			{
				"name": "characterName",
				"type": "string"
			},
			{
				"name": "weapon",
				"type": "string"
			},
			{
				"name": "armor",
				"type": "string"
			},
			{
				"name": "image",
				"type": "string"
			},
			{
				"name": "ratCount",
				"type": "uint256"
			},
			{
				"name": "skeletonCount",
				"type": "uint256"
			},
			{
				"name": "totalKills",
				"type": "uint256"
			},
			{
				"name": "totalDmg",
				"type": "uint256"
			},
			{
				"name": "totalRevives",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "_balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_characterName",
				"type": "string"
			}
		],
		"name": "createCharacter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			}
		],
		"name": "viewCharacterDataStepTwo",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			}
		],
		"name": "viewCharacterDataStepOne",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "takeOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_tokenId",
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
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_tokenId",
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
				"name": "characterId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "characterName",
				"type": "string"
			}
		],
		"name": "newCharacter",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_weapon",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_armor",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_image",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_achievements",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"name": "_ratCount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_skeletonCount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_totalKills",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_totalDmg",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_totalRevives",
				"type": "uint256"
			}
		],
		"name": "saved",
		"type": "event"
	}
]
var contractAddress = "0x4e646cbfd2b6f642cb0c12e3f1d2491d7e500c37";
var AvatarBazaarContract;

function startApp(){
	console.log("Start");

  AvatarBazaarContract = web3js.eth.contract(contractABI).at(contractAddress);
  var accountInterval = setInterval(function() {
    // Check if account has changed
    if (web3js.eth.accounts[0] !== userAccount) {
      var userAccount = web3.eth.accounts[0];
			//displayAccountDetails(userAccount);
			//getERC20Balance(userAccount);
    }

		//displayAccountDetails(userAccount);
		//getERC20Balance(userAccount);
  }, 5000);
	getUserCharacters();

}
function getUserCharacters(){
	AvatarBazaarContract.getCharactersPerUser(function(error, result){
		 if(!error){
			  console.log(result);
	 		} else console.error("Error: " + error);
		});
}
function getCharacters(tokenId){
	AvatarBazaarContract.characters(tokenId,function(error, result){
		 if(!error){
			  console.log(result);
	 		} else console.error("Error: " + error);
		});

}

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    //web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // Handle the case where the user doesn't have Metamask installed
    // Probably show them a message prompting them to install Metamask

  // Now you can start your app & access web3 freely:
	}
	startApp();
})

web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    case "4":
      console.log('This is the Rinkeby test network.')
      break
    case "42":
      console.log('This is the Kovan test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
})









//On Load Page
// window.addEventListener('load', function() {
//   // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//
// 	console.log("window:", window)
// 	console.log("web3js:", window.web3js)
//   if (typeof web3 !== 'undefined') {
//
// 		console.log("aaaaaaaa 0")
//
//     // Use Mist/MetaMask's provider
//     web3js = new Web3(web3.currentProvider);
//
//
// 		startApp();
// 	   // start web3 filters, calls, etc
// 		web3js.version.getNetwork((err, netId) => {
// 		  switch (netId) {
// 		    case "1":
// 		      console.log('This is mainnet')
// 		      break
// 		    case "2":
// 		      console.log('This is the deprecated Morden test network.')
// 		      break
// 		    case "3":
// 		      console.log('This is the ropsten test network.')
// 		      break
// 		    case "4":
// 		      console.log('This is the Rinkeby test network.')
// 		      break
// 		    case "42":
// 		      console.log('This is the Kovan test network.')
// 		      break
// 		    default:
// 		      console.log('This is an unknown network.')
// 		  }
// 		})
//
//   } else {
//
//
// 		console.log("aaaaaaaa 1")
//     web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//     // Handle the case where the user doesn't have Metamask installed
//     // Probably show them a message prompting them to install Metamask
// 		//console.log("Warning this is on the Robsten Network");
//   }
//
//
// 	})
