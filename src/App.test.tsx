import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, expect, test } from "vitest";
import App from "./App";

afterEach(cleanup);

test("renders page 1 by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Page 1");
});

test("renders page 2 at /page-2", () => {
  render(
    <MemoryRouter initialEntries={["/page-2"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Page 2");
});

test("renders 404 for unknown route", () => {
  render(
    <MemoryRouter initialEntries={["/unknown"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "404 — Page not found",
  );
});
