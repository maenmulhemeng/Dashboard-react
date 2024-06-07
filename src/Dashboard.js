import { useEffect, useState } from "react";
import JobForm from "./JobForm";
import { Badge, Box, Grid, Paper } from "@mui/material";
import JobAccordion from "./JobAccordion";
import dayjs from "dayjs";

const jobInitialStatus = {
  customerName: "",
  jobType: "",
  status: "",
  appointmentDate: dayjs(Date.now()),
  technician: "",
};

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const apiJobBaseURL = "http://localhost:3001/jobs";
  useEffect(() => {
    getJobs();
  }, []);

  function getJobs() {
    fetch(apiJobBaseURL)
      .then((response) => response.json())
      .then((jobs) => {
        setJobs(jobs);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function addJob(job) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    };

    fetch(apiJobBaseURL, options)
      .then((response) => response.json())
      .then((addedJob) => {
        setJobs([...jobs, addedJob]);
      });
  }

  function deleteJob(job) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${apiJobBaseURL}/${job.id}`, options)
      .then((response) => response.json())
      .then((modifiedJobs) => {
        setJobs([...modifiedJobs]);
      });
  }

  function udpateJob(job) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    };

    fetch(`${apiJobBaseURL}/${job.id}`, options)
      .then((response) => response.json())
      .then((modifiedJobs) => {
        setJobs([...modifiedJobs]);
      });
  }

  function cancelAddAction() {}

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Paper sx={{ padding: 1, margin: 1 }}>
            <h3>Add New Job</h3>
            <JobForm
              jobInitialStatus={jobInitialStatus}
              formAction={addJob}
              cancelAction={cancelAddAction}
            ></JobForm>
          </Paper>
        </Grid>
        <Grid item sm={8}>
          <Paper sx={{ padding: 1, margin: 1 }}>
            <h3>
              <Badge badgeContent={jobs.length} color="primary">
                {" "}
                Job List
              </Badge>
            </h3>
            <JobAccordion
              jobs={jobs}
              udpateJob={udpateJob}
              deleteJob={deleteJob}
            ></JobAccordion>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
