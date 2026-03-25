import { useState } from "react";
import { signup } from "../../firebase/auth";
import { googleLogin } from "../../firebase/auth";
export default function Signup({ switchMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("Signup Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h2>Signup</h2>

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

      <button onClick={handleSignup}>Signup</button>
<button onClick={googleLogin}>
  Continue with Google
</button>
      <p className="switch" onClick={switchMode}>
        Already have an account? Login
      </p>
    </>
  );
}