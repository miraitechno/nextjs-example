import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';
import Layout from '../layouts';
import Page from '../components/Page';
import SomeTable from '../sections/home/SomeTable';

const HomePage: NextPageWithLayout = () => (
  <Page title="ホーム">
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <SomeTable />
      </Box>
    </Container>
  </Page>
);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="guests">{page}</Layout>;
};

export default HomePage;
