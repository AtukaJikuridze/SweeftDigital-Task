import axios from "axios";

import React, { useEffect, useState } from "react";

export default function PopularPhotos(props: { client_id: string }) {
  const [popularPhotos, setPopularPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?page=2&per_page=20&order_by=popular&client_id=${props.client_id}`
      )
      .then((response) => setPopularPhotos(response.data));
  }, []);
  return (
    <>
      {popularPhotos.map((e: any) => (
        <img key={e.id} src={e.urls.small} alt={e.alt_description} />
      ))}
    </>
  );
}
