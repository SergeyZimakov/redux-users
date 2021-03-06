import React, { Component } from 'react';
import logo from '../logo.svg';
import SingleUser from './SingleUser';

class UsersPage extends Component {
  state = {
    users: [],
    isLoading: false,
    user: '',
  }

  componentDidMount() {
    this.loadUser();
  }
  acceptUser() {
    const list = [...this.state.users, this.state.user];
    console.log(list);
    this.setState({ users: list });
    this.loadUser();
  }

  rejectUser() {
    this.loadUser();
  }

  async loadUser() {
    this.setState({ isLoading: true });
    const httpRes = await fetch('https://randomuser.me/api/?results=1');
    const userRes = await httpRes.json();
    const name = userRes.results[0].name;
    const userName = `${name.first} ${name.last}`;
    this.setState({ isLoading: false, user: userName });
  }

  userRemovedHandler(userName) {
    const list = this.state.users.filter((name) => name !== userName);
    this.setState({ users: list });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Add task</h1>
          <p>{this.state.user}</p>
          <button onClick={() => this.acceptUser()} disabled={this.state.isLoading}>Accept</button>
          <button onClick={() => this.rejectUser()} disabled={this.state.isLoading}>Reject</button>
        </div>
        <hr />
        <div>
          {this.state.users.length > 0 &&
            <div>
              <h1>Users:</h1>
              {this.state.users.map((userName, index) =>
                <SingleUser key={index}
                  user={userName}
                  onUserRemoved={(name) => this.userRemovedHandler(name)} />)}
              <hr />
            </div>
          }
        </div>
        <div>
          {this.state.isLoading && <img src={logo} alt="loading...." className="App-logo" />}
        </div>
      </div>
    );
  }
}

export default UsersPage;