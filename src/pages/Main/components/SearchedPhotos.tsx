import axios from "axios";
import React, { useEffect } from "react";
import { MyContext } from "../../../Context/myContext";
import { useContext } from "react";

interface searchedPhotosInterface {
  setCurrentSearchResults: Function;
  currentSearchResults: any;
  client_id: string;
  currentSearch: string;
}
export default function SearchedPhotos({
  client_id,
  currentSearch,
  currentSearchResults,
  setCurrentSearchResults,
}: searchedPhotosInterface) {
  const context = useContext(MyContext);

  const isSearchedYet: boolean = Boolean(context?.searchHistory[currentSearch])
    ? true
    : false;
  isSearchedYet
    ? setCurrentSearchResults(context?.searchHistory[currentSearch])
    : useEffect(() => {
        axios
          .get(
            `https://api.unsplash.com/search/photos?page=1&per_page=20&query="${currentSearch}"&client_id=${client_id}`
          )
          .then((response) => {
            setCurrentSearchResults(response.data);
            let newBlock: any = {};
            newBlock[currentSearch] = response.data;

            context?.setSearchHistory((prevItems: any) => {
              return {
                ...prevItems,
                ...newBlock,
              };
            });
          });
      }, [currentSearch]);

  return (
    <>
      {currentSearchResults.results?.map((e: any) => (
        <img key={e.id} src={e.urls.small} alt={e.alt_description} />
      ))}
    </>
  );
}
