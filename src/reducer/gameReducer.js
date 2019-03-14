const initialState = [
    [{mark: null}, {mark: null}, {mark: null}],
    [{mark: null}, {mark: null}, {mark: null}],
    [{mark: null}, {mark: null}, {mark: null}]
]

const updateField = (row, column, mark, board) => {
    let newBoard = [...board]
    newBoard[row][column].mark = mark
    return newBoard
}

export const gameReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'UPDATE_BOARD':
            return updateField(action.row, action.column, action.mark, state);
        default: 
            return state;
    }
}