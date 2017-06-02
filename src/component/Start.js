import React from 'react';

const Start = () => (
  <div className="container">
    <section className="content">
      <div className="row">
        <h1 className="bottom-solid">Installation</h1>
        <h2>NPM</h2>
        <p>Install ice-video via NPM</p>
        <pre className="highlight">
          <code>
            npm install --save ice-video react react-dom isomorphic-fetch
          </code>
        </pre>
        <p>Import stylesheet</p>
        <pre className="highlight">
          <code className="jsx-lang">
            <span className="keyword">import</span>
            &nbsp;
            <span className="string">
              &quot;node_modules/ice-video/dist/video.css&quot;
            </span>
            ;
          </code>
        </pre>
        <p>Import the components where you need, example</p>
        <pre className="highlight">
          <code className="jsx-lang">
            <span className="keyword">import</span>
            &nbsp;React&nbsp;
            <span className="keyword">from</span>
            &nbsp;
            <span className="string">&apos;react&apos;</span>
            ;
          </code> <br />
          <code className="jsx-lang">
            <span className="keyword">import</span>
            &nbsp;ReactDOM&nbsp;
            <span className="keyword">from</span>
            &nbsp;
            <span className="string">&apos;react-dom&apos;</span>
            ;
          </code> <br />
          <code className="jsx-lang">
            <span className="keyword">import</span>
            &nbsp;IceVideo&nbsp;
            <span className="keyword">from</span>
            &nbsp;
            <span className="string">&apos;ice-video&apos;</span>
            ;
          </code> <br /> <br />
          <code className="jsx-lang">
            <span className="keyword">const</span>
            &nbsp;Player&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;
          </code><br />
          <code className="jsx-lang">
            &nbsp;&nbsp;
            <span className="keyword">const</span>
            &nbsp;settings&nbsp;=&nbsp;&#123;
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;loop:&nbsp;
            <span className="literal">true</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;autoPlay:&nbsp;
            <span className="literal">false</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;preload:&nbsp;
            <span className="string">&apos;auto&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;poster:&nbsp;
            <span className="string">&apos;&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;volume:&nbsp;
            <span className="literal">0.5</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;getDanmukuUrl:&nbsp;
            <span className="string">&apos;http://127.0.0.1:3001/danmuku&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;sendDanmukuUrl:&nbsp;
            <span className="string">&apos;http://127.0.0.1:3001/senddanmu&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;controls:&nbsp;
            <span className="literal">true</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;scale:&nbsp;
            <span className="string">&apos;16:9&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;src:&nbsp;
            <span className="string">&apos;./video.mp4&apos;</span>,
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&#125;;
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;
            <span className="keyword">return</span>
            &nbsp;(
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;
            <span className="literal">IceVideo</span>
            &nbsp;&#123;...settings&#125;&nbsp;/&gt;
          </code> <br />
          <code className="jsx-lang">
            &nbsp;&nbsp;);
          </code> <br />
          <code className="jsx-lang">
            &#125;;
          </code> <br /> <br />
          <code className="jsx-lang">
            <span className="keyword">export</span>
            &nbsp;
            <span className="keyword">default</span>
            &nbsp;Player;
          </code>
        </pre>
      </div>
    </section>
  </div>
);

Start.displayName = 'Start';
export default Start;
