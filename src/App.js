import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

// eslint-disable-next-line
import { gapi } from 'gapi-script';

const clientID = '381842122352-vhun0e9oi2p84t56lsf95q62hbq39odo.apps.googleusercontent.com'

function App() {
  return (
    <div className="App">
      <Login clientID={clientID}/>
      <Logout clientID={clientID}/>
    </div>
  );
}

export default App;
