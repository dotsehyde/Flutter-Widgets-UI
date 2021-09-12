/**
 *
 * @param {{vAlign: vAlign, subheader: string, imageAlt: string, contentList: Array, orderLink: Object, contentLink: Object}} props
 */

const Column = ({
  children,
  vAlign,
  hAlign,
  bgColor,
  height,
  width,
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

export default Column;
