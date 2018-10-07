var abi = [
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

var address = '0x4e646cbfd2b6f642cb0c12e3f1d2491d7e500c37'

module.exports = {abi: abi, address: address}
