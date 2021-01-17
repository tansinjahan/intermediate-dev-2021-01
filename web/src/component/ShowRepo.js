import React from 'react';
import axios from 'axios';
import { RepoItem } from './RepoItem';
import { LanguageItem } from './LanguageItem';

class ShowRepo extends React.Component {
  constructor(props) {
    super(props);
    this.repositories = [];
    this.state = {
      repo_data: [],
      languages: [],
    };
  }

  getLangauges = (repos) => {
    const languagSet = new Set();
    repos.forEach((repo) => {
      languagSet.add(repo.language);
    });
    const languages = Array.from(languagSet);
    languages.push('All');
    return languages;
  };

  handleLanguageClick = (language) => {
    this.setState({
      repo_data: this.repositories.filter(
        (repo) => repo.language === language || language === 'All'
      ),
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/repos')
      .then((response) => {
        const repoList = response.data;
        repoList.sort((a, b) =>
          new Date(a.created_at) < new Date(b.created_at) ? 1 : -1
        );
        this.repositories = repoList;
        this.setState({
          repo_data: this.repositories,
          languages: this.getLangauges(repoList),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>SilverOrange Exercise</h1>
        <LanguageItem
          data={this.state.languages}
          languageCallback={this.handleLanguageClick}
        />
        {this.state.repo_data.map((repo) => (
          <RepoItem key={repo.id} dataRepoItem={repo} />
        ))}
      </div>
    );
  }
}

export { ShowRepo };
