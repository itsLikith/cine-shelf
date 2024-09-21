import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginform.css";

function LoginForm() {
    return (
        <div className="form-container">
            <form action="/login" method="post" className="form-control form p-4">
                <h2 class="container-fluid p-2 text-white mb-4">Login</h2>
                <label for="username">Username</label>
                <input type="email" name="email" class="form-control mb-2 mt-1" placeholder="Enter Username" required></input>
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control mb-2 mt-1" placeholder="Enter Password" required></input>
                <input type="submit" class="form-control w-100 btn p-2 btn-success mt-2 mb-3"></input>
                <p class="text-center"><a href="/forgotpwd" class="text-white"><b>Forgot password?</b></a></p>
                <p class="text-center text-white">Do not have an account? <a href="/signup"><b>Signup</b></a></p>
            </form>
        </div>
    );
}

export default LoginForm;