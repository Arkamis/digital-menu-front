import { Box, Grid, GridItem, Heading, Text, Stack } from '@chakra-ui/layout';
import React from 'react';
import Card from './Card';
import 'react-medium-image-zoom/dist/styles.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Tag,
} from '@chakra-ui/react';

function CardBox({ title, photoUrl, description, price, oldPrice, navLinks }) {
  return (
    <Card my={4}>
      {/* <Stack
        // divider={<StackDivider borderColor="gray.200" />}
        direction={'row'}
        spacing="24px"
        p={4}
      >
        <Box display="flex" flexDirection="column" w="45%">
          <CardHeader title="Chef's speciality sushi" />
          <Text color="grey.800" isTruncated noOfLines={2}>
            Charola de 4 sushis 5 nigris, sushis a eleccion
          </Text>
          <Flex alignItems="center">
            <Stack
              direction="row"
              align="center"
              justifyContent="space-between"
              spacing=".5rem"
            >
              <Text as="s" color="grey.200">
                $550
              </Text>
              <Text fontSize="18px">$500</Text>
            </Stack>
            <Spacer />
            <Button m={4} size="sm" variant="ghost">
              Ver más
            </Button>
          </Flex>
        </Box>
        <Box w="100%">
          <Image
            boxSize="100%"
            borderRadius="md"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            width="104px"
            height="104px"
          />
        </Box>
      </Stack> */}
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={1}
        rowGap={2}
        padding={3}
      >
        {navLinks && navLinks.length && (
          <GridItem rowSpan={1} colSpan={7}>
            <Breadcrumb spacing="8px" separator="-">
              {navLinks.map(
                ({ link, colorScheme, title, ...breadcrumbLink }) => (
                  <BreadcrumbItem>
                    <BreadcrumbLink href={link}>
                      <Tag
                        size="sm"
                        colorScheme={colorScheme}
                        borderRadius="full"
                        sx={{ textAlign: 'center' }}
                      >
                        {title}
                      </Tag>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )
              )}
            </Breadcrumb>
          </GridItem>
        )}
        <GridItem rowSpan={1} colSpan={4}>
          <Heading as="h2" size="md">
            {title}
          </Heading>
        </GridItem>
        <GridItem rowSpan={price ? 3 : 2} colSpan={3} margin={1}>
          <Box boxSize="100%" w="100px" h="200px">
            <Image src={photoUrl} />
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Text fontSize="md" isT color="gray.600">
            {description}
          </Text>
        </GridItem>
        {price && (
          <GridItem>
            <Stack
              direction="row"
              align="center"
              justifyContent="space-between"
              spacing=".5rem"
            >
              {oldPrice && (
                <Text as="s" color="grey.200">
                  {typeof oldPrice === 'string' ? parseInt(oldPrice) : oldPrice}
                </Text>
              )}
              <Text fontSize="18px">
                ${typeof price === 'string' ? parseInt(price) : price}
              </Text>
            </Stack>
          </GridItem>
        )}
      </Grid>
    </Card>
  );
}

export default CardBox;
