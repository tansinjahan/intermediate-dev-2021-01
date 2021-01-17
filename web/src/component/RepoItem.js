import React from 'react';
import { NavLink } from 'react-router-dom';

class RepoItem extends React.Component {
  render() {
    return (
      <NavLink
        exact={true}
        to={{
          pathname: '/display',
          state: this.props.dataRepoItem,
        }}
        activeClassName="selected"
      >
        <div>
          <p>Name: {this.props.dataRepoItem.name}</p>
          <p>Description: {this.props.dataRepoItem.description}</p>
          <p>language: {this.props.dataRepoItem.language}</p>
          <p>forks: {this.props.dataRepoItem.forks}</p>
          <p>created: {this.props.dataRepoItem.created_at}</p>
        </div>
      </NavLink>
    );
  }
}
export { RepoItem };
