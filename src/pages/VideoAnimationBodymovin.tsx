import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import { BoltIcon, PauseIcon, PlayIcon, TrashIcon } from '@heroicons/react/24/outline'
import ColorComposition from '../assets/color-composition-bodymovin.json'

const VideoAnimationBodymovin = () => {
  const previewContainerRef = useRef<HTMLDivElement>(null)
  const lottieAnimRef = useRef<import('lottie-web').AnimationItem | null>(null)

  useEffect(() => {
    loadAnimation()

    return () => {
      if (previewContainerRef.current) previewContainerRef.current.innerHTML = ''
    }
  }, [])

  useEffect(() => {
    if (!lottieAnimRef.current) return
    const { totalFrames } = lottieAnimRef.current
    document.addEventListener('mousemove', ev => {
      const { offsetX } = ev
      if (lottieAnimRef.current) {
        const { width } = window.screen
        const targetFrame = Math.floor(totalFrames * (offsetX / width))
        lottieAnimRef.current.goToAndStop(targetFrame, true)
      }
    })
  }, [])

  const loadAnimation = () => {
    if (!previewContainerRef.current) return

    lottieAnimRef.current = Lottie.loadAnimation({
      container: previewContainerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: ColorComposition,
    })
  }

  const pauseAnimation = () => {
    if (lottieAnimRef.current) lottieAnimRef.current.pause()
  }

  const playAnimation = () => {
    if (lottieAnimRef.current) lottieAnimRef.current.play()
  }

  const destroyAnimation = () => {
    if (lottieAnimRef.current) lottieAnimRef.current.destroy()
  }

  const goToFrame = () => {
    if (lottieAnimRef.current) {
      // eslint-disable-next-line no-alert
      const frame = window.prompt('Enter frame:')
      if (frame) lottieAnimRef.current.goToAndStop(frame)
    }
  }

  return (
    <div className='container mx-auto'>
      <h1>Demonstration of Lottie Web</h1>
      <div className='absolute left-0 right-0' ref={previewContainerRef} />
      <div className='flex fixed w-3/4 gap-x-2'>
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
        <button
          type='button'
          onClick={goToFrame}
          className='bg-red-400 px-3 py-1 flex flex-row items-center gap-x-'>
          <TrashIcon className='w-5 h-5' />
          Go To Frame
        </button>
      </div>
    </div>
  )
}

export default VideoAnimationBodymovin
