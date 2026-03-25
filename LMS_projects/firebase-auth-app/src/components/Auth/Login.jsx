import { useState } from "react";
import { login } from "../../firebase/auth";

export default function Login({ switchMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className="switch" onClick={switchMode}>
        Don't have an account? Signup
      </p>
    </>
  );
}