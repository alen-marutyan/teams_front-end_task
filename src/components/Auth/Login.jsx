import React from 'react';
import {GoogleLogin} from "react-google-login";
import './Login.css'
import { useSelector } from "react-redux";


const Login = ({onFailure, onSuccess}) => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const { error } = useSelector(state => state.auth);


    return (
        <div>
            <div className="container">

                <form>
                    <div className="row">

                        <h2 style={{textAlign: "center"}}>Login with Google or Manually</h2>
                        {
                            (error === 'popup_closed_by_user') ? <h2 style={{color: 'red', textAlign: "center"}}>Failed to Login</h2> : <></>
                        }
                        <div className="vl">
                            <span className="vl-inner-text">or</span>
                        </div>

                        <div className="col googleDiv">
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Sign in with Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                className="google btn"
                            />
                        </div>

                        <div className="col">
                            <input type="text" name="username" placeholder="Username" required/>
                            <input type="password" name="password" placeholder="Password" required/>
                            <input type="submit" value="Login"/>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
