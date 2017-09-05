
export const getData = () => {
    return {
        type: "getData"
    }
}

export const getDataSuccess = (dt) => {
    return {
        type: "LoadData",
        data: dt
    }
}


export const AsyncLoadData = () => {
    return dispatch => {
        dispatch(getData());
        fetch('http://10.1.12.239/singer/data.php?pages=0', { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getDataSuccess(dataJson));
            })
            .catch(function (err) {
                // Error :(
                console.log('err', err);
            });
    }
}

export const getMore = () => {
    return {
        type: 'getMore',
    }

}

export const getMoreData = (dataJson, page) => {
    return {
        type: 'LoadMore',
        data: dataJson,
        pages: page
    }

}

export const AsyncLoadMore = (pages) => {
    return dispatch => {
        dispatch(getMore());
        fetch('http://10.1.12.239/singer/data.php?pages=' + pages, { method: 'get' })
            .then((response) => response.json())
            .then((dataJson) => {
                dispatch(getMoreData(dataJson, pages));
            })
            .catch(function (err) {
                // Error :(
                console.log('err', err);
            });
    }
}

export const selectItem = (singer,link) => {
    return {
        type: 'select',
        singer: singer,
        link: link
    }
}

