import { Box, useColorModeValue } from '@chakra-ui/react';
import { Logo } from 'Logo';
import NProgress from 'nprogress';
import { useEffect, useMemo } from 'react';

import MotionBox from './motion/Box';

// ----------------------------------------------------------------------

const RootStyle = ({ children, props }) => (
  <Box
    {...props}
    sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: useColorModeValue('white', 'dark'),
    }}
  >
    {children}
  </Box>
);

// ----------------------------------------------------------------------

function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <>
      <ProgressBar />

      <RootStyle {...other}>
        <MotionBox
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo sx={{ width: 64, height: 64 }} />
        </MotionBox>

        <MotionBox
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
          sx={{
            width: 100,
            height: 100,
            borderRadius: '25%',
            position: 'absolute',
            border: useColorModeValue('blackAlpha.300', 'whiteAlpha.500'),
          }}
        />

        <MotionBox
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{
            ease: 'linear',
            duration: 3.2,
            repeat: Infinity,
          }}
          sx={{
            width: 120,
            height: 120,
            borderRadius: '25%',
            position: 'absolute',
            border: `solid 8px ${useColorModeValue('black', 'white')}`,
          }}
        />
      </RootStyle>
    </>
  );
}
