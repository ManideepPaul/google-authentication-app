import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import Logout from './Logout';

function Login({ clientID }) {

    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const [logIn, setLogIn] = useState(false);
    // console.log(logIn , "first")

    const responseGoogle = (res) => {
        getDetail(res)
    }

    const failedRes = (res) => {
        console.log(res)
    }

    const getDetail = (value) => {
        setUserName(value.profileObj.name)
        setUserImage(value.profileObj.imageUrl)
        setLogIn(true)
        // console.log(logIn, "on login")
    }

    const logOut = () => {
        setUserName('')
        setUserImage('')
        setLogIn(false)
        // console.log(logIn, "on logout")
    }

    return (
        <>
            {logIn ? <img src={userImage} alt="userImage" />: ""}
            {logIn ? <h4>{userName}</h4> : ""}
            {!logIn ? <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={failedRes}
                cookiePolicy={'single_host_origin'}
            /> : ""}
            {logIn ? <div onClick={logOut}><Logout clientID={clientID} /></div> : ""}
        </>
    )
}

export default Login;