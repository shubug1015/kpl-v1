import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import DeleteEditor from "./DeleteEditor";

const DELETE_LAPTOP = gql`
  mutation deleteLaptop($id: Int!) @client {
    deleteLaptop(id: $id) {
      id
    }
  }
`;

export default class extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <Mutation mutation={DELETE_LAPTOP}>
          {potato => {
            this.deleteLaptop = potato;
            return (
              <DeleteEditor onUpdate={this._onUpdate} id={this.props.id} />
            );
          }}
        </Mutation>
      </>
    );
  }
  _onUpdate = id => {
    this.deleteLaptop({ variables: { id } });
  };
}
