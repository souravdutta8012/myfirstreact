import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/pro-regular-svg-icons";
import { faClock, faCircleCheck } from "@fortawesome/pro-solid-svg-icons";

export default function HomePage() {
    const [todo, SetTodo] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                SetTodo(response.data);
            });
    }, []);

    return (
        <Box className="pt-10 pl-5 pr-5 pb-5">
            <Grid container spacing={4}>
                {todo?.length ?
                    (todo.map((item: any) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Box className="bg-blue-100 rounded border-2 min-h-full p-4">
                                    <Box>
                                        <Box className="flex justify-between pb-4">
                                            <Box className="text-blue-500 font-semibold">
                                                <FontAwesomeIcon icon={faHashtag} />&nbsp;
                                                {item?.id}
                                            </Box>
                                            <Box>
                                                {item?.completed ?
                                                    (<FontAwesomeIcon icon={faCircleCheck} size="lg" className="text-green-700" />)
                                                    : (<FontAwesomeIcon icon={faClock} size="lg" className="text-yellow-500" />)}
                                            </Box>
                                        </Box>
                                        <Box className="font-medium text-gray-700">
                                            {item?.title}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    }))
                    : (
                        < Grid item xs={12} className="flex items-center">
                            <CircularProgress />
                        </Grid>
                    )}
            </Grid>
        </Box>
    )
}