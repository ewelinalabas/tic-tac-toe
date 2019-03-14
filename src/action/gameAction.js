const FETCH_ITEMS_LIST = "FETCH_ITEMS_LIST"

const fetchItemsList = data => {
    return {
        type: FETCH_ITEMS_LIST,
        payload: data
    }
}

// export const fetchItemsListAsync = () => {
//     return dispatch => {
//         return API.fetchItems().then(data => dispatch(fetchItemsList(data)))
//     }
// }