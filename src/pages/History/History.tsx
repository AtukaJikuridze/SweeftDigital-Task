import { MyContext } from "../../Context/myContext";
import { useContext, useState } from "react";
import "./History.css";
import "../Main/MainPage.css";
export default function History() {
  const context = useContext(MyContext);
  const [currentHistoryPhotos, setCurrentHistoryPhotos] = useState<any>([]);
  const filterHistoryPhoto = (event: string) => {
    setCurrentHistoryPhotos(context?.searchHistory[event]);
    console.log(currentHistoryPhotos);
  };

  return (
    <div className="container">
      <div className="history-header">
        <h1 className="roboto-regular">Your Search History</h1>
        <div className="searched-elements">
          {Object.keys(context?.searchHistory).map((e: string, i: number) => (
            <div onClick={() => filterHistoryPhoto(e)}>
              <p key={i} className="roboto-regular">
                {e}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="photos-flex">
        {currentHistoryPhotos?.results?.map((e: any) => (
          <img key={e.id} src={e.urls.small} alt={e.alt_description} />
        ))}
      </div>
    </div>
  );
}
