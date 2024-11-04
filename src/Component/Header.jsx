import React from 'react'
import "../App.css"
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="container">
      <div className="container-fluid logo">
        <center><Link className="navbar-brand" to="#">{props.title}</Link></center>
      </div>
    </nav>
  )
}

Header.propTypes = {  // Lowercase 'p' in propTypes
  title: PropTypes.string,  // Lowercase 'string' in PropTypes
  searchBar: PropTypes.bool
};
