import { Box } from '@mui/material';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';



const ChatBox = () => {
  return (
    <Box style={{ height: '75%'}}>
        <ChatHeader />
        <Messages />
        
    </Box>
  )
}

export default ChatBox;