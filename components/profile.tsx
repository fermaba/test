import { observer } from 'mobx-react';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import useStore from '../hooks/useStore';

const Profile = observer(() => {
  const { user, boards } = useStore();
  const router = useRouter();

  useEffect(() => {
    const { activeUser } = user;
    if (!activeUser) {
      user.getUser();
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <>
      <Typography sx={{ fontSize: '36px', lineHeight: '42px', color: '#FFF9F9;' }}>
        {user.activeUser?.fullName}
      </Typography>
      <Typography
        sx={{ fontSize: '32px', lineHeight: '37px', color: '#FFFFFF', marginTop: '35px' }}
      >
        Boards: {user.activeUser?.idBoards.length}
      </Typography>
      <Button onClick={handleLogout} sx={{marginTop: '30px'}} variant='contained'>Logout</Button>
    </>
  );
});

export default Profile;
