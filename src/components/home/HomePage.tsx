import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";

export default function HomePage() {
    const [todo, SetTodo] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                SetTodo(response.data);
            });
    }, []);

    return (
        <Box className="p-4">
            <Grid container spacing={2}>
                {todo?.length ?
                    (todo.map((item: any) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Box className="bg-blue-100 rounded p-4">
                                    <Box>
                                        <Box>
                                            {item?.id}
                                        </Box>
                                        <Box>
                                            {item?.title}
                                        </Box>
                                        <Box>
                                            {item?.completed ? "Completed" : "Incomplete"}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    }))
                    : null}
            </Grid>
        </Box>
    )
}