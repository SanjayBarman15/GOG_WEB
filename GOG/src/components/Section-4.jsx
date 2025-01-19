import React from 'react';
import './Section-4.css';


const teamMembers = [
  {
    name: "Ifrah Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "../../public/assets/Images/professior.jpg",
    linkedin: "#", 
  },
  {
    name: "Ifrah Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "../../public/assets/Images/professior.jpg",
    linkedin: "#",
  },
  {
    name: "Ifrah Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "../../public/assets/Images/professior.jpg",
    linkedin: "#",
  },
  {
    name: "Ifrah Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "../../public/assets/Images/professior.jpg",
    linkedin: "#",
  },
];


const Section_4 = () => {
  return (
    <div className="new-component">
        <div className="first-component">
            <h1>Our Core Team</h1>
            <p>Meet the passionate leaders driving our vision and success with their expertise and dedication.</p>  
        </div> 
        <div className="core-team">
            <div className="team-container">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="card-image">
                    <img src={member.imgSrc} alt={member.name} />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-icon"
                    >
                      <img
                        src="../../public/assets/Images/link_logo.png"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                  <div className="card-content">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>Alumni: <strong>{member.alumni}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          </div>       
    </div>
  );
};

export default Section_4;
