const Row = ({
  children,
  hAlign = "",
  vAlign = "",
  width = "",
  height = "",
  bgColor = "",
  wrap = false,
    //Margin Props
    marginBottom,
    marginTop,
    marginRight,
    marginLeft,
    marginAll,
    //Padding Props
    paddingAll,
    paddingBottom,
    paddingTop,
    paddingRight,
  paddingLeft,
    //Color
  bg,
}) => {
  return (
    <div
      style={{
        background:bg,
        height: height,
        width: width,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "row",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: hAlign,
        alignItems: vAlign,
        margin: marginAll,
        marginBottom: marginBottom,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        padding: paddingAll,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
