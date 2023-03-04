/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
/* eslint-disable max-len */
// import { setDutyInArea } from '../../../auth/ChecklistDataReaducer/checklistReducer';
import { useAppSelector } from '../../store/hooks';
import DutyInArea from './DutyInArea/DutyInArea';
import ProblemsInArea from './ProblemsInArea/ProblemsInArea';

 type ChecklistBodyProps = {
  currentPage:number
 };
const ChecklistBody = ({ currentPage }:ChecklistBodyProps) => {
 const dutyInArea = useAppSelector((state) => state.fetchedData.ToDo.filter((todo) => currentPage === todo.areasId));
 console.log(dutyInArea);

    return (

      <Box sx={{ fontSize: '17px', paddingBottom: '10px' }}>
        {dutyInArea.map((el) => (
          <Box>
            <DutyInArea dutyInArea={el.duty} />
            <ProblemsInArea dutyID={el.id} />
            {/* <ChecklistCheckBoxes checklistDataPairs={checklistDataPairs} reactionToProblem={problem.reaction} problems={problem.possibleProblem} /> */}
          </Box>
))}
      </Box>

     );
  };
export default ChecklistBody;
