import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { authCodes } from "../variables/variables";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //signup user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);

      if (!response) {
        throw new Error("Could not signup, please check your credentials.");
      }

      //Add user display name
      await response.user.updateProfile({ displayName });

      //dispatch login action
      dispatch({ type: authCodes.log_in, payload: response.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
