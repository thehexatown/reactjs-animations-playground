import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components'
import LottiePreview from './pages/LottiePreview'
import ProductDetail from './pages/ProductDetail'
import VideoAnimationBodymovin from './pages/VideoAnimationBodymovin'

const router = createBrowserRouter([
  { path: '/', element: <h1>Welcome to the Playground</h1> },
  {
    path: '/vectary',
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
  return (
    <>
      <Navbar />
      <div className='relative'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
