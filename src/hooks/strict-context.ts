import { Context, createContext, useContext } from "react";
import { isNull } from "../utils";

export function createStrictContext<T>() {
  return createContext<T | null>(null);
}

export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context);

  if (isNull(value)) {
    throw new Error("Strict context is not provided");
  }

  return value as T;
}
