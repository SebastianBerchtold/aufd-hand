import PropTypes from 'prop-types'
import React from 'react'

import SlideShow from "../components/slideshow"
import logo_full from '../images/logo-full-weiß.png'
// import schornbad_video from '../images/schornbad/schornbad.mp4'

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
          <h2 className="major">Schornbad</h2>
	<center><strong>Herzlich Willkommen an unserem kleinen Kiosk im „Schorni“</strong></center>
	  {/* <video controls className="main video">
	    <source src={schornbad_video} type="video/mp4" />
	  </video> */}

	     <p align="center" style={{margin: "0.1rem"}}> Unser <a href="https://www.koenigssee.de/schornbad">Schornbad</a>, ein Platz zum Wohlfühlen, zum Ankommen. Ein Treffpunkt für Jung und Alt, für Menschen von nah und fern, frei von Etikette und Zwang. </p>
	  <p align="center" style={{margin: "0.1rem"}}> Ein Ort für Begegnung, Austausch und Spaß.	   </p>



	<center><strong>	<a href="https://www.dropbox.com/s/5wn83tyzrv2rykx/Speisekarte.docx?dl=1">Speisekarte</a></strong></center>
	<center><strong>	<a href="Getränke Schornbad 2023.docx">Getränkekarte</a></strong></center>
	<center><strong>	<a href="Kaffespezilaitäten 2023.docx">Kaffespezialitäten</a></strong></center>



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
	    <a href= "mailto:servus.aufd-hand@gmx.de"> Meldet Euch!</a> Alles weitere besprechen wir persönlich.
	    </strong>
	  </p>
            {<SlideShow />}


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
            {<img src={logo_full} alt="" />}
          </span>

<p style={{margin: "0.1rem"}}> Auf'd Hand Catering und Kiosk, Pollner, Kiermeier GbR </p>
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
