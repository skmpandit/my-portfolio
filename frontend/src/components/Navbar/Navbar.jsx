import React from 'react'
import { images } from "../../constants"
import "./Navbar.scss"
import {HiMenuAlt4, HiX} from "react-icons/hi"
import {motion} from "framer-motion"
import { useState } from "react"

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo1} alt='logo'/>
      </div>
      <ul className='app__navbar-links'>
        {["Home","About","Work","Skills","Contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
          <HiMenuAlt4 style={{ cursor: "pointer"}} onClick={() => setToggle(true)}/>
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX style={{ cursor: "pointer"}} onClick={() => setToggle(false)}/>
              <ul>
                  {["Home","About","Work","Skills","Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar
