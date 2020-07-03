import React from 'react'
import classes from './CartItem.module.css'
import { connect } from 'react-redux'
import { quantityInc, quantityDec, removeProduct } from '../../Store/Actions'

const CartItem = (props) => {
    // console.log(props.value);
    // useEffect(() => {
    //     console.log();

    // }, [props.cart])
    // console.log(props.value.count === 0 ? true : false);

    return (
        <div className={classes.CartItem}>
            <div className={classes.img}><img src={props.value.img} alt="phone" /></div>
            <div className={classes.title}><h5>{props.value.title}</h5></div>
            <div className={classes.price}> <h5>${props.value.price}</h5></div>
            <div className={classes.quantity}>
                <button className={classes.box} disabled={props.value.count <= 1 ? true : false} onClick={() => { props.Decrement(props.value.id) }}> - </button>
                <button className={classes.box}>{props.value.count}</button>
                <button className={classes.box} disabled={props.value.stock === props.value.count ? true : false} onClick={() => { props.Increment(props.value.id) }}> + </button>

            </div>
            <div className={classes.count}><button
                onClick={() => {
                    props.removeItem(props.value.id)

                }}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button></div>
            <div className={classes.total}>  <h5><b>${props.value.total}</b></h5></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Increment: (id) => dispatch(quantityInc(id)),
        Decrement: (id) => dispatch(quantityDec(id)),
        removeItem: (id) => dispatch(removeProduct(id))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
