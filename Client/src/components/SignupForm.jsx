import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";
import { useState } from "react";

function SignupForm() {

    // This is for signup details
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState("")

    // This if for if else conditions
    const [emailVerified, setEmailVerified] = useState(true);
    const [otpVerified, setOtpVerified] = useState(true);
    const [message, setMessage] = useState("hi darling");

    return (
        <div className="form-container">
            {(!emailVerified && !otpVerified) ? (
                <form action="/verifymail" method="post" className="form-control form p-4">
                    <h2 className="container-fluid p-2 text-white mb-4">Signup</h2>
                    <div className="form-floating">
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-2 mt-1"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <form action="/login" method="post" className="form-control form p-4">
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
                    </form>
                </div>
            ) : (emailVerified && otpVerified) ? (
                <div>
                    <form action="/signup">
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
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default SignupForm;