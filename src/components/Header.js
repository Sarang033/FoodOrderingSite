import { useState } from "react";

const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://www.clipartkey.com/mpngs/m/36-364962_healthy-food-logo-png.png" />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button className="log-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>) :
                (<button className="log-btn" onClick={() => setIsLoggedIn(true)}>Login</button>)}

        </div>
    );
};

export default Header;