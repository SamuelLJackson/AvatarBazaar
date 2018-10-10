import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import React, { Component } from "react";
import CharacterStill from "../img/character_still.png";
import CharacterStillForSale from "../img/character_still_lg_for_sale.png";
import Loading from "./Loading";
import CharacterCard from "./CharacterCard";
import web3 from "../utilities/web3Provider.js";
import { abi, address } from "../contracts/avatarBazaarAbi.js";
import "./Profile.css";

class Profile extends Component {
  state = {
    loading: false,
    characterIds: [],
    characterContract: new web3.eth.Contract(abi, address, {
      from: this.props.userAccount
    })
  };

  componentDidMount() {
    let self = this;
    this.state.characterContract.methods
      .getCharactersPerUser()
      .call()
      .then(function(result) {
        self.setState({ characterIds: result });
      });
  }

  renderRows = () => {
    if (this.state.loading) {
      return <Loading />;
    }
    let rows = this.state.characterIds.map((tokenId, index) => {
      return (
        <CharacterCard
          key={tokenId}
          info={{
            tokenId: tokenId,
            userAccount: this.props.userAccount,
            index: index
          }}
        />
      );
    });
    return rows;
  };
  render() {
    return (
      <div className="browswer-quest-background">
        <Grid>
          <Row className="show-grid">{this.renderRows()}</Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
