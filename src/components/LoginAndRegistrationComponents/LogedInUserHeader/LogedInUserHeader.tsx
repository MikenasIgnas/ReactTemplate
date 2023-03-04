import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { clearUserData } from '../../../auth/AuthReducer/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const LogedInUserHeader = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const logOut = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    dispatch(clearUserData());
    navigate('/LoginPage');
  };
  const goToChecklistPage = () => {
    navigate('/ChecklistPage');
  };
  const goToChecklistHistoryPage = () => {
    navigate('/ChecklistHistoryPage');
  };
  const username = useAppSelector((state) => state.auth.username);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Button onClick={goToChecklistPage} color="inherit">Start Checklist</Button>
            <Button onClick={goToChecklistHistoryPage} color="inherit">Checklist History</Button>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box style={{ display: 'flex', gap: '10px' }}>
              <Typography>Hello</Typography>
              <Box sx={{ display: 'flex' }}>
                <Typography>{username}</Typography>
                <Typography>!</Typography>
              </Box>
            </Box>
            <Box>
              <Button onClick={logOut} color="inherit">Log Out</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
    );
};
export default LogedInUserHeader;
