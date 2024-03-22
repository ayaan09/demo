import React, { useRef, useState, useEffect } from 'react';
import './App.css'

const DynamicHeightVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(300); // Initial height in pixels

  useEffect(() => {
    const video = videoRef.current;

    const handlePlaying = () => {
      setVideoHeight(400);
    };

    const handleEnded = () => {
      setVideoHeight(300); // Reset to the initial height after video ends
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handleEnded)

    return () => {
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('ended', handleEnded);
      video.addEventListener('pause', handleEnded)

    };
  }, []);

  return (
    <div style={{ width: 'auto', height: videoHeight }}>
          <video ref={videoRef} width="auto" height={videoHeight} controls>
            <source src={src} type="video/mp4" />
          </video>
    </div>
  );
};

export default DynamicHeightVideo;