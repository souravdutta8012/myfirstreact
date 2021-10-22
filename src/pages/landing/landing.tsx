import React from "react";
import "./landing.css";
import bg from "../../assets/image/bg-img.png";

const LandingPage: React.FunctionComponent = props => {
    return (
        <>
            <img className='bg-img' src={bg} alt="background-img" />
            <div className='cover'>
                <div className='card'>
                    <div className='navbar'>
                        Select Environment
                    </div>
                    <div className='card-content'>
                        <div className='heading'>
                            Please select the environment you want to open
                        </div>
                        <div className='choice'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Live Site
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Training Site
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
