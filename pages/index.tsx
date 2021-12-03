import React from 'react'
import Header from '../component/Header/header'

const index = () => {
  const navigation = {
    brand: { name: "NavbarScroller", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Blog", to: "/blog" },
      { name: "Developement", to: "/dev" },
      { name: "Graphic Design", to: "/design" },
      { name: "Contact", to: "/contact" },
    ]
  }
  return (
    <div>
      <Header/>
    </div>
  )
}

export default index
