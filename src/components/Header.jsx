import React from 'react';
import svgLogo from "../assets/images/pizza-logo.svg";
import svgCartIcon from "../assets/images/cart.svg";
import Button from "./Button";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img width="38" src={svgLogo} alt="Home logo"/>
                        <div>
                            <h1>{props.title}</h1>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button className={'button--cart'}>
                            <span>575 ₽</span>
                            <div className="button__delimiter"></div>
                            <img src={svgCartIcon} alt=""/>
                            <span>3</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;