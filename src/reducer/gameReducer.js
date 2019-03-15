const initialState = {
    board: [
        [{mark: null}, {mark: null}, {mark: null}],
        [{mark: null}, {mark: null}, {mark: null}],
        [{mark: null}, {mark: null}, {mark: null}]
    ],
    currentTurn: true
}

const updateField = (row, column, mark, state) => {
    let newBoard = [...state.board]
    newBoard[row][column].mark = mark
    return {...state, board: newBoard, currentTurn: !state.currentTurn}
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