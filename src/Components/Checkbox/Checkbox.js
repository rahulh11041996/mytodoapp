import React, { Component } from 'react'
import './checkbox.css'

export default class Checkbox extends Component {

    /**
     * Toggling checkbox state and paasing the todo id to parent
     */
    toggleCheckbox = () => {
        this.props.onToggleStatus(this.props.todoId)
    }

    render() {
        return (
            <div className='checkbox'>
                <input type='checkbox' disabled={this.props.disabled ? true : false} onChange={this.toggleCheckbox} />
                <label>
                    <span></span>
                </label>
            </div>
        )
    }
}
