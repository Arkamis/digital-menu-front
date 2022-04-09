import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),

  rest.get('/restaurante', (req, res, ctx) => {
    const some = req.params;
    console.log({ some });
    return res(
      ctx.status(200),
      ctx.json({
        Restaurante: {
          nombre: 'La cabañita del waffle',
          telefono: '314 333 58 79',
          facebook: 'https://www.facebook.com/Lacabañitadelwaffle',
          instagram: 'https://www.instagram.com/Lacabañitadelwaffle',
          imagenpath: 'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
        },
        Sucursal: [
          {
            nombre: 'Boulevar Miguel De La Madrid',
            direccion:
              'Calle justino soto # 69 colonia lopez de legaspi Manzanillo, Colima',
            telefono: '33457984',
          },
          {
            nombre: 'sucursal arboledas',
            direccion: 'calle naranjo numer 10000 manzanillo colima',
            telefono: '314 120 30 37',
          },
        ],
        Seccion: [
          {
            seccion_id: '1',
            nombre: 'Bebidas',
            is_parent: '1',
            parent_id: null,
            descripcion: null,
            imagenpath: null,
            Subsecciones: [
              {
                seccion_id: '9',
                nombre: 'Cafe',
                is_parent: null,
                parent_id: '1',
                descripcion:
                  'el cafe esta muy rico muy bueno \r\nrico cafe caliente',
                imagenpath: 'https://i.ibb.co/swSyLKv/cafe.jpg',
                Productos: [
                  {
                    producto: 'Americano (expresso)',
                    descripcion: 'esta es la descripcion del cafe',
                    old_price: '',
                    price: '25',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Americano & Canela',
                    descripcion: '',
                    old_price: '',
                    price: '30',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Cappuccino',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Mochaccino',
                    descripcion: '',
                    old_price: '',
                    price: '45',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                ],
              },
              {
                seccion_id: '10',
                nombre: 'Frapuchino',
                is_parent: null,
                parent_id: '1',
                descripcion:
                  'Deliciosos frapuchinos helados como el volcan de Colima',
                imagenpath: 'https://i.ibb.co/Z8shvkT/frappucciono.jpg',
                Productos: [
                  {
                    producto: 'Capuccino & Caramelo',
                    descripcion: '',
                    old_price: '',
                    price: '45',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Clasico',
                    descripcion: '',
                    old_price: '',
                    price: '50',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Mocca',
                    descripcion: '',
                    old_price: '',
                    price: '50',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Vainilla',
                    descripcion: '',
                    old_price: '',
                    price: '30',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Oreo',
                    descripcion: '',
                    old_price: '',
                    price: '60',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Caramelo',
                    descripcion: '',
                    old_price: '',
                    price: '60',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                ],
              },
              {
                seccion_id: '11',
                nombre: 'Horchatas',
                is_parent: null,
                parent_id: '1',
                descripcion: 'Deliciosos Aguas de Horchata',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                Productos: [
                  {
                    producto: 'Horchatas y Fresas',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Horchatas y Zarzamora',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Horchatas y Platano',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Horchatas y Helado',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Horchata&Cafe',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                ],
              },
              {
                seccion_id: '12',
                nombre: 'Tisanas',
                is_parent: null,
                parent_id: '1',
                descripcion: 'Deliciosas bebidas de hierbas',
                imagenpath: 'https://i.ibb.co/98MrMcZ/tisana.jpg',
                Productos: [
                  {
                    producto: 'Menta',
                    descripcion: '',
                    old_price: '',
                    price: '30',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Fruta de la Pasion',
                    descripcion: '',
                    old_price: '',
                    price: '35',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Fresa Kiwi',
                    descripcion: '',
                    old_price: '',
                    price: '35',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Frutas del Paraiso',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Ponche de Guayaba',
                    descripcion: '',
                    old_price: '',
                    price: '35',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'coca',
                    descripcion: '',
                    old_price: '',
                    price: '20',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                ],
              },
              {
                seccion_id: '13',
                nombre: 'Licuados',
                is_parent: null,
                parent_id: '1',
                descripcion: 'Ricos licuados armalos a tu gusto',
                imagenpath: 'https://i.ibb.co/q5Sy32s/lucuado.jpg',
                Productos: [
                  {
                    producto: 'Platano',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Zarzamora',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Fresa',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                  {
                    producto: 'Frutos Rojos',
                    descripcion: '',
                    old_price: '',
                    price: '40',
                    imagenpath:
                      'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
                  },
                ],
              },
            ],
          },
          {
            seccion_id: '2',
            nombre: 'Waffles Dulces',
            is_parent: null,
            parent_id: null,
            descripcion: null,
            imagenpath: null,
            Productos: [
              {
                producto: 'Waffle Fresas Con Crema',
                descripcion: 'Bubble waffle relleno de fresas y crema batidad',
                old_price: '',
                price: '70',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Bubble bites',
                descripcion:
                  'Trozos de bubble waffle cubierto con una salsa (a elegir) y azucar glass',
                old_price: '',
                price: '65',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Waffle 4 vientos',
                descripcion:
                  'Waffle con un mix de frutas de temporada y nutella',
                old_price: '',
                price: '70',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Banna Split Waffle',
                descripcion:
                  'Waffle con platano, crema batida, cereza, helado de vainilla, chocolate y cream batida',
                old_price: '',
                price: '40',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
            ],
          },
          {
            seccion_id: '3',
            nombre: 'Waffles Salados',
            is_parent: null,
            parent_id: null,
            descripcion: null,
            imagenpath: null,
            Productos: [
              {
                producto: 'Waffle Americano',
                descripcion:
                  'Waffle con huevos revueltos, tocino, salchicha americana y ensalada',
                old_price: '',
                price: '85',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Waffle Montecristo',
                descripcion: 'Waffle con jamon, queso chedar y mermelada',
                old_price: '',
                price: '70',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Waffle Sandwich',
                descripcion:
                  'Waffle con jamon de pavo, aguacate, qeuso manchego, queso americano, jitomate cebolla ylechuga',
                old_price: '',
                price: '75',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Waffle Texano',
                descripcion:
                  'Waffle con chorizo, pimineto verde, cebolla y queso chedar',
                old_price: '',
                price: '85',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
            ],
          },
          {
            seccion_id: '4',
            nombre: 'Especiales',
            is_parent: null,
            parent_id: null,
            descripcion: null,
            imagenpath: null,
            Productos: [
              {
                producto: 'Baguette Verde',
                descripcion: 'Queso, Panela, Espinacas, aguacate y calabacitas',
                old_price: '',
                price: '80',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Hamburguesa de la Cabanita',
                descripcion:
                  'Carne de res, queso americano, queso manchego, jitomate, cebolla, lechuga y papas a la francesa',
                old_price: '',
                price: '95',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Sandwich de Queso',
                descripcion: 'Pan relleno de queso chedar y tocino',
                old_price: '',
                price: '90',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
              {
                producto: 'Desayuno Country',
                descripcion: 'Huevos revueltos, ensalada, mini bowl de fruta',
                old_price: '',
                price: '65',
                imagenpath:
                  'https://i.ibb.co/6PThtnG/logo-cabanitadelwaffle.jpg',
              },
            ],
          },
        ],
      })
    );
  }),
];
