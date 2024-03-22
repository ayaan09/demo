import './App.css';
import React from 'react';
import './buttoncomp'
import ButtonComponent from './buttoncomp';
import CUHK from './CUHK.png'
import cpii from './CPII.png'
import { useRef, useState, useEffect } from 'react';
import DynamicHeightVideo from './dynamicvideo';

const videoFiles = [
  require('./videos/Station1_in.mp4'),
  require('./videos/Station2_in.mp4'),
  require('./videos/station3_in.mp4'),
  require('./videos/station1_out.mp4'),
  require('./videos/Station2_out.mp4'),
  require('./videos/station3_out.mp4'),
];

const VideoPane = () => {

  return (
    <div className="video-pane">
    <div className='header1'>
    <div className='logos'>
    <img src={CUHK} className='logo'/>
    <img src={cpii} className='logo'/> </div>
    <h3>OD Matrix Generator</h3>

    </div>
      <div className="video-row">
      <div className='textt'>ENT</div>
        <div className="video-column">
      <div className='forh3'> 
      <h3>STATION 1</h3>
          {/* <video ref={videoRef} width="auto" height={videoHeight} controls>
            <source src={videoFiles[0]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[0]}/>
          </div>
        </div>
        <div className="video-column">

        <div className='forh3'>
          <h3> STATION 2</h3>
          {/* <video ref={videoRef} width="auto" height={videoHeight}  controls>
            <source src={videoFiles[1]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[1]}/>
          </div>
        </div>
        <div className="video-column">
        
        <div className='forh3'>
          <h3> STATION 3</h3>
          {/* <video ref={videoRef} width="auto" height={videoHeight}  controls>
            <source src={videoFiles[2]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[2]}/>
          </div>
        </div>
      </div>
      <div className="video-row"> 
      <div className='textt'> EXIT</div>
        <div className="video-column">
          {/* <video ref={videoRef} width="auto" height={videoHeight}  controls>
            <source src={videoFiles[3]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[3]}/>
        </div>
        <div className="video-column"> 
          {/* <video ref={videoRef} width="auto" height={videoHeight}  controls>
            <source src={videoFiles[4]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[4]}/>
        </div>
        <div className="video-column">
          {/* <video ref={videoRef} width="auto" height={videoHeight}  controls>
            <source src={videoFiles[5]} type="video/mp4" />
          </video> */}
          <DynamicHeightVideo src={videoFiles[5]}/>
        </div>
      </div>
      <ButtonComponent/>
    </div>
  );
};

export default VideoPane;