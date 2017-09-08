
export const getDataChiDan = () => {
    return {
        type: 'get-data-chidan'
    }
}
export const getDataChiDanSuccess = (dt) => {
    return {
        type: 'get-data-chidan-success',
        data: dt
    }
}

export const AsyncDataChiDan = () => {
    return dispatch => {
        dispatch(getDataChiDan());
        fetch('http://192.168.191.2/singer/tab.php?id=1', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataChiDanSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}


export const getDataLoadMoreChiDan = () => {
    return {
        type: 'get-load-more-chidan'
    }
}
export const getDataLoadMoreChiDanSuccess = (dt) => {
    return {
        type: 'get-data-load-more-chidan-success',
        data: dt
    }
}

export const AsyncLoadMoreChiDan = () => {
    return dispatch => {
        dispatch(getDataLoadMoreChiDan());
        fetch('http://192.168.191.2/singer/tab.php?id=0', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataLoadMoreChiDanSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}