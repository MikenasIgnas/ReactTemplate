/* eslint-disable max-len */
import { Box } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../store/hooks';

type ProblemsInAreaProps = {
  dutyID:number
};

const ProblemsInArea = ({ dutyID }:ProblemsInAreaProps) => {
  const possibleProblemsTable = useAppSelector((state) => state.fetchedData.possibleProblems).filter((el) => el.todoId === dutyID);
  return (
    <Box>
      <Box sx={{ width: '374px', fontSize: '15px' }}>
        {possibleProblemsTable.map((el) => (
          <Box>
            <Box>{el.possibleProblem}</Box>
            <Box>{el.reaction}</Box>
          </Box>
      ))}
      </Box>
    </Box>

  );
};

export default ProblemsInArea;
