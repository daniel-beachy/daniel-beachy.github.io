import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Projects from "./Projects";

test("the NFL Season Tracker project opens the current dashboard", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("NFL Season Tracker").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith(
      "nfl-season-tracker-v3/",
      "_blank",
      "noopener,noreferrer"
    );
    expect(screen.getAllByRole("button", { name: /View project/ })).toHaveLength(10);
  } finally {
    open.mockRestore();
  }
});

test("Secret Santa Coordinator opens the Cloudflare app", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Secret Santa Coordinator").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith(
      "https://secret-santa-coordinator-v1.daniel-beachy.workers.dev/",
      "_blank",
      "noopener,noreferrer"
    );
  } finally {
    open.mockRestore();
  }
});

test("Sunday HQ opens the connected Cloudflare dashboard", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Sunday HQ").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith(
      "https://fantasy-dashboard-v1.daniel-beachy.workers.dev/",
      "_blank",
      "noopener,noreferrer"
    );
  } finally {
    open.mockRestore();
  }
});

test("Deep Roots opens the GitHub Pages app", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Deep Roots").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith("time-tree-v1/", "_blank", "noopener,noreferrer");
  } finally {
    open.mockRestore();
  }
});

test("Genome Dashboard opens the GitHub Pages demo", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Genome Dashboard").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith("wgs-analysis-v1/", "_blank", "noopener,noreferrer");
  } finally {
    open.mockRestore();
  }
});

test("Game Pass Companion opens the GitHub Pages app", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Game Pass Companion").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith("game-pass-companion-v1/", "_blank", "noopener,noreferrer");
  } finally {
    open.mockRestore();
  }
});

test("Gospels Explorer opens the GitHub Pages app", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Gospels Explorer").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: /View project/ }));
    expect(open).toHaveBeenCalledWith("gospels-explorer-v1/", "_blank", "noopener,noreferrer");
  } finally {
    open.mockRestore();
  }
});

test("cards appear in the chosen order, each saying how it was built", () => {
  render(<Projects />);
  const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
  expect(titles).toEqual([
    "N-Queens",
    "Sorting Visualizer",
    "Deep Roots",
    "Genome Dashboard",
    "Gospels Explorer",
    "Game Pass Companion",
    "NFL Season Tracker",
    "Sunday HQ",
    "Secret Santa Coordinator",
    "FlossForge",
  ]);
  const deepRoots = screen.getByText("Deep Roots").closest(".card");
  within(deepRoots).getByText("Claude Opus 5.5");
  const nqueens = screen.getByText("N-Queens").closest(".card");
  within(nqueens).getByText("Hand-coded · 2024");
});
