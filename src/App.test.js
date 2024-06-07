import { render, screen } from "@testing-library/react";
import App from "./App";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import JobForm from "./JobForm";

test("renders Add New Job", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  );
  const targetElem = screen.getByText(/Add New Job/i);
  expect(targetElem).toBeInTheDocument();
});

test("renders Job List", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  );
  const targetElem = screen.getByText(/Job List/i);
  expect(targetElem).toBeInTheDocument();
});

test("renders Submit", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  );
  const targetElem = screen.getByText(/Submit/i);
  expect(targetElem).toBeInTheDocument();
});

test("renders Customer Name`1", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        formAction={() => {}}
        jobInitialStatus={{}}
        cancelAction={() => {}}
      ></JobForm>
    </LocalizationProvider>
  );
  const targetElem = screen.getByLabelText(/Customer Name/i);
  console.log(targetElem.value);
  expect(targetElem).toBeInTheDocument();
});
