
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
import { connect } from 'react-redux';
import Header from '../../component/Header';

class MainView extends Component {
    static navigationOptions = {
        tabBarLabel: 'Chi Dân',
        tabBarIcon: ({ tintColor }) => (
            <Image
                style={{ width: 26, height: 26, tintColor: tintColor}}
                source={require('../../icon/ic_settings.png')}
            />
        ),
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
        backgroundColor: 'red',
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


