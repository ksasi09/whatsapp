import React, { useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import BackIcon from "../../icons/BackIcon";
import Loader from "../../utils/Loader";
import CancelIcon from "../../icons/CancelIcon";
const Search = () => {
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleFocus = (val) => {
    setFocus(val);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="rounded-full mt-2 overflow-hidden mx-3 flex justify-between items-center flex-row text-textAccent bg-backgroundNav px-2">
      {focus ? (
        <div className="cursor-pointer" onClick={() => handleFocus(false)}>
          <BackIcon />
        </div>
      ) : (
        <div className="cursor-pointer">
          <SearchIcon />
        </div>
      )}

      <input
        value={searchText}
        onChange={handleChange}
        onFocus={() => handleFocus(true)}
        type="text"
        name="search"
        id="search"
        placeholder="Search or start a new chat"
        className="placeholder-textAccent text-textPrimary text-sm focus:outline-none w-full bg-backgroundNav py-2 px-2"
      />

      {loading && (
        <div className="">
          <Loader />
        </div>
      )}

      {!loading && searchText !== "" && (
        <div className="cursor-pointer" onClick={() => setSearchText("")}>
          <CancelIcon />
        </div>
      )}
    </div>
  );
};

export default Search;
