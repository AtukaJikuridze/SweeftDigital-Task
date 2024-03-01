import { useContext, useEffect, useState } from "react";
import "./MainPage.css";

import PopularPhotos from "./components/PopularPhotos";
import SearchedPhotos from "./components/SearchedPhotos";
import { MyContext } from "../../Context/myContext";
export default function Main() {
  const context = useContext(MyContext);
  const [currentSearch, setCurrentSearch] = useState("");
  const [delaySearch, setDelaySearch] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDelaySearch(currentSearch);

      if (context?.history && !context?.history.includes(currentSearch)) {
        context?.setHistory((prevItems: string[]) => [
          ...prevItems,
          currentSearch,
        ]);
      }
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
            <SearchedPhotos currentSearch={delaySearch} />
          ) : (
            <PopularPhotos />
          )}
        </div>
      </div>
    </main>
  );
}
