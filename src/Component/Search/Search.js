import React from "react";

import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search for beer..."
          />
          <input type="submit" value="Search" style={{ backgroundColor: "blue",color:"white", padding:"10px 20px" }} />
        </form>
      </div>
    );
  }
}
export default Search;
