import PropTypes from 'prop-types'
import React from 'react'
import schriftzug from '../images/aufdhand-schriftzug.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <span className="logo">
      <img src={schriftzug} width="300" alt="Aufd Hand"/>
    </span>
    <div className="content">
    <div className="inner">
        <h1> Event Catering <br/> & Schornbad </h1>
        <h2>
	  Berchtesgarden
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('schornbad')
            }}
          >
            Schornbad
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('catering')
            }}
          >
            Event Catering
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Kontakt
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
