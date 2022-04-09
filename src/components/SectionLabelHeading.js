import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

function SectionLabelHeading({ title, ...props }) {
  return <Heading {...props}>{title}</Heading>;
}

SectionLabelHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionLabelHeading;
