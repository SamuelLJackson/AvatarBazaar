import React, { Component } from 'react';
import Profile from './components/Profile'
import Auction from './components/Auction'
import web3 from './utilities/web3Provider.js'
import './App.css';
import {abi,address} from './contracts/avatarBazaarAbi.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isConnected: false,
      userAccount:null,
      showProfile:null,
      charName:''
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.createCharacters = this.createCharacters.bind(this)
    this.display = this.display.bind(this)
  }
  checkUserConnection(){
    const accounts = web3.eth.getAccounts((error, accounts )=>{
      this.setState({userAccount: accounts[0]})
    })
  }
  componentWillMount(){
    this.setState({showProfile:true})
    this.checkUserConnection();
  }

  display(){
    if (this.state.showProfile)
      return (<Profile userAccount={this.state.userAccount}/>)
    else
      return (<Auction userAccount={this.state.userAccount} />)
  }

  toggleDisplay(button,e){
    console.log(button === 'profile')
    console.log('before' + this.state.showProfile)
    e.preventDefault();
    this.setState({
      showProfile: button === 'profile'
    });
    console.log('after' + this.state.showProfile)
  }

  handleChange(event) {
    this.setState({charName: event.target.value});
  }
  openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
  
  createCharacters(){
    console.log(this.state.charName);
    var CharacterContract = new web3.eth.Contract(abi,
        address, {from: this.props.userAccount});
    CharacterContract.methods.createCharacter(this.state.charName).send({from:this.state.userAccount}).then(function(result){
       console.log(result);
       })
    }
  render() {
    console.log("show profile: " + this.state.showProfile)
    if (this.state.userAccount != null){
      return (
        <div>
          {/*<Navbar />*/}
          
          <div className="nav-bar">
            <span onClick={this.openNav}>&#9776;</span>
            <a href="/" className="nav-bar-title">AvatarBazaar</a>
            <input type="text" value={this.state.charName} onChange={this.handleChange}></input>
            <button id="createCharacter" onClick={this.createCharacters}>Create Character</button>

          </div>
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="#" onClick={this.closeNav}>About</a>
            <a href="/" onClick={this.closeNav} onClick={this.toggleDisplay.bind(this, 'profile')}>Profile</a>
            <a href="/" onClick={this.closeNav} onClick={this.toggleDisplay.bind(this, 'auction')}>Bazaar</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
          {this.display()}
        </div>
      )
    } else {
      return <h1>Not Connected</h1>
    }
  }
}

export default App;
