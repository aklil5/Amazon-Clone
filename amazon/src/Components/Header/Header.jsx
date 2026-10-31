import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
// use Link instead of anchor tag to avoid reload everytime we enter another page

import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

import LowerHeader from './LowerHeader';



function Header() {
  return (
    <>
        <div className={classes.header__container}>
            {/* logo */}
            <div className={classes.logo__container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
                </Link>

                <div className={classes.delivery}>
                    <span>
                        <SlLocationPin />
                    </span>
                    <div>
                        <p>Delivered to</p>
                        <span>Ethiopia</span>
                    </div>
                </div>
            </div>


            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='Search Amazon'/>
                <BsSearch size={25}/>
            </div>
            

            <div className={classes.order__container}>
                <Link to="" className={classes.language}>
                    <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="usa flag" />
                    <select>
                        <option value="">ENG</option>
                    </select>
                </Link>

                <Link to="/auth">
                    <div>
                        <p>Hello, sign in</p>
                        <span>Account & Lists</span>
                    </div>
                </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>
                {/* cart */}
                <Link to='/cart' className={classes.cart}>
                    <BiCart size={35}/>
                    <span>0</span>
                </Link>
            </div>
        </div>


        <LowerHeader />
    </>
  )
}

export default Header
