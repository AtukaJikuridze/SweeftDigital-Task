import { useEffect, useState } from "react";
import "./MainPage.css";

import PopularPhotos from "./components/PopularPhotos";
import SearchedPhotos from "./components/SearchedPhotos";
export default function Main() {
  const [currentSearch, setCurrentSearch] = useState("");
  const [delaySearch, setDelaySearch] = useState("");
  const [currentSearchResults, setCurrentSearchResults] = useState<any>([]);

  const client_id = "L-G24LQxeIEQRvElf_5SrSvZS3RvN9iuOIjRluMwRt0";

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDelaySearch(currentSearch);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [currentSearch]);

  return (
    <main>
      <div className="container">
        <div className="search-main">
          <input
            autoFocus
            autoComplete="off"
            type="text"
            placeholder="Search Photo"
            onChange={(e) => setCurrentSearch(e.target.value)}
            value={currentSearch}
          />
        </div>
        <div className="photos-flex">
          {delaySearch ? (
            <SearchedPhotos
              setCurrentSearchResults={setCurrentSearchResults}
              currentSearchResults={currentSearchResults}
              client_id={client_id}
              currentSearch={delaySearch}
            />
          ) : (
            <PopularPhotos client_id={client_id} />
          )}
        </div>
      </div>
    </main>
  );
}
