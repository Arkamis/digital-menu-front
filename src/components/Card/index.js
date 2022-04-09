import { Box, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

function Card(props) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded={{ md: 'lg', xs: 4 }}
      shadow="base"
      overflow="hidden"
      boxShadow="2xl"
      w={{ sm: '100%', md: '540px' }}
      height={{ sm: '476px', md: '20rem' }}
      // width="359px"
      // height="136px"
      {...props}
    />
  );
}

export default Card;
