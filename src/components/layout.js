import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import CookieConsent from 'react-cookie-consent';

import '../assets/scss/main.scss'



const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Event Catering Restaurant' },
              { name: 'keywords', content: 'catering service, gastronomie, partyservice' },
            ]}
          >
            <html lang="de" />
          </Helmet>

	  <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="NoCookie">
	      Cookies gibts bei uns nur frisch aus dem Ofen, wir speichern nichts.
	      Der Webhoster evtl. schon.
	  </CookieConsent>

          {content}

        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
