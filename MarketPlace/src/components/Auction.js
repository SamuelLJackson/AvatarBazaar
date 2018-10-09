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
      var CharacterContract = new web3.eth.Contract(abi,
          address, {from: this.props.userAccount});
      CharacterContract.methods.createCharacter(this.state.charName).send(`{from:this.state.userAccount}`).then(function(result){
         })
      }

    componentDidMount() {
      var ForSaleContract = new web3.eth.Contract(abi,
        address, {from: this.props.userAccount});
        var self = this;
        ForSaleContract.methods.auctions(0).call()
        .then(function(result){
            var characterIdArray = result;
            console.log('charactArray')
            console.log(characterIdArray)
            var i = 0;
            
                ForSaleContract.methods.viewCharacterDataStepOne(characterIdArray[i]).call()
                .then(function(result){
                    ForSaleContract.methods.viewCharacterDataStepTwo(characterIdArray[i]).call()
                        .then(function(resultTwo){
                            self.setState(prevState => ({
                                characters: [
                                    ...prevState.characters, {
                                        tokenId: characterIdArray[i],
                                        name:result[0],
                                        weapon: result[1],
                                        armor:result[2],
                                        image: result[3],
                                        ratCount: resultTwo[0],
                                        skeletonCount: resultTwo[1],
                                        totalKills: resultTwo[2],
                                        totalDmg: resultTwo[3],
                                        totalRevives: resultTwo[4]
                                    }
                                ]
                            }));
                            return resultTwo;
                        })
                });
            
        return result;
        });
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
    }
}

export default Auction