import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const ChatsProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

// chats?.map(()=>{})
