import React, { Component } from 'react';
import Profile from './components/Profile'
import Auction from './components/Auction'
import web3 from './utilities/web3Provider.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isConnected: false,
      userAccount:null,
      showProfile:true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }
  checkUserConnection(){
    const accounts = web3.eth.getAccounts((error, accounts )=>{
      this.setState({userAccount: accounts[0]})
    })
  }
  componentWillMount(){
    this.checkUserConnection();
  }

  display(){
    if (this.state.showProfile)
      return (<Profile userAccount={this.state.userAccount}/>)
    else
      return (<Auction userAccount={this.state.userAccount} />)
  }

  toggleDisplay(e){
    e.preventDefault();
    this.setState(prevState => ({
      displayProfile: !prevState.displayProfile
    }));
  }

  render() {
    if (this.state.userAccount != null){
      return (
        <div>
          {/*<Navbar />*/}
          <div className="nav-bar">
            <a href="/" className="nav-bar-title">AB</a>
            <a href="/" onClick={this.toggleDisplay}>Profile</a>
            <a href="/" onClick={this.toggleDisplay}>Ludius Auction</a>
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
