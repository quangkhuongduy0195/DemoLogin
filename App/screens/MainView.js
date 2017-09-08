
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
  Image,
  Button,
  FlatList,
  RefreshControl,
  AppState
} from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';
import { LinesLoader } from 'react-native-indicator';
import { AsyncDataBuiAnhTuan, AsyncLoadMoreBuiAnhTuan } from '../Action/BuiAnhTuanAction';

import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

// The tracker must be constructed, and you can have multiple:
let tracker1 = new GoogleAnalyticsTracker('UA-105991151-1');



class MainView extends Component {

  static navigationOptions = {
    tabBarLabel: 'Bùi Anh Tuấn',
    title: 'MainView',
    headerLeft: null,
    header: null,
    gesturesEnabled: false,
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Image
          source={require('../icon/buianhtuan.png')}
          style={[styles.icon]}
        />
      </View>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState
    }
  }

  _loading = () => {
    const { width, height } = Dimensions.get('window');
    const { refreshMenu, flag } = this.props;
    if (refreshMenu || !flag) {
      return (
        <View style={[styles.overlay, { width: width, height: height }]} >
          <LinesLoader color="#FF9800" />
        </View>
      );
    } else {
      return null;

    }
  }

  componentWillReceiveProps(newProps) {

  }

  contentData = ({ item, index }) => {
    const { dataSinger } = this.props;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <View>
          <Image style={{ width: 200, height: 200, borderRadius: 100 }} source={{ uri: item.IMAGE }} />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#000' }}>{item.NAME}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 26, textAlign: 'justify', color: '#000', paddingLeft: 16, paddingRight: 16 }}>{item.COMMENT}</Text>
        </View>
      </View>
    );
  }
  _refresfData = () => {
    tracker1.trackScreenView('ハロー');
    tracker1.trackEvent('イベントグループ', 'イベント', { label: 'イベントラベル' });
    tracker1.trackEvent('事件组', '事件', { label: '事件标签' });
    tracker1.trackEvent('กลุ่มเหตุการณ์', 'เหตุการณ์', { label: 'ป้ายกำกับเหตุการณ์' })
    this.props.asyncDataBuiAnhTuan();
  }

  _loadMore = () => {
    if (this.props.isLoadMore) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <LinesLoader color='#FF5722' />
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, }} >
        <StatusBar
          hidden={true}
          backgroundColor="#FF5722"
          barStyle="light-content"
        />
        <Header style={{ height: 64 }} {...this.props} />
        <View style={styles.container}>
          <FlatList

            refreshControl={
              <RefreshControl
                colors={['#2196F3', '#F44336', '#FFEB3B']}
                refreshing={this.props.refresh}
                onRefresh={this._refresfData}
              />
            }
            onEndReachedThreshold={0.001}
            onEndReached={() => {
              this.props.asyncLoadMoreBuiAnhTuan()
            }}
            style={{ marginTop: 15, marginBottom: 15, height: 300 }}
            data={this.props.dataSinger}
            renderItem={this.contentData}
            keyExtractor={(item, index) => index}
          />
        </View>
        {this._loading()}
        {this._loadMore()}
      </View>
    );
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
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
    AppState.removeEventListener('change', this._handleAppStateChange);
    BackHandler.removeEventListener('hardwareBackPress', this.ShowAlertDialog);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.refresh && this.props.singer !== '') {
      this.props.navigation.navigate("ViewVideo", { singer: this.props.singer, link: this.props.link });
    }

    if (!this.props.flag) {
      this.props.asyncDataBuiAnhTuan();
    }
  }



  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.asyncDataBuiAnhTuan();
    } else if (this.state.appState.match(/inactive|background/) && nextAppState === 'background') {

    }
    this.setState({ appState: nextAppState });
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
  },
  icon: {
    width: 25,
    height: 25
  }
});
export default connect(
  state => {
    return {
      refreshMenu: state.menu.refresh,
      singer: state.menu.singer,
      link: state.menu.link,
      dataSinger: state.BuiAnhTuan.data,
      flag: state.BuiAnhTuan.flag,
      refresh: state.BuiAnhTuan.refresh,
      isLoadMore: state.BuiAnhTuan.isLoadMore
    }
  },
  dispatch => {
    return {
      asyncDataBuiAnhTuan: () => dispatch(AsyncDataBuiAnhTuan()),
      asyncLoadMoreBuiAnhTuan: () => dispatch(AsyncLoadMoreBuiAnhTuan())
    }
  }
)(MainView);


