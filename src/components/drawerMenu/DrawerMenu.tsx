import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/pro-solid-svg-icons";

export default function DrawerMenu(props: any) {
    const { open } = props;

    const [openDrawer, setOpenDrawer] = useState<boolean>(open);

    const handleDrawerClose = () => {
        setOpenDrawer(openDrawer ? false : true);
    };

    return (
        <>
            <Drawer open={openDrawer} anchor="left" variant="persistent">
                <IconButton onClick={handleDrawerClose}>
                    {openDrawer ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
                </IconButton>
            </Drawer>
        </>
    )
}