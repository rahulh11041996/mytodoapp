import React, { Component } from 'react';
import styles from './update.module.css'

export default class Update extends Component {

    /**
     * Update edited data 
     */
    onUpdate = () => {
        this.props.onUpdate();
    }

    /**
     * Canceling the edit mode 
     */
    onCancel = () => {
        this.props.onCancel();
    }

    render() {
        return (
            <div className={styles.icons_container}>
                <button onClick={this.onUpdate} className={`${styles.icon_button} ${styles.icon_button_edit}`}><i className="fas fa-check"></i></button>
                <button onClick={this.onCancel} className={`${styles.icon_button} ${styles.icon_button_delete}`}><i className="fas fa-times"></i></button>
            </div>
        )
    }
}
