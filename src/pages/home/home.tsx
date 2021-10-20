import React, { useEffect } from "react";
import IPage from "../../interfaces/page";
import logging from "../../config/logging";
import NavBar from "../nav/nav";
import SideBar from "../sidebar/sidebar";
import "./home.css"

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <>
            <NavBar />
            <SideBar />
            <div>
                This is the home page!
            </div>
        </>
    )
}

export default HomePage;