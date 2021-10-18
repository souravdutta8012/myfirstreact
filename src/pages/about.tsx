import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";

const AboutPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return <p>This is the about page!</p>
}

export default AboutPage;