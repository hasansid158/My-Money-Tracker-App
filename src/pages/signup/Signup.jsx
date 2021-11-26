import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import style from "./Signup.module.css";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [passowrd, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { error, isPending, signup } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();

    signup(email, passowrd, displayName);
  };

  return (
    <form className={style["signup-form"]} onSubmit={submitHandler}>
      <h2>Sign-up</h2>
      <label>
        <span>Name</span>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={passowrd}
        />
      </label>
      {isPending ? (
        <button className="btn" disabled>
          Loading..
        </button>
      ) : (
        <button className="btn">Sign-up</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
