import React from "react";
import "./events.css";
import meetup from "../../../../assets/meetup.jpg";

const Events = () => {
  return (
    <div className="events">
      <div className="events-search-events">
        <div className="events-search-events-wrapper">
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
          <input type="text" placeholder="Explore upcoming events" />
        </div>
      </div>
      <div className="events-location">
        <div className="events-locations-left">
          <span>Explore events nearby</span>
          <div className="events-locations-left-location">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>HSR Layout</span>
          </div>
        </div>
        <div className="events-locations-right">
          <span>Change</span>
        </div>
      </div>
      <div className="events-timeline">
        <div className="events-timeline-soon">
          <span>Starting Soon</span>
        </div>
        <div className="events-timeline-in2days">
          <span>Today</span>
          <span>Tomorrow</span>
        </div>
        <div className="events-timeline-week">
          <span>This weekend</span>
          <span>Next week</span>
        </div>
        <div className="events-timeline-all">
          <span>All upcoming</span>
        </div>
      </div>
      <div className="events-group">
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
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="events-group-find">
          <span>Find a group you like</span>
          <p>Match your intrests with a group</p>
        </div>
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="events-explore">
        <span>Explore events</span>
        <div className="events-explore-events">
          <div className="events-explore-events-heading">
            <span>Popular now</span>
          </div>
          <div className="events-explore-events-events">
            <div className="events-explore-events-event">
              <img src={meetup} alt="meetup" />
              <span>WED, MAY 10 - 7:00PM</span>
              <h2>Get meet new people</h2>
              <p>discription</p>
              <div className="events-explore-events-event-options">
                <span>Hosted by Guru</span>
                <div className="icons">
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
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
