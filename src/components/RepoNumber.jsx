import React, { Component } from "react";
import styled from "styled-components";

const Flexcontainer = styled.div`
   {
    display: flex;
    align-items: center;
  }
`;

const Avatar = styled.img`
   {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
`;

class RepoNumber extends Component {
  render() {
    return (
      <Flexcontainer>
        <Avatar src={this.props.userPicture} alt="" />
        <div>
          <h4>Repositories for {this.props.username}</h4>
          <Flexcontainer>
            <p>Found {this.props.repoNumber}.</p>
            {this.props.repoNumberByPage ? (
              <p>
                Showing top :
                {this.props.repoNumberByPage}
              </p>
            ) : null}
          </Flexcontainer>
        </div>
      </Flexcontainer>
    );
  }
}

export default RepoNumber;
