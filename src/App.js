import React, { Component } from 'react';
import Profile from './components/Profile'
import {Navbar} from 'react-bootstrap'
import web3 from './utilities/web3Provider.js'
import './App.css';
import {abi,address} from './contracts/avatarBazaarAbi.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {isConnected: false,userAccount:null, charName:""}
    this.handleChange = this.handleChange.bind(this)
  }
  checkUserConnection(){
    const accounts = web3.eth.getAccounts((error, accounts )=>{
      this.setState({userAccount: accounts[0]})
    })
  }
  componentWillMount(){
    this.checkUserConnection();
  }
  handleChange(event) {
    this.setState({charName: event.target.charName});
  }/*
  createCharacters(){
    var charName = this.state.charName;
    console.log(this.state.charName);
    var CharacterContract = new web3.eth.Contract(abi,
        address, {from: this.props.userAccount});
    CharacterContract.methods.createCharacter(this.state.charName).send({from:this.state.userAccount}).then(function(result){

      console.log(result);

      })
    }
    */
  render() {
    if (this.state.userAccount != null){
      return (
        <div>
          {/*<Navbar />*/}
          <div className="nav-bar">
            <a href="/">Profile</a>
            <a href="/">Ludius Auction</a>
            <input type="text" value={this.state.charName} onChange={this.handleChange}></input>
            <button id="createCharacter" >Create Character</button>
          </div>
          <Profile userAccount={this.state.userAccount}/>
        </div>
      )
    } else {
      return <h1>Not Connected</h1>
    }
  }
}



export default App;
