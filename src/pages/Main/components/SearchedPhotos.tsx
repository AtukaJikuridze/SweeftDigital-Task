import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MyContext } from "../../../Context/myContext";
import { useContext } from "react";
import { client_id } from "../../../SecretKeys/SecretKeys";

interface searchedPhotosInterface {
  currentSearch: string;
}
export default function SearchedPhotos({
  currentSearch,
}: searchedPhotosInterface) {
  const context = useContext(MyContext);
  const [data, setData] = useState<any>([]);
  const unlockLoad = useRef(true);
  const page = useRef(1);
  useEffect(() => {
    if (context?.searchHistory[currentSearch]) {
      setData(context?.searchHistory[currentSearch]);
    } else {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&per_page=20&query="${currentSearch}"&client_id=${client_id}`
        )
        .then((response) => {
          setData(response.data.results);
          let newBlock: any = {};
          newBlock[currentSearch] = response.data.results;
          context?.setSearchHistory((prevItems: any) => {
            return {
              ...prevItems,
              ...newBlock,
            };
          });
        });
    }
  }, [currentSearch]);

  document.addEventListener("scroll", () => {
    if (
      unlockLoad.current &&
      data &&
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
        300
    ) {
      page.current += 1;
      fetchMorePage();
      unlockLoad.current = false;
    }
  });
  const fetchMorePage = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${page.current}&per_page=20&query="${currentSearch}"&client_id=${client_id}`
      )
      .then((response) => {
        setData((prevImages: any) => [...prevImages, ...response.data.results]);
        unlockLoad.current = true;
      });
  };

  return (
    <>
      {data.map((e: any) => (
        <img
          key={e.id}
          src={e.urls.small}
          alt={e.alt_description}
          onClick={() => {
            context?.setModalInfo({
              likes: e.likes,
              views: e.likes * 3,
              downloadLink: e.links.html,
              image: e.urls.regular,
            });
          }} 
        />
      ))}
    </>
  );
}
