import { CircularProgress, Heading, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function DisplayLoadableData({
  isLoading,
  children,
  isEmpty,
  error,
  loadingText = 'Cargando...',
  noData = 'No Data',
}) {
  if (isLoading) {
    return (
      <Stack
        spacing={['3', '4']}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={24} />
        <Heading variant="h2">{loadingText}</Heading>
      </Stack>
    );
  }
  if (!error && !isLoading && isEmpty) {
    return typeof noData === 'string' ? (
      <Heading variant="h4">{noData}</Heading>
    ) : (
      noData
    );
  }

  if (error && !isLoading) {
    return (
      <Heading variant="h4" textAlign="center" color="error">
        Error: {error.message ? error.message : JSON.stringify(error)}
      </Heading>
    );
  }
  if (!isEmpty) return <div>{children}</div>;
}

DisplayLoadableData.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.object,
  loadingText: PropTypes.string,
  noData: PropTypes.node || PropTypes.string,
  isEmpty: PropTypes.bool.isRequired,
};

export default DisplayLoadableData;
