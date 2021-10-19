import React from "react";
import "./nav.css";
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";

const NavBar: React.FunctionComponent = props => {
    return (
        <>
            <div className='content'>
                <Row className='allign'>
                    <Col className='col-2'>
                        <AiOutlineMenu size={25} />
                        <span className='app-name'>
                            IMS
                        </span>
                    </Col>
                    <Col className='col-2'>
                        <Button variant="primary" className='live-btn'>
                            Live
                        </Button>
                        <Button variant="primary" className='training-btn'>
                            Training
                        </Button>
                    </Col>
                    <Col className='col-4'>
                        <InputGroup>
                            <FormControl className='input-field' placeholder="Search Incident" aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text className='input-field'><BiSearch size={25} color="#84C1DC" /></InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col className='col-2 align-right'>
                        My Worklist
                    </Col>
                    <Col className='col-1 align-right'>
                        <IoMdNotifications size={25} />
                    </Col>
                    <Col className='col-1 align-middle'>
                        <FaRegUserCircle size={25} />
                        Jhon Doe
                        <IoIosArrowDown size={20} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NavBar;