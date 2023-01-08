import React from 'react';
import ProductDetail from './pages/ProductDetail';
// import {Navbar} from './components'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: ProductDetail,
//   },
// ]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ProductDetail/>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
