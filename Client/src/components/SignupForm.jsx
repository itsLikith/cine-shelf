import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";
import { useState } from "react";

function SignupForm() {
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [emailVerified, setEmailVerified] = useState(true);
    const [otpVerified, setOtpVerified] = useState(true);

    return (
        <div className="form-container">
            {(!emailVerified && !otpVerified) ? (
                <form action="/login" method="post" className="form-control form p-4">
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
                    <input type="submit" className="form-control w-100 btn p-2 btn-success mt-2 mb-3" />
                    <p className="text-center text-white">
                        Already have an account? <Link to="/"><b>Login</b></Link>
                    </p>
                </form>
            ) : emailVerified && !otpVerified ? (
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
                                onChange={(e) => setEmail(e.target.value)}
                                min="1000"
                                max="9999"
                                required
                            />
                            <label htmlFor="otp">OTP</label>
                        </div>
                        <input type="submit" className="form-control w-100 btn p-2 btn-success mt-2 mb-3" />
                    </form>
                </div>
            ) : emailVerified && otpVerified ? (
                <div>Enter password here</div>
            ) : null}
        </div>
    );
}

export default SignupForm;