
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
    RefreshControl,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import { LinesLoader } from 'react-native-indicator';
import { AsyncDataUngHoangPhuc, AsyncLoadMoreUngHoangPhuc } from '../../Action/UngHoangPhucAction';

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
        if (newProps.screenProps !== null) {
            if (newProps.screenProps.route_index === 2 && !this.props.flag) {
                this.props.asyncDataUngHoangPhuc();
            }
        }
    }
    contentData = ({ item, index }) => {
        const { dataSinger } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
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
        this.props.asyncDataUngHoangPhuc()
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
            <View style={{ flex: 1 }} >
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
                        onEndReachedThreshold={0.01}
                        onEndReached={() => {
                            this.props.asyncLoadMoreUngHoangPhuc()
                        }}
                        style={{ marginTop: 15, marginBottom: 15 }}
                        data={this.props.dataSinger}
                        renderItem={this.contentData}
                        keyExtractor={(item, index) => index}
                    />
                    {this._loadMore()}
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
            flag: state.UngHoangPhuc.flag,
            refresh: state.UngHoangPhuc.refresh,
            isLoadMore: state.UngHoangPhuc.isLoadMore,
        }
    },
    dispatch => {
        return {
            asyncDataUngHoangPhuc: () => dispatch(AsyncDataUngHoangPhuc()),
            asyncLoadMoreUngHoangPhuc: () => dispatch(AsyncLoadMoreUngHoangPhuc())
        }
    }
)(MainView);


