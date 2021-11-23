import { useState } from "react";
import style from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form className={style["login-form"]} onSubmit={submitHandler}>
      <h2>Login</h2>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button className="btn">Login</button>
    </form>
  );
}
