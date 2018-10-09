pragma solidity ^0.4.24;

library SafeMath {

  /**
  * @dev Multiplies two numbers, reverts on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }

    uint256 c = a * b;
    require(c / a == b);

    return c;
  }

  /**
  * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b > 0); // Solidity only automatically asserts when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold

    return c;
  }

  /**
  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a);
    uint256 c = a - b;

    return c;
  }

  /**
  * @dev Adds two numbers, reverts on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a);

    return c;
  }

  /**
  * @dev Divides two numbers and returns the remainder (unsigned integer modulo),
  * reverts when dividing by zero.
  */
  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b != 0);
    return a % b;
  }
}

contract Ownable {
  address public owner;

  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }

}

contract CryptoQuest is Ownable {
    using SafeMath for uint;
    
    uint i; uint counter;
    // uint characterDigits = 18;
    // uint characterModulus = 10 ** characterDigits;
    uint public characterCount = 0;
    string characterName;
    
    event newCharacter(uint characterId, string characterName);
    event newLogin(uint characterId, bool onlineStatus);
    event newLogout(uint characterId, bool onlineStatus);

    mapping (uint => address) public characterToOwner;
    mapping (address => uint) public ownerCharacterCount;
    
    struct Character{
        uint level;
        uint loot;
        string characterName;
        bool onlineStatus;
    }

  Character[] public characters;
  
  modifier characterOwner(uint _characterId) {
    require(msg.sender == characterToOwner[_characterId]);
    _;
  }
  
  function createCharacter(string _characterName) public {
    uint characterId = characters.push(Character(0,0,_characterName, false))-1;
    characterToOwner[characterId] = msg.sender;
    characterCount = characterCount.add(1);
    ownerCharacterCount[msg.sender] = ownerCharacterCount[msg.sender].add(1);
    newCharacter(characterId, _characterName);
    
  }
  
  function levelUp(uint _characterId) public characterOwner(_characterId){
    characters[_characterId].level = characters[_characterId].level.add(1);
  }
  
  function changeLoot(uint _characterId, uint _newLoot) public characterOwner(_characterId){
    characters[_characterId].loot = _newLoot;
  }
  
  function login(uint _characterId) public characterOwner(_characterId){
      characters[_characterId].onlineStatus = true;
      newLogin(_characterId,true);
  }
  
  function logout(uint _characterId) public characterOwner(_characterId){
      characters[_characterId].onlineStatus = false;
      newLogout(_characterId,false);
  }
  
  function getCharactersPerUser() external view returns(uint[]) {
    uint[] memory result = new uint[](ownerCharacterCount[msg.sender]);
    counter = 0;
    for (uint i = 0; i < characters.length; i++) {
      if (characterToOwner[i] == msg.sender) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }
  
  function viewCharacterData(uint _characterId) public view returns(uint,uint,string){
      return(characters[_characterId].level,characters[_characterId].loot,characters[_characterId].characterName);
  }
}

contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}

contract gameContract is CryptoQuest, ERC721 {

  mapping (uint => address) characterApprovals;

  function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerCharacterCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return characterToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerCharacterCount[msg.sender] = ownerCharacterCount[msg.sender].sub(1);
    ownerCharacterCount[_to] = ownerCharacterCount[_to].add(1);
    characterToOwner[_tokenId] = _to;
    Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public characterOwner(_tokenId) {
     _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public characterOwner(_tokenId) {
    characterApprovals[_tokenId] = _to;
    Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    require(characterApprovals[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }

}
