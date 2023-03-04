import { Box, Card } from '@mui/material';
import React from 'react';

type ChecklistContainerProps = {
    children : React.ReactNode
};
const ChecklistContainer = ({ children }:ChecklistContainerProps) => (
  <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
  >

    <Card className="Card">
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    }}
      >
        {children}
      </Box>
    </Card>
  </Box>
  );

export default ChecklistContainer;
