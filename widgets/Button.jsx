const Button = ({
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
  //Children prop
  children,
  //Size Props
  width,
  height,
  //Color Prop
  bg,
  //BorderRadius Props
  borderRadius,
  borderRadiusTL = "0px",
  borderRadiusTR = "0px",
  borderRadiusBR = "0px",
  borderRadiusBL = "0px",
  //Shadow Props
  shadowX = "0px",
  shadowY = "0px",
  shadowColor,
  shadowBlur = "0px",
  //Border Props
  borderWidth = "0px",
  borderColor,
  borderStyle = "none",
  borderBWidth = "0px",
  borderBColor,
  borderBStyle = "none",
  borderTWidth = "0px",
  borderTColor,
  borderTStyle = "none",
  borderLWidth = "0px",
  borderLColor,
  borderLStyle = "none",
  borderRWidth = "0px",
  borderRColor,
  borderRStyle = "none",

    textColor,
    hTextColor,
  
  //Hover
  hoverBg,
  hoverBorder,
  hBorderRadius,
  //Fn
  onTap,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onTap}
      className="button"
      style={{
          "--textColor": textColor,
        "--hTextColor": hTextColor,
          
        "--hoverBorder": hoverBorder,
        "--hoverBg": hoverBg,
        "--hoverBorderRadius": hBorderRadius,
"--cursor":disabled?"not-allowed":"pointer",
        "--borderBottom": `${borderBWidth} ${borderBStyle} ${borderBColor}`,
        "--borderLeft": `${borderLWidth} ${borderLStyle} ${borderLColor}`,
        "--borderRight": `${borderRWidth} ${borderRStyle} ${borderRColor}`,
        "--borderTop": `${borderTWidth} ${borderTStyle} ${borderTColor}`,
        "--border": `${borderWidth} ${borderStyle} ${borderColor}`,
        "--boxShadow": `${shadowX} ${shadowY} ${shadowBlur} ${shadowColor}`,
        "--borderRadius":
          borderRadius ??
          `${borderRadiusTL} ${borderRadiusTR} ${borderRadiusBR} ${borderRadiusBL}`,
        "--margin": marginAll,
        "--marginBottom": marginBottom,
        "--marginTop": marginTop,
        "--marginLeft": marginLeft,
        "--marginRight": marginRight,
        "--padding": paddingAll,
        "--paddingBottom": paddingBottom,
        "--paddingTop": paddingTop,
        "--paddingLeft": paddingLeft,
        "--paddingRight": paddingRight,
        "--color": bg,

        "--width": width,
        "--height": height,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
