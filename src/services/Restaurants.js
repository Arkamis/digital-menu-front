import fetcher from 'utils/fetcher';

export const getRestaurant = id => {
  return fetcher(
    'https://miapi.encuentratuservicio.com.mx/restaurante.php?menu=' + id,
    'get'
  );
};
