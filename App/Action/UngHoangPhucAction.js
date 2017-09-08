
export const getDataUngHoangPhuc = () => {
    return {
        type: 'get-data-unghoangphuc'
    }
}
export const getDataUngHoangPhucSuccess = (dt) => {
    return {
        type: 'get-data-unghoangphuc-success',
        data: dt
    }
}

export const AsyncDataUngHoangPhuc = () => {
    return dispatch => {
        dispatch(getDataUngHoangPhuc());
        fetch('http://192.168.191.2/singer/tab.php?id=2', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataUngHoangPhucSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}


export const getDataLoadMoreUngHoangPhuc = () => {
    return {
        type: 'get-load-more-unghoangphuc'
    }
}
export const getDataLoadMoreUngHoangPhucSuccess = (dt) => {
    return {
        type: 'get-data-load-more-unghoangphuc-success',
        data: dt
    }
}

export const AsyncLoadMoreUngHoangPhuc = () => {
    return dispatch => {
        dispatch(getDataLoadMoreUngHoangPhuc());
        fetch('http://192.168.191.2/singer/tab.php?id=0', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataLoadMoreUngHoangPhucSuccess(dataJson));
            })
            .catch(function (err) {
                console.log('err', err);
            });
    }
}