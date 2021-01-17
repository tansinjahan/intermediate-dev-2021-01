import React from 'react';
import { RepoItem } from './RepoItem';
import { LanguageItem } from './LanguageItem';

class ShowRepo extends React.Component {
  render() {
    return (
      <div>
        <RepoItem />
        <LanguageItem />
      </div>
    );
  }
}

export { ShowRepo };
