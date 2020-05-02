import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="schornbad"
          className={`${this.props.article === 'schornbad' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>

	  Herzlich Willkommen an unserem kleinen Kiosk im „Schorni“
	  <p align="center" style={{margin: "0.1rem"}}> Unser Schornbad, ein Platz zum Wohlfühlen, zum Ankommen. Ein Treffpunkt für Jung und Alt, für Menschen von nah und fern, frei von Etikette und Zwang. </p>

	  <p align="center" style={{margin: "0.1rem"}}> Ein Ort für Begegnung, Austausch und Spaß.	   </p>




          {close}
        </article>

        <article
          id="catering"
          className={`${this.props.article === 'catering' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >

          <span className="image main">
            {/* <SlideShow /> */}
          </span>
          <h2 className="major">Auf'd Hand Event Catering</h2>
	  <p align="center" style={{margin: "0.1rem"}}> Ein Geburtstag steht an? </p>
	  <p align="center" style={{margin: "0.1rem"}}> Ihr traut Euch! Es wird geheiratet? </p>
	  <p align="center" style={{margin: "0.1rem"}}> Es gibt Grund zu feiern mit deinen lieben Kollegen? </p>
	  <p align="center" style={{margin: "0.5rem"}}> Oder aber du willst einfach mal gemütlich zusammen mit deinen lieben Freunden oder der Familie einen schönen Abend verbringen? </p>

	  <p align="center" style={{margin: "0.5rem"}}> Unser Anspruch ist Catering mit Handschrift, Ausdruck und Seele, welches begeistert, zufrieden und glücklich macht. Ob bei Euch Zuhause oder in einer Eventlocation, gemeinsam finden wir eine Lösung, die zu Euch passt. </p>

	  <p align="center" style={{margin: "0.1rem"}}>
	    <strong>
	    Gerne stellen wir Euch ein individuelles Angebot zusammen!
	    Meldet Euch! Alles weitere besprechen wir persönlich.
	    </strong>
	  </p>



          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Kontakt</h2>
          <span className="image main">
            {/* <img src={logo_full} alt="" /> */}
          </span>

<p style={{margin: "0.1rem"}}> Aufd Hand Catering und Schornbad, Pollner, Kiermeier GbR </p>
<p style={{margin: "0.1rem"}}>	    Michael Pollner / Gerald Kiermeier </p>
<p style={{margin: "0.0rem"}}> 	    gepr. Küchenmeister</p>
<p style={{margin: "0.0rem"}}> 	    Schornstraße 7</p>
<p style={{margin: "0.1rem"}}> 	    83471 Schönau a. Königssee</p>
<p style={{margin: "0.1rem"}}> 	    Email: servus.aufd-hand@gmx.de</p>
<p style={{margin: "0.1rem"}}> 	    mobil Gerald:  +49 176 327 629 28</p>
<p style={{margin: "0.1rem"}}> 	    	    mobil Michael: +49 176 226 819 19</p>

          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
