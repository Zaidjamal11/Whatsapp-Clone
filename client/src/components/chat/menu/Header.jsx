import { Box, styled } from '@mui/material';

import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';



const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px
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
    </Component>
    
    </>
  )
}

export default Header;