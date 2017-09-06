let DataUngHoangPhuc = {
    data: null,
    flag: false,
}

export default UngHoangPhucReducer = (state = DataUngHoangPhuc, action) => {
    switch(action.type){

        case 'get-data-unghoangphuc-success':{
            const newData = action.data;
            return {...state,data: newData, flag: true};
        }

        default: {
            return state;
        }
    }
}