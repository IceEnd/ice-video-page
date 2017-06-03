import React from 'react';
import IceVideo from 'ice-video';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const settings = {
    loop: true,
    autoPlay: false,
    preload: 'auto',
    poster: '',
    volume: 0.5,
    getDanmukuUrl: 'https://api.coolecho.net/dmk/danmuku',
    sendDanmukuUrl: 'https://api.coolecho.net/dmk/senddanmu',
    controls: true,
    scale: '16:9',
    src: './video.mp4',
  };
  return (
    <div className="container">
      <section className="content">
        <div className="introduce row">
          <h1>Ice-Video</h1>
          <p className="lead">The web danmuku video player built from the ground up for an HTML5 world using React library.</p>
        </div>
        <div className="row btn-container">
          <NavLink className="btn btn-default btn-right" to="/start">Start</NavLink>
          <NavLink className="btn btn-info btn-left" to="//github.com/IceEnd/ice-video">GitHub</NavLink>
        </div>
        <div className="example row">
          <h1>Example</h1>
          <IceVideo {...settings} />
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
