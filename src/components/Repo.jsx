import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

// Styled components

const RepoTitle = styled.h3`font-weight: 200;`;

const UpdatedAt = styled.p`
  text-align: right;
  margin-right: 50px;
  font-size: 14px;
`;

const RepoWrapper = styled.div`margin-bottom: 30px;`;

class Repo extends Component {
  convertDateIntoTimeAgo = date => {
    return moment(date).fromNow();
  };

  displayRepo = () => {
    let counter = 0;
    return this.props.userRepos.map((repo, i) => {
      counter++;
      if (this.props.top) {
        if (counter <= this.props.top) {
          return (
            <RepoWrapper key={i}>
              <RepoTitle>
                <a target="_blank" href={repo.html_url}>
                  {repo.name}
                </a>
              </RepoTitle>
              <p>{repo.description}</p>
              <UpdatedAt>
                updated {this.convertDateIntoTimeAgo(repo.updated_at)}
              </UpdatedAt>
            </RepoWrapper>
          );
        }
      } else {
        return (
          <RepoWrapper key={i}>
            <RepoTitle>
              <a target="_blank" href={repo.html_url}>
                {repo.name}
              </a>
            </RepoTitle>
            <p>{repo.description}</p>
            <UpdatedAt>
              {this.convertDateIntoTimeAgo(repo.updated_at)}
            </UpdatedAt>
          </RepoWrapper>
        );
      }
    });
  };

  render() {
    return <div>{this.displayRepo()}</div>;
  }
}
export default Repo;
