
import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import LoginReducer from './Reducer/LoginReducer';
import MenuReducer from './Reducer/MenuReducer';
import UngHoangPhucReducer from './Reducer/UngHoangPhucReducer';
import BuiAnhTuanReducer from './Reducer/BuiAnhTuanReducer';
import ChiDanReducer from './Reducer/ChiDanReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ViewApp from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const store = createStore(combineReducers({
    menu: MenuReducer,
    login: LoginReducer,
    UngHoangPhuc: UngHoangPhucReducer,
    ChiDan: ChiDanReducer,
    BuiAnhTuan: BuiAnhTuanReducer
}),
    {}, applyMiddleware(thunk));


export default class App extends Component {

    render() {
        // console.log('App',store.getState());
        return (
            <Provider store={store}>
                <ViewApp />
            </Provider>
        );
    }
}







