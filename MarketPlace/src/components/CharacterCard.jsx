import React, { Component } from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";
import CharacterStill from "../img/character_still.png";
import CharacterStillForSale from "../img/character_still_lg_for_sale.png";
import web3 from "../utilities/web3Provider.js";
import { abi, address } from "../contracts/avatarBazaarAbi.js";
import "./Profile.css";

class CharacterCard extends Component {
  state = {
    showGame: CharacterStill,
    tokenId: this.props.info.id,
    forSale: false
  };
  componentDidMount() {
    let CharacterContract = new web3.eth.Contract(abi, address, {
      from: this.props.userAccount
    });
    let self = this;
    CharacterContract.methods
      .characters(this.props.info.tokenId)
      .call()
      .then(function(result) {
        console.log(result);
        self.setState({
          name: result[0],
          weapon: result[1],
          armor: result[2],
          image: result[3],
          ratCount: result[4],
          skeletonCount: result[5],
          totalKills: result[6],
          totalDmg: result[7],
          totalRevives: result[8]
        });
      });

    //add check for on sale
    //let characterStill = forSale ? CharacterStillForSale : CharacterStill;
  }
  auctionOff(tokenId) {
    let CharacterContract = new web3.eth.Contract(abi, address, {
      from: this.props.userAccount
    });
    let self = this;
    CharacterContract.methods
      .auctionCharacter(tokenId, "123", "222", 10000000000)
      .send({ from: this.props.userAccount })
      .then(function(result) {
        console.log(result);
      });
  }
  playAs(tokenId) {
    window.location = `http://54.187.164.49:8080/index.html?tokenId=${tokenId}`;
  }
  render() {
    const {
      name,
      weapon,
      armor,
      ratCount,
      skeletonCount,
      totalKills,
      totalDmg,
      totalRevives,
      image,
      forSale
    } = this.state;
    const { index, tokenId } = this.props.info;
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
            <Button
              bsStyle="primary"
              disabled={forSale}
              onClick={this.playAs.bind(this, tokenId)}
            >
              Play as {name}
            </Button>
            &nbsp;
            <Button
              bsStyle="default"
              disabled={forSale}
              onClick={this.auctionOff.bind(this, index)}
            >
              Sell {name}
            </Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default CharacterCard;
