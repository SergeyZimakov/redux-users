import React, { Component } from 'react';

class SingleUser extends Component {
  render() {
    return (
      <div>
        {this.props.user}
        <button onClick={() => this.props.onUserRemoved(this.props.user)}>Remove</button>
      </div>
    );
  }
}

export default SingleUser;