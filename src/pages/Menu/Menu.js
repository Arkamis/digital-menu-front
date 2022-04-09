import React from 'react';
import {
  Box,
  Container,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { getRestaurant } from 'services/Restaurants';
import Header from 'components/layouts/MenuLayout/Header';
import Advertisement from 'pages/Advertisment';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
import Dishes from './Dishes';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import DisplayLoadableData from 'components/DisplayLoadAbleData';
import Footer from 'components/layouts/MenuLayout/Footer';

function Menu() {
  const { id: idRestaurant } = useParams();
  console.log({ idRestaurant });
  // Queries
  const { data, isLoading, error } = useQuery(
    ['restaurant', idRestaurant],
    () => getRestaurant(idRestaurant)
  );
  // const setAppState = useSetRecoilState(appState);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  console.log({ data, isLoading, error });

  const memorizedData = React.useMemo(() => {
    if (data) {
      const {
        Restaurante: restaurant,
        Sucursal: stores,
        Seccion: sections,
      } = data;
      console.log(data);
      return {
        restaurantName: restaurant.nombre,
        phone: restaurant.telefono,
        facebook: restaurant.facebook,
        instagram: restaurant.instagram,
        photoUrl: restaurant.imagenpath,
        stores: stores.map(
          ({ nombre: name, direccion: address, ...store }) => ({
            name,
            address,
            phone: store.phone,
          })
        ),
        sections: sections.map(section => ({
          id: section.seccion_id,
          title: section.nombre,
          endpoint: `/#${section.seccion_id}`,
          subSections: section?.Subsecciones?.map(subSection => ({
            parentSection: section.seccion_id,
            id: subSection.seccion_id,
            products: subSection.Productos?.map(product => ({
              name: product.nombre,
              description: product.descripcion,
              oldPrice: product.old_price,
              price: product.price,
              photoUrl: product.imagenPath,
              navLinks: [
                {
                  link: `/#${section.seccion_id}`,
                  name: section.nombre,
                  colorScheme: 'primary',
                },
                {
                  link: `/#${subSection.seccion_id}`,
                  name: subSection.nombre,
                  colorScheme: 'secondary',
                },
              ],
            })),
          })),
          products: section?.Productos?.map(product => ({
            name: product.nombre,
            description: product.descripcion,
            oldPrice: product.old_price,
            price: product.price,
            photoUrl: product.imagenPath,
          })),
        })),
      };
    }
    return null;
  }, [data]);

  console.log({ memorizedData });
  return (
    <Container
      maxW="container.sm"
      sx={{
        margin: 0,
        padding: 0,
        top: 0,
      }}
      backgroundColor={useColorModeValue('gray.100', 'blackAlpha')}
    >
      <Header
        title={memorizedData?.restaurantName}
        phone={memorizedData?.phone}
        imageUrl={memorizedData?.photoUrl}
        branches={memorizedData?.stores}
        sections={memorizedData?.sections}
      />
      <main>
        <DisplayLoadableData
          isLoading={isLoading}
          isEmpty={!data}
          error={error}
          loadingText="cargando info del menu..."
        >
          {memorizedData && <Dishes sections={memorizedData.sections} />}
        </DisplayLoadableData>
      </main>
      <Footer />
      {scrollPosition > 500 && (
        <Box position="fixed" bottom="20px" right={['16px', '84px']} zIndex={1}>
          <IconButton
            colorScheme="teal"
            aria-label="GO back top"
            size="lg"
            onClick={scrollToTop}
            icon={<ArrowUpDownIcon />}
            variant="outline"
          />
        </Box>
      )}
      <Advertisement />
    </Container>
  );
}

export default Menu;
