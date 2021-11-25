import React, { useState } from "react";
import { useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({uid}) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const submitHandler = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <React.Fragment>
      <h3>Add Transaction</h3>
      <form onSubmit={submitHandler}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount:</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}
