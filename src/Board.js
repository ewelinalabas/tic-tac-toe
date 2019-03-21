import React, { Component } from 'react';
import './Board.css';
import { connect } from 'react-redux';
import { updateBoard, resetBoard } from './action/gameAction'

class Row extends Component {
  render() {
    return (
      <tr>
        {this.props.fields.map((f, i) =>
          <Field
            key={i}
            mark={f.mark}
            column={i}
            row={this.props.row}
            handleClick={this.props.handleClick}
            currentTurn={this.props.currentTurn}
          />
        )}
      </tr>
    )
  }
};

class Field extends Component {
  render() {
    const turnSign = this.props.currentTurn ? '†' : 'O';
    return (
      <td
        class="Field"
        onClick={() => {
          this.props.handleClick(this.props.row, this.props.column, this.props.mark, turnSign)
        }}
      >
        {this.props.mark}
      </td>
    )
  }
};

class EndGameMessage extends Component {
  render() {
    return (
      <h1>The winner is: {this.props.winner}</h1>
    )
  }
}

class ScoreTable extends Component {
  render() {
    return (
      <div>
        <h3>Scoreboard</h3>
        <p>†: {this.props.score.cross}</p>
        <p>O: {this.props.score.circle}</p>
      </div>
    )
  }
}

class BoardPure extends Component {
  handleClick(row, column, mark, currentSign) {
    if (!this.props.winner && !mark) { this.props.makeDecision(row, column, currentSign) }
  }

  render() {
    return (
      <div class="row">
        <div class="col-4">
          <ScoreTable score={this.props.score} />

          {this.props.winner ?
            <div>
              <EndGameMessage winner={this.props.winner} />
              <button type="button" onClick={this.props.resetGame}>New game</button>
            </div>
            : null
          }
        </div>
        <div class="col-8">
          <table>
            <tbody>
              {this.props.board.map((r, i) =>
                <Row
                  key={i}
                  fields={r}
                  row={i}
                  handleClick={this.handleClick.bind(this)}
                  currentTurn={this.props.currentTurn}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export const Board = connect(
  state => ({ board: state.board, currentTurn: state.currentTurn, winner: state.winner, score: state.score }),
  dispatch => ({
    makeDecision: (row, column, mark) => dispatch(updateBoard(row, column, mark)),
    resetGame: () => dispatch(resetBoard())
  })
)(BoardPure)