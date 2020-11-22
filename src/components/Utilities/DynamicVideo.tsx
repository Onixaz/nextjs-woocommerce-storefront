import React, { useState } from 'react'
import styled from 'styled-components'

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  transition: opacity 3000ms ease-in-out;
`

const DynamicBgVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadedData = () => {
    setIsVideoLoaded(true)
  }
  return (
    <>
      <VideoBg
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 0.85 : 0 }}
        src="./video2_Trim.mp4"
      />
    </>
  )
}

export default DynamicBgVideo
