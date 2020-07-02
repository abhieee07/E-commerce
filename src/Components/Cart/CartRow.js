import React from 'react'
import classes from './cartRow.module.css'

const cartRow = () => {
    return (
        <div className={classes.row}>
            <p>product</p>
            <p>name of product</p>
            <p>price</p>
            <p>quantity</p>
            <p>remove</p>
            <p>total</p>
        </div>
    )
}

export default cartRow
