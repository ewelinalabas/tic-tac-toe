const UPDATE_BOARD = "UPDATE_BOARD"

export const updateBoard = (row, column, mark) => {
    return {
        type: UPDATE_BOARD,
        row,
        column,
        mark
    }
}
// export const fetchItemsListAsync = () => {
//     return dispatch => {
//         return API.fetchItems().then(data => dispatch(fetchItemsList(data)))
//     }
// }