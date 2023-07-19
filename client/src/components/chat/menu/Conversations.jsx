import { useEffect, useState } from "react";
import{ Box } from '@mui/material';

import { getUsers } from "../../../service/api";


const Conversations = () => {

    const[users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
            
            setUsers(response);

        }
        fetchData();

    },[]);


    return (
        <Box>

        </Box>
    )
}




export default Conversations;