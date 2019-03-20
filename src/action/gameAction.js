const UPDATE_BOARD = "UPDATE_BOARD"
const RESET_BOARD = "RESET_BOARD"

export const updateBoard = (row, column, mark) => {
    return {
        type: UPDATE_BOARD,
        row,
        column,
        mark
    }
}

export const resetBoard = () => {
    return {
        type: RESET_BOARD
    }
}
// export const fetchItemsListAsync = () => {
//     return dispatch => {
//         return API.fetchItems().then(data => dispatch(fetchItemsList(data)))
//     }
// }