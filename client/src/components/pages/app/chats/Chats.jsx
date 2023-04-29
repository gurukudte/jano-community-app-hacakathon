import React from "react";
import "./chats.css";
import profilePic from "../../../../assets/profilePic.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats-header">
        <div className="chats-header-left">
          <span>Chats</span>
        </div>
        <div className="chats-header-right">
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
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
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
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="chats-chat-wrapper">
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Guru</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Krishna</span>
            <p>let's go for a movie</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>9pm</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Mushkan</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Raghu</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Ujwal</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>vaibhav</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Navneet</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Sam</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Gorge</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Guru</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
        <div className="chats-chat-wrapper-chat">
          <div className="chats-chat-wrapper-chat-profilpic">
            <img src={profilePic} alt="" />
          </div>
          <div className="chats-chat-wrapper-chat-chatinfo">
            <span>Guru</span>
            <p>last messege</p>
          </div>
          <div className="chats-chat-wrapper-chat-lastseen">
            <span>8:45am</span>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Chats;
