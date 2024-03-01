import axios from "axios";
import React, { useEffect } from "react";

export default function SearchedPhotos(props: {
  setCurrentSearchResults: Function;
  currentSearchResults: never[];
  client_id: string;
  currentSearch: string;
}) {
  useEffect(() => {
    axios
      .get(
        `https://aapi.unsplash.com/photos?page=1&per_page=20&order_by=popular&client_id=${props.client_id}`
      )
      .then((response) => props.setCurrentSearchResults(response.data));
  }, [props.currentSearch]);
  return <div>SearchedPhotos</div>;
}
