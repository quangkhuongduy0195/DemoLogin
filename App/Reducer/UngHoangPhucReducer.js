let DataUngHoangPhuc = {
    data: null,
    flag: false,
    refresh: true,
    isLoadMore: false
}

export default UngHoangPhucReducer = (state = DataUngHoangPhuc, action) => {
    switch(action.type){

        case 'get-data-unghoangphuc-success':{
            const newData = action.data;
            return {...state,data: newData, flag: true, refresh: false};
        }
        case 'get-data-unghoangphuc':{
            return {...state, refresh: true};
        }
        case 'get-load-more-unghoangphuc': {
            return {...state, isLoadMore: true};
        }
        case 'get-data-load-more-unghoangphuc-success': {
            return {...state, isLoadMore: false};
        }

        default: {
            return state;
        }
    }
}