import React from "react";
import "./OurTeam.css";
import Card from "./UI/IITCard";
import rightArrow from "../../public/assets/Images/right_arrow.png";
const OurIITianTeam = [
  {
    name: "Ifrah Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "/assets/IITians/IFRAH_Sir.png",
    linkedin: "#",
  },
  {
    name: "Refi Mam",
    role: "Professor & Mentor",
    alumni: "NIT Meghalaya",
    imgSrc: "/assets/IITians/Refi_mam.png",
    linkedin: "#",
    alumniLogoVariant: "ml",
  },
  {
    name: "Abhishek Sir",
    role: "Professor & Mentor",
    alumni: "IIT Guwahati ",
    imgSrc: "/assets/IITians/ABHISHEK_SIR_G.png",
    linkedin: "#",
  },
  {
    name: "Anchit Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur ",
    imgSrc: "/assets/IITians/ANCHIT_Sir.png",
    linkedin: "#",
  },
  {
    name: "Wan Sir",
    role: "Professor & Mentor",
    alumni: "NIT Meghalaya",
    imgSrc: "/assets/IITians/wan_sir.png",
    linkedin: "#",
    backgroundColor: "#F7FCFF",
    nameColor: "#1E293B",
    roleColor: "#64748B",
    alumniLogoVariant: "blue",
    alumniColor: "#64748B",
    instituteColor: "#0F172A",
    borderColor: "#D0EEFF",
  },
  {
    name: "Hemant Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "/assets/IITians/HEMANT_SIR.png",
    linkedin: "#",
    backgroundColor: "#F7FCFF",
    nameColor: "#1E293B",
    roleColor: "#64748B",
    alumniLogoVariant: "blue",
    alumniColor: "#64748B",
    instituteColor: "#0F172A",
    borderColor: "#D0EEFF",
  },
  {
    name: "SHREYANSH Sir",
    role: "Professor & Mentor",
    alumni: "IIT Guwahati ",
    imgSrc: "/assets/IITians/SHREYANSH_Sir.png",
    linkedin: "#",
    backgroundColor: "#F7FCFF",
    nameColor: "#1E293B",
    roleColor: "#64748B",
    alumniLogoVariant: "blue",
    alumniColor: "#64748B",
    instituteColor: "#0F172A",
    borderColor: "#D0EEFF",
  },
  {
    name: "ANIRUDH Sir",
    role: "Professor & Mentor",
    alumni: "IIT Kharagpur",
    imgSrc: "/assets/IITians/ANIRUDH_Sir.png",
    linkedin: "#",
    backgroundColor: "#F7FCFF",
    nameColor: "#1E293B",
    roleColor: "#64748B",
    alumniLogoVariant: "blue",
    alumniColor: "#64748B",
    instituteColor: "#0F172A",
    borderColor: "#D0EEFF",
  },
];
function OurTeam() {
  function capitalizeFirstLetter(string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div className="section-1-team">
      <div className="frame36">
        <div className="frame-36-head">
          <h1>Our Team of IITians</h1>
        </div>
        <div className="frame-36-content">
          <p>
            Meet our dedicated team of IIT alumni, bringing expertise,
            innovation, and a passion for excellence to every project.
          </p>
        </div>
      </div>
      <div className="frame-35">
        <div className="grid-container">
          {OurIITianTeam.map((member, index) => (
            <Card
              key={index}
              imgSrc={member.imgSrc}
              name={capitalizeFirstLetter(member.name)}
              role={member.role}
              alumni={member.alumni}
              linkedinLink={member.linkedin}
              backgroundColor={member.backgroundColor}
              nameColor={member.nameColor}
              roleColor={member.roleColor}
              alumniLogoVariant={member.alumniLogoVariant || "default"}
              alumniColor={member.alumniColor}
              instituteColor={member.instituteColor}
              borderColor={member.borderColor}
            />
          ))}
        </div>
        <div className="view-all">
          <p>See More</p>
          <img src={rightArrow} alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
