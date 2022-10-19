import { GoogleLogout } from "react-google-login";

const Logout = ({ clientId }) => {
    const onSuccess = () => {
        alert("Logged out successfully")
    }

    return (
        <>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </>
    )
}

export default Logout;