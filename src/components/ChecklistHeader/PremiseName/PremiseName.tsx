import { Box } from '@mui/material';
import React from 'react';
import { setPremiseName } from '../../../auth/ChecklistDataReaducer/checklistReducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

type PremiseNameProps = {

  currentPage:number
};

const PremiseName = ({ currentPage }:PremiseNameProps) => {
  const areas = useAppSelector((state) => state.fetchedData.Areas);
  const premiseNameItem = areas.find((area) => area.id === currentPage);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setPremiseName(premiseNameItem?.roomName));
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ fontSize: '17px' }}>
        Patalpa:
        {premiseNameItem?.roomName}
      </Box>
    </Box>
          );
};

export default PremiseName;
