import { render } from "../../redux/test.utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { ToDo } from "./todo";

describe("Task Component", () => {
  let preloadedState;
  beforeEach(() => {
    preloadedState = {
      tasks: [
        {
          id: 1,
          name: "First ToDo",
          responsible: "Pepe",
        },
      ],
    };
  });
  test("should be rendered", async () => {
    render(
      <MemoryRouter>
        <ToDo />
      </MemoryRouter>,
      { preloadedState }
    );
    expect(await screen.getByText(/Lista/i));
    // const btn = screen.getByRole("button");
    // userEvent.click(btn);
    // TODO expect
    // const checkbox = screen.getByRole("checkbox");
    // userEvent.click(checkbox);
    // TODO expect
  });
});
