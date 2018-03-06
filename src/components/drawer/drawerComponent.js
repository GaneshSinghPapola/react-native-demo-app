import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

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

class DrawerContent extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Drawer Content</Text>
        <Button onPress={Actions.closeDrawer}>Back</Button> */}
        <Text>Title: tab1 </Text>

        <Button >Switch to tab4</Button>
        <Button >Switch to tab5 with data</Button>
        <Button >Push Clone Scene (EchoView)</Button>
      </View >
    );
  }
}

export default DrawerContent;





// {

// import { View, StyleSheet } from 'react-native';
// import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

// import { Avatar, Drawer, Toolbar } from '../react-native-material-ui';
// import Container from '../Container';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width: 260,
//         elevation: 4,
//         backgroundColor: 'white',
//     },
// });

// const propTypes = {
//     navigation: PropTypes.shape({
//         goBack: PropTypes.func.isRequired,
//     }).isRequired,
// };

// class DrawerSpec extends Component {
//     render() {
//         return (
//             <Container>
//                 <Toolbar
//                     leftElement="arrow-back"
//                     onLeftElementPress={() => this.props.navigation.goBack()}
//                     centerElement="Dialog"
//                 />
//                 <View style={styles.container}>
//                     <Drawer>
//                         <Drawer.Header >
//                             <Drawer.Header.Account
//                                 avatar={<Avatar text="A" />}
//                                 accounts={[
//                                     { avatar: <Avatar text="B" />, key: 'b' },
//                                     { avatar: <Avatar text="C" />, key: 'c' },
//                                 ]}
//                                 footer={{
//                                     dense: true,
//                                     centerElement: {
//                                         primaryText: 'Reservio',
//                                         secondaryText: 'business@email.com',
//                                     },
//                                     rightElement: 'arrow-drop-down',
//                                 }}
//                             />
//                         </Drawer.Header>
//                         <Drawer.Section
//                             divider
//                             items={[
//                                 { icon: 'bookmark-border', value: 'Notifications' },
//                                 { icon: 'today', value: 'Calendar', active: true },
//                                 { icon: 'people', value: 'Clients' },
//                             ]}
//                         />
//                         <Drawer.Section
//                             title="Personal"
//                             items={[
//                                 { icon: 'info', value: 'Info' },
//                                 { icon: 'settings', value: 'Settings' },
//                             ]}
//                         />
//                     </Drawer>
//                 </View>
//             </Container>
//         );
//     }
// }

// DrawerSpec.propTypes = propTypes;

// export default DrawerSpec;}
