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
`

export const VideoThumb = styled.img`
  height: 100%;
  width: 100%;
  transition: opacity 400ms ease 0ms;
  //filter: blur(20px);
  transform: scale(1.1);
  transition: visibility 0ms ease 400ms;
`

const DynamicBgVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadedData = () => {
    setIsVideoLoaded(true)
  }
  return (
    <>
      <VideoThumb
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
        alt="thumbnail"
        src="./video2_Trim_Moment.jpg"
      />
      <VideoBg
        autoPlay
        loop
        muted
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        src="/video2_Trim.mp4"
      />
    </>
  )
}

export default DynamicBgVideo
