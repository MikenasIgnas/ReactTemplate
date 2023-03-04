import { Box } from '@mui/material';
import React from 'react';

type DutyInAreaProps = {

    dutyInArea:string
};

const DutyInArea = ({ dutyInArea }:DutyInAreaProps) => (
  <Box sx={{ backgroundColor: 'yellow' }}>
    {dutyInArea}
  </Box>
  );

export default DutyInArea;
