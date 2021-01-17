import React from 'react';

class RepoItem extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.dataRepoItem.name}</p>
        <p>Description: {this.props.dataRepoItem.description}</p>
        <p>language: {this.props.dataRepoItem.language}</p>
        <p>forks: {this.props.dataRepoItem.forks}</p>
        <p>created: {this.props.dataRepoItem.created_at}</p>
      </div>
    );
  }
}
export { RepoItem };
