import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  children?: ReactNode;
};

export default function LogoOnlyLayout({ children }: Props) {
  return (
    <>
      <HeaderStyle>
        <Typography>Hello</Typography>
      </HeaderStyle>
      {children}
    </>
  );
}
