import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Burak Sahin</h4>
      <h4>Copyright &copy; 2024 BS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/burak-me" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:i@burak.me' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer