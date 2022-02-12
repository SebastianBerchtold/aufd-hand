import PropTypes from 'prop-types'
import React from 'react'
import schriftzug from '../images/aufdhand-schriftzug.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <span className="logo">
	<img src={schriftzug} width="300" alt="Aufd Hand"/>
    </span>
      <div style={{margin: "1m 0  0 "}}>
	  <h2>

	      <a href="http://karte.aufd-hand.de">
	      <b>
		  Speis &amp; Trank
		  &nbsp;&nbsp;
		  &nbsp;&nbsp;
		  &nbsp;&nbsp;
		  &nbsp;&nbsp;

	      </b>
	  </a>

	      <i class='fa fa-instagram'></i>

	  <a href="https://www.instagram.com/aufdhand.berchtesgaden/?hl=de">
		  Food Porn
	  </a>
	  </h2>
      </div>
    <div className="content">
	<div className="inner">
        <h1> Event Catering <br/> & Schornbad </h1>
        <h2>
	  Berchtesgaden
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
