const Text = ({
  textOverflow,
  align,
  size,
  color,
  children,
  fontFamily,
  weight,
}) => {
  return (
    <div
      style={{
        textAlign: align,
        color: color,
     
        display: "inline-block",
        fontSize: size,
        fontWeight: weight,
        verticalAlign: "middle",
        fontFamily: fontFamily,
        textOverflow: textOverflow,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
export const FontW = 33;
