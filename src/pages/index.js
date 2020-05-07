import React from 'react'
import { Link } from 'gatsby'

function getTitle(title) {
  return title;
}

export default () => {
  return (
    <>
      <h1>{getTitle(UPDATER)}</h1>
      <p><Link to="/blog">View Blog</Link></p>
      <p><Link to="/account">My Account</Link></p>
    </>)
}
