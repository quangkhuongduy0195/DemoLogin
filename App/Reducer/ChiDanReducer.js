let DataChiDan = {
    data: null,
    flag: false,
    refresh: true,
    isLoadMore: false
}

export default ChiDanReducer = (state = DataChiDan, action) => {
    switch(action.type){

        case 'get-data-chidan-success':{
            const newData = action.data;
            return {...state,data: newData, flag: true, refresh: false};
        }
        case 'get-data-chidan':{
            return {...state, refresh: true};
        }
        case 'get-load-more-chidan': {
            return {...state, isLoadMore: true};
        }
        case 'get-data-load-more-chidan-success': {
            return {...state, isLoadMore: false};
        }

        default: {
            return state;
        }
    }
}