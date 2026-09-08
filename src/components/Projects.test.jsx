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
    expect(screen.getAllByRole("button", { name: "Try it!" })).toHaveLength(4);
  } finally {
    open.mockRestore();
  }
});
