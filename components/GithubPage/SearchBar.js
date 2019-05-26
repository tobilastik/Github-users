import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

class SearchBar extends Component {
	render() {
		return (
			<Header style={{ height: 80 }} searchBar rounded>
				<Item>
					<Icon name="ios-search" />
					<Input
						placeholder="Enter Username"
						onChangeText={this.props.onChangeText}
						returnKeyType="search"
						onSubmitEditing={this.props.userSearch}
					/>
				</Item>
			</Header>
		);
	}
}

export default SearchBar;
