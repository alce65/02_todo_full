import { render } from "../../redux/test.utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Add } from "./add";

describe("Task Component", () => {
  let preloadState;

  beforeEach(() => {
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
    render(<Add />);
    expect(screen.getByPlaceholderText(/Nombre/i));
    expect(screen.getByPlaceholderText(/Responsable/i));
  });
});
