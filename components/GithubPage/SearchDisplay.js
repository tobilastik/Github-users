import React, { Component } from 'react';
import { View, Text, Button, Image, Linking, StyleSheet } from 'react-native';
import { ListItem, Content, List } from 'native-base';
import * as firebase from 'firebase';

// var currentUser;
class SearchDisplay extends Component {
	// addToFriends = async userName => {
	// 	currentUser = await firebase.auth().currentUser;

	// 	var databaseRef = await firebase
	// 		.database()
	// 		.ref(currentUser.uid)
	// 		.child('friends')
	// 		.push();

	// 	databaseRef
	// 		.set({
	// 			name: userName,
	// 		})
	// 		.catch(error);
	// };

	// getRepo = () => {
	// 	const userData = this.props.userData;
	// 	const searchUser = this.props.searchUser;
	// 	if (searchUser == undefined) {
	// 		alert('Please Enter a User Name');
	// 	} else {
	// 	}
	// 	if (searchUser || userData) {
	// 		Linking.openURL(userData.html_url);
	// 	}
	// };
	render() {
		const userData = this.props.userData;
		return (
			<Content>
				<ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Image source={{ uri: userData.avatar_url }} style={{ height: 200, width: 200 }} />
				</ListItem>

				<List style={{ backgroundColor: 'white' }}>
					<ListItem itemDivider>
						<Text>Name</Text>
					</ListItem>
					<ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View>
							<Text>{userData.name}</Text>
						</View>
						<View>
							<Button onPress={() => {}} title="Add Friends" />
							{/* <Button onPress={() => this.getRepo()} title="Github Link" style={styles.button} /> */}
						</View>
					</ListItem>
					<ListItem itemDivider>
						<Text>Public Repos</Text>
					</ListItem>
					<ListItem>
						<Text>{userData.public_repos}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Bio</Text>
					</ListItem>
					<ListItem>
						<Text>{userData.bio}</Text>
					</ListItem>
				</List>
			</Content>
		);
	}
}

export default SearchDisplay;

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		color: 'white',
	},
});
