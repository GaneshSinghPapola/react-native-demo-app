import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZ2FuZXNoc2luZ2hwYXBvbGEiLCJhIjoiY2plNWJjdmJsM2U3ZzMyb2hwendoOGw3cyJ9.nVSmaCf5HZAC3w9ugAkb1Q');

export default class UserLocation extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            showUserLocation={true}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});