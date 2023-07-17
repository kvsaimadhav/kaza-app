import React from 'react';
import './About.css';
import Photo1 from './images/Photo1.jpg';
import Photo2 from './images/Photo2.jpg';
import Photo3 from './images/Photo3.jpg';
import Photo4 from './images/Photo4.jpg';

function About()
{
  return(
    <div className="About" id="about">
      <div class="aboutHeader">
        <h2 align="center">About Me</h2>
      </div>
      <div class="aboutContent">
        <div class="aboutBx">
          <img src={Photo1} alt ="No Profile Photo"/>
          <h3>Profile - Sai Madhav</h3>
          <p>
            Everyone calls me Madhav. But, Friends and Family calls me Sai.
            So, you can call me Sai Madhav <i>(ha-ha)</i>. I like to mingle with &nbsp;
            like-minded people. So, Most of my friends are in frequency range &nbsp;
            of me <i>(I know you can understand.. I'm from NERD batch!!)</i>.
          </p>
        </div>
        <div class="aboutBx">
          <img src={Photo2} alt ="No Profile Photo"/>
          <h3>Facebook Profile - Sai Madhav</h3>
          <p>
            I was born in Hottest Place of <i>India, RAJASTHAN (Jodhpur)</i>. I was brought-up
            in Warangal, famous for Temples such as <i>Thousands Pillars Temple, Bhadrakali Temple</i> &nbsp;
            and finally <b>NIT WARANGAL</b>. I'm about 27 years of age with Birthday on <i>December &nbsp;
            29th</i>. I like to make memories with friends and family by going tourist places.
          </p>
        </div>
        <div class="aboutBx">
          <img src={Photo3} alt ="No Profile Photo"/>
          <h3>LinekdIn Profile - Madhav Kaza</h3>
          <p>
            I studied Bachelor's Degree from <i>2014 batch of BITS Pilani, Hyderabad</i> in <b>ECE</b>. Education made me learn how to cope-up with
            &nbsp; strugglesome situations. Later on, I got Master's Degree from <i>2020 batch from Central Michigan University</i> in <b>CS</b>.
            &nbsp; I earned how to lead a successful life till now via thorough-thinking of minute scenarios.
          </p>
        </div>
        <div class="aboutBx">
          <img src={Photo4} alt ="No Profile Photo"/>
          <h3>Instagram Profile - Vedhamias</h3>
          <p>
            You can have a taste at what Places I roamed in the world. I have been to USA and states such as <i>Michigan, Illinois and Texas</i>.
            &nbsp; In India, I roamed from about 10 states such as <b>Rajasthan, Telangana, Andhra Pradesh, Karnataka, New Delhi, Maharastra, Assam,
            &nbsp; Tamil Nadu, and so on</b>. I like to challenge myself with respect to Hurdles and try to make memory with every aspect of nature.
            &nbsp; <i>I like to draw pictures of complex nature having simple meaning in LIFE</i>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
