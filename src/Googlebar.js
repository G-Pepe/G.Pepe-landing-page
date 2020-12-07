import React, { useContext } from "react";
import { MyContext } from "./Contextfile";
import google from "./google.jpg";

export const Googlebar = () => {
  const { termToSearch, setTermToSearch } = useContext(MyContext);

  const search = () =>
    window.open("//" + "google.com/search?q=" + termToSearch, "_blank");

  const getTermToSearch = (e) => {
    setTermToSearch(e.target.value);
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      <form action="" onSubmit={search} className="searchForm">
        <img src={google} alt="logo" className="googleLogo" />
        <input
          type="search"
          onChange={getTermToSearch}
          className="searchField"
          placeholder="google me..."
        />
      </form>

      {/* <form
        method="get"
        title="Search Form"
        action="https://cse.google.com/cse/publicurl"
      >
        <div>
          <input
            type="search"
            id="q"
            name="q"
            title="Search this site"
            alt="Search Text"
            maxlength="256"
          />
          <input
            type="hidden"
            id="cx"
            name="cx"
            value="013626029654558379071:ze3tw4csia4"
          />
          <input
            type="image"
            id="searchSubmit"
            name="submit"
            src="https://www.flaticon.com/free-icon/active-search-symbol_34148"
            alt="Go"
            title="Submit Search Query"
          />
        </div>
      </form> */}
    </div>
  );
};
