import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("boxe1 render", () => {
  const { getByTestId } = render(<App />);
  const box = getByTestId("box1");
  expect(box).toBeInTheDocument();
});
