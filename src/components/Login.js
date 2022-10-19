import { GoogleLogin } from 'react-google-login';


function Login({clientID}) {
    // console.log(clientID)
    const responseGoogle = (res) => {
        console.log(res)
    }

    return (
        <>
            <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </>
    )
}

export default Login;