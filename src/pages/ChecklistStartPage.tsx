import {
 Box, Button, Card, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChecklistPage = () => {
    const navigate = useNavigate();
    const startChecklist = () => {
        navigate('/ChecklistRoutes?route=1&toDoID=1');
    };
    return (
      <Box sx={{
                  width: '100%',
                  height: '93vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
      >

        <Card sx={{
                  width: '500px',
                  height: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
        >
          <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
              }}
          >
            <Typography>Begin J13 premises checklist</Typography>
            <Button onClick={startChecklist} variant="contained">Start</Button>
          </Box>
        </Card>
      </Box>
        );
};

export default ChecklistPage;
