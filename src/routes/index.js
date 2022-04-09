import LoadingScreen from 'components/LoadingScreen';
import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

// ----------------------------------------------------------------------

const Loadable = Component => props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isApp = pathname.includes('/app');
  console.log({ pathname, isApp });
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isApp && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'app',
      element: <MainLayout />,
      children: [
        {
          path: 'restaurant',
          element: <MainLayout />,
          children: [
            { path: '', element: <Navigate to="/404" replace /> },
            {
              path: ':id/menu',
              element: <Menu />,
            },
          ],
        },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '', element: <LandingPage /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

// Import Components

// Layouts

// const DashboardLayout = Loadable(
//   lazy(() => import('../components/layout/DashboardLayout'))
// );
const MainLayout = Loadable(
  lazy(() => import('../components/layouts/MainLayout'))
);

// Pages

const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));
const Menu = Loadable(lazy(() => import('../pages/Menu')));
