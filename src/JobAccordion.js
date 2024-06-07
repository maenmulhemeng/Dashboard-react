import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JobAccordionDetails from "./JobAccordionDetails";
import { useState } from "react";
import JobForm from "./JobForm";

export default function JobAccordion({ jobs, deleteJob, udpateJob }) {
  //const [isEdits, setIsEdits] = useState([...jobs.map((j) => 0)]);
  const [isEdit, setIsEdit] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function editJob(job) {
    setIsEdit(true);
  }

  const isExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div sx={{ margin: 1 }}>
      {jobs?.map((job, index) => (
        <Accordion
          sx={{ margin: 1 }}
          key={job.id}
          expanded={expanded === job.id}
          onChange={isExpanded(job.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            data-testid="panel1-header"
          >
            <Typography variant="h6">{job.customerName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {isEdit ? (
              <JobForm
                cancelAction={() => setIsEdit(false)}
                jobInitialStatus={job}
                formAction={(j) => {
                  udpateJob(j);
                  setIsEdit(false);
                }}
              ></JobForm>
            ) : (
              <JobAccordionDetails
                deleteJob={deleteJob}
                editJob={editJob}
                job={job}
              ></JobAccordionDetails>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
