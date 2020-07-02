import React, { Component } from 'react'
import { Card, CardTitle, CardActions } from 'react-mdl'
import classes from './Products.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showDetails } from '../../Store/Actions'
import { addToCart } from '../../Store/Actions'
// import { modalOpen } from '../../Store/Actions'


class Products extends Component {


    render() {
        console.log(this.props.detailprod.id);

        return (
            <div className={classes.card} onClick={() => this.props.oncliked(this.props.details.id)} >
                <Card shadow={1} style={{ width: '310px', height: '330px', margin: 'auto' }}>
                    <Link to="/details" >
                        <CardTitle className={classes.img} expand style={{
                            color: '#fff', background: `url(${this.props.details.img}) center / cover`
                        }} />
                    </Link>
                    <Link to="/">
                        <button className={classes.btn} disabled={this.props.details.inCart ? true : false}
                            onClick={() => {
                                // this.props.openModel(this.props.details.id)cd..
                                this.props.cartAdded(this.props.details.id)
                            }}>
                            {this.props.details.itemPurchased === this.props.details.stock ? (<p disabled >Out of  Stock</p>) :
                                this.props.details.inCart ? (
                                    <p disabled>In cart</p>
                                ) : (
                                        <i className="fa fa-cart-plus" aria-hidden="true" />
                                    )
                            }
                        </button>
                    </Link>
                    <CardActions border >
                        <div className={classes.title}>
                            <span style={{ ontSize: "18px" }}> {this.props.details.title}</span>
                            <span style={{ float: "right", fontSize: "19px" }}>{this.props.details.price + "$"}</span>
                        </div>
                    </CardActions>
                </Card>

            </div >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        oncliked: (id) => dispatch(showDetails(id)),
        cartAdded: (id) => dispatch(addToCart(id)),
        // openModel: (id) => dispatch(modalOpen(id))
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        detailprod: state.detailProd,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)



