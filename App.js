import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomePage/HomeScreen';
import GithubTabNavigator from './components/GithubPage/GithubTabNavigator';
import * as firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyAcxhGmoUuTk6pUcQdqjWAie3bb9JnUonA',
	authDomain: 'github-users-a3e1e.firebaseapp.com',
	databaseURL: 'https://github-users-a3e1e.firebaseio.com/',
	projectId: 'github-users-a3e1e',
	storageBucket: '',
	messagingSenderId: '136707994033',
};

firebase.initializeApp(firebaseConfig);

const AppSwitchNavigator = createStackNavigator({
	Welcome: { screen: HomeScreen },
	Github: { screen: GithubTabNavigator },
});

GithubTabNavigator.navigationOptions = {
	// Hide the header from AppNavigator stack
	header: null,
};

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
