import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'ColorModeSwitcher';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout = ({
  children,
  restaurant: { name, phone, imagenPath, facebook, altText, ...restaurant },
}) => (
  <Box transition="0.5s ease-out">
    <Box>
      <Header
        title={restaurant.name}
        phone={restaurant.phone}
        imageUrl={restaurant.imagenPath}
        facebook={restaurant.facebook}
        instagram={restaurant.imagenPath}
        alt={restaurant.alt}
      />
      <Container
        as="main"
        centerContent
        maxW="container.lg"
        padding={2}
        backgroundColor={useColorModeValue('gray.100', 'blackAlpha')}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  </Box>
);

export default Layout;
