import './contact.scss';
import {Send,Email,LinkedIn,GitHub} from '@material-ui/icons';

export default function contact() {
  return (
    <div className='contact' id='contact'>
      <div className='wrapper'>
        <h1>Get In Touch</h1>
        <div className="container">
            <div className="content">
              <form action='mailto:gunasinghekoshi@gmail.com'>
                <input type="email" placeholder='Email' />
                <textarea placeholder='Message' ></textarea>
                <button type='submit'>Send Message &ensp; <Send className='sendicon'/></button>
              </form>
            </div>          
            
            <div className='contactIcons'>
              <p>I am currently intersted in internship opportunities. However if you have any other question or a request or just want to say hi don't hesitate to drop me an email, my inbox is always open. :) </p>
              <a href="mailto:gunasinghekoshi@gmail.com"><Email className='emailicon'/></a>
              <a href="https://www.linkedin.com/in/koshila-gunasinghe/"><LinkedIn className='linkedinicon'/></a>
              <a href="https://github.com/KoshiSG4"><GitHub className='githubicon'/></a>
            </div>
          {/* </div> */}
        </div> 
        <div className='footer'>
          <p>Designed & Built By Koshila Gunasinghe.</p>
          <p>All Rights Reserved.</p>
        </div>       
      </div>
       
    </div>
  )
}
