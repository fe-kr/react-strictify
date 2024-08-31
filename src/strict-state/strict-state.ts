import { useState, useCallback } from "react";
import { isDefined } from "../utils";

export function useStrictState<T>(initialValue: T) {
  const [state, setState] = useState(initialValue);

  const setStrictState = useCallback((newValue: T) => {
    if (!isDefined(newValue)) {
      throw new Error("Strict state value is not provided");
    }

    setState(newValue);
  }, []);

  return [state, setStrictState];
}
