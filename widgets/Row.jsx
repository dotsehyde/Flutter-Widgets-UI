const Row = ({
  children,
  hAlign = "",
  vAlign = "",
  width = "",
  height = "",
  bgColor = "",
  wrap = false,
}) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "row",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: hAlign,
        alignItems: vAlign,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
