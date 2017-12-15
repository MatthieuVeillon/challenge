import React, { Component } from "react";

import styled from "styled-components";

import UserSearch from "components/UserSearch.jsx";
import RepoNumber from "components/RepoNumber.jsx";
import UserFilter from "components/UserFilter.jsx";
import Repo from "components/Repo.jsx";

// Styled components declaration
const FlexContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: space-between;
`;
class GitHubUserRepos extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      userRepos: []
    };
  }

  // Somehow of a hack to be able to use snapshot with JESTand pass state mock as a prop
  componentWillMount() {
    this.setState({
      userRepos: this.props.userRepos || [],
      username: this.props.username || ""
    });
  }

  updateUserName = userInput => {
    if (userInput) {
      this.setState({ username: userInput }, this.fetchData);
    }
  };

  fetchData = () => {
    let url = `https://api.github.com/users/${this.state.username}/repos`;
    fetch(url)
      .then(response => response.json())
      .then(results => this.setState({ userRepos: results }))
      .then(() => this.filterByRecent());
  };

  updateUserRepos = fetchedData => {
    this.setState({ userRepos: fetchedData });
  };

  convertDatesIntoInt = dateStr => {
    return new Date(dateStr).getTime();
  };

  filterByRecent = () => {
    let repoSortedRecent = this.state.userRepos.sort(
      (a, b) =>
        this.convertDatesIntoInt(b.updated_at) -
        this.convertDatesIntoInt(a.updated_at)
    );
    this.setState({ userRepos: repoSortedRecent }, () =>
      console.log("Recent", this.state.userRepos)
    );
  };

  filterByOld = () => {
    let repoSortedOld = this.state.userRepos.sort(
      (a, b) =>
        this.convertDatesIntoInt(a.updated_at) -
        this.convertDatesIntoInt(b.updated_at)
    );
    this.setState({ userRepos: repoSortedOld });
  };

  render() {
    return (
      <div>
        {this.props.message}
        <UserSearch updateUserName={this.updateUserName} />
        {/* if there is a repo corresponding to the username entered by the user, display it or them  
        otherwise if there is no corresponding repo to the username entered, display a message telling the user, and finally 
        userinput is empty do not change the interface*/}
        {this.state.userRepos.length >= 1 ? (
          <FlexContainer>
            <RepoNumber
              username={this.state.username}
              userPicture={this.state.userRepos[0].owner.avatar_url}
              repoNumber={this.state.userRepos.length}
              repoNumberByPage={this.props.top}
            />
            <UserFilter
              filterByRecent={this.filterByRecent}
              filterByOld={this.filterByOld}
            />
          </FlexContainer>
        ) : this.state.userRepos.length === 0 && this.state.username ? (
          <p>No repositories found for {this.state.username}</p>
        ) : null}
        <Repo top={this.props.top} userRepos={this.state.userRepos} />
      </div>
    );
  }
}

export default GitHubUserRepos;
