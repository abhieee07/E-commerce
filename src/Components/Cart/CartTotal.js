import React from 'react'
import classes from './CartTotal.module.css'
import { connect } from 'react-redux'
import { clearCart, productPurchased } from '../../Store/Actions'
import { Link } from 'react-router-dom'
const CartTotal = (props) => {
    return (
        <div className={classes.cartTotal}>
            <Link to="/"><button onClick={() => { props.clearcart() }}>Clear Cart</button></Link>
            <h4>subTotal  : ${props.subTotal}</h4>
            <h4>tax  : ${props.totalTax}</h4>
            <h4>Total  : ${props.finalPrice}</h4>
            <div className={classes.buyNow}>
                <Link to="/Sucess"> <button onClick={() => { props.buyNow() }}>Buy Now</button> </Link>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        subTotal: state.subTotal,
        totalTax: state.totalTax,
        finalPrice: state.finalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearcart: () => dispatch(clearCart()),
        buyNow: () => dispatch(productPurchased())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartTotal)
