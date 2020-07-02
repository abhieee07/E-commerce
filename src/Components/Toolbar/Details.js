import React, { Component } from 'react'
import classes from './Details.module.css'
import { connect } from 'react-redux'
import { Button } from 'react-mdl'
import { Link } from 'react-router-dom'
import { showDetails } from '../../Store/Actions'
import { addToCart } from '../../Store/Actions'
import { modalOpen } from '../../Store/Actions'


class Details extends Component {


    render() {
        return (
            <div className={classes.section}>
                <div className={classes.header}>
                    <h1>{this.props.detailprod.title}</h1>
                </div>
                <div className={classes.content}>
                    <div className={classes.image}>
                        <img src={this.props.detailprod.img} alt="phone" />
                    </div>
                    <div className={classes.Details} >
                        <h4>Model : {this.props.detailprod.title}</h4>
                        <h4 style={{ color: "grey" }}>Brand : {this.props.detailprod.company}</h4>
                        <h4 style={{ color: "blue" }}>Price: ${this.props.detailprod.price}</h4>
                        <p className={classes.info}>
                            {this.props.detailprod.info}
                        </p>

                        <Link to="/">
                            <Button raised primary>Go Back</Button>
                        </Link>
                        <Button raised accent
                            disabled={this.props.detailprod.itemPurchased === this.props.detailprod.stock ? true : this.props.detailprod.inCart ? true : false}
                            onClick={() => {
                                this.props.openModel(this.props.detailprod.id)
                                this.props.cartAdded(this.props.detailprod.id)
                            }}>
                            {this.props.detailprod.itemPurchased === this.props.detailprod.stock ? "Out Of Stock " : this.props.detailprod.inCart ? "Incart" : "Add To Cart"}
                        </Button>

                    </div >
                </div>
                <div className={classes.review}>
                    <h3>Customer reviews</h3>
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        storeProd: state.storeProd,
        detailprod: state.detailProd,
        cart: state.cart,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        oncliked: (id) => dispatch(showDetails(id)),
        cartAdded: (id) => dispatch(addToCart(id)),
        openModel: (id) => dispatch(modalOpen(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);




