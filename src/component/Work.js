import React from 'react';
import drdo from './images/drdo.jpg';
import ssg from './images/ssg.jpg';
import './Work.css';

function Work()
{
  return(
    <div className="Work" id="work">
      <div clasName="workHeader">
        <h2 align="center">Work Experience</h2>
        <p>Experienced Software Engineer with more than one year of experience in Full Stack Web Development with
          Technology Stack related to Java, Oracle DB, Spring Boot and Spring (Framework) using RESTful API.
          Expertise in Industry oriented skills with Agile and Waterfall Methodologies while approaching project
          scenarios.
        </p>
      </div>
      <div className="workContent">
        <div className="workBx">
          <img src={drdo}/>
          <h3>Defense Research and Development Laboratory (DRDL)</h3>
          <p>Worked for DRDL in Hyderabad, India. The project is about the Process Plans records being stored
            in the software to execute the plan and create a large database of nearly 10 modules for develop of
            Missile Hardware from Raw Material to Fully Functional and Testing Rockets for the Indian Government.
          </p>
        </div>
        <div className="workBx">
          <img src={ssg}/>
          <h3>Strategic Solutions Group LLC (Conduent)</h3>
          <p>Worked for Conduent in Boston, MA. The project is about LBOH persons getting notified with tasks
            to be completed for storing the database with all known diseases by the United States - Massachussetts
            government.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
