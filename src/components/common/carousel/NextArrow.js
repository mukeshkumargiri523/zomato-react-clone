import React from "react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    />
  );
}

export default NextArrow;
