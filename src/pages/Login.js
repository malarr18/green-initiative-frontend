import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {
      const response = await fetch("http://localhost:8081/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        setMessage("Login successful!");

        // 👉 Redirect after 1 second
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {
        setMessage("Invalid email or password");
      }

    } catch (error) {
      console.log(error);
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>

      <h3 className="text-center mb-3">Login</h3>

      <input
        className="form-control mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mb-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-success w-100"
        onClick={handleLogin}
      >
        Login
      </button>

      {message && (
        <p className="text-center mt-3">{message}</p>
      )}

    </div>
  );
}

export default Login;
