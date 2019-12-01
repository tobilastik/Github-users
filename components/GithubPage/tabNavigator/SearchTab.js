import React, {Component} from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import {Container, Content} from 'native-base';
import SearchBar from '../SearchBar';
import SearchDisplay from '../SearchDisplay';

class SearchTab extends Component {
  state = {
    searchUser: '',
    userData: {},
    users: false,
  };
  userSearch = () => {
    Keyboard.dismiss ();

    const userName = this.state.searchUser.toLowerCase ();
    var client_id = 'bf2528709dca0db4823d';
    var client_secret = '736320a9f54fdd5e26f90ef773eb1f1e291dc7db';
    var url = `https://api.github.com/users/${userName}?client_id='${client_id}'&client_secret='${client_secret}'`;

    fetch (url, {
      headers: new Headers ({
        'User-agent': 'Mozilla/4.0 Custom User Agent',
      }),
    })
      .then (response => response.json ())
      .then (data => {
        //var data = response.data.data[0] ? response.data.data[0] : false;
        console.log (data);
        if (data) {
          this.setState ({
            userData: data,
            users: true,
          });
        }
      })
      .catch (error => {
        this.setState ({
          users: false,
        });
      });
  };
  renderUsers = () => {
    if (this.state.userData) {
      return <SearchDisplay userData={this.state.userData} />;
    } else if (message == 'Not Found') {
      alert ('No such user exist');
    }
  };
  render () {
    return (
      <Container>
        <SearchBar
          value={this.state.searchUser}
          onChangeText={searchUser => {
            this.setState ({searchUser});
          }}
          userSearch={this.userSearch}
        />
        <Content>{this.renderUsers ()}</Content>
      </Container>
    );
  }
}

export default SearchTab;
