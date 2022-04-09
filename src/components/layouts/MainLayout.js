import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <Flex
      overflow="hidden"
      backgroundColor={useColorModeValue('whiteAlpha.500', 'gray.800')}
      width="100%"
      height="100%"
      sx={{
        top: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <Outlet />
    </Flex>
  );
}

export default MainLayout;
