
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { LinesLoader } from 'react-native-indicator';

import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

let tracker1 = new GoogleAnalyticsTracker('UA-105991151-1');

class Test4 extends Component {
    componentDidMount(){
        tracker1.trackScreenView('ViewTest4');
    }

    render() {
        return (
            <View style={styles.container} >
                <Button title='Ung Hoang Phuc' onPress={()=>{}}/>
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
)(Test4);


