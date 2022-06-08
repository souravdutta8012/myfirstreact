import { AppBar } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/pro-solid-svg-icons"

export default function HeaderBar() {
    return (
        <AppBar position="sticky" className="bg-red-400">
            <FontAwesomeIcon icon={faBars} size="lg" />
            header bar
        </AppBar>
    )
}
