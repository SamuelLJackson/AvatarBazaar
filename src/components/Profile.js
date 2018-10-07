import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap'
import React, {Component} from 'react'
import CharacterStill from '../img/character_still.png'
import CharacterStillForSale from '../img/character_still_lg_for_sale.png'
import Loading from './Loading'
import web3 from '../utilities/web3Provider.js'
import {abi,address} from '../contracts/avatarBazaarAbi.js'
import './Profile.css'

class Profile extends Component{
    constructor(props) {
      super(props)

      this.state = {
          loading: false,
          showGame: CharacterStill,
          characters: [
          ]
      }
    }
    auctionOff(tokenIndex){

        var CharacterContract = new web3.eth.Contract(abi,
            address, {from: this.props.userAccount});
            var self = this;
            CharacterContract.methods.auctionCharacter(this.state.characters[tokenIndex].tokenId,"123","222",10000000000).send({from:this.state.userAccount})
            .then(function(result){
                console.log(result)
            })
    }
    componentDidMount(){
        var CharacterContract = new web3.eth.Contract(abi,
            address, {from: this.props.userAccount});
            var self = this;
            CharacterContract.methods.getCharactersPerUser().call()
            .then(function(result){
            //the result holds your Token Balance that you can assign to a var
            console.log('characterIdArray:')
            console.log(result)
            var characterIdArray = result;
            var i;
             //Loop Through each Id that is owned
             for(i in characterIdArray){
               console.log(i);
               //Call Id Details [i] is TicketId
               CharacterContract.methods.viewCharacterDataStepOne(characterIdArray[i]).call()
               .then(function(result){
                 console.log(result);

                 CharacterContract.methods.viewCharacterDataStepTwo(characterIdArray[i]).call().then(function(resultTwo){
                   console.log(resultTwo);

                   //the result holds your Token Balance that you can assign to a var
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
                   return result;
                 })
               });

             }
            return result;
            });
    }
    playAs(tokenIndex){
        window.location = `http://54.187.164.49:8080/index.html?tokenId=${this.state.characters[tokenIndex].tokenId}`
    }
    renderRows = () => {
      if (this.state.loading) {
        return <Loading />
      }
      var rows = this.state.characters.map((character, index) => {
        const { name,weapon,armor,ratCount,skeletonCount,totalKills,totalDmg,totalRevives,image,forSale} = character;
        var characterStill = forSale ? CharacterStillForSale : CharacterStill
        return (
            <Col key={index} xs={6} md={4}>
                {/*<Thumbnail src={characterStill} className="character-card" alt="242x200">*/}
                <Thumbnail src={image} className="character-card" alt="character-image">
                    <h3>{name}</h3>
                    <p>Weapon: {weapon}</p>
                    <p>Armor: {armor}</p>
                    <p>Rat Count: {ratCount}</p>
                    <p>Skeleton Count: {skeletonCount}</p>
                    <p>Total Kills: {totalKills}</p>
                    <p>Total Damage: {totalDmg}</p>
                    <p>Total Revives: {totalRevives}</p>
                    <p>
                    <Button bsStyle="primary" disabled={forSale} onClick={this.playAs.bind(this,index)}>Play as {name}</Button>
                    &nbsp;
                    <Button bsStyle="default" disabled={forSale} onClick={this.auctionOff.bind(this,index)}>Sell {name}</Button>
                    </p>
                </Thumbnail>
            </Col>
        );
      });
      return rows;
    };
    render(){
        return(
            <div className="browswer-quest-background">
                <Grid>
                    <Row className="show-grid">
                        {this.renderRows()}
                    </Row>
                </Grid>            
            </div>
        )
    }
}

export default Profile;
