import { render, screen } from "@testing-library/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import JobAccordion from "./JobAccordion";
import userEvent from "@testing-library/user-event";

test("Renders an accordion when jobs passed", () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "",
    appointmentDate: "",
    status: "",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordion jobs={[job]}></JobAccordion>
    </LocalizationProvider>
  );
  const targetElem = screen.getByTestId("panel1-header");

  expect(targetElem).toBeInTheDocument();
});

test("Renders Edit Job button when click on accordion", async () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "Maen Mulhem",
    appointmentDate: "",
    status: "",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordion jobs={[job]}></JobAccordion>
    </LocalizationProvider>
  );
  const button = screen.getByTestId("panel1-header");
  await userEvent.click(button);
  const targetElem = screen.getByText("Edit Job");
  expect(targetElem).toBeInTheDocument();
});

test("Renders Delete Job button when click on accordion", async () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "Maen Mulhem",
    appointmentDate: "",
    status: "",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordion jobs={[job]}></JobAccordion>
    </LocalizationProvider>
  );
  const button = screen.getByTestId("panel1-header");
  await userEvent.click(button);
  const targetElem = screen.getByText("Delete Job");
  expect(targetElem).toBeInTheDocument();
});

test("Call deleteJob when Delete Job clicked", async () => {
  let clicked = false;
  const job = {
    technician: "",
    jobType: "",
    customerName: "Maen Mulhem",
    appointmentDate: "",
    status: "",
  };

  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordion
        jobs={[job]}
        deleteJob={() => {
          clicked = true;
        }}
      ></JobAccordion>
    </LocalizationProvider>
  );
  const button = screen.getByTestId("panel1-header");
  await userEvent.click(button);
  const targetElem = screen.getByText("Delete Job");
  await userEvent.click(targetElem);
  expect(clicked).toBeTruthy();
});
