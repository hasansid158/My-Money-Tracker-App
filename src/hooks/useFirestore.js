import { useEffect, useState, useReducer } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
import { docTransactionCodes } from "../variables/variables";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case docTransactionCodes.is_pending:
      return { isPending: true, document: null, success: null, error: null };
    case docTransactionCodes.added_docs:
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case docTransactionCodes.error:
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //collection ref
  const ref = projectFirestore.collection(collection);

  //dispatch only if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add documents
  const addDocument = async ({ ...doc }) => {
    const createdAd = timestamp.fromDate(new Date());
    dispatch({ type: docTransactionCodes.is_pending });

    try {
      const addedDoc = await ref.add({ doc, createdAd: createdAd });
      dispatchIfNotCancelled({
        type: docTransactionCodes.added_docs,
        payload: addedDoc,
      });
    } catch (error) {
      dispatchIfNotCancelled({
        type: docTransactionCodes.error,
        payload: error.message,
      });
    }
  };

  //delete document
  const deleteDocument = async (id) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
