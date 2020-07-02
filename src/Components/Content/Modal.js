import React from 'react'
import classes from './Modal.module.css'
import { connect } from 'react-redux'
import { closeModal } from '../../Store/Actions'
import { Button } from 'react-mdl'
import { addToCart } from '../../Store/Actions'
import { Link } from 'react-router-dom'


const Modal = (props) => {
    if (!props.modal) {
        return null
    }
    else {
        console.log(props.modalProduct.inCart)
        return (
            <React.Fragment>
                <div className={classes.Backdrop} onClick={() => { props.closeModal() }}></div>
                <div className={classes.Modal}
                    style={{
                        transform: props.modal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.modal ? '1' : '0'
                    }}>
                    <div className={classes.child}>
                        <h5 style={{ color: "black" }}>Item added To Cart</h5>
                        <img src={props.modalProduct.img} alt={props.modalProduct.title}></img>
                        <h5 style={{ color: "black" }}>{props.modalProduct.title}</h5>
                        <h5 style={{ color: "grey" }}>Price : ${props.modalProduct.total}</h5>
                        <Link to="/">
                            <Button style={{ marginLeft: "20px" }}
                                raised primary
                                onClick={() => { props.closeModal() }}
                            >Back To Store
                        </Button>
                        </Link>
                        <Link to="/cart">
                            <Button
                                onClick={() => {
                                    props.closeModal()
                                }}
                                style={{ marginLeft: "20px" }} raised accent> Proceed To Cart</Button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        modalProduct: state.modalProduct,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        modalCartAdded: (id) => dispatch(addToCart(id)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);


