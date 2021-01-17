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
      isError: false,
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
          isError: false,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      });
  }

  render() {
    if (this.state.isError) {
      return <h3>A wild error appeard. Please, refresh</h3>;
    }

    return (
      <div className="container">
        <h1>SilverOrange Exercise</h1>
        <LanguageItem
          data={this.state.languages}
          languageCallback={this.handleLanguageClick}
        />
        {this.state.repo_data.map((repo) => (
          <div key={repo.id}>
            <RepoItem dataRepoItem={repo} />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export { ShowRepo };
