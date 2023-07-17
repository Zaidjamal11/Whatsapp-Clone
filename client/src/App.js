
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger";

function App() {

  const clientId = '837385515022-ms2bv7t4jvjejmajbd0rvs1lkq50f1pv.apps.googleusercontent.com';


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
