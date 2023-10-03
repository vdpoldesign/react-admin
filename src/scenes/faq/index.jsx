import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Veel gestelde vragen" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Belangrijke vraag 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            est est, commodo sit amet nulla ut, placerat tincidunt elit. Integer
            sed dignissim nisl, sit amet fringilla ex. Mauris vulputate justo
            enim, ac rhoncus ipsum rhoncus dignissim.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Belangrijke vraag 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            est est, commodo sit amet nulla ut, placerat tincidunt elit. Integer
            sed dignissim nisl, sit amet fringilla ex. Mauris vulputate justo
            enim, ac rhoncus ipsum rhoncus dignissim.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Belangrijke vraag 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            est est, commodo sit amet nulla ut, placerat tincidunt elit. Integer
            sed dignissim nisl, sit amet fringilla ex. Mauris vulputate justo
            enim, ac rhoncus ipsum rhoncus dignissim.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Belangrijke vraag 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            est est, commodo sit amet nulla ut, placerat tincidunt elit. Integer
            sed dignissim nisl, sit amet fringilla ex. Mauris vulputate justo
            enim, ac rhoncus ipsum rhoncus dignissim.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
