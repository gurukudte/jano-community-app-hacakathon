
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <button
        onClick={() => {
          navigate("/app");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
