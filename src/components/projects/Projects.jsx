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
              <h3>Test And Collect Movie Knowledge</h3>
              <p>An application developed to help users with testing and acquiring new knowledge regarding various movies and save them according to their will.</p>
              <p className='pLang'>Kotlin</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
                <a href="https://github.com/KoshiSG4/Math-Expressions-Calculator.git">
                  <GitHub className='gitHubIcon'/>
                </a>
              </div>            
              <h3>Math Expressions Calculator</h3>
              <p>A simple mobile game where the user has to evaluate arithmetic expressions and choose the correct comparative within a given time. Time will be added according to the number of correct answers.</p>
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
              <p>A racing car championship programme where they maintain the information of number of cars, number of drivers, teams and winnings etc.</p>
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
              <p>A program for a COVID-19 vaccination center which can vaccinate six people simultaneously. This program contains 6 booths and all three vaccination types were given according to the user requirement and also keeps track of the patients' information.</p>
              <p className='pLang'>Java &emsp; Java FX</p>
            </div>

            <div className="item">
              <div className='iconsBar'>
                <FolderOpenOutlined className="icon"/>
              </div>
              <h3>Solo Adventurer (Group Project)</h3>
              <p>An interactive website where promotes tourism within the country, users are able to play small quiz, purchase merchandises, identify new locations etc. </p>
              <p className='pLang'>HTML &emsp; CSS &emsp; JavaScript</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
