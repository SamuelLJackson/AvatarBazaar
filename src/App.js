import React, { Component } from 'react';
import Profile from './components/Profile'
import {Navbar} from 'react-bootstrap'
import web3 from './utilities/web3Provider.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {isConnected: false,userAccount:null}
  }
  checkUserConnection(){
    const accounts = web3.eth.getAccounts((error, accounts )=>{
      this.setState({userAccount: accounts[0]})
    })
  }
  componentWillMount(){
    this.checkUserConnection();
  }
  render() {
    if (this.state.userAccount != null){
      return (
        <div>
          {/*<Navbar />*/}
          <div className="nav-bar">
            <a href="/">Profile</a>
            <a href="/">Ludius Auction</a>
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
