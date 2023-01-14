import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [text, setText] = useState("");
  const Navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    Navigate("/search/" + text);
  };
  return (
    <div className="searchbar_container">
      <div className="searchbar">
        <form onSubmit={HandleClick} action="">
          <input
            value={text}
            placeholder="Search Jobs"
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
        <span onClick={() => setText("")}>Clear</span>
      </div>
    </div>
  );
};

export default SearchBar;
