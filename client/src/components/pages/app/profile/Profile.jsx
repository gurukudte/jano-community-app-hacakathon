import React, { useContext } from "react";
import ChatContext from "../../../../context/appContext";
import "./profile.css";

const Profile = () => {
  const { activeTab, setActiveTab } = useContext(ChatContext);
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-left">
          <svg
            onClick={() => {
              setActiveTab("posts");
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <span>Profile</span>
        </div>
        <div className="profile-header-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-details-profile">
          <span className="profilepic">E</span>
          <span className="email">email@email.com</span>
          <span className="location">HSR Layout</span>
              </div>
              <button>Complete profile</button>
      </div>
      <div className="profile-stats">
        <div className="profile-stats-meetups">
          <span className="count">25</span>
          <span className="stat-name">Meet-Ups</span>
        </div>
        <div className="profile-stats-trips">
          <span className="count">5</span>
          <span className="stat-name">Meet-Ups</span>
        </div>
        <div className="profile-stats-intrests">
          <span className="count">30</span>
          <span className="stat-name">Interests</span>
        </div>
      </div>
      <div className="profile-details-all">
        <div className="profile-details-all-personal">
          <span className="heading">Personal Information</span>
          <div className="info">
            <span></span>
          </div>
        </div>
        <div className="profile-details-all-interests">
          <span className="heading">Interests</span>
          <div className="info">
            <span></span>
          </div>
        </div>
        <div className="profile-details-all-thingwannatry">
          <span className="heading">Thing you want to try</span>
          <div className="info">
            <span></span>
          </div>
        </div>
        <div className="profile-details-all-thingwannatrythismonth">
          <span className="heading">Thing you wanna try this month</span>
          <div className="info">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
