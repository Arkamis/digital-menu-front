import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { Box, HStack, Stack } from '@chakra-ui/layout';
import {
  Link,
  useColorModeValue,
  Flex,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';

const NavLink = ({ children, path, isActive }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    _active={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    className={isActive ? 'active' : ''}
  >
    <Link style={{ color: isActive ? 'red.200' : 'blue' }} href={path}>
      {children}
    </Link>
  </Box>
);

function MenuBar({ categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const greyBg = useColorModeValue('white', 'gray.900');
  return (
    <Box
      px={4}
      my={0}
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        top: 0,
        width: '100%',
        color: greyBg,
        backgroundColor: greyBg,
        backgroundPosition: '1',
        padding: '10px',
        overflow: 'auto',
      }}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        // css={{
        //   bottom: 1,
        //   left: 0,
        //   scrollbarWidth: 'none',
        //   '&::-webkit-scrollbar': {
        //     width: 0,
        //     background:
        //       'transparent' /* Optional: just make scrollbar invisible */,
        //   },
        //   '&::-webkit-scrollbar-track': {
        //     width: 0,
        //   },
        //   // '&::-webkit-scrollbar-thumb': {
        //   //   background: 'blue.500',
        //   //   borderRadius: '24px'
        //   // }
        // }}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <Search2Icon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          color={useColorModeValue('black', 'white')}
        ></IconButton>
        <HStack spacing="2" as={'nav'}>
          <>
            {categories.map((category, index) => (
              <NavLink key={category.title} path={`#${category.title}`}>
                {category.title}
              </NavLink>
            ))}
          </>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {categories.map(({ title, endpoint }) => (
              <NavLink key={title} path={endpoint}>
                {title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default MenuBar;
