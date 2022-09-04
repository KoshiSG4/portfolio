import './projects.scss'
import {FolderOpenOutlined,GitHub} from '@material-ui/icons'

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className="wrapper">
        <div className="content">
          <div className="container">
          <h1>Some things I've built</h1>
            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/BizTech07/Heat-Alert-System.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>
              <h3>Heat Alert System (Software Development Group Project)</h3>
              <p>A web application which predicts the high temperature fluctuations of solar panels.</p>
              <p className='pLang'>Angular &emsp; Python(Flask)</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/KoshiSG4/Test-And-Collect-Movie-Knowledge.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>
              <h3>Test And Collect Movies</h3>
              <p>An application developed for users to test their movie knowledge and learn more about the movies they are interested in.</p>
              <p className='pLang'>Kotlin</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/KoshiSG4/Math-Expressions-Calculator.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>            
              <h3>Arithmetic Expressions Evaluator</h3>
              <p>A mobile game created to evaluate math ability of the user. In a given time, the user must assess mathematical equations and select the appropriate comparator. </p>
              <p className='pLang'>Kotlin</p>
            </div>
          
            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/KoshiSG4/Formula-1-Racing-Car-Championship.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>
              <h3>Formula 1 Racing Car Championship</h3>
              <p>A racing car championship manager programme that maintains the information of its' competitors and competitions. UI was built using Java Swing.</p>
              <p className='pLang'>Java &emsp; Java Swing</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/KoshiSG4/Covid-19-Vaccination-Center-Programme.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>
              <h3>Covid 19 Vaccination Center Programme</h3>
              <p>A program for monitoring of the patients and vaccination information for a COVID-19 vaccination center. UI was built using Java FX.</p>
              <p className='pLang'>Java &emsp; Java FX</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
              </div>
              <h3>Solo Adventurer (Group Project)</h3>
              <p>An interactive website where promotes tourism within the country. Users are able to play a small quiz, purchase merchandises, and identify new locations etc. </p>
              <p className='pLang'>HTML &emsp; CSS &emsp; JavaScript</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
