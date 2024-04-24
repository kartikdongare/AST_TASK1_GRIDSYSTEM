 import React,{ createContext, useContext, useState } from 'react';

const initState = {
  gap: 10,
};

export const GridContext = createContext(initState);

const GridContextProvider = ({children}) => {
  const [gridPropsValue, setGridPropsValue] = useState({
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  });
  const [gapValue, setGapValue] = useState(10);
  const [rowGapValue, setRowGapValue] = useState(0);
  const [columnGapValue, setColumnGapValue] = useState(0);
  const [spacingValue, setSpacingValue] = useState(0);
  return (
    <GridContext.Provider value={{ gridPropsValue, setGridPropsValue,columnGapValue,setColumnGapValue,rowGapValue,setRowGapValue, gapValue, setGapValue, spacingValue, setSpacingValue }}>{children}</GridContext.Provider>
  );
};

const useContextGrid=()=>useContext(GridContext)
export  {GridContextProvider,useContextGrid};
