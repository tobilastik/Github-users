import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import SearchTab from '../GithubPage/tabNavigator/SearchTab';
import FriendsTab from '../GithubPage/tabNavigator/FriendsTab';
import { Footer, FooterTab, Button, Icon } from 'native-base';

const GithubTabNavigator = createBottomTabNavigator(
	{
		SearchTab: { screen: SearchTab },
		FriendsTab: { screen: FriendsTab },
	},

	{
		tabBarPosition: 'bottom',
		tabBarComponent: props => {
			return (
				<Footer>
					<FooterTab>
						<Button
							vertical
							active={props.navigation.state.index === 0}
							onPress={() => props.navigation.navigate('SearchTab')}
						>
							<Icon name="logo-github" />
							<Text>Search User</Text>
						</Button>

						<Button
							vertical
							active={props.navigation.state.index === 1}
							onPress={() => props.navigation.navigate('FriendsTab')}
						>
							<Icon name="contacts" />
							<Text>Friends</Text>
						</Button>
					</FooterTab>
				</Footer>
			);
		},
	}
);

const AppContainer = createAppContainer(GithubTabNavigator);

export default AppContainer;
