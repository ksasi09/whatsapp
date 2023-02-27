import React, { useState, useEffect } from "react";
import Avatar from "../../utils/Avatar";
import Status from "../../icons/Status";
import NewChat from "../../icons/NewChat";
import Options from "../../icons/Options";
import Dropdown from "../../utils/Dropdown";

const options = [];

const TopBar = () => {
  const [options, setOptions] = useState([]);
  const [optionsToggle, setOptionsToggle] = useState(false);

  const OptionsToggle = () => setOptionsToggle(!optionsToggle);

  useEffect(() => {
    setOptions([
      {
        title: "New group",
        onClick: () => {
          alert("newGrp");
        },
      },
      {
        title: "Create a room",
        onClick: () => {
          alert("create room");
        },
      },
      {
        title: "Profile",
        onClick: () => {
          alert("profile");
        },
      },
      {
        title: "Archived",
        onClick: () => {
          alert("archived");
        },
      },
      {
        title: "Starred",
        onClick: () => {
          alert("starred");
        },
      },
      {
        title: "Setting",
        onClick: () => {
          alert("settings");
        },
      },
      {
        title: "Log out",
        onClick: () => {
          alert("log out");
        },
      },
    ]);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");

    main.onmousedown = (e) => {
      if (
        e.target.id !== "options" &&
        e.target.getAttribute("dropdown") === null
      ) {
        setOptionsToggle(false);
      }
    };
  }, []);

  return (
    <div className="bg-backgroundNav h-13 flex justify-between items-center px-5 relative">
      {/* avatar */}
      <Avatar image="https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?cs=srgb&dl=pexels-alex-azabache-3757141.jpg&fm=jpg" />

      {/* icons */}
      <div className="flex flex-row justify-between items-center w-33 text-textAccent">
        <div className="cursor-pointer rounded-full p-2">
          <Status />
        </div>
        <div className="cursor-pointer rounded-full p-2">
          <NewChat />
        </div>
        <div
          id="options"
          onClick={OptionsToggle}
          className={`${
            optionsToggle && " bg-backgroundDarkExtra"
          } cursor-pointer rounded-full p-2`}
        >
          <Options />

          <Dropdown
            toggle={optionsToggle}
            top={90}
            right={7}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
