import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function Advertisment() {
  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        allowPinchZoom={true}
        autoFocus={true}
        isCentered
        motionPreset="scale"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalBody sx={{ margin: 0, p: 0 }}>
            <ModalCloseButton />
            <Image
              src="https://i.pinimg.com/originals/a5/e4/e8/a5e4e886b30100eea6cc5385640a0cdd.png"
              boxSize="650px"
              objectFit="cover"
              alt="Promotion"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Advertisment;
