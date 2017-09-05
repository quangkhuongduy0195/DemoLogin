
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { connect } from 'react-redux';
import ComponentLogin from '../component/componentLogin'
import LoginReducer from '../Reducer/LoginReducer';

// import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// const store = createStore(LoginReducer);

 class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerBackTitle: null,
    header: null,
  });

  render() { 
    // console.log('Login',this.props);
    return (
        <ComponentLogin navigate={this.props.navigation.navigate}/>
    );
  }
}

export default connect()(Login);