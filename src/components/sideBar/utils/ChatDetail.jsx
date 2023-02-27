import React, { useEffect } from "react";
import Avatar from "../../utils/Avatar";
import DownArrow from "../../icons/DownArrow";
import { useState } from "react";
import Dropdown from "../../utils/Dropdown";

const ChatDetail = ({ notifications = 0, image, title, subTitle, time }) => {
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [options, setOptions] = useState([]);
  const [trimedTitle, setTrimedTitle] = useState("");
  const [dropDownOtionsToggle, setDropDownOtionsToggle] = useState(false);

  useEffect(() => {
    setOptions([
      {
        title: "Archive chat",
        onClick: () => {
          alert(`${title} Archive chat`);
        },
      },
      {
        title: "Mute notifications",
        onClick: () => {
          alert("Mute notifications");
        },
      },
      {
        title: "Delete chat",
        onClick: () => {
          alert("Delete chat");
        },
      },
      {
        title: "Pin chat",
        onClick: () => {
          alert("Pin chat");
        },
      },
      {
        title: "Mark as unread",
        onClick: () => {
          alert("Mark as unread");
        },
      },
    ]);

    if (subTitle.length > 30) {
      setTrimedTitle(`${subTitle.slice(0, 30)}...`);
    } else {
      setTrimedTitle(subTitle);
    }
  }, []);

  const handleLeave = () => {
    setDropDownToggle(false);
    setDropDownOtionsToggle(false);
  };

  return (
    <div
      onMouseEnter={() => setDropDownToggle(true)}
      onMouseLeave={handleLeave}
      className="flex flex-row justify-between items-center w-full cursor-pointer hover:bg-backgroundNav px-3 py-3 customBottomBorder"
    >
      <Avatar size={10} image={image} title={title} subtitle={trimedTitle} />
      <div className="flex justify-start items-center flex-col ">
        <div className="text-textAccent text-sm pt-2">{time}</div>

        <div
          className={`flex justify-center items-center flex-row transition-all ease-in-out duration-300 mt-1 ${
            dropDownToggle
              ? "transform translate-x-0"
              : "transform translate-x-6"
          }`}
        >
          {notifications > 0 && (
            <div className="rounded-full bg-primary flex justify-center items-center z-0">
              <div className="text-backgroundDarkExtra text-sm text-center w-full h-full font-semibold py-0 px-2 z-0">
                {notifications}
              </div>
            </div>
          )}

          <div
            onClick={() => setDropDownOtionsToggle(!dropDownOtionsToggle)}
            className={`mt-1 relative mx-2 transition-all ease-in-out duration-300 ${
              dropDownToggle
                ? "opacity-100 cursor-pointer "
                : "pointer-events-none opacity-0 "
            } `}
          >
            <DownArrow />
          </div>
        </div>
        <div className="relative z-40">
          <Dropdown toggle={dropDownOtionsToggle} options={options} top={10} />
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
