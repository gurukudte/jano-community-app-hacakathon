import React, { useState } from "react";
import "./discover.css";

const Discover = () => {
  const [activeTab, setActiveTab] = useState("people");
  return (
    <div className="discover">
      <div className="discover-search">
        <div className="discover-search-wrapper">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input type="text" placeholder="Search for people or places" />
        </div>
      </div>
      <div className="discover-searchfor">
        <span
          className={`${activeTab === "people" && "active"}`}
          onClick={() => {
            setActiveTab("people");
          }}
        >
          People
        </span>
        <span
          className={`${activeTab === "places" && "active"}`}
          onClick={() => {
            setActiveTab("places");
          }}
        >
          Places
        </span>
      </div>
    </div>
  );
};

export default Discover;
