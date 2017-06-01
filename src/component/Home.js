import React, { Component } from 'react';
import IceVideo from 'ice-video';

export default class Home extends Component {
  static displayName = 'Home';

  componentWillMount() {}

  render() {
    const settings = {
      loop: true,
      autoPlay: false,
      preload: 'auto',
      poster: '',
      volume: 0.5,
      getDanmukuUrl: 'http://127.0.0.1:3001/danmuku',
      sendDanmukuUrl: 'http://127.0.0.1:3001/senddanmu',
      controls: true,
      scale: '16:9',
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    };
    return (
      <div className="container">
        <section className="content">
          <div className="introduce">
            <h1>Ice-Video</h1>
            <p className="lead">The web danmuku video player built from the ground up for an HTML5 world using React library.</p>
          </div>
          <div className="example">
            <h1>Example</h1>
            <IceVideo {...settings} />
          </div>
        </section>
      </div>
    );
  }
}
