import React from 'react';

class DisplayRepo extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.history.location.state;
  }
  render() {
    return (
      <div className="container">
        <h4>Last push at: {this.data.pushed_at}</h4>
        <h5>Author: {this.data.owner.login}</h5>
      </div>
    );
  }
}
export { DisplayRepo };
