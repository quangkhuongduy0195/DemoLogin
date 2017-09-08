
export const getDataBuiAnhTuan = () => {
    return {
        type: 'get-data-buianhtuan'
    }
}
export const getDataBuiAnhTuanSuccess = (dt) => {
    return {
        type: 'get-data-buianhtuan-success',
        data: dt
    }
}

export const AsyncDataBuiAnhTuan = () => {
    return dispatch => {
        dispatch(getDataBuiAnhTuan());
        fetch('http://192.168.191.2/singer/tab.php?id=0', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataBuiAnhTuanSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}



export const getDataLoadMoreBuiAnhTuan = () => {
    return {
        type: 'get-load-more-buianhtuan'
    }
}
export const getDataLoadMoreBuiAnhTuanSuccess = (dt) => {
    return {
        type: 'get-data-load-more-buianhtuan-success',
        data: dt
    }
}

export const AsyncLoadMoreBuiAnhTuan = () => {
    return dispatch => {
        dispatch(getDataLoadMoreBuiAnhTuan());
        fetch('http://192.168.191.2/singer/tab.php?id=0', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataLoadMoreBuiAnhTuanSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}



