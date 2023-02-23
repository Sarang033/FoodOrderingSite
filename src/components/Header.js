import { useState,useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
    <a href="/">
        <img
        data-testid="logo"
            className="logo"
            alt="logo"
            src="https://www.clipartkey.com/mpngs/m/36-364962_healthy-food-logo-png.png" />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const {user} =useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems)

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>

                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About us</Link> </li>
                    <li><Link to="/contact">Contact  </Link> </li>
                    <li><Link to="/instamart">Instamart  </Link> </li>
                    <li><Link to="/cart" data-testid="cart" >Cart-{cartItems.length} items</Link> </li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
            {user.name}
            {isLoggedIn ? (
                <button className="log-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>) :
                (<button className="log-btn" onClick={() => setIsLoggedIn(true)}>Login</button>)}

        </div>
    );
};

export default Header;