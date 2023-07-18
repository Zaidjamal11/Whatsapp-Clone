import { Box, styled } from '@mui/material';

import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import { Chat as MessagingIcon , MoreVert, Autorenew} from '@mui/icons-material';



const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%'

})

const Header = () => {

    const { account } = useContext(AccountContext);


  return (
    <>
    <Component>
        <Image src={account.picture}  alt="dp" />
        <Wrapper>
            <Autorenew />
            <MessagingIcon />
            <MoreVert />

        </Wrapper>
    </Component>
    
    </>
  )
}

export default Header;