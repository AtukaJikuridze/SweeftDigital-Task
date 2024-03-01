import { MyContext } from "../../Context/myContext";
import { useContext, useState } from "react";
import "./History.css";
import "../Main/MainPage.css";
import SearchedPhotos from "../Main/components/SearchedPhotos";
export default function History() {
  const context = useContext(MyContext);
  const [searched, setSearched] = useState<null | string>(null);

  return (
    <div className="container">
      <div className="history-header">
        <h1 className="roboto-regular">Your Search History</h1>
        <div className="searched-elements">
          {context?.history ? (
            context.history.map((e: string, i: number) => (
              <div key={i} onClick={() => setSearched(e)}>
                <p key={i} className="roboto-regular">
                  {e}
                </p>
              </div>
            ))
          ) : (
            <>No history Records</>
          )}
        </div>
      </div>

      <div className="photos-flex">
        {searched && <SearchedPhotos currentSearch={searched} />}
      </div>
    </div>
  );
}
