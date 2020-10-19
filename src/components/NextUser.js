import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAdded, fetchUser } from '../actions/actionsCreators';

class NextUser extends Component {

  componentDidMount() {
    this.props.fetchNewUser();
  }

  accept() {
    this.props.onUserAccepted(this.props.user);
    this.props.fetchNewUser()
  }

  reject() {
    this.props.fetchNewUser();
  }

  render() {
    const {isLoading, user} = this.props;
    return (
      <div>
        <h1>Add task</h1>
        <p>{user}</p>
        <button onClick={() => this.accept()} disabled={isLoading}>Accept</button>
        <button onClick={() => this.reject()} disabled={isLoading}>Reject</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.nextUser.name,
    isLoading: state.nextUser.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserAccepted: (userName) => dispatch(userAdded(userName)),
    fetchNewUser: () => dispatch(fetchUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextUser);