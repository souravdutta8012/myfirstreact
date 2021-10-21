import React from "react";
import "./landing.css";
import bg from "../../assets/image/bg-img.png";

const LandingPage: React.FunctionComponent = props => {
    return (
        <>
            <img className='bg-img' src={bg} alt="background-img" />
            <div className='cover'>
            </div>
        </>
    )
}

export default LandingPage;
