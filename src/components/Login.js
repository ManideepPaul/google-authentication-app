import { useState } from 'react';

// A Google oAUth Sign-in / Log-in Component for React
import { GoogleLogin } from 'react-google-login';

// Importing the Logout component
import Logout from './Logout';

function Login({ clientID }) {

    // This will be used to update username on page after login
    const [userName, setUserName] = useState('');

    // This will be used to update uesr image on page after login
    const [userImage, setUserImage] = useState('');

    // This will track status of login
    const [logIn, setLogIn] = useState(false);

    // This function will be called on successfull login
    const responseGoogle = (res) => {
        getDetail(res)
    }

    // This will be called when login is failed
    const failedRes = (res) => {
        console.log(res)
    }

    // After successfull login this function will be called
    const getDetail = (value) => {
        // Setting the user name from the google response
        setUserName(value.profileObj.name)

        // Setting the image from the google response
        setUserImage(value.profileObj.imageUrl)

        // After successfull login changing the status to true.
        setLogIn(true)
    }

    // This is called when user click on logout.
    const logOut = () => {
        // removing the username 
        setUserName('')

        // removing the user image
        setUserImage('')

        // changing the status to false again
        setLogIn(false)
    }

    return (
        <>
            {/* If login status is true then show the image */}
            {logIn ? <img src={userImage} alt="userImage" />: ""}

            {/* If login status is true then show user name */}
            {logIn ? <h4>{userName}</h4> : ""}

            {/* If login status is false then only show this button */}
            {!logIn ? <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={failedRes}
                cookiePolicy={'single_host_origin'}
            /> : ""}

            {/* If login status is true then show this button */}
            {logIn ? <div onClick={logOut}><Logout clientID={clientID} /></div> : ""}
        </>
    )
}

export default Login;