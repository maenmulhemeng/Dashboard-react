import { render, screen } from "@testing-library/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import JobAccordionDetails from "./JobAccordionDetails";

test("Renders ID when job passed to JobAccordionDetails", () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "",
    appointmentDate: "",
    status: "",
    id: "",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordionDetails job={[job]}></JobAccordionDetails>
    </LocalizationProvider>
  );
  const targetElem = screen.getByText("ID:");

  expect(targetElem).toBeInTheDocument();
});

test("Renders ID: when job passed to JobAccordionDetails", () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "",
    appointmentDate: "",
    status: "",
    id: "Identifier",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordionDetails job={job}></JobAccordionDetails>
    </LocalizationProvider>
  );
  const targetElem = screen.getByText("ID:");
  const targetElem2 = screen.getByText(job.id);

  expect(targetElem).toBeInTheDocument();
  expect(targetElem2).toBeInTheDocument();
});

test("Renders Cutoner Name when job passed to JobAccordionDetails", () => {
  const job = {
    technician: "",
    jobType: "",
    customerName: "customerName",
    appointmentDate: "",
    status: "",
    id: "Identifier",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordionDetails job={job}></JobAccordionDetails>
    </LocalizationProvider>
  );
  const targetElem = screen.getByText("Customer Name:");
  const targetElem2 = screen.getByText(job.customerName);

  expect(targetElem).toBeInTheDocument();
  expect(targetElem2).toBeInTheDocument();
});

test("Renders Job Type when job passed to JobAccordionDetails", () => {
  const job = {
    technician: "",
    jobType: "jobType",
    customerName: "customerName",
    appointmentDate: "",
    status: "",
    id: "Identifier",
  };
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobAccordionDetails job={job}></JobAccordionDetails>
    </LocalizationProvider>
  );
  const targetElem = screen.getByText("Job Type:");
  const targetElem2 = screen.getByText(job.jobType);

  expect(targetElem).toBeInTheDocument();
  expect(targetElem2).toBeInTheDocument();
});
