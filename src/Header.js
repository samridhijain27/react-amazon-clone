import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header() {

const [{basket} ] = useStateValue();

console.log(basket);

    return (
<nav className="header">
<Link to="/Home">
            <img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
</Link>
<div className="header__search">
<input type="text" class="header__searchInput"></input>
<SearchIcon className="header__searchIcon"></SearchIcon>
</div>
<div className = "header__nav">
    <Link to="/login" className="header__link" >
        <div className="header__option">
        <span className="header__optionLineOne">Hello Sam</span>
        <span className="header__optionLineTwo"> Sign in</span>
        </div>
    </Link>
    <Link to="/" className="header__link" >
        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo"> & Orders</span>
        </div>
    </Link>
    <Link to="/login" className="header__link" >
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo"> Prime</span>
        </div>
    </Link>
    <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
    </Link>
</div>
        </nav>
    )
}

export default Header