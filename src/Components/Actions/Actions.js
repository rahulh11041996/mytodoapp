import React, { Component } from 'react';
import styles from './actions.module.css'

export class Actions extends Component {

    /**
     * On delete button click 
     */
    onDeleteClick = () => {
        this.props.onDeleteTodo();
    }

    /**
     * On edit button click
     */
    onEditClick = () => {
        this.props.onEditTodo();
    }

    render() {
        return (
            <div className={styles.icons_container}>
                <button disabled={this.props.isEditMode || this.props.status ? true : false} onClick={this.onEditClick} className={`${styles.icon_button} ${styles.icon_button_edit}`}><i className="fas fa-edit"></i></button>
                <button disabled={this.props.isEditMode ? true : false} onClick={this.onDeleteClick} className={`${styles.icon_button} ${styles.icon_button_delete}`}><i className="fas fa-trash-alt"></i></button>
            </div>
        )
    }
}

