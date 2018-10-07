import React, { Component } from 'react';
import Profile from './components/Profile'
import Auction from './components/Auction'
import web3 from './utilities/web3Provider.js'
import BrowserQuestLogo from './img/BrowserQuestLogo.png'
import WowLogo from './img/wow.jpeg'
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
      return (
      <div>            <h1 style={{paddingLeft: '100px',color:'white',fontFamily: "'Amaranth', sans-serif"}} onClick={this.toggleDisplay.bind(this, 'profile')}>Your Characters</h1>
      <Profile userAccount={this.state.userAccount}/></div>)
    else
      return (<Auction userAccount={this.state.userAccount} />)
  }

  toggleDisplay(button,e){
    e.preventDefault();
    this.setState({
      showProfile: button === 'profile'
    });
  }

  openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
  render() {
    if (this.state.userAccount != null){
      return (
        <div className="game-background">
          <div className="nav-bar">
            <span onClick={this.openNav} style={{color:'white'}}>&#9776;</span>
            <a href="/" className="nav-bar-title">AvatarBazaar</a>

          </div>
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="#" onClick={this.closeNav}>About</a>
            <a href="/" onClick={this.closeNav} onClick={this.toggleDisplay.bind(this, 'auction')} className="bazaar-link">Bazaar</a>
            <a href="/" onClick={this.closeNav}><img src={BrowserQuestLogo} width={"200px"} /></a>
            <a href="#"><img src={WowLogo} width={"200px"} /></a>
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
