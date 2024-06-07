import { Button } from "@mui/material";
import React from "react";
export default function JobAccordionDetails({ job, deleteJob, editJob }) {
  return (
    <div>
      <p>
        ID: <span>{job.id}</span>
      </p>
      <p>
        Customer Name: <span>{job.customerName}</span>
      </p>
      <p>
        Job Type: <span>{job.jobType}</span>
      </p>
      <p>
        Status: <span>{job.status}</span>
      </p>
      <p>
        Appointment: <span>{job.appointmentDate}</span>
      </p>
      <p>
        Technician: <span>{job.technician}</span>
      </p>
      <div>
        <Button sx={{ mr: 1 }} onClick={() => deleteJob(job)}>
          Delete Job
        </Button>
        <Button sx={{ mr: 1 }} onClick={() => editJob(job)}>
          Edit Job
        </Button>
      </div>
    </div>
  );
}
