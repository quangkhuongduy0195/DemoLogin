
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import PropTypes from 'prop-types';


export default class Header extends Component {

  showLeftMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  pushSettings = () => {
    this.props.navigation.navigate('DrawerOpen');
  }


  render() {
    console.log('LeftMenu', this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showLeftMenu}>
          <Image style={styles.image} source={require('../icon/ic_view.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.title}</Text>

        <TouchableOpacity onPress={this.pushSettings}> 
          <Image style={styles.image} source={require('../icon/ic_settings.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

Header.defaultProps = {
  title: 'Main View'
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 10,
    paddingRight: 10,
    height: 64,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF5722',
  },
  title: {
    fontSize: 18,
    color: '#FAFAFA',
    fontWeight: 'bold'
  },
  image : {
    width: 24,
    height: 24, 
    tintColor: '#FFFFFF'
  },

});

