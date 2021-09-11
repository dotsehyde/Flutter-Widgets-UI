//TODO: Finish Container
const Container = ({
  marginBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginAll,
  paddingAll,
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  children,
  width,
  height,
  color,
  textAlign,
}) => {
  return (
    <div
      style={{
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
      

        textAlign: textAlign,
        backgroundColor: color,
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
