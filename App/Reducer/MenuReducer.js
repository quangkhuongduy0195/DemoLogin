

let menu = {
    refresh: false,
    isLoadMore: false,
    pages:0,
    data: [], 
    singer: '',
    link: ''
}

const MenuReducer = (state = menu, action) => {
    const oldData = state.data;
    switch (action.type) {
        case 'LoadMore': {
            const newData = action.data;
            const mergeData = oldData.concat(newData);
            const newpages = action.pages;
            return {...state, data: mergeData, refresh: false, pages: newpages, isLoadMore: false, singer: ''};
        }
        case 'LoadData': {
            const newData = action.data;
            return {...state, data: newData, refresh: false, pages: 0, isLoadMore: false, singer: ''};
        }
        case 'getMore': {
            return {...state, refresh: false, isLoadMore: true};
        }
        case 'getData': {
            return {...state, refresh: true, isLoadMore: false, singer: ''};
        }
        case 'select': {
            return {...state, singer: action.singer, link: action.link }
        }
        default:
            return state;
    }
}
export default MenuReducer;