import React from "react";
import { useContext } from "react";

import { Box, AppBar, Toolbar, styled } from "@mui/material";

//components
import LoginDialog from "./account/LoginDialog";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00a884;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;


const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
