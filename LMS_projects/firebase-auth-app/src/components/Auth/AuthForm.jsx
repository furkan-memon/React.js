import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        {isLogin ? (
          <Login switchMode={() => setIsLogin(false)} />
        ) : (
          <Signup switchMode={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}