import React from 'react'
import { connect } from 'react-redux'
import classes from './MyCart.module.css'
import Title from '../Content/Title'
import CartRow from '../Cart/CartRow'
import CartList from '../Cart/CartList'
import CartTotal from '../Cart/CartTotal'

function MyCart(props) {
    console.log(props.cart.length)
    return (
        <section className={classes.myCart}>
            {(props.cart.length > 0) ? (
                <>
                    <Title name="Your" title="cart" />
                    <CartRow />
                    <CartList value={props.cart} />
                    <CartTotal />


                </>
            ) : (
                    <h2 className={classes.emptycrt}>Your cart is currently empty</h2>
                )
            }
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(MyCart)



