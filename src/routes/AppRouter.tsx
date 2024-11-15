import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from '~/pages';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const AppRouter = () => <RouterProvider router={route} />;

export default AppRouter;
