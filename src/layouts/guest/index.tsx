import { ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { HEADER } from '../../config/layouts';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Box
        component="main"
        sx={{
          px: { lg: 2 },
          pt: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
          },
          pb: {
            xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
            lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
          },
        }}
      >
        {children}
      </Box>
      <MainFooter />
    </Stack>
  );
}
