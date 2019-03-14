import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from './action/gameAction'

class Row extends Component {
    render() {
        return (
            <tr>
                {this.props.fields.map((f, i) =>
                    <Field
                        mark={f.mark}
                        column={i}
                        row={this.props.row}
                        handleClick={this.props.handleClick}
                    />
                )}
            </tr>
        )
    }
};

class Field extends Component {
    render() {
        return (
            <td
                style={{ border: '1px solid black', width: '30px', height: '30px' }}
                onClick={() => {this.props.handleClick(this.props.row, this.props.column, this.props.mark)}}
            >
                {this.props.mark}
            </td>
        )
    }
};

class BoardPure extends Component {
    handleClick(row, column, mark) {
        this.props.makeDecision(row, column, mark)
    }

    render() {
        return (
            <table>
                {this.props.board.map((r, i) => <Row fields={r} row={i} handleClick={this.handleClick.bind(this)} />)}
            </table>
        )
    }
}

export const Board = connect(
    state => ({ board: state }),
    dispatch => ({
        makeDecision: (row, column, mark) => dispatch(updateBoard(row, column, mark))
    })
)(BoardPure)