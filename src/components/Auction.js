import React, {Component} from 'react'
import './Auction.css'
import web3 from '../utilities/web3Provider.js'
import {abi,address} from '../contracts/avatarBazaarAbi.js'
import {Button} from 'react-bootstrap'

class Auction extends Component{
    constructor(props) {
      super(props)

      this.state = {
          loading: false,
          characters: [
          ]
      }
      this.handleChange = this.handleChange.bind(this)
      this.createCharacters = this.createCharacters.bind(this)
    }
  
    handleChange(event) {
        this.setState({charName: event.target.value});
      }
    createCharacters(){
      console.log(this.state.charName);
      var CharacterContract = new web3.eth.Contract(abi,
          address, {from: this.props.userAccount});
      CharacterContract.methods.createCharacter(this.state.charName).send({from:this.state.userAccount}).then(function(result){
         })
      }
    render(){
        return (
            <div style={{marginLeft:'100px'}}>
            <h1 style={{paddingLeft: '100px',color:'white',fontFamily: "'Amaranth', sans-serif"}}>Create Character</h1>

            <input type="text" value={this.state.charName} onChange={this.handleChange}></input>
            <Button id="createCharacter" bsStyle="primary" onClick={this.createCharacters}>Create Character</Button>
           
            <h1 style={{paddingLeft: '100px',color:'white',fontFamily: "'Amaranth', sans-serif"}}>Buy Characters</h1>

            </div>
        )
        /*
        return (
            <div style={{justifyContent:'center',alignItems:'center'}}>
                <div className="shopping-cart">helllllllllo</div>
                <div className="game-select"></div>
            </div>
        )
        */
    }
}

export default Auction