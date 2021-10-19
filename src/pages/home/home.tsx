import React, { useEffect } from "react";
import IPage from "../../interfaces/page";
import logging from "../../config/logging";
import NavBar from "../nav/nav";

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <>
            <NavBar />
            <p>This is the home page!</p>
        </>
    )
}

export default HomePage;