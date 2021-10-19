import React from "react";
import "./nav.css";
import { AiOutlineMenu } from 'react-icons/ai'

const NavBar: React.FunctionComponent = props => {
    return (
        <div className='body'>
            <AiOutlineMenu size={20} />
            <span className='app-name'>
                IMS
            </span>
        </div>
    )
}

export default NavBar;