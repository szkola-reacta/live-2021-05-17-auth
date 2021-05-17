import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => (
  <>
    <Header />
    <Flex h="calc(100vh - 3rem)">
      <Sidebar />
      <Box
        maxH="calc(100vh - 3rem)"
        w="100%"
        p={6}
        bg="#f7fafc"
        overflowY="auto"
        overflowX="visible"
        borderLeft="1px solid #cad5de"
      >
        <main>{children}</main>
      </Box>
    </Flex>
  </>
);

export default AdminLayout;
