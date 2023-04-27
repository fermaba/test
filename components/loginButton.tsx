import Link from 'next/link';
import { Button } from '@mui/material';

const LoginButton = () => {
  const trelloLogin = `https://trello.com/1/authorize?response_type=token&key=48f470fa9b65214b51401dff5897b3a3&return_url=https://test-git-main-dshabelyan-gmailcom.vercel.app/trello/auth&callback_method=fragment&scope=read,write&expiration=never&name=Logger`;

  return (
    <Link href={trelloLogin}>
      <Button variant="contained">Authorization</Button>
    </Link>
  );
};

export default LoginButton;
