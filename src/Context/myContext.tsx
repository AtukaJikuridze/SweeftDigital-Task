import { createContext, useState } from "react";
export const MyContext = createContext<ContextInterface | undefined>(undefined);

interface ContextInterface {
  setSearchHistory: Function;
  searchHistory: {} | any;
}

export const MyContextProvider = ({ children }: any) => {
  const [searchHistory, setSearchHistory] = useState<{}>({});

  return (
    <MyContext.Provider value={{ setSearchHistory, searchHistory }}>
      {children}
    </MyContext.Provider>
  );
};
