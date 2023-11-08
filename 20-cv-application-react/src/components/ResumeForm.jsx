import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <PersonIcon />
          
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', marginLeft: '5px' }}>
            Personal Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Full Name"
            type="text"
            variant="standard"
          />
          <TextField
            label="Email"
            type="email"
            variant="standard"
          />
          <TextField
            label="Phone"
            type="number"
            variant="standard"
          />
          <TextField
            label="Adress"
            type="text"
            variant="standard"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        > <SchoolIcon/>
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', marginLeft: '5px' }}>
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="School"
            type="text"
            variant="standard"
          />
          <TextField
            label="Degree"
            type="text"
            variant="standard"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Start date"
            type="date"
            variant="standard"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="End date"
            type="date"
            variant="standard"
          />
          <TextField
            label="Location"
            type="text"
            variant="standard"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >   
          <BuildIcon/>
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            Tech Skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Ex: Word, Excel."
            type="text"
            variant="standard"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      > 
       
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >  <WorkHistoryIcon/>
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', marginLeft: '5px' }}>
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Company name"
            type="text"
            variant="standard"
          />
          <TextField
            label="Position title"
            type="text"
            variant="standard"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Start date"
            type="date"
            variant="standard"
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="End date"
            type="date"
            variant="standard"
          />
        </AccordionDetails>
      </Accordion>
    </>
  )
}
