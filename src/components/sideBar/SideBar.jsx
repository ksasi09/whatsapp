import React from "react";
import TopBar from "./utils/TopBar";
import Search from "./utils/Search";
import ChatDetail from "./utils/ChatDetail";
import Loader from "../utils/Loader";

const SideBar = () => {
  return (
    <section className="bg-backgroundDarkExtra min-h-screen ">
      <TopBar />
      <Search />
      <section className="h-chatListScreen flex justify-start items-start mt-2 flex-col customTopBorder overflow-x-hidden overflow-y-auto">
        <ChatDetail
          image="https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?cs=srgb&dl=pexels-alex-azabache-3757141.jpg&fm=jpg"
          title="Sasi"
          subTitle="Ahh..."
          time="yesterday"
          notifications={10}
        />

        <ChatDetail
          image="https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?cs=srgb&dl=pexels-alex-azabache-3757141.jpg&fm=jpg"
          title="User 2"
          subTitle="Hello how are you blah blah blah blah blah blah blah blah..."
          time="02/09/2020"
          notifications={0}
        />
        <ChatDetail
          image="https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?cs=srgb&dl=pexels-alex-azabache-3757141.jpg&fm=jpg"
          title="Pikachu"
          subTitle="Ahh..."
          time="yesterday"
          notifications={1}
        />
      </section>
    </section>
  );
};

export default SideBar;
