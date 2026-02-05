import React, { useState } from "react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {

    try {
      const response = await fetch("http://localhost:8081/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          role: role
        })
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage("Registration failed");
      }

    } catch (error) {
      console.log(error);
      setMessage("Server error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>

      <h3 className="text-center mb-3">Register</h3>

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select
        className="form-control mb-3"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button
        className="btn btn-primary w-100"
        onClick={handleRegister}
      >
        Register
      </button>

      {message && (
        <p className="text-center mt-3">{message}</p>
      )}

    </div>
  );
}

export default Register;
