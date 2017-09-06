
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from './screens/Login';
import MainView from './screens/MainView';
import ViewVideo from './screens/ViewVideo';
import LeftMenu from './component/LeftMenu';
import UngHoangPhuc from './screens/singer/UngHoangPhuc';
import CamLy from './screens/singer/CamLy';
import ChiDan from './screens/singer/ChiDan';
import Test1 from './screens/google-analytics/test1';
import Test2 from './screens/google-analytics/test2';
import Test3 from './screens/google-analytics/test3';
import Test4 from './screens/google-analytics/test4';
import LoginReducer from './Reducer/LoginReducer';
import MenuReducer from './Reducer/MenuReducer';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Login } from './Action/ActionLogin';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
    AsyncStorage,
} from 'react-native';

const ScreensTabNavigator = TabNavigator(
    {
        MainView: { screen: MainView },
        ChiDan: { screen: ChiDan },
        UngHoangPhuc: { screen: UngHoangPhuc },
        // CamLy: { screen: CamLy },

    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFA726',
            pressColor: '#EF6C00',
            showIcon: true,
            iconStyle: { width: 30, height: 30, marginTop: 20, padding: 0 },
            tabStyle: { height: 64 },
            activeBackgroundColor: '#FF5722',
            style: {
                backgroundColor: '#FF5722',
            },
            indicatorStyle: {
                backgroundColor: '#FFFFFF',
            },
            labelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
                marginBottom: 20
            }
        }
    }
);

const DrawerNavigatorMainView = DrawerNavigator(
    {
        MainView: { screen: ScreensTabNavigator }
    },
    {
        contentComponent: props => <LeftMenu {...props} />
    }
);

const Main = StackNavigator(
    {

        Main: {
            screen: DrawerNavigatorMainView,
            navigationOptions: {
                header: null,
            }
        },
        ViewVideo: { screen: ViewVideo },
        test1: { screen: Test1 },
        test2: { screen: Test2 },
        test3: { screen: Test3 },
        test4: { screen: Test4 },

    }

);

const ViewLogin = StackNavigator(
    {
        Login: { screen: LoginScreen }
    }
);

class App extends Component {

    _onNavigationStateChange = (prevState, newState) => {
        this.setState({ ...this.state, route_index: newState.routes[0].routes[0].routes[0].index });
    }

    render() {
        const { login, autoLogin } = this.props;
        if (login && autoLogin) {
            return (
                <Main onNavigationStateChange={this._onNavigationStateChange} screenProps={this.state} />
            );
        } else {
            return (
                <ViewLogin />
            );
        }
    }

    componentDidMount() {
        setTimeout(() => {
            AsyncStorage.getItem('key').then((value) => {
                switch (value) {
                    case 'true': {
                        if (value) {
                            this.props.Login(true);
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }).done();
        }, 250);
    }

}
export default connect(
    (state) => {
        return {
            login: state.login.login,
            autoLogin: state.login.autoLogin
        }
    },
    (dispatch) => {
        return {
            Login: (status) => dispatch(Login(status))
        }
    }
)(App);







