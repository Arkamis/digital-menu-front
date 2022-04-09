import PropTypes from 'prop-types';

const { shape, number, string, oneOfType, arrayOf, oneOf } = PropTypes;

export const ProductType = shape({
  name: string.isRequired,
  description: string,
  oldPrice: oneOfType([string, number]),
  imageUrl: string,
  price: oneOfType([string, number]).isRequired,
});

export const SubSectionType = shape({
  title: string.isRequired,
  parentId: string.isRequired,
  description: string,
  imageUrl: string.isRequired,
  id: string.isRequired,
  products: arrayOf(ProductType).isRequired,
});

export const SectionType = shape({
  name: string.isRequired,
  id: string.isRequired,
  subSections: arrayOf(SubSectionType),
  products: arrayOf(ProductType),
});

export const BreadcrumbType = shape({
  link: string.isRequired,
  title: string,
  colorScheme: oneOf(['red', 'primary', 'secondary', 'blue']),
});
export const NavLinksType = arrayOf(shape(BreadcrumbType));
