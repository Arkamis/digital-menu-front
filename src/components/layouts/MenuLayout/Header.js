import { AspectRatio, Box, Flex, Image } from '@chakra-ui/react';
import BusinessHero from './BusinessHero';
import Navbar from 'components/Navbar';
import MenuBar from 'components/MenuBar';
import { ColorModeSwitcher } from 'ColorModeSwitcher';

// const CategoriesList = [
//   { title: 'Promociones', link: '/promo', id: 1 },
//   { title: 'Popular', link: '/popu', id: 2 },
//   { title: 'Platillos', link: '/platillos', id: 3 },
//   { title: 'Sopas', link: '/soups', id: 4 },
//   { title: 'Bebidas', link: '/drinks', id: 5 },
//   { title: 'Charolas', link: '/char', id: 6 },
//   { title: 'Sushi', link: '/sushi', id: 7 }
// ];

const Header = ({
  title,
  phone,
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4pRdNJ9ZSSQsEoQFP4ATlWfZDX1ct6vcQWr7lVtPgnsI2SBAHunQiYTOoQrhcGIl4-g&usqp=CAU',
  alt,
  branches,
  sections,
}) => {
  return (
    <>
      <Box position="fixed" right={['16px', '84px']} zIndex={1}>
        <ColorModeSwitcher />
      </Box>
      <AspectRatio maxW="500px" ratio={16 / 9} flex="1 1 auto">
        <Image objectFit="cover" alt={alt} src={imageUrl} />
      </AspectRatio>
      <BusinessHero name={title} phone={phone} branches={branches} />
      <MenuBar categories={sections} my={0} py={0} pt={4} />
    </>
  );
};

export default Header;
