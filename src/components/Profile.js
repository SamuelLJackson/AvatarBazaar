import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap'
import React, {Component} from 'react'
import CharacterStill from '../img/character_still.png'
import CharacterStillForSale from '../img/character_still_lg_for_sale.png'
import Loading from './Loading'
import web3 from '../utilities/web3Provider.js'
import {abi,address} from '../contracts/avatarBazaarAbi.js'
import './Profile.css'
const sqlite3 = require('sqlite3').verbose();
 


class Profile extends Component{
    constructor(props) {
      super(props)

      this.state = {
          loading: false,
          showGame: false,
          characters: [
          ]
      }
    }

    componentDidMount(){
        var CharacterContract = new web3.eth.Contract(abi,
            address, {from: this.props.userAccount});
            var self = this;
            CharacterContract.methods.getCharactersPerUser().call()
            .then(function(result){
            //the result holds your Token Balance that you can assign to a var
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
    renderRows = () => {
      if (this.state.loading) {
        return <Loading />
      }
      var rows = this.state.characters.map((character, index) => {
        const { name,weapon,armor,ratCount,skeletonCount,totalKills,totalDmg,totalRevives,forSale} = character;
        var characterStill = forSale ? CharacterStillForSale : CharacterStill
        return (
            <Col key={index} xs={6} md={4}>
                <Thumbnail src={characterStill} className="character-card" alt="242x200">
                    <h3>{name}</h3>
                    <p>Weapon: {weapon}</p>
                    <p>Armor: {armor}</p>
                    <p>Rat Count: {ratCount}</p>
                    <p>Skeleton Count: {skeletonCount}</p>
                    <p>Total Kills: {totalKills}</p>
                    <p>Total Damage: {totalDmg}</p>
                    <p>Total Revives: {totalRevives}</p>
                    <p>
                    <Button bsStyle="primary" disabled={forSale}>Play as {name}</Button>
                    &nbsp;
                    <Button bsStyle="default" disabled={forSale}>Sell {name}</Button>
                    </p>
                </Thumbnail>
            </Col>
        );
      });
      return rows;
    };
    render(){
        if (!this.state.showGame){
            return(
                <Grid>
                    <Row className="show-grid">
                        {this.renderRows()}
                    </Row>
                </Grid>            
            )
        } else {
            console.log(localStorage.data)
            return <iframe width={'100%'} height={'400px'} src='http://54.187.164.49:8080/index.html'></iframe>
        }
    }
}

export default Profile;
