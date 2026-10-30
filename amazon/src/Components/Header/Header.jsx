import React from 'react'
import classes from './Header.module.css'

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
                <a href="#">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
                </a>

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
                <a href="" className={classes.language}>
                    <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="usa flag" />
                    <select>
                        <option value="">ENG</option>
                    </select>
                </a>

                <a href="">
                    <div>
                        <p>Hello, sign in</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                {/* orders */}
                <a href="">
                    <p>returns</p>
                    <span>& Orders</span>
                </a>
                {/* cart */}
                <a href='' className={classes.cart}>
                    <BiCart size={35}/>
                    <span>0</span>
                </a>
            </div>
        </div>


        <LowerHeader />
    </>
  )
}

export default Header
