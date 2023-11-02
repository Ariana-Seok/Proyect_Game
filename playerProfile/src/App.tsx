import React from 'react';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Perfil from './pages/perfil/profile';
import NotFound from './pages/not_found/NotFound';
import PrincipalPage from './pages/principal_page/principalPage';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Characters from './pages/characters/characters';


const LayoutLoggedIn = () => {
  return (
    <div className="container-app">
      <Nav />
      <div className="window">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <LayoutLoggedIn />,
      children: [
        {
          path: '/',
          element: 
            <>
              <PrincipalPage/>
            </>
        },
        {
          path: '/perfil',
          element: <Perfil/>
        },
        {
          path: '/characters',
          element: <Characters />
        },
      ]
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} /> 
      <Outlet />
    </>
  );
};

export default App;