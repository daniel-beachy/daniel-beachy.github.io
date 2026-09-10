import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Projects from "./Projects";

test("the NFL Season Tracker project opens the current dashboard", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("NFL Season Tracker").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: "Try it!" }));
    expect(open).toHaveBeenCalledWith("nfl-season-tracker-v3/", "_self");
    expect(screen.getAllByRole("button", { name: "Try it!" })).toHaveLength(5);
  } finally {
    open.mockRestore();
  }
});

test("Sunday HQ opens the connected Cloudflare dashboard", () => {
  const open = jest.spyOn(window, "open").mockImplementation(() => null);
  try {
    render(<Projects />);
    const card = screen.getByText("Sunday HQ").closest(".card");
    fireEvent.click(within(card).getByRole("button", { name: "Try it!" }));
    expect(open).toHaveBeenCalledWith(
      "https://fantasy-dashboard-v1.daniel-beachy.workers.dev/",
      "_self"
    );
  } finally {
    open.mockRestore();
  }
});
