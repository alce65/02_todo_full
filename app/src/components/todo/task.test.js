import { render } from "../../redux/test.utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import * as actions from "../../redux/tasks/action-creators";

import { Task } from "./task";

// jest.mock("../../redux/tasks/action-creators");

describe("Task Component", () => {
  let task;
  let preloadState;
  console.log(actions);
  beforeEach(() => {
    task = {
      id: 1,
      name: "First ToDo",
      responsible: "Pepe",
    };
    preloadState = {
      tasks: [
        {
          id: 1,
          name: "First ToDo",
          responsible: "Pepe",
        },
      ],
    };
  });
  test("should be rendered", () => {
    render(
      <MemoryRouter>
        <Task task={task} />
      </MemoryRouter>
    );
    expect(screen.getByText(/First/i));
    expect(screen.getByText(/Pepe/i));
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    // TODO expect
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    // TODO expect
  });
});
