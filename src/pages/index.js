import React from 'react'
import { Link } from 'gatsby'

const title = 'UPDATER'

export default () => {
  return (
    <>
      <h1>{title}</h1>
      <p><Link to="/blog">View Blog</Link></p>
      <p><Link to="/account">My Account</Link></p>
    </>)
}
