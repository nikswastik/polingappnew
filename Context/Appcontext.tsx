import * as React from "react";
type AppContextInterface = {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: string;
};

export const AppContext = React.createContext<null | null>(null);
export const AppStore: React.FC = ({ children }: any) => {
  const [text, setText] = React.useState<any>();
  const [asteroidInfo, setasteroidInfo] = React.useState<any>();
  const [data, setData] = React.useState<any>([]);

  return (
    <AppContext.Provider value={{ text, setText,asteroidInfo, setasteroidInfo,data, setData}}>
      {children}
    </AppContext.Provider>
  );
};