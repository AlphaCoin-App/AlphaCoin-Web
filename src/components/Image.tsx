import React from 'react'

type ImageProps = {
  width: number,
  height: number
}

function Image({width, height}: ImageProps) {
  return (
    <div className="h-full w-full  bg-[#e0f2fe] mx-10 mt-10"></div>
  )
}

export default Image
