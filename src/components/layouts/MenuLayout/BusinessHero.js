import { PhoneIcon } from '@chakra-ui/icons';
import { Heading, Link, Text, VStack } from '@chakra-ui/layout';
import {
  HStack,
  Icon,
  Box,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MdStoreMallDirectory } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import MotionBox from 'components/motion/Box';
import Branches from 'pages/Branches';

function BusinessHero({ name, phone = '33304532123', branches }) {
  const parsePhoneNumber = phoneNumber =>
    phoneNumber
      ? phoneNumber.replace(/\s/g, '').substr(phoneNumber.length - 10)
      : '';

  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <VStack
      spacing="1"
      py="4"
      transform="auto"
      translateY="-5px"
      backgroundColor={useColorModeValue('white', 'gray.800')}
      borderTopRadius="md"
    >
      <MotionBox>
        <Heading>{name}</Heading>
      </MotionBox>
      <MotionBox>
        <Box
          px={4}
          sx={{
            position: '-webkit-sticky',
            /* Safari */ position: 'sticky',
            top: 0,
            width: '100%',
            backgroundPosition: '1',
            padding: '10px',
            overflow: 'auto',
          }}
        >
          <HStack>
            <PhoneIcon />
            <Text>
              Llamar:
              <Link color="blue.700" href={`tel:${phone}`}>
                {parsePhoneNumber(phone)}
              </Link>
            </Text>
          </HStack>
        </Box>
      </MotionBox>
      <MotionBox transition=" 0.5s linear">
        <HStack
          divider={<Icon as={BsDot} size="md" sx={{ border: 'none' }} />}
          spacing={2}
          align="center"
        >
          <IconButton
            isRound
            size="sm"
            icon={<Icon as={MdStoreMallDirectory} />}
            aria-label="ver sucursales"
            variant="ghost"
            onClick={onOpen}
          />
          <IconButton
            isRound
            size="sm"
            icon={<Icon as={FaFacebook} />}
            colorScheme="facebook"
            variant="ghost"
            aria-label="ver sucursales"
          />
          <IconButton
            size="sm"
            isRound
            variant="ghost"
            colorScheme="twitter"
            icon={<Icon as={AiOutlineInstagram} />}
            aria-label="ver sucursales"
          />
          <IconButton
            size="sm"
            isRound
            variant="ghost"
            colorScheme="whatsapp"
            icon={<Icon as={FaWhatsapp} />}
            aria-label="ver sucursales"
          />
        </HStack>
      </MotionBox>
      <Branches isOpen={isOpen} onClose={onClose} branches={branches} />
    </VStack>
  );
}

export default BusinessHero;
