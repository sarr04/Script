import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/Add"; // Use Add (+) icon
import { Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none", // No border for each accordion item
  "&:not(:last-child)": {
    borderBottom: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon />} // Default expand icon
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderBottom: "1px solid #000", // Light gray border between sections
  "& .MuiAccordionSummary-expandIcon": {
    fontSize: "1.5rem", // Larger expand icon size
    transform: "rotate(0deg)",
    transition: "transform 0.2s ease",
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(45deg)", // Rotate to mimic a minus (-)
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
    fontWeight: "bold", // Bold title
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "1rem",
  backgroundColor: "transparent", // Light gray background for content
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        border: "2px solid #000", // Border for the entire accordion container
        borderRadius: "8px", // Rounded corners
        overflow: "hidden",
        marginRight: "60px",
        marginLeft: "60px",
      }}
    >
      <Accordion
        sx={{ "&.MuiPaper-root": { background: "transparent" } }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span" className="justify-center ">
            Networking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ "&.MuiPaper-root": { background: "transparent" } }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span" sx={{ textAlign: "center" }}>
            Exclusive Content
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ "&.MuiPaper-root": { background: "transparent" } }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">Industry Experts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
