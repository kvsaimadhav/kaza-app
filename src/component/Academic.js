import React from 'react';
import './Academic.css';
import CMICH from './images/CMICH.jpg';
import Bits from './images/bits.jpg';
import WPS from './images/wps_motto.jpg';

function Academic()
{
  return(
    <div className="Academic" id="academic">
      <div class="academicHeader">
        <h2 align="center">Academics</h2>
      </div>
      <div class="academicContent">
        <div class="academicBx">
          <img src={CMICH}/>
          <h3>CMU - Masters in Computer Science</h3>
          <p>
            Completed Masters degree in Computer Science in August 2021. Dedicated
            &nbsp; individual with High Performance in theory and practical fields of
            &nbsp; computer industry. Attained 98.25% grade in CMU masters.
          </p>
        </div>
        <div class="academicBx">
          <img src={Bits}/>
          <h3>BITS Pilani - Bachelors in Electronics and Communication</h3>
          <p>
            Completed Bachelors degree in Electronics and Communication in May 2018.
            &nbsp;  Dedicated individual with High outputs in practical fields of
            &nbsp; electronics industry. Attained 77.10% grade in BITS Pilani bachelors.
          </p>
        </div>
        <div class="academicBx">
          <img src={WPS}/>
          <h3>WPS - High School in General Studies</h3>
          <p>
             Completed High School in General Studies in April 2012. Passionate Engineering
             &nbsp; Individual with High Management power attained over the 10 years of Studies.
             &nbsp; Attained 95% grade in WPS Class X.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academic;
