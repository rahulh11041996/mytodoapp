import React, { Component } from 'react';
import Container from '../Container/Container';
import styles from './header.module.css'

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Container>
                    <h1>My Todo App</h1>
                </Container>
            </header>
        );
    }
}
