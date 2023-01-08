import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import { BoltIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline'
import HalloweenPumpkinCat from '../assets/9969-halloween-pumpkin-black-cat.json'

const LottiePreview = () => {
  const catAnimRef = useRef<HTMLDivElement>(null)
  const catAnimLottie = useRef<import('lottie-web').AnimationItem | null>(null)

  useEffect(() => {
    loadAnimation()

    return () => {
      if (catAnimRef.current) catAnimRef.current.innerHTML = ''
    }
  }, [])

  const loadAnimation = () => {
    if (!catAnimRef.current) return

    catAnimLottie.current = Lottie.loadAnimation({
      container: catAnimRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: HalloweenPumpkinCat,
    })
  }

  const pauseAnimation = () => {
    if (catAnimLottie.current) catAnimLottie.current.pause()
  }

  const playAnimation = () => {
    if (catAnimLottie.current) catAnimLottie.current.play()
  }

  return (
    <div className='container mx-auto'>
      <h1>Demonstration of Lottie Web</h1>
      <div className='w-96 h-96' ref={catAnimRef} />
      <div className='flex fixed top-7 right-7 gap-x-2'>
        <button
          type='button'
          onClick={loadAnimation}
          className='bg-green-400 px-3 py-1 flex flex-row items-center gap-x-1'>
          <BoltIcon className='w-5 h-5' />
          Load Animation
        </button>
        <button
          type='button'
          onClick={playAnimation}
          className='bg-blue-400 px-3 py-1 flex flex-row items-center gap-x-'>
          {' '}
          <PlayIcon className='w-5 h-5' />
          Play Animation
        </button>
        <button
          type='button'
          onClick={pauseAnimation}
          className='bg-pink-400 px-3 py-1 flex flex-row items-center gap-x-'>
          {' '}
          <PauseIcon className='w-5 h-5' />
          Pause Animation
        </button>
      </div>
    </div>
  )
}

export default LottiePreview
