import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    Easing,
    AsyncStorage,
    StatusBar
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from '../Styles/styles';
import { connect } from 'react-redux';
import { AutoLogin, Login } from '../Action/ActionLogin';

class ComponentLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleAnim: new Animated.Value(0),
            atLogin: this.props.autoLoginStatus
        }
    }


    componentDidMount() {
        const { navigate } = this.props;
        Animated.spring(this.state.scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            AsyncStorage.getItem('key').then((value) => {
                switch (value) {
                    case 'true': {
                        if (value) {
                            navigate('Main')
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }).done();
        }, 500);
    }

    shouldComponentUpdate(nextProps, nextState) {

        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }
    componentDidUpdate(prevProps, prevState) {
        // const { autoLoginStatus, navigate, loginStatus } = this.props;
        // if (autoLoginStatus, loginStatus) {
        //     navigate('Main')
        // }
    }

    render() {
        const { scaleAnim } = this.state;
        const { Login, AutoLogin, navigate } = this.props;
        var { autoLoginStatus } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    backgroundColor="#E1F5FE"
                    barStyle="light-content"
                />
                <Animated.View style={{
                    transform: [{ scale: scaleAnim }]
                }}>
                    <TouchableOpacity style={styles.touchableOpacityLogin} onPress={() => navigate('Main')}>
                        <Text style={styles.login}>
                            Login
                        </Text>
                    </TouchableOpacity >

                    <CheckBox
                        label={'Auto login'}
                        labelStyle={{ fontSize: 16, color: 'black', margin: 10 }}
                        checkboxStyle={{ width: 16, height: 16 }}
                        containerStyle={{ justifyContent: 'center', }}
                        underlayColor='transparent'
                        checked={this.state.atLogin}
                        onChange={(checked) => {
                            AutoLogin(checked);
                            this.setState({
                                ...this.state, atLogin: !checked
                            });
                            try {
                                AsyncStorage.setItem('key', `${!checked}`);
                            } catch (error) {
                                console.log("Error saving data");
                            }
                        }}
                    />
                </Animated.View>
            </View>

        );
    }

}

export default connect(

    state => {
        return {
            autoLoginStatus: state.autoLogin,
            loginStatus: state.login
        }
    },
    dispatch => {
        return {
            Login: (status) => dispatch(Login(status)),
            AutoLogin: (status) => dispatch(AutoLogin(status))
        }
    }

)(ComponentLogin);

