import './home.scss';
import {Email} from '@material-ui/icons';
import React from 'react';
import Typewriter from "typewriter-effect";

export default function Home() {

  return (
    <div className='home' id='home'>
      <div className="wrapper">
        <div className="left">
          <h2>Hi There!</h2>
          <h1><span>Koshi</span> here.</h1>
          {/* <h3> I'm Interested In&nbsp;
            <span>
              <Typewriter
                options={{ 
                  strings:["Full-Stack Development", "Web Development", "Mobile App Development","Human Computer Interactions"],
                  autoStart:true,
                  delay:50,
                  loop:true
                  }}
              />
            </span>
          </h3> */}
          <div className="typing">
            <h3> I'm Interested In&nbsp;</h3>
            <h3>
              <Typewriter
                options={{ 
                  strings:["Full-Stack Development", "Web Development", "Mobile App Development","Human Computer Interactions"],
                  autoStart:true,
                  delay:50,
                  loop:true
                  }}
              />
            </h3>
          </div>      
          
          <a href="mailto:gunasinghekoshi@gmail.com" className='emailBtn'><Email className='emailicon'/>&ensp; Say Hi!</a>
        </div>
        <a href="#projects">
          
        </a>
      </div>
      <div className="right"></div>
    </div>

  )
}
