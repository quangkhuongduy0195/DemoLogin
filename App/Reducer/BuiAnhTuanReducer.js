let DataBuiAnhTuan = {
    data: null,
    flag: false,
    refresh: true,
    isLoadMore: false
}

export default BuiAnhTuanReducer = (state = DataBuiAnhTuan, action) => {
    switch(action.type){

        case 'get-data-buianhtuan-success':{
            const newData = action.data;
            return {...state,data: newData, flag: true, refresh: false};
        }
        case 'get-data-buianhtuan':{
            return {...state, refresh: true};
        }

        case 'get-load-more-buianhtuan': {
            return {...state, isLoadMore: true};
        }
        case 'get-data-load-more-buianhtuan-success': {
            return {...state, isLoadMore: false};
        }

        default: {
            return state;
        }
    }
}