import React, { useCallback, useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import PopularPhotos from "./components/PopularPhotos";
import SearchedPhotos from "./components/SearchedPhotos";
export default function Main() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentSearchResults, setCurrentSearchResults] = useState([]);

  const client_id = "L-G24LQxeIEQRvElf_5SrSvZS3RvN9iuOIjRluMwRt0";

  return (
    <main>
      <div className="container">
        <div className="search-main">
          <input type="text" placeholder="Search Photo" />
        </div>
        <div className="photos-flex">
          {currentSearch ? (
            <PopularPhotos client_id={client_id} />
          ) : (
            <SearchedPhotos
              setCurrentSearchResults={setCurrentSearchResults}
              currentSearchResults={currentSearchResults}
              client_id={client_id}
              currentSearch={currentSearch}
            />
          )}
        </div>
      </div>
    </main>
  );
}
