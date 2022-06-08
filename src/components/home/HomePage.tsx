import { useEffect, useState } from "react";
import { Box } from "@mui/material";
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
        <Box>
            {todo.length ?
                (todo.map((item: any) => {
                    return (
                        <Box>
                            {item.title}
                        </Box>
                    );
                }))
                : null}
        </Box>
    )
}