import React from "react";
import "./nav.css";
import { AiOutlineMenu } from 'react-icons/ai'
import { Col, Row } from "react-bootstrap";

const NavBar: React.FunctionComponent = props => {
    return (
        <Row className='body'>
            <Col className='content'>
                <AiOutlineMenu size={25} />
                <span className='app-name'>
                    IMS
                </span>
            </Col>
        </Row>
    )
}

export default NavBar;