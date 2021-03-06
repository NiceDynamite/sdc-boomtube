import LoginForm from "../Components/LoginForm";
import './LoginPage.css'
import Header from '../Components/header/HeaderAutho.js';




import Paper from "@mui/material/Paper";

export default function LoginPage(props) {
    return (
        <>
        <Header/>
        <div className="login">
            <div className="login-container">
                <Paper
                    elevation={6}
                    sx={{
                        minWidth: '400px',
                        minHeight: '400px',
                        borderRadius: '10px'
                    }}
                >
                    <div className="login-title">
                        <h1 className="welcome-title">Welcome Back</h1>
                        <p className="welcome-message">Sign in to continue</p>

                    </div>
                    <div className="form-container">
                        <LoginForm userData={props.userData} setUserData={props.setUserData}/>
                    </div>

                

                </Paper>
            </div>
            </div>
        </>
    )
}