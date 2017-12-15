import React from "react";
import ReactDOM from "react-dom";
import GitHubUserRepos from "containers/GitHubUserRepos";
import Repo from "components/Repo.jsx";
import renderer from "react-test-renderer";

it("should render no repo by default", () => {
  const tree = renderer.create(<GitHubUserRepos />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the repos from a user if a val username matchs a repo", () => {
  const userRepos = [
    {
      name: "repo1",
      description: "this is a repo",
      updated_at: "2017-11-27T17:09:38Z",
      html_url: "https://github.com/MatthieuVeillon/Alibay-project",
      owner: {
        avatar_url: "https://avatars1.githubusercontent.com/u/20015180?v=4"
      }
    },
    {
      name: "repo2",
      description: "this is a repo2",
      updated_at: "2017-11-27T17:09:38Z",
      html_url: "https://github.com/MatthieuVeillon/Alibay-project",
      owner: {
        avatar_url: "https://avatars1.githubusercontent.com/u/20015180?v=4"
      }
    }
  ];

  const tree = renderer.create(
    <GitHubUserRepos top={10} userRepos={userRepos} />
  );
  expect(tree).toMatchSnapshot();
});

it("should allow the user to sort the repo by the oldest", () => {
  const userRepos = [
    {
      name: "repo1",
      description: "this is a repo",
      updated_at: "2017-11-27T17:09:38Z",
      html_url: "https://github.com/MatthieuVeillon/Alibay-project",
      owner: {
        avatar_url: "https://avatars1.githubusercontent.com/u/20015180?v=4"
      }
    },
    {
      name: "repo2",
      description: "this is a repo2",
      updated_at: "2017-11-27T17:09:38Z",
      html_url: "https://github.com/MatthieuVeillon/Alibay-project",
      owner: {
        avatar_url: "https://avatars1.githubusercontent.com/u/20015180?v=4"
      }
    }
  ];

  const component = renderer.create(
    <GitHubUserRepos top={10} userRepos={userRepos} />
  );
  component.getInstance().filterByOld();

  expect(component.toJSON()).toMatchSnapshot();
});

it("should not display any repo if the userInput doesnt match any valid username", () => {
  const username = ";hkasdjkbfalskdjhuasdbfasdjgkagd";

  const tree = renderer.create(
    <GitHubUserRepos top={10} username={username} />
  );
  expect(tree).toMatchSnapshot();
});
