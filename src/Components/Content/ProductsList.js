import React, { Component } from 'react'
import Title from './Title'
import classes from './ProductsList.module.css'
import { connect } from 'react-redux'
import Products from './Products'

class ProductsList extends Component {
    render() {
        // console.log(this.props.storeProducts);

        return (
            <React.Fragment>
                <div className={classes.ProductsList}>
                    <Title name="Our" title="Products" />
                    <div className={classes.row} >
                        {this.props.storeProducts.map(product => (
                            <Products details={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storeProducts: state.storeProd,
        detailProduct: state.detailProd,
    }
}

export default connect(mapStateToProps)(ProductsList)
