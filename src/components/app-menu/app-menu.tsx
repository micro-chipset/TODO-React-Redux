import * as React from "react";
import {NavLink} from "react-router-dom";

import "./app-menu.css"

const AppMenu = () => {
    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink exact activeClassName="active" className="menu__link" to="/">Home</NavLink>
            </li>

            <li className="menu__item">
                <NavLink activeClassName="active" className="menu__link" to="/help">Help</NavLink>
            </li>
            <li className="menu__item">
                <NavLink activeClassName="active" className="menu__link" to="/book">Book</NavLink>
            </li>
        </ul>
    )
};

export default AppMenu
