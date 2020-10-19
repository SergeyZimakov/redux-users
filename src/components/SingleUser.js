import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRemoved } from '../actions/actionsCreators';

class SingleUser extends Component {
  render() {
    return (
      <div>
        {this.props.user}
        <button onClick={() => this.props.onRemoveUser(this.props.user)}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveUser: (userName) => dispatch(userRemoved(userName)),
  }
}

export default connect(null, mapDispatchToProps)(SingleUser);