import React from 'react'
import classes from './Title.module.css'
const Title = (props) => {
    return (
        <div className={classes.Title}>
            <h1 >
                {props.name}<strong style={{ color: "blue" }}> {props.title}</strong>
            </h1>
        </div>
    )
}

export default Title
