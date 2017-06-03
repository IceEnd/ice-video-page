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
              &quot;http://ice-video.coolecho.net/static/video.min.css&quot;
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
        <h1 className="bottom-solid">Config</h1>
        <h2>Options</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>field</th>
              <th>type</th>
              <th>default</th>
              <th>note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>autoPlay</td>
              <td>boolean</td>
              <td>false</td>
              <td>whether to automatically play</td>
            </tr>
            <tr>
              <td>preload</td>
              <td>string</td>
              <td>&apos;auto&apos;</td>
              <td />
            </tr>
            <tr>
              <td>poster</td>
              <td>string</td>
              <td>&apos;&apos;</td>
              <td />
            </tr>
            <tr>
              <td>loop</td>
              <td>boolean</td>
              <td>false</td>
              <td>loop for video</td>
            </tr>
            <tr>
              <td>volume</td>
              <td>number</td>
              <td>0.8</td>
              <td>palyer&apos;s volume</td>
            </tr>
            <tr>
              <td>controls</td>
              <td>boolean</td>
              <td>true</td>
              <td>control player</td>
            </tr>
            <tr>
              <td>scale</td>
              <td>string</td>
              <td>&apos;16:9&apos;</td>
              <td />
            </tr>
          </tbody>
        </table>
        <h2>Danmuku</h2>
        <p>The format of the data</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>field</th>
              <th>type</th>
              <th>note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>string</td>
              <td>the content of a danmuku</td>
            </tr>
            <tr>
              <td>date</td>
              <td>Date</td>
              <td>the time when send a danmuku</td>
            </tr>
            <tr>
              <td>fontColor</td>
              <td>string</td>
              <td>color of danmuku</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>string</td>
              <td>fontSize of danmuku:<code>&apos;middle&apos;</code>,<code>&apos;small&apos;</code>,<code>&apos;large&apos;</code></td>
            </tr>
            <tr>
              <td>model</td>
              <td>string</td>
              <td>model of danmuku:<code>&apos;roll&apos;</code>,<code>&apos;top&apos;</code>,<code>&apos;buttom&apos;</code></td>
            </tr>
            <tr>
              <td>timepoint</td>
              <td>number</td>
              <td>video playback position</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

Start.displayName = 'Start';
export default Start;
