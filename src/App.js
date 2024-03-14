import './App.css';
import React from 'react';
import './buttoncomp'
import ButtonComponent from './buttoncomp';

const videoFiles = [
  require('./videos/station1_in.mp4'),
  require('./videos/Station2_in.mp4'),
  require('./videos/station3_in.mp4'),
  require('./videos/station1_out.mp4'),
  require('./videos/station2_out.mp4'),
  require('./videos/Station3_out.mp4'),
];

const VideoPane = () => {
  return (
    <div className="video-pane">
    <div className='header1'>OD Matrix Generator</div>
      <div className="video-row">
      <div className='textt'>  IN:</div>
        <div className="video-column">
      <div className='forh3'> 
      <h3>STATION 1</h3>
          <video width="300" height="250" controls>
            <source src={videoFiles[0]} type="video/mp4" />
          </video>
          </div>
        </div>
        <div className="video-column">

        <div className='forh3'>
          <h3> STATION 2</h3>
          <video width="300" height="250" controls>
            <source src={videoFiles[1]} type="video/mp4" />
          </video>
          </div>
        </div>
        <div className="video-column">
        
        <div className='forh3'>
          <h3> STATION 3</h3>
          <video width="300" height="250" controls>
            <source src={videoFiles[2]} type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
      <div className="video-row"> 
      <div className='textt'>OUT:</div>
        <div className="video-column">
          <video width="300" height="250" controls>
            <source src={videoFiles[3]} type="video/mp4" />
          </video>
        </div>
        <div className="video-column"> 
          <video width="300" height="250" controls>
            <source src={videoFiles[4]} type="video/mp4" />
          </video>
        </div>
        <div className="video-column">
          <video width="300" height="250" controls>
            <source src={videoFiles[5]} type="video/mp4" />
          </video>
        </div>
      </div>
      <ButtonComponent/>
    </div>
  );
};

export default VideoPane;