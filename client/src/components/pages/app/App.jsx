import React, { useContext } from "react";
import ChatContext from "../../../context/appContext";
import Footer from "../../footer/Footer";
import { Home, Events, Create, Discover, Chats, Profile } from "../app";
import "./app.css";

const App = () => {
  const { activeTab, setActiveTab } = useContext(ChatContext);

  return (
    <div className="main-app">
      {activeTab === "posts" && <Home />}
      {activeTab === "events" && <Events />}
      {activeTab === "create" && <Create />}
      {activeTab === "discover" && <Discover />}
      {activeTab === "chats" && <Chats />}
      {activeTab === "profile" && <Profile />}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
