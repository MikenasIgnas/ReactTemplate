import { Box } from '@mui/material';
import React from 'react';

const Loader = () => (
  <Box sx={{
        height: '94vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
  >
    <Box className="loader" />
  </Box>
  );

export default Loader;
