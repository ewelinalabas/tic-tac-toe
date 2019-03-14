import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row extends Component {
    render() {
        return (
            <tr>
                {this.props.fields.map(f => <Field mark={f.mark} />)}
            </tr>
        )
    }
};

class Field extends Component {
    render() {
        return (
            <td
                style={{ border: '1px solid black', width: '30px', height: '30px' }}
                onClick={() => console.log("aaa")}
            >
                {this.props.mark}
            </td>
        )
    }
};

class BoardPure extends Component {
    render() {
        return (
            <table>
                {this.props.board.map(r => <Row fields={r} />)}
            </table>
        )
    }
}

export const Board = connect(
    state => ({ board: state }),
    //dispatch => ({
    //     fetchItems: () => dispatch(fetchItemsListAsync())
    // })
)(BoardPure)