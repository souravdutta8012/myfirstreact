import { AppBar, Box } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/pro-solid-svg-icons"
import { faCircleUser } from "@fortawesome/pro-duotone-svg-icons"

export default function HeaderBar() {
    return (
        <AppBar position="sticky" className="bg-blue-500 p-2">
            <Box className="flex items-center justify-between">
                <Box className="flex items-center">
                    <Box className="mr-4">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </Box>
                    <Box className="text-2xl font-semibold">
                        To Do App
                    </Box>
                </Box>
                <Box className="flex items-center">
                    <Box className="mr-4">
                        <FontAwesomeIcon icon={faCircleUser} size="3x" />
                    </Box>
                    <Box className="flex flex-col items-center">
                        <Box className="text-sm">
                            Welcome
                        </Box>
                        <Box className="text-2xl font-semibold">
                            Sourav
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppBar>
    )
}
