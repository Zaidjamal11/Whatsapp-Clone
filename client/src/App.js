import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "837385515022-ms2bv7t4jvjejmajbd0rvs1lkq50f1pv.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
