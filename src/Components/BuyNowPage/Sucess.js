import React from 'react'
import classes from './Sucess.module.css'
import { Link } from 'react-router-dom'

const Address = () => {
    return (
        <div className={classes.Sucess}>
            <h4>Thank you for shopping with us,Your order as been successfully placed. </h4>
            <Link to="/"><button >Continue Shopping</button></Link>
        </div>
    )
}

export default Address
