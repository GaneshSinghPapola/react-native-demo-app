import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class CustomNavBarView extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle ]}>
        <Button onPress={Actions.pop}>Back</Button>
        <Button>Welcome Page</Button>
        <Button >Switch to Scene with CustomNavBar #1</Button>
        <Button >Switch to Scene with CustomNavBar #2</Button>
        <Button >Switch to Scene with different CustomNavBar </Button>
        <Button >Switch to Scene with a navBar hidden</Button>
      </View>
    );
  }
}
CustomNavBarView.propTypes = propTypes;

export default CustomNavBarView;