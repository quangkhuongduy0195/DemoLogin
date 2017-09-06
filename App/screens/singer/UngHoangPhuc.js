
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    BackHandler,
    Alert,
    BackAndroid,
    StatusBar,
    Image,
    Dimensions,
    ScrollView,
    RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { AsyncDataUngHoangPhuc } from '../../Action/UngHoangPhucAction';

class MainView extends Component {

    static navigationOptions = {
        tabBarLabel: 'Ưng Hoàng Phúc',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../icon/unghoangphuc.jpg')}
                style={[styles.icon]}
            />
        ),
    };

    componentWillReceiveProps(newProps) {
        if (newProps.screenProps.route_index === 2 && !this.props.flag) {
            this.props.asyncDataUngHoangPhuc();
        }
    }
    contentData = () => {

        if (this.props.dataSinger !== null) {
            const { dataSinger } = this.props;
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                    <View>
                        <Image style={{ width: 200, height: 200, borderRadius: 100 }} source={{ uri: this.props.dataSinger.IMAGE }} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#000' }}>{dataSinger.NAME}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: '#000', paddingLeft: 16, paddingRight: 16 }}>{dataSinger.COMMENT}</Text>
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <Text>No data</Text>
                </View>
            );
        }
    }
    render() {


        return (
            <View style={{ flex: 1 }} >
                <Header style={{ height: 64 }} {...this.props} />
                <View style={styles.container}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                            />
                        }
                    >
                        {this.contentData()}
                    </ScrollView>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
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
    icon: {
        width: 25,
        height: 25
    }
});
export default connect(
    state => {
        return {
            dataSinger: state.UngHoangPhuc.data,
            flag: state.UngHoangPhuc.flag
        }
    },
    dispatch => {
        return {
            asyncDataUngHoangPhuc: () => dispatch(AsyncDataUngHoangPhuc())
        }
    }
)(MainView);


