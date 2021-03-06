import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "card-box-dark" : "card-box"}>
      <div className="card">
        <div className="front">
          <img
            className="profile-pic-front"
            src={cardInfo.profilePicture}
            alt="grandma"
          />
          {/* <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5> */}
        </div>
        <div className="back">
          <div className="experience-text-details">
            <img
              className="profile-pic-back"
              src={cardInfo.profilePicture}
              alt="grandma"
            />
            <h5
              className={
                isDark
                  ? "experience-text-role dark-mode-text"
                  : "experience-text-role"
              }
            >
              {cardInfo.role}
            </h5>
            <h5
              className={
                isDark
                  ? "experience-text-date dark-mode-text"
                  : "experience-text-date"
              }
            >
              {cardInfo.date}
            </h5>
            <p
              className={
                isDark
                  ? "experience-text-desc dark-mode-text"
                  : "experience-text-desc"
              }
            >
              {cardInfo.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
