import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LottiePreview from './pages/LottiePreview'
import ProductDetail from './pages/ProductDetail'
import VideoAnimationBodymovin from './pages/VideoAnimationBodymovin'

// import {Navbar} from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductDetail />,
  },
  {
    path: '/lottie-preview',
    element: <LottiePreview />,
  },
  {
    path: '/color-composition',
    element: <VideoAnimationBodymovin />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
