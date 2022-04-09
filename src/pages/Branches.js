import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Stack,
  Box,
  Icon,
  Text,
  Button,
  Link,
  Heading,
} from '@chakra-ui/react';
import Card from 'components/Card';
import CardHeader from 'components/Card/CardHeader';
import { VscLocation } from 'react-icons/vsc';

const BranchesList = [
  {
    title: 'SHUSHI BAR TLAQUEPAQUE',
    address: 'CALLE DIEGO RIVERA 22, Chapalita Inn, Zapopan, Jalisco, Mexico',
    googleMapsLink: 'https://goo.gl/maps/L6twxN6UQ8kKAKc87',
  },
  {
    title: 'HOOTERS ZAPOPAN',
    address: 'CALLE DIEGO RIVERA 22, Chapalita Inn, Zapopan, Jalisco, Mexico',
    googleMapsLink: 'https://goo.gl/maps/L6twxN6UQ8kKAKc87',
  },
];

function Branches({ onClose, isOpen, branches = BranchesList }) {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Sucursales</DrawerHeader>
        <DrawerCloseButton />
        <DrawerBody>
          <Stack spacing={3} direction="column">
            {branches.map(branch => (
              <Card p={4} borderRadius={10}>
                <Stack direction="column" spacing={4} alignItems="start">
                  <Heading fontSize="lg">{branch.title}</Heading>
                  <Box display="flex">
                    <Icon as={VscLocation} />
                    <Text fontSize={'md'} size="sm">
                      Direccion:
                    </Text>
                  </Box>
                  <Text
                    fontSize={'md'}
                    fontWeight={600}
                    color={'gray.500'}
                    size="sm"
                  >
                    {branch.address}
                  </Text>
                  <Link
                    isExternal
                    color="orange.500"
                    href={branch.googleMapsLink}
                  >
                    Cómo llegar?
                  </Link>
                </Stack>
              </Card>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Branches;
