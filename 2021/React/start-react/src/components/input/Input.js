import React from 'react';
import styles from './input.module.css'

export const Form  = () => {
    return(
        <form className = {styles.input}>
            <label>To-Do:</label>
            <input type="text" id="text"/>
            <button type="submit">Submit</button>
        </form>
    )
}
