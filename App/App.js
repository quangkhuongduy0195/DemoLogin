
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import MainView from './screens/MainView';
import ViewVideo from './screens/ViewVideo';
import LeftMenu from './component/LeftMenu';
import UngHoangPhuc from './screens/singer/UngHoangPhuc';
import CamLy from './screens/singer/CamLy';
import ChiDan from './screens/singer/ChiDan';
import LoginReducer from './Reducer/LoginReducer';
import MenuReducer from './Reducer/MenuReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const store = createStore(combineReducers({ menu: MenuReducer, login: LoginReducer }), {}, applyMiddleware(thunk));

const MainScreenNavigator = TabNavigator(
    {
        MainView: { screen: MainView },
        ChiDan: { screen: ChiDan },
        UngHoangPhuc: { screen: UngHoangPhuc },
        // CamLy: { screen: CamLy },
       
    },
    {
        // tabBarPosition: 'bottom'
    }
);

const DrawerNavigatorMainView = DrawerNavigator(
    {
        MainView: { screen: MainScreenNavigator }
    },
    {
        contentComponent: props => <LeftMenu {...props} />
    }
);

const SimpleApp = StackNavigator(
    {
        Login: { screen: Login },
        Main: {
            screen: DrawerNavigatorMainView,
            navigationOptions: {
                header: null,
            }
        },
        ViewVideo: { screen: ViewVideo },
    }

);



export default class App extends Component {

    render() {
        // console.log('App',store.getState());
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}







