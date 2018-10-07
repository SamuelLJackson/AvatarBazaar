import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap'
import React, {Component} from 'react'
import CharacterStill from '../img/character_still.png'
import CharacterStillForSale from '../img/character_still_lg_for_sale.png'
import Loading from './Loading'
import web3 from '../utilities/web3Provider.js'
import {abi,address} from '../contracts/avatarBazaarAbi.js'
import ColbyCharacter from './Colby.json'
import './Profile.css'

class Profile extends Component{
    constructor(props) {
      super(props)
  
      this.playAs = this.playAs.bind(this);
      this.state = {
          loading: false,
          chosenPlayer: null,
          showGame: false,
          characters: [
              {name: 'Quantstamp', experience: 600, level: 3, forSale:false},
              {name: 'Shyft', experience: 999, level: 99, forSale:true},
              {name: 'Celer', experience: 0, level: 5,forSale:false}
          ]
      }
    }
    componentDidMount(){/*
        var CharacterContract = new web3.eth.Contract(abi,
            address, 
            {
                from: this.props.userAccount,
                gasPrice: '10000000000000',
                gas: 1000000
            });
            console.log(this.props.userAccount)
            CharacterContract.methods.createCharacter("Carl").call()
            .then(function(result){
            console.log(result)
            return result;
        })
        .catch((error) =>{
            console.log(error)
        });*/
    }
    playAs() {
        localStorage.data = JSON.stringify(ColbyCharacter)
        console.log(localStorage.data)
        this.setState({showGame:true})
    }
    renderRows = () => {
      if (this.state.loading) {
        return <Loading />
      }
      var rows = this.state.characters.map((character, index) => {
        const { name,experience,level,forSale } = character;
        var characterStill = forSale ? CharacterStillForSale : CharacterStill
        return (
            <Col key={index} xs={6} md={4}>
                <Thumbnail src={characterStill} className="character-card" alt="242x200">
                    <h3>{name}</h3>
                    <p>level; {level}</p>
                    <p>Experience: {experience}</p>
                    <p>
                    <Button bsStyle="primary" disabled={forSale} onClick={this.playAs}>Play as {name}</Button>
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