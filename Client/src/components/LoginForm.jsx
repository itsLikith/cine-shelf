import { Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email,
            password
        };
        try {
            const response = await axios.post("http://localhost:8080/login", credentials);
            if(response.data.flag) {
                setMessage(`${response.data.error}`);
            }
            if(response.data.isAuthenticated) {
                setMessage("")
                navigate('/movies');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-control form p-4">
                <h2 className="container-fluid p-2 text-white mb-4">Login</h2>
                <div className="form-floating mt-3">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="true"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mt-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="true"
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <input
                    type="submit"
                    className="form-control w-100 btn p-2 btn-success mt-3 mb-3"
                    id="submitButton"
                />
                {
                    (message) ? <p className="text-warning text-center">{message}</p> : null
                }
                <p className="text-center">
                    <a href="/forgotpwd" className="text-white"><b>Forgot password?</b></a>
                </p>
                <p className="text-center text-white">
                    Do not have an account? <Link to="/signup"><b>Signup</b></Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;