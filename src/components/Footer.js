import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
<a href="impressum">Impressum</a></footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
