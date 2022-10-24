import './App.css';
import Login from './components/Login';

// eslint-disable-next-line
import { gapi } from 'gapi-script';
// Added gapi to access people api resources from google.


// Google OAuth 2.0 client Id (Without this you can't login with google)
const clientID = '381842122352-vhun0e9oi2p84t56lsf95q62hbq39odo.apps.googleusercontent.com'

function App() {
  return (
    <div className="App">
      {/* Adding login component and passing clientID as prop. */}
      <Login clientID={clientID}/>
    </div>
  );
}

export default App;
