import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import BuildIcon from '@mui/icons-material/Build'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import { ResumeContext } from './context/ResumeContext'

export default function ResumeForm() {
  const { dispatch } = React.useContext(ResumeContext)
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{marginTop:'40px'}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <PersonIcon />

          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              fontWeight: 'bold',
              marginLeft: '5px',
            }}
          >
            Personal Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_PERSONAL',
                payload: { name: e.target.value },
              })
            }
            label="Full Name"
            type="text"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_PERSONAL',
                payload: { email: e.target.value },
              })
            }
            label="Email"
            type="email"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_PERSONAL',
                payload: { phone: e.target.value },
              })
            }
            label="Phone"
            type="number"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_PERSONAL',
                payload: { address: e.target.value },
              })
            }
            label="Address"
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
        >
          {' '}
          <SchoolIcon />
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              fontWeight: 'bold',
              marginLeft: '5px',
            }}
          >
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { school: e.target.value },
              })
            }
            label="School"
            type="text"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { degree: e.target.value },
              })
            }
            label="Degree"
            type="text"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { startDate: e.target.value },
              })
            }
            InputLabelProps={{ shrink: true }}
            label="Start date"
            type="date"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { endDate: e.target.value },
              })
            }
            InputLabelProps={{ shrink: true }}
            label="End date"
            type="date"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EDUCATION',
                payload: { location: e.target.value },
              })
            }
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
          <BuildIcon />
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            Tech Skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            onChange={(e) =>
              dispatch({ type: 'UPDATE_TECH', payload: e.target.value })
            }
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
        >
          {' '}
          <WorkHistoryIcon />
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              fontWeight: 'bold',
              marginLeft: '5px',
            }}
          >
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EXPERIENCE',
                payload: { companyName: e.target.value },
              })
            }
            label="Company name"
            type="text"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EXPERIENCE',
                payload: { positionTitle: e.target.value },
              })
            }
            label="Position title"
            type="text"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EXPERIENCE',
                payload: { startDate: e.target.value },
              })
            }
            InputLabelProps={{ shrink: true }}
            label="Start date"
            type="date"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_EXPERIENCE',
                payload: { endDate: e.target.value },
              })
            }
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
