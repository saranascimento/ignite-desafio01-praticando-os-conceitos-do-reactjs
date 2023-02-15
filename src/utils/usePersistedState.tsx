import React, { useEffect, useState } from "react";

interface Tasks {
  content: string;
  id: string;
  isFinished: boolean;
}

function usePersistedState(key: string, initialState: Tasks[]) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
