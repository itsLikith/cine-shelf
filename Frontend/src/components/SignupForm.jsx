import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";
import { useState } from "react";

function SignupForm() {
    const [email,setEmail] = useState("");
    return (
        <div className="form-container">
            <form action="/login" method="post" className="form-control form p-4">
                <h2 class="container-fluid p-2 text-white mb-4">Signup</h2>
                <div className="form-floating">
                    <input type="email" name="email" class="form-control mb-2 mt-1" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label for="email">Email</label>
                </div>
                <input type="submit" class="form-control w-100 btn p-2 btn-success mt-2 mb-3"></input>
                <p class="text-center text-white">Already have an account? <Link to="/"><b>Login</b></Link></p>
            </form>
        </div>
    );
}

export default SignupForm;