import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import { BoltIcon, PauseIcon, PlayIcon, TrashIcon } from '@heroicons/react/24/outline'
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

  const destroyAnimation = () => {
    if (catAnimLottie.current) catAnimLottie.current.destroy()
  }

  return (
    <div className='container mx-auto'>
      <div className='p-4 flex justify-between'>
        <h1 className='text-xl'>Demonstration of Lottie Web</h1>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={loadAnimation}
            className='bg-green-400 px-3 py-1 flex flex-row items-center gap-x-1'>
            <BoltIcon className='w-5 h-5' />
            Load
          </button>
          <button
            type='button'
            onClick={playAnimation}
            className='bg-blue-400 px-3 py-1 flex flex-row items-center gap-x-'>
            <PlayIcon className='w-5 h-5' />
            Play
          </button>
          <button
            type='button'
            onClick={pauseAnimation}
            className='bg-pink-400 px-3 py-1 flex flex-row items-center gap-x-'>
            <PauseIcon className='w-5 h-5' />
            Pause
          </button>
          <button
            type='button'
            onClick={destroyAnimation}
            className='bg-red-400 px-3 py-1 flex flex-row items-center gap-x-'>
            <TrashIcon className='w-5 h-5' />
            Destroy
          </button>
        </div>
      </div>
      <hr />

      <div className='w-96 h-96' ref={catAnimRef} />
    </div>
  )
}

export default LottiePreview
