import React, { useContext } from "react";
import ChatContext from "../../../../context/appContext";
import "./home.css";
import profilePic from "../../../../assets/profilePic.jpg";
import postimg from "../../../../assets/postimg.jpg";
const Home = () => {
  const { activeTab, setActiveTab } = useContext(ChatContext);
  return (
    <div className="jano-app">
      <header>
        <nav>
          <div className="nav-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 1080 1080"
              viewBox="0 0 1080 1080"
            >
              <path
                d="m353.5 73.2s188.7-96.4 389.9 11.3 169.6 480.7 169.6 480.7 7.1 122.9 17 173.6c9.9 50.6 43.4 153.3 14.3 208.9-29.1 55.5-82 59.9-162.2 27.4-64.4-8.8-82.6-14.9-169.5 43.9-86.9 58.9-165.8 4.6-194.1-28.1-28.2-32.9-92.9-33.5-146.4-7.6s-99.4 25.5-119.8-6.2c-20.5-31.7-43-72.2-17.1-184.5s29.4-200.9 32.3-253.2c2.8-52.2 1.4-212.4 29.5-276.3 28.1-63.8 60.3-147.3 156.5-189.9z"
                fill="#fff"
              />
              <path
                d="m274.9 987.4s35.7-22.9 76.9-21.3 56.2 21.3 56.2 21.3-53.8 54.8-133.1 0z"
                fill="#b8b8b8"
              />
              <path
                d="m667.2 987.4s35.7-22.9 76.9-21.3 56.2 21.3 56.2 21.3-54 54.8-133.1 0z"
                fill="#b8b8b8"
              />
              <g fill="#e68083">
                <path d="m316.8 490.2c9.5-9.5 13.9-20.6 9.8-24.7s-15.2.3-24.7 9.8-13.9 20.6-9.8 24.7c4.1 4.3 15.2-.2 24.7-9.8" />
                <path d="m274.9 485.9c9.5-9.5 13.9-20.6 9.8-24.7s-15.2.3-24.7 9.8-13.9 20.6-9.8 24.7c4 4.1 15.1-.3 24.7-9.8" />
                <path d="m361 494.6c9.5-9.5 13.9-20.6 9.8-24.7s-15.2.3-24.7 9.8-13.9 20.6-9.8 24.7c4.1 4.3 15.2-.1 24.7-9.8" />
                <path d="m755 490.2c-9.5-9.5-13.9-20.6-9.8-24.7s15.2.3 24.7 9.8 13.9 20.6 9.8 24.7c-4.1 4.3-15.2-.2-24.7-9.8" />
                <path d="m797 485.9c-9.5-9.5-13.9-20.6-9.8-24.7s15.2.3 24.7 9.8 13.9 20.6 9.8 24.7-15.2-.3-24.7-9.8" />
                <path d="m710.8 494.6c-9.5-9.5-13.9-20.6-9.8-24.7s15.2.3 24.7 9.8 13.9 20.6 9.8 24.7c-4.1 4.3-15.2-.1-24.7-9.8" />
              </g>
              <path d="m295.4 351.8c14 8 26.4.6 30.9-7.7 5.5-10.6 2.1-23.8-10.3-29.8 14.4-14.3 44.5-21.3 69.6-6.2 26.5 16 36.7 49.2 23.7 77.2s-45.5 41.6-74.6 31.2c-29.7-10.7-43.3-40.2-39.3-64.7" />
              <path d="m658.8 351.8c14 8 26.4.6 30.9-7.7 5.5-10.6 2.1-23.8-10.3-29.8 14.4-14.3 44.5-21.3 69.6-6.2 26.5 16 36.7 49.2 23.7 77.2s-45.5 41.6-74.6 31.2c-29.9-10.7-43.3-40.2-39.3-64.7" />
              <path
                d="m478.5 506.1s59.8 43.8 113.9 0"
                fill="none"
                stroke="currentColor"
                strokeWidth={11}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m538.2 35.2h3.5c78-1.2 156.4 14.9 220.5 62 77.8 57.1 121 153.1 138.5 245.7 21.6 114.3 3.5 233.2 21.1 349.1 5.3 34.8 13.1 69.6 19.5 104.1 6.6 36.7 19.6 70.7 15.6 108.9-3.9 37.2-25.1 75-60.6 87.2-26.4 9.1-55.5 2.7-82.1-6.2-26.5-8.9-53-20.1-80.9-20.6-69.1-1.2-110.3 62.4-173.5 77.7-23.2 5.7-48.2 3.9-70.4-5.2-40.6-16.5-68.7-55.3-111.3-67.8-26.9-7.9-56.2-3.5-83 4.6-28.3 8.5-59 27.1-89 27.2-33.9.1-63.3-27.3-75.1-59-11.9-31.8-9.5-67-4.6-100.5 7.2-49.1 19.6-97.2 28.7-145.7 9.3-49.2 11.7-97.8 12.4-147.9 1-97.8-1.7-197.7 31.4-291.1 23.2-65.5 63.8-126.8 122.2-165.8 63.5-42.6 142.1-55.3 217.1-56.7z"
                // style="fill:none;stroke:#000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
                fill="none"
                stroke="currentColor"
                strokeWidth={20}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m262.1 987.4s85.3 51.8 151.5 0"
                // style="fill:none;stroke:#000;stroke-width:9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
                fill="none"
                stroke="currentColor"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m661.3 987.4s61 50 144.8-4.1"
                //   style="fill:none;stroke:#000;stroke-width:9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
                fill="none"
                stroke="currentColor"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </svg>
            <h3>HSR Layout</h3>
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="nav-right">
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
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <svg
              onClick={() => {
                setActiveTab("profile");
              }}
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-status">
          <div className="main-status-wrapper">
            <div className="main-status-profile">
              <img src={profilePic} alt="profile-pic" />
            </div>
            <h2>Your Story</h2>
          </div>
          <div className="main-status-wrapper">
            <div className="main-status-profile">
              <img src={profilePic} alt="profile-pic" />
            </div>
            <h2>Your Story</h2>
          </div>
          <div className="main-status-wrapper">
            <div className="main-status-profile">
              <img src={profilePic} alt="profile-pic" />
            </div>
            <h2>Your Story</h2>
          </div>
          <div className="main-status-wrapper">
            <div className="main-status-profile">
              <img src={profilePic} alt="profile-pic" />
            </div>
            <h2>Your Story</h2>
          </div>
        </div>
        <div className="main-post">
          <div className="main-post-wrapper">
            <div className="main-post-header">
              <div className="main-post-header-left">
                <img src={profilePic} alt="" />
                <h1>Guru</h1>
              </div>
              <div className="main-post-header-right">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="main-post-img">
              <img src={postimg} alt="" />
            </div>
            <div className="main-post-options">
              <div className="main-post-options-left">
                <div className="main-post-options-left-likes">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1>23</h1>
                </div>
                <div className="main-post-options-left-comments">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  <h1>25</h1>
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <div className="main-post-options-right">
                {true ? (
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
                ) : (
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
                      d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="main-post-timeline">
              <span>1hr ago</span>
            </div>
          </div>
          <div className="main-post-wrapper">
            <div className="main-post-header">
              <div className="main-post-header-left">
                <img src={profilePic} alt="" />
                <h1>Guru</h1>
              </div>
              <div className="main-post-header-right">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="main-post-img">
              <img src={postimg} alt="" />
            </div>
            <div className="main-post-options">
              <div className="main-post-options-left">
                <div className="main-post-options-left-likes">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1>23</h1>
                </div>
                <div className="main-post-options-left-comments">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  <h1>25</h1>
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <div className="main-post-options-right">
                {true ? (
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
                ) : (
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
                      d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="main-post-timeline">
              <span>1hr ago</span>
            </div>
          </div>
          <div className="main-post-wrapper">
            <div className="main-post-header">
              <div className="main-post-header-left">
                <img src={profilePic} alt="" />
                <h1>Guru</h1>
              </div>
              <div className="main-post-header-right">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="main-post-img">
              <img src={postimg} alt="" />
            </div>
            <div className="main-post-options">
              <div className="main-post-options-left">
                <div className="main-post-options-left-likes">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1>23</h1>
                </div>
                <div className="main-post-options-left-comments">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  <h1>25</h1>
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <div className="main-post-options-right">
                {true ? (
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
                ) : (
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
                      d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="main-post-timeline">
              <span>1hr ago</span>
            </div>
          </div>
          <div className="main-post-wrapper">
            <div className="main-post-header">
              <div className="main-post-header-left">
                <img src={profilePic} alt="" />
                <h1>Guru</h1>
              </div>
              <div className="main-post-header-right">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="main-post-img">
              <img src={postimg} alt="" />
            </div>
            <div className="main-post-options">
              <div className="main-post-options-left">
                <div className="main-post-options-left-likes">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1>23</h1>
                </div>
                <div className="main-post-options-left-comments">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  <h1>25</h1>
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <div className="main-post-options-right">
                {true ? (
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
                ) : (
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
                      d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="main-post-timeline">
              <span>1hr ago</span>
            </div>
          </div>
          <div className="main-post-wrapper">
            <div className="main-post-header">
              <div className="main-post-header-left">
                <img src={profilePic} alt="" />
                <h1>Guru</h1>
              </div>
              <div className="main-post-header-right">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="main-post-img">
              <img src={postimg} alt="" />
            </div>
            <div className="main-post-options">
              <div className="main-post-options-left">
                <div className="main-post-options-left-likes">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <h1>23</h1>
                </div>
                <div className="main-post-options-left-comments">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  <h1>25</h1>
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>
              <div className="main-post-options-right">
                {true ? (
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
                ) : (
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
                      d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="main-post-timeline">
              <span>1hr ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
