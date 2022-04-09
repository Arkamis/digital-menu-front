import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';

function SectionsBreadcrumb({ links }) {
  return (
    <Box>
      <Breadcrumb separator={BsDot} spacing={3}>
        {links.length &&
          links.map(({ href, title }) => (
            <BreadcrumbItem>
              <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
    </Box>
  );
}

SectionsBreadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default SectionsBreadcrumb;
