import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";

export default function JobForm({
  jobInitialStatus,
  formAction,
  cancelAction,
}) {
  const [job, setJob] = useState({ ...jobInitialStatus });
  return (
    <Box>
      <FormControl fullWidth>
        <TextField
          sx={{ margin: 1 }}
          label="Customer Name"
          value={job.customerName}
          onChange={(e) => setJob({ ...job, customerName: e.target.value })}
        ></TextField>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          sx={{ margin: 1 }}
          label="Job Type"
          value={job.jobType}
          onChange={(e) => setJob({ ...job, jobType: e.target.value })}
        ></TextField>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          sx={{ margin: 1 }}
          label="Technician"
          value={job.technician}
          onChange={(e) => setJob({ ...job, technician: e.target.value })}
        ></TextField>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 1, padding: 1 }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={job.status}
          onChange={(e) => setJob({ ...job, status: e.target.value })}
        >
          <MenuItem value={"Scheduled"}>Scheduled</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ padding: 1 }}>
        <DatePicker
          label="Appointment Date"
          value={job.appointmentDate ? dayjs(job.appointmentDate) : null}
          onChange={(e) => {
            setJob({ ...job, appointmentDate: e });
          }}
        ></DatePicker>
      </FormControl>
      <Grid item sx={{ margin: 1 }}>
        <Button
          variant="contained"
          sx={{ mr: 1 }}
          onClick={() => {
            formAction(job);
            setJob({ ...jobInitialStatus });
          }}
        >
          Submit
        </Button>

        <Button
          sx={{ mr: 1 }}
          onClick={() => {
            setJob({ ...jobInitialStatus });
            cancelAction(job);
          }}
        >
          Cancel
        </Button>
      </Grid>
    </Box>
  );
}
