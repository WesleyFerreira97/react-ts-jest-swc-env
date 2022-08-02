import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

export function Single() {
    return (
        <div className={styles.test}>
            <header className={styles.header_container}>
                <h1>Single</h1>
                <Link to="/">Go to Home</Link>
            </header>
        </div>
    )
}
