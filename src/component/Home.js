import React from 'react';
import './Home.css';
import Photo from './images/Photo.jpg';

function Home()
{
  return(
    <div className="Home" id="home">
      <table className="table">
       <tr>
        <td className="image">
          <img src={Photo} alt="No Photo Image" />
        </td>
        <td className="para">
          <p>
            Hi, I'm <b>Sai Madhav</b>...<br/>
            I'm a <i>Full Stack Developer</i>...<br/>
          </p>
        </td>
        </tr>
      </table>
    </div>
  );
}

export default Home;
