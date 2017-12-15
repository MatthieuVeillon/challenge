import React, { Component } from "react";
import styled from "styled-components";

// Style

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
`;

class UserSearch extends Component {
  handleInputChange = e => {
    e.preventDefault();
    this.props.updateUserName(this.userInput.value);
  };

  render() {
    return (
      <SearchBar>
        <p>Github username</p>
        <form action="submit" onSubmit={this.handleInputChange}>
          <input
            type="text"
            placeholder="username"
            ref={node => {
              this.userInput = node;
            }}
          />
          <input type="submit" value="GO" />
        </form>
      </SearchBar>
    );
  }
}

export default UserSearch;
