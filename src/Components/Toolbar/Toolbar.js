import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Toolbar.module.css'
import logo from "../../logo.svg"

const Toolbar = () => (
    <div className={classes.Toolbar}>
        <ul >
            <li>
                <NavLink to="/" >
                    <img src={logo} alt="logo" />
                </NavLink>
                {/* <NavLink to="/details" >
                    Products
                </NavLink> */}

            </li>
        </ul>
        <NavLink to="/cart" >
            <button >
                <i className="fa fa-shopping-cart" aria-hidden="true"> My Cart</i>
            </button>
        </NavLink>

    </div>
)

export default Toolbar
