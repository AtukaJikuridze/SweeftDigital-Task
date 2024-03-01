import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { client_id } from "../../../SecretKeys/SecretKeys";
import { MyContext } from "../../../Context/myContext";
import { useContext } from "react";
export default function PopularPhotos() {
  const context = useContext(MyContext);
  const [popularPhotos, setPopularPhotos] = useState<any>([]);
  const page = useRef(1);
  const unlockLoad = useRef(true);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?page=1&per_page=20&order_by=popular&client_id=${client_id}`
      )
      .then((response) => setPopularPhotos(response.data));
  }, []);

  document.addEventListener("scroll", () => {
    if (
      unlockLoad.current &&
      popularPhotos &&
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
        `https://api.unsplash.com/photos?page=${page.current}&per_page=20&order_by=popular&client_id=${client_id}`
      )
      .then((response) => {
        setPopularPhotos((prevImages: any) => [
          ...prevImages,
          ...response.data,
        ]);
        unlockLoad.current = true;
      });
  };

  return (
    <>
      {popularPhotos.map((e: any, i: number) => (
        <img
          key={`${e.id}${i}`}
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
