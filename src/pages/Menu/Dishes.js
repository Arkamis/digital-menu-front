import React from 'react';
import PropTypes from 'prop-types';
import { SectionType } from 'types';
import { VStack } from '@chakra-ui/react';
import SectionLabelHeading from 'components/SectionLabelHeading';
import SubSectionsDisplayed from './SubSectionsDisplayed';
import CardBox from 'components/CardBox';

function Dishes({ sections }) {
  console.log({ sections });
  return (
    <VStack>
      {sections?.length &&
        sections.map(({ subSections, products, ...section }) => (
          <section id={section.title}>
            <SectionLabelHeading title={section.title} my={4} />
            {subSections && subSections.length ? (
              <SubSectionsDisplayed subSections={subSections} />
            ) : (
              products.map(product => (
                <CardBox
                  key={product.name}
                  photoUrl={product.imageUrl}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  oldPrice={product.oldPrice}
                />
              ))
            )}
            {/* // .filter(product => product.label === section.title)
            // .map(product => (
            //   <CardBox
            //     key={product.title}
            //     photoUrl={product.photoUrl}
            //     title={product.title}
            //     description={product.description}
            //     price={product.price}
            //     oldPrice={product.oldPrice}
            //   />
            // ))} */}
          </section>
        ))}
    </VStack>
  );
}

Dishes.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(SectionType)),
};

export default Dishes;
