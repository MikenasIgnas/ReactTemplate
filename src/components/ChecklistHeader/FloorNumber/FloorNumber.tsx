import { Box } from '@mui/material';
import React from 'react';
import { setFloorNumber } from '../../../auth/ChecklistDataReaducer/checklistReducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const FloorNumber = () => {
  const routes = useAppSelector((state) => state.fetchedData.Routes);
  const routeNumber = useAppSelector((state) => state.route.routeNumber);
  const floorNumber = routes.find((route) => route.id === routeNumber);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setFloorNumber(floorNumber?.floor));
  }, []);
  return (
    <Box sx={{ fontSize: '20px' }}>
      Aukštas:
      {' '}
      {floorNumber?.floor}
    </Box>
      );
};
export default FloorNumber;
