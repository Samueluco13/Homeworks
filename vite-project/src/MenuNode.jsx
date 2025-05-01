import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const MenuNode = ({item}) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <li className="item-list">
            {item.ruta ? (
                    <p><Link to={item.ruta} className="menu-link" >{item.title}</Link></p>
                ) : (
                    <p className="menu-children" onClick={() => setOpenMenu(!openMenu)}>
                        {item.title}  
                        <span className="arrow" >{openMenu ? '▼' : '▶'}</span>
                    </p>
                )}
            {item.children && openMenu && <MenuItem arbol={item.children} className="submenu" />}
        </li>
    )
}
