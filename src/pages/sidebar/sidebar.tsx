import React from "react";
import "./sidebar.css"
import { FaTachometerAlt, FaExclamationTriangle, FaFileSignature, FaFileAlt, FaCalendarDay, FaChartLine, FaClipboardCheck, FaClipboardList, FaMapMarkedAlt, FaUsers, FaUserCog } from 'react-icons/fa';

const SideBar: React.FunctionComponent = props => {

    return (
        <>
            <div className='sidebar'>
                <ul className='list'>
                    <li><FaTachometerAlt size='20' /></li>
                    <li><FaExclamationTriangle size='20' /></li>
                    <li><FaFileSignature size='20' /></li>
                    <li><FaFileAlt size='20' /></li>
                    <li><FaCalendarDay size='20' /></li>
                    <li><FaChartLine size='20' /></li>
                    <li><FaClipboardCheck size='20' /></li>
                    <li><FaClipboardList size='20' /></li>
                    <li><FaMapMarkedAlt size='20' /></li>
                    <li><FaUsers size='20' /></li>
                    <li><FaUserCog size='20' /></li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;