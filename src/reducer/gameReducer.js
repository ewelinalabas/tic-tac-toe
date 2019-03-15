import { getKeyByValue } from '../utils/object';

const initialState = {
  board: [
    [{ mark: null }, { mark: null }, { mark: null }],
    [{ mark: null }, { mark: null }, { mark: null }],
    [{ mark: null }, { mark: null }, { mark: null }]
  ],
  currentTurn: true
}

const updateField = (row, column, mark, state) => {
  let newBoard = [...state.board]
  newBoard[row][column].mark = mark
  validateWin(newBoard)
  return { ...state, board: newBoard, currentTurn: !state.currentTurn }
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

const checkLine = line => {
  const countedMarks =
    line
      .map(f => f.mark)
      .filter(m => m != null)
      .reduce((marks, m) => {
        marks[m] ? marks[m] += 1 : marks[m] = 1;
        return marks
      }, {});

  return getKeyByValue(countedMarks, 3)
}

const validateWin = board => {
  const winner = board.map(checkLine).filter(el => el)[0]
  console.log(`Winner is ${winner}`)
}