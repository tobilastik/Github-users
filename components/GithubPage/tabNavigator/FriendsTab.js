import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class FriendsTab extends Component {
	render() {
		return (
			<View style={styles.mainView}>
				<Text style={{ color: 'black' }}> Add Friends Feature coming soon! </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default FriendsTab;
