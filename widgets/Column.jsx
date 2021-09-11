/**
 * 
 * @param {{vAlign: string, subheader: string, imageAlt: string, contentList: Array, orderLink: Object, contentLink: Object}} props 
 */

const Column = ({
  children,
  vAlign = "center|start",
  hAlign = "",
  bgColor = "",
  height = "",
  width = "",
  wrap = false,
}) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        flexWrap: wrap ? "wrap" : "nowrap",
        justifyContent: vAlign,
        alignItems: hAlign,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
