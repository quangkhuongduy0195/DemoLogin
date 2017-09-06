
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    BackHandler,
    Alert,
    BackAndroid,
    StatusBar,
    Dimensions,
    WebView
} from 'react-native';
import Header from '../component/Header';
import { connect } from 'react-redux';
import { LinesLoader } from 'react-native-indicator';
// import VideoPlayer from 'react-native-video-controls';

import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

// The tracker must be constructed, and you can have multiple:
let tracker1 = new GoogleAnalyticsTracker('UA-105991151-1');

class ViewVideo extends Component {

    static navigationOptions = {
        title: 'MainView',
        gesturesEnabled: false
    };

    componentDidMount(){
        tracker1.trackScreenView('ViewVideo');
    }

    render() {
        var widthVideo = Dimensions.get('window').width-15;
        var heightVideo = Dimensions.get('window').height/3;
        const{params} = this.props.navigation.state;
        return (
            <View style={styles.container} >
                <WebView style={{width: widthVideo+15, height: heightVideo}} source ={{html:`<video controls width="${widthVideo}" height="${heightVideo}" ><source src="${params.link}" type="video/mp4"></video>`}} />
                <Button title='test1' onPress={()=>{ this.props.navigation.navigate("test1") }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
export default connect(
    state => {
        return {
            refresh: state.menu.refresh,
        }
    },
    dispatch => {
        return {

        }
    }
)(ViewVideo);


