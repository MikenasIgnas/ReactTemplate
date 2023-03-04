/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import RouteNumber from './RouteNumber/RouteNumber';
import FloorNumber from './FloorNumber/FloorNumber';
import ProgressTracker from './ProgressTracker/ProgressTracker';
import PremiseName from './PremiseName/PremiseName';

type CheckilistHeaderProps = {

  currentPage:number
};

const CheckilistHeader = ({ currentPage }:CheckilistHeaderProps) => (

  <Box sx={{
 display: 'flex',
 justifyContent: 'space-between',
 paddingBottom: '5px',
 flexDirection: 'column',
 width: '100%',
}}
  >
    <RouteNumber />
    <ProgressTracker />
    <FloorNumber />
    <PremiseName currentPage={currentPage} />
  </Box>

  );

export default CheckilistHeader;
