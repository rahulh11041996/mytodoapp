import React, { Component } from 'react';
import styles from './status.module.css'

export default class Status extends Component {
    render() {
        return (
            <div className={`${styles.default} ${this.props.status ? styles.completed : styles.pending}`}>
                {this.props.status ? 'Completed' : 'Pending'}
            </div>
        )
    }
}
