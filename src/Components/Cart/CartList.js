import React from 'react'
import classes from './CartList.module.css'
import CartItem from './CartItem'

const CartList = (props) => {
    return (
        <div className={classes.CartList}>
            {props.value.map(item => <CartItem key={item.id} value={item} />
            )}
        </div>
    )
}

export default CartList
