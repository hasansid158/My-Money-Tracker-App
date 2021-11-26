import { useState } from "react";
import { Uselogin } from "../../hooks/useLogin";
import style from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isPending, login } = Uselogin();

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
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
          required
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>

      {isPending ? (
        <button className="btn" disabled>
          Loading..
        </button>
      ) : (
        <button className="btn">Login</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
