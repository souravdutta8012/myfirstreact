import React, { useEffect, useState } from "react";
import "./about.css"
import IPage from "../../interfaces/page";
import logging from "../../config/logging";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);

        let number = props.match.params.number;

        if (number) {
            setMessage(`The Number is ${number}`);
        } else {
            setMessage('No number provided');
        }
    }, [props])

    return (<div>
        <p>{message}</p>
        <Link to="/">Go to home page</Link>
    </div>
    )
}

export default withRouter(AboutPage);