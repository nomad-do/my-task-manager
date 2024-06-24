import axios from "axios";
import Register from "./Register";
import { customRender as render, screen, fireEvent, waitFor, act } from "../testUtils";

jest.mock("axios");

describe("Register Component", () => {
  const setup = () => {
    render(<Register />);
  };

  test("displays success message on successful registration", async () => {
    axios.post.mockResolvedValueOnce({ data: { message: "User registered successfully!" } });
    setup();

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/username/i), {
        target: { value: "testuser" },
      });
      fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: "password123" },
      });
      fireEvent.click(screen.getByRole("button", { name: /register/i }));
    });

    await waitFor(() =>
      expect(screen.getByText(/user registered successfully!/i)).toBeInTheDocument()
    );
  });

  test("displays client error message on 400 status", async () => {
    axios.post.mockRejectedValueOnce({
      response: { status: 400, data: { message: "Username is already taken" } },
    });
    setup();

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/username/i), {
        target: { value: "testuser" },
      });
      fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: "password123" },
      });
      fireEvent.click(screen.getByRole("button", { name: /register/i }));
    });

    await waitFor(() =>
      expect(screen.getByText(/username is already taken/i)).toBeInTheDocument()
    );
  });

  test("displays generic error message on network or server error", async () => {
    axios.post.mockRejectedValueOnce(new Error("Network error"));
    setup();

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/username/i), {
        target: { value: "testuser" },
      });
      fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: "password123" },
      });
      fireEvent.click(screen.getByRole("button", { name: /register/i }));
    });

    await waitFor(() =>
      expect(
        screen.getByText(/an error occurred during registration. please try again/i)
      ).toBeInTheDocument()
    );
  });
});
