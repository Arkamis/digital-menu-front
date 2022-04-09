import { Image } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomImage = ({ url, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // const handleImgLoad = useCallback(() => {
  //   setIsZoomed(true);
  // }, []);

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom
      // wrapStyle={{ position: isZoomed ? 'relative' : 'initial' }}
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
    >
      <Image
        alt={alt ?? 'A image of food'}
        // onLoad={handleImgLoad}
        src={url}
        borderRadius="md"
      />
    </ControlledZoom>
  );
};

export default ZoomImage;
