import React from "react";
import "./IITCard.css";

function Card({
  imgSrc,
  name = "NAME",
  role = "ROLE",
  alumni = "ALUMNI",
  linkedinLink = "#",
  nameColor,
  roleColor,
  backgroundColor,
  alumniColor,
  instituteColor,
  alumniLogoVariant = "default",
  borderColor,
}) {
  const alumniLogos = {
    default: "/assets/Images/IIT_Logo_White.png",
    blue: "/assets/Images/IIT_Logo_Blue.png",
    ml: "/assets/IITLogo/NITM.png",
  };
  return (
    <div
      className="card"
      style={{
        backgroundColor,
        borderColor: borderColor,
      }}
    >
      <div className="card-content">
        <div className="frame-19">
          <div className="logo">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/Images/link_logo.png"
                alt="LinkedIn Logo"
                className="ui-logo"
              />
            </a>
          </div>
          <div className="frame-19-img">
            <img src={imgSrc} alt={name} className="IIT-img" />
          </div>
        </div>
        <div className="frame-26">
          <div className="frame-273">
            <div className="frame-200">
              <div className="frame-200-head" style={{ color: nameColor }}>{name}</div>
              <div className="frame-200-title" style={{ color: roleColor }}>{role}</div>
            </div>
          </div>
          <div className="frame-216">
            <div className="frame-28">
              <div className="frame-28-alu" style={{ color: alumniColor }}>
                Alumni:
              </div>
              <div className="frame-28-IIT" style={{ color: instituteColor }}>
                {alumni}
              </div>
            </div>
            {alumniLogos[alumniLogoVariant] && (
              <div className="IIT-Logo">
                <img
                  src={alumniLogos[alumniLogoVariant]}
                  alt={`IIT Logo - ${alumniLogoVariant}`}
                  className="IIT-Logo-img"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
