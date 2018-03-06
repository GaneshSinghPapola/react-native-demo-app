import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';

import logoImg from '../assets/images/back.png';

export default class BackImage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});