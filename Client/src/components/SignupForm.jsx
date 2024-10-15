import { Link,useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";
import { useState } from "react";
import axios from "axios";

function SignupForm() {

    const navigate = useNavigate();

    // This is for signup details
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState("");

    // This if for if else conditions
    const [emailVerified, setEmailVerified] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [message, setMessage] = useState("");

    const handleVerifyMailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/verifyMail",{email});
            if(response.data.flag) {
                setMessage(response.data.error);
            }
            if(response.data.emailSent) {
                setEmailVerified(true);
                setOtpVerified(false);
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleVerifyOTPSubmit = async (e) => {
        e.preventDefault();
        console.log(`Entered otp:${otp}`);
        try {
            const response = await axios.post("http://localhost:8080/verifyOTP",{otp});
            if(response.data.flag) {
                setMessage(response.data.error);
            }
            if(response.data.otpVerified) {
                setEmailVerified(true);
                setOtpVerified(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/register",{email,password});
            if(response.data.flag) {
                setMessage(response.data.error);
            }
            if(response.data.userRegistered === true) {
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="form-container">
            {(!emailVerified && !otpVerified) ? (
                <form onSubmit={handleVerifyMailSubmit} className="form-control form p-4">
                    <h2 className="container-fluid p-2 text-white mb-4">Signup</h2>
                    <div className="form-floating">
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-2 mt-1"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <input type="submit" className="form-control w-100 btn p-2 btn-primary mt-2 mb-3" value="Verify Mail" />
                    <p className="text-center text-white">
                        Already have an account? <Link to="/"><b className="text-info">Login</b></Link>
                    </p>
                    {
                        (message)?
                            <p className="text-center text-warning">{message}</p>
                        : null
                    }
                </form>
            ) : (emailVerified && !otpVerified) ? (
                <div>
                    <form onSubmit={handleVerifyOTPSubmit} className="form-control form p-4">
                        <h2 className="container-fluid p-2 text-white mb-4">Signup</h2>
                        <div className="form-floating">
                            <input
                                type="number"
                                name="otp"
                                className="form-control mb-2 mt-1"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                min="1000"
                                max="9999"
                                required
                            />
                            <label htmlFor="otp">OTP</label>
                        </div>
                        <input type="submit" className="form-control w-100 btn p-2 btn-secondary mt-2 mb-3" value="Verify OTP" />
                        {
                            (message)?
                                <p className="text-center text-warning">{message}</p>
                            :
                            null
                        }
                    </form>
                </div>
            ) : (emailVerified && otpVerified) ? (
                <div>
                    <form onSubmit={handleSignupSubmit} className="form-control form p-4" >
                        <h2 className="container-fluid p-2 text-white mb-4">Signup</h2>
                        <div className="form-floating">
                            <input
                                type="text"
                                name="password"
                                className="form-control mb-2 mt-1"
                                placeholder="Set Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Set Password</label>
                        </div>
                        <input type="submit" className="btn btn-success w-100 mt-2 mb-3 form-control" value="Sign Up"/>
                        {
                            (message)?
                                <p className="text-center text-warning">{message}</p>
                            :
                            null
                        }
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default SignupForm;