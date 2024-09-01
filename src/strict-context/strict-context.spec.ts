import { createElement, PropsWithChildren } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { createStrictContext, useStrictContext } from "./strict-context";

describe("Strict Context", () => {
  test("should create context", () => {
    const ctx = createStrictContext();

    expect("Provider" in ctx && "Consumer" in ctx).toBe(true);
  });

  test("should return provided context value", () => {
    const ctx = createStrictContext();
    const value = "CtxValue";

    const wrapper = (props: PropsWithChildren<any>) =>
      createElement(ctx.Provider, { ...props, value });

    const { result } = renderHook(() => useStrictContext(ctx), { wrapper });

    expect(result.current).toBe(value);
  });

  test("should throw an error with null context", () => {
    const ctx = createStrictContext();
    const value = null;

    const wrapper = (props: PropsWithChildren<any>) =>
      createElement(ctx.Provider, { ...props, value });

    const { result } = renderHook(() => useStrictContext(ctx), { wrapper });

    expect(() => result.current).toThrow();
  });

  test("should throw an error without context", () => {
    const ctx = createStrictContext();

    const wrapper = (props: PropsWithChildren<any>) =>
      createElement(ctx.Provider, props);

    const { result } = renderHook(() => useStrictContext(ctx), { wrapper });

    expect(() => result.current).toThrow();
  });
});
