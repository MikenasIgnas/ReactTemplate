/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../store/hooks';

  const ProgressTracker = () => {
  const progress = useAppSelector((state) => state.route.progressTracker);
  const totalRoomsInArea = useAppSelector((state) => state.route.totalRoomsInArea[state.route.routeNumber - 1]);
  return (
    <Box sx={{ backgroundColor: 'teal', fontSize: '20px' }}>
      Progress:
      {progress}
      /
      {totalRoomsInArea}
    </Box>
);
};

export default ProgressTracker;
