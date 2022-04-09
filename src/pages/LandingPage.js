import React from 'react';
import { Box, Grid, Heading, VStack } from '@chakra-ui/react';
import Hero from 'components/Hero';
import MenuBarWithSearch from 'components/MenuBarWithSearch';
import ProductCard from 'components/ProductCard';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Restaurants } from '__mocks__/restaurants';

function LandingPage() {
  return (
    <Grid minH="100vh">
      <VStack align="stretch" spacing={0}>
        <Navbar />
        <Hero />
        <MenuBarWithSearch />
        <Box>
          <Heading fontSize="2xl" mx={4}>
            Lugares populares
          </Heading>
          <VStack>
            {Restaurants.map(restaurant => (
              <ProductCard data={restaurant} />
            ))}
          </VStack>
        </Box>
      </VStack>
      <Footer />
    </Grid>
  );
}

export default LandingPage;
