import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import { GrMail } from "react-icons/gr";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className='HomePage'>
            <div className='HomeText'>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1>I'M <b>BURAK SAHIN</b></h1>
              <Typed/>   
            </div>

            <Lottie 
              className="illustration" 
              animationData={SpaceBoy} 
              loop={true} 
            />
          </div>
        </div>
        <div className="col">
          <div className='AboutPage'>
            <div className='AboutText'>
              <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
              <p>
                I love the process of changing a raw idea into a website or a product 
                that impacts lives. 
                I want to do work that challenges me as a developer & work that I can 
                be proud of.<br /><br />
                I am fluent in <b>C++</b> and know a bit of <b>Python</b> and am working on a few 
                projects in the <b>MERN</b> stack.<br />
                I plan to learn <b>Next.js</b>, <b>Three.js</b>, and <b>Typescript</b> in the near future. <br /><br />
                Also, I love <b>coffee</b> <CiCoffeeCup style={{ transform: "scale(1.5) rotate(15deg)" }}/>   
              </p>
            </div>
            <Tilt>
              <img className='Avatar' src={Avatar} alt="" />
            </Tilt>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/burak-me"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href='mailTo:i@burak.me'
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <GrMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
