import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

const LoginLayout = ({ children }) => (
  <Flex h="calc(100vh)">
    <Box maxH="calc(100vh)" w="100%" p={6} bg="#f7fafc" overflowY="auto" overflowX="visible">
      <main>{children}</main>
    </Box>
  </Flex>
);

export default LoginLayout;
