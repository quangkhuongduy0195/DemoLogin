
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
import Header from '../component/Header';
import { connect } from 'react-redux';
import { LinesLoader } from 'react-native-indicator';


class ViewVideo extends Component {

    static navigationOptions = {
        title: 'MainView',
        gesturesEnabled: false
    };
    render() {
        return (
            <View style={{ flex: 1, }} >
                
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


