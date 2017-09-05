
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  BackAndroid,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';
import { LinesLoader } from 'react-native-indicator';


class MainView extends Component {

  static navigationOptions = {
    tabBarLabel: 'Bùi Anh Tuấn',
    title: 'MainView',
    headerLeft: null,
    header: null,
    gesturesEnabled: false,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../icon/buianhtuan.png')}
      />
    ),
  };
  _loading = () => {
    const { width, height } = Dimensions.get('window');
    const { refresh } = this.props;
    if (refresh) {
      return (
        <View style={[styles.overlay, { width: width, height: height }]} >
          <LinesLoader color="#FF9800" />
        </View>
      );
    } else {
      return null;
    }

  }

  render() {
    console.log('mainview', this.props);

    return (
      <View style={{ flex: 1, }} >
        <StatusBar
          hidden={true}
          backgroundColor="#FF5722"
          barStyle="light-content"
        />
        <Header style={{ height: 64 }} {...this.props} />
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Main View
          </Text>
        </View>
        {this._loading()}
      </View>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function () {
      // ShowAlertDialog();

      Alert.alert(
        '',
        'Do you want close app?',
        [
          {
            text: 'No', onPress: () => {
              // goBack(null)
              return false;
            }, style: 'cancel'
          },

          {
            text: 'Yes', onPress: () => {
              BackHandler.exitApp()
              return true;
            }, style: 'destructive'
          },

        ]
      )

      return true;
    });
  }



  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.ShowAlertDialog);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    
  }  
  componentDidUpdate(prevProps, prevState) {
    if(!this.props.refresh && this.props.singer !== ''){
      this.props.navigation.navigate("ViewVideo", {singer: this.props.singer, link: this.props.link});
    }
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default connect(
  state => {
    return {
      refresh: state.menu.refresh,
      singer: state.menu.singer,
      link: state.menu.link
    }
  },
  dispatch => {
    return {

    }
  }
)(MainView);


