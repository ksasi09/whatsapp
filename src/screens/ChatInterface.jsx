import React from "react";
import SideBar from "../components/sideBar/SideBar";

const ChatInterface = () => {
  return (
    <section
      id="main"
      className="min-h-screen max-h-screen  w-full flex justify-start items-start flex-row"
    >
      {/* side bar */}
      <div className="max-w-chatNav w-full">
        <SideBar />
      </div>
      {/* chat */}
      <div className="chat max-w-chatInterface w-full">chat</div>
    </section>
  );
};

export default ChatInterface;
