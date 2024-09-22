import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import "../styles/loginpage.css";

function ZeroPage({ hasAccount }) {
    return (
        hasAccount === "true" ? <LoginForm /> : <SignupForm />
    );
}

export default ZeroPage;