import React from 'react';
import PropTypes from 'prop-types';
import { SubSectionType } from 'types';
import { Center, Link, Wrap, WrapItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import CardBox from 'components/CardBox';

function SubSectionsDisplayed({ subSections }) {
  return (
    <>
      <Wrap align="center" justify="center">
        {subSections.map(({ title, imageUrl, id, ...section }) => (
          <WrapItem
            key={id}
            sx={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              w: '100px',
              h: '120px',
            }}
          >
            <Center>
              <Link as={RouterLink} to={`/#${title}`}>
                {title}
              </Link>
            </Center>
          </WrapItem>
        ))}
      </Wrap>
      {subSections.map(({ products, title }) => (
        <section id={title}>
          {products.length &&
            products.map(product => (
              <CardBox
                key={product.name}
                photoUrl={product.imageUrl}
                title={product.name}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
              />
            ))}
        </section>
      ))}
    </>
  );
}

SubSectionsDisplayed.propTypes = {
  subSections: PropTypes.arrayOf(SubSectionType).isRequired,
};

export default SubSectionsDisplayed;
