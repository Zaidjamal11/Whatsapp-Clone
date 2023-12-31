import { useEffect, useState, useContext } from "react";
import{ Box ,Divider,  styled} from '@mui/material';

import { getUsers } from "../../../service/api";
import { AccountContext } from '../../../context/AccountProvider';


//components
import Conversation from "./Conversation.jsx";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  backdround-color: #e9edef;
  opacity: 0.6
`


const Conversations = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account , socket, setActiveUsers } = useContext(AccountContext);


    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    }, [text]);


    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])



    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                   <Conversation user={user} />
                    <StyledDivider />
                    </>
                ))
                

            }

        </Component>
    )
}




export default Conversations;