import React, { useEffect } from "react";
import { useContextGrid } from "../ContextProvider/ContextProvider";

const Grid = ({
  children,
  wrap = "wrap",
  spacing = 0,
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  gap,
  rowGap
}) => {
  const { setGridPropsValue, setGapValue, setSpacingValue,setRowGapValue } = useContextGrid();

  useEffect(() => {
    setGridPropsValue({
      direction: direction,
      justifyContent: justifyContent,
      alignItems: alignItems,
    });
    setGapValue(gap);
    console.log(spacing,'spacing')
    setSpacingValue(spacing);
    setRowGapValue(rowGap)
  }, [
    direction,
    justifyContent,
    alignItems,
    setGridPropsValue,
    setGapValue,
    gap,
    spacing,
    setSpacingValue,
    rowGap
  ]);

  return (
    <div
      style={{
        width: "90vw",
        marginLeft:'50px',
        // border:'2px solid black',
        flexWrap:wrap
      }}
    >
      {children}
    </div>
  );
};


const styles = {
  app: {
    display: "flex",
    flex: 4,
    margin: "0 auto",
    width: "100%",
    padding: "10px",
    border: "2px solid #ccc",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
};

const Row = ({flexWrap='wrap',columnGap, children }) => {
  const { gridPropsValue, gapValue,rowGapValue ,setColumnGapValue} =useContextGrid()
  useEffect(()=>{
    setColumnGapValue(columnGap)
  },[columnGap])
  return <div style={{ ...styles.row, ...gridPropsValue, gapValue ,flexWrap,marginBottom:rowGapValue}}>{children}</div>;
};


const Col = ({ xs, sm, md, lg, children }) => {
  const { spacingValue ,columnGapValue} = useContextGrid()
  const setColStyles = {
    // border: "1px solid",
    display:'flex',
    flex: 1,
    justifyContent:'center',
    // alignItems:'center',
    maxWidth: "100%",
    margin: spacingValue,
   flexWrap:'wrap',
   boxShadow:'3px 3px 5px 5px #e3e1e1',
   marginLeft:columnGapValue
  };

  if (xs) {
    setColStyles["@media (min-width: 320px) and (max-width:600px)"] = {
      flex: sm,
      maxWidth: `calc(${(xs/12) * 100}% - 20px)`,
      flexWrap:'Wrap'
    };
  }
  if (sm  ) {
    setColStyles.maxWidth=`calc(${(sm/12) * 100}% - 20px)`
    setColStyles.flex=`1 1 ${(sm/12) * 100}%`
  }
  if (md) {
    console.log(md,'mddd')
    setColStyles.maxWidth=`calc(${(md/12) * 100}% - 20px)`
    setColStyles.flex=`1 1 ${(md/12) * 100}%`
    setColStyles.flexWrap='wrap'
  }
  if (lg) {
    setColStyles.maxWidth=`calc(${(lg/12) * 100}% - 20px)`
    setColStyles.flex=`1 1 ${(lg/12) * 100}%`
    setColStyles.flexWrap='wrap'
  }
  // console.log(setColStyles,'sdfff')
  return <div style={setColStyles}>{children}</div>;
};

export  {Grid,Col,Row};