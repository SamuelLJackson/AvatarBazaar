var abi = [
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
		"constant": false,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"name": "_endTime",
				"type": "uint256"
			},
			{
				"name": "_buyNowPrice",
				"type": "uint256"
			}
		],
		"name": "auctionCharacter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_auctionId",
				"type": "uint256"
			},
			{
				"name": "_bidOffer",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_auctionId",
				"type": "uint256"
			}
		],
		"name": "buyCharacter",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_auctionId",
				"type": "uint256"
			}
		],
		"name": "cancelAuction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_bidId",
				"type": "uint256"
			}
		],
		"name": "cancelBid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"constant": false,
		"inputs": [
			{
				"name": "_auctionId",
				"type": "uint256"
			}
		],
		"name": "endAuction",
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
				"name": "bidId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "characterId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "bidOffer",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "validOffer",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "newBid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "auctionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "characterId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "startingTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "endingTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "buyNowPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "seller",
				"type": "address"
			}
		],
		"name": "newAuction",
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
		"constant": true,
		"inputs": [],
		"name": "auctionCount",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctions",
		"outputs": [
			{
				"name": "characterId",
				"type": "uint256"
			},
			{
				"name": "startingTime",
				"type": "uint256"
			},
			{
				"name": "endingTime",
				"type": "uint256"
			},
			{
				"name": "buyNowPrice",
				"type": "uint256"
			},
			{
				"name": "validAuction",
				"type": "bool"
			},
			{
				"name": "seller",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "auctionToOwner",
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
		"constant": true,
		"inputs": [],
		"name": "bidCount",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bids",
		"outputs": [
			{
				"name": "auctionId",
				"type": "uint256"
			},
			{
				"name": "characterId",
				"type": "uint256"
			},
			{
				"name": "bidOffer",
				"type": "uint256"
			},
			{
				"name": "validOffer",
				"type": "bool"
			},
			{
				"name": "buyer",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bidToAuction",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bidToAuctionCount",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bidToOwner",
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
		"constant": true,
		"inputs": [
			{
				"name": "_auctionId",
				"type": "uint256"
			}
		],
		"name": "getAuctionDetails",
		"outputs": [
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
				"name": "_bidId",
				"type": "uint256"
			}
		],
		"name": "getBidDetails",
		"outputs": [
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
				"type": "bool"
			},
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
				"name": "_auctionId",
				"type": "uint256"
			}
		],
		"name": "getBidsPerAuction",
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
		"inputs": [],
		"name": "getTime",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "ownerAuctionCount",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "ownerBidCount",
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
	}
]

var address = '0xb220601479c40ce43caabdc8062826946b1f1c14'

module.exports = {abi: abi, address: address}
