import { render, screen } from "@testing-library/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import JobForm from "./JobForm";
import userEvent from "@testing-library/user-event";

test("renders Customer Name", () => {
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

  expect(targetElem).toBeInTheDocument();
});

test("renders Status", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        formAction={() => {}}
        jobInitialStatus={{}}
        cancelAction={() => {}}
      ></JobForm>
    </LocalizationProvider>
  );
  const targetElem = screen.getByLabelText(/Status/i);

  expect(targetElem).toBeInTheDocument();
});

test("renders Job Type", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        formAction={() => {}}
        jobInitialStatus={{}}
        cancelAction={() => {}}
      ></JobForm>
    </LocalizationProvider>
  );
  const targetElem = screen.getByLabelText(/Job Type/i);

  expect(targetElem).toBeInTheDocument();
});

test("execute fromAction function when Submit clicked", async () => {
  let clicked = undefined;
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        formAction={(job) => {
          clicked = true;
        }}
      ></JobForm>
    </LocalizationProvider>
  );
  await userEvent.click(screen.getByText("Submit"));

  expect(clicked).toBeTruthy();
});

test("execute cancelAction function when Submit clicked", async () => {
  let clicked = undefined;
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        cancelAction={() => {
          clicked = true;
        }}
      ></JobForm>
    </LocalizationProvider>
  );
  await userEvent.click(screen.getByText("Cancel"));

  expect(clicked).toBeTruthy();
});

test("Modify the model when inputs change", async () => {
  let clicked = undefined;
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <JobForm
        formAction={(job) => {
          clicked = job;
        }}
        jobInitialStatus={{
          technician: "",
          jobType: "",
          customerName: "",
          appointmentDate: "",
        }}
      ></JobForm>
    </LocalizationProvider>
  );
  await userEvent.type(screen.getByLabelText("Technician"), "T1");
  await userEvent.type(screen.getByLabelText("Job Type"), "T1");
  await userEvent.type(screen.getByLabelText("Customer Name"), "T1");
  await userEvent.type(screen.getByLabelText("Appointment Date"), "");
  await userEvent.click(screen.getByText("Submit"));

  expect(clicked).toStrictEqual({
    technician: "T1",
    jobType: "T1",
    customerName: "T1",
    appointmentDate: "",
  });
});
