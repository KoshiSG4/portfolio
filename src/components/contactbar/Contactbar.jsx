import React from 'react';
import './contactbar.scss';
import {Email,LinkedIn,GitHub} from '@material-ui/icons';

export default function ContactBar() {
  return (
    <div className="contactbar">
      <div className="wrapper">
        <div className='logocontainer'>
          <a href='#home' className='logo'>K</a>
        </div>
        <div className='contactIcons'>
          <a href="mailto:gunasinghekoshi@gmail.com"><Email className='emailicon'/></a>
          <a href="https://www.linkedin.com/in/koshila-gunasinghe/"><LinkedIn className='linkedinicon'/></a>
          <a href="https://github.com/KoshiSG4"><GitHub className='githubicon'/></a>
          <div className='vl'></div>
        </div>
      </div>
    </div>
  )
}
