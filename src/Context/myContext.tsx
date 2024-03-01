import { createContext, useEffect, useState } from "react";
export const MyContext = createContext<ContextInterface | undefined>(undefined);

interface ContextInterface {
  setSearchHistory: Function;
  setHistory: Function;
  searchHistory: {} | any;
  history: [] | any;
  modalInfo: {
    likes: string;
    downloadLink: string;
    views: string;
    image: string;
  } | null;
  setModalInfo: Function;
}

export const MyContextProvider = ({ children }: any) => {
  const [searchHistory, setSearchHistory] = useState<{}>({});
  const [history, setHistory] = useState<[] | null>(null);
  const [modalInfo, setModalInfo] = useState<{
    likes: string;
    downloadLink: string;
    views: string;
    image: string;
  } | null>(null);
  useEffect(() => {
    if (localStorage.getItem("history")) {
      let storaged: any = localStorage.getItem("history");
      setHistory(JSON.parse(storaged));
    } else {
      localStorage.setItem("history", "[]");
    }
  }, []);
  useEffect(() => {
    if (history !== null) {
      localStorage.setItem("history", JSON.stringify([...history]));
    }
  }, [history]);

  return (
    <MyContext.Provider
      value={{
        setSearchHistory,
        searchHistory,
        history,
        setHistory,
        modalInfo,
        setModalInfo,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
