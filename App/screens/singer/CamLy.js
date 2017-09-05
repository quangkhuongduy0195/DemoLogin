
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  BackAndroid,
  StatusBar,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../component/Header';

class MainView extends Component {
    static navigationOptions = {
        tabBarLabel: 'Cẩm Ly'
    };

  render() {
    console.log('mainview', this.props);

    return (
      <View style={styles.container} >
        <Header style={{ height: 64 }} {...this.props} />
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default connect(
  state => {
    return {
    }
  },
  dispatch => {
    return {

    }
  }
)(MainView);


