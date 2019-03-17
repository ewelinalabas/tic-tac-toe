import { getKeyByValue } from '../utils/object';
import { transpose } from '../utils/array';

const initialState = {
  board: [
    [{ mark: null }, { mark: null }, { mark: null }],
    [{ mark: null }, { mark: null }, { mark: null }],
    [{ mark: null }, { mark: null }, { mark: null }]
  ],
  currentTurn: true,
  winner: null
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

const updateField = (row, column, mark, state) => {
  const newBoard = [...state.board]
  newBoard[row][column].mark = mark
  const winner = validateWin(newBoard)
  return { ...state, board: newBoard, currentTurn: !state.currentTurn, winner: winner }
}

const checkLine = line => {
  const countedMarks =
    line
      .map(f => f.mark)
      .filter(m => m)
      .reduce((marks, m) => {
        marks[m] ? marks[m] += 1 : marks[m] = 1;
        return marks
      }, {});
      
  return getKeyByValue(countedMarks, 3)
}

const validateWin = board => {
  const validatedRows = board.map(checkLine)
  const validatedColumns = transpose(board).map(checkLine)
  const validatedCrosses = [[board[0][0], board[1][1], board[2][2]], [board[0][2], board[1][1], board[2][0]]].map(checkLine)
  const validatedAll = validatedRows.concat(validatedColumns).concat(validatedCrosses)
  const winner = validatedAll.filter(el => el)[0]
  return winner
}