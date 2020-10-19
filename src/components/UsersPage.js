import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import NextUser from './NextUser';
import SingleUser from './SingleUser';

class UsersPage extends Component {

  render() {
    return (
      <div>
        <NextUser />
        <hr />
        <div>
          {this.props.users.length > 0 &&
            <div>
              <h1>Users:</h1>
              {this.props.users.map((user, index) =>
                <SingleUser key={index} user={user} />)}
              <hr />
            </div>
          }
        </div>
        <div>
          {this.props.isLoading && <img src={logo} alt="loading...." className="App-logo" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.nextUser.isLoading,
  }
}

export default connect(mapStateToProps, null)(UsersPage);