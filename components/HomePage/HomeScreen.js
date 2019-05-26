import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';

const backgroundImage = require('../../assets/images/background.png');

class HomeScreen extends Component {
	static navigationOptions = {
		header: null,
	};
	componentDidComponent() {
		firebase.auth().signInWithEmailAndPassword('rajioluwatobih@gmail.com', 'password!!!');
	}

	render() {
		return (
			<View style={styles.main}>
				<View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
					<Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
				</View>
				<Button block={true} onPress={() => this.props.navigation.navigate('Github')}>
					<Text style={{ color: 'white' }}> Search Github Clients </Text>
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: 'flex-end',
	},
});
export default HomeScreen;
