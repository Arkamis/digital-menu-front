import { Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

const CardHeader = ({ title, action }) => {
  return (
    <Flex py="4">
      <Heading fontSize="lg">{title}</Heading>
      {action}
    </Flex>
  );
};

export default CardHeader;
