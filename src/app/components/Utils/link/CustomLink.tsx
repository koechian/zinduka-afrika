import React from "react";

interface LinkOptions {
  background?: string;
  foreground?: string;
}

const CustomLink = ({
  background = "#222222",
  foreground = "#c8f168",
}: LinkOptions) => {
  return (
    <div
      style={{
        backgroundColor: background,
        padding: "5%",
        borderRadius: "inherit",
        width: "20%",
        aspectRatio: "1/1",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={foreground}
        viewBox="0 0 256 256"
      >
        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
      </svg>
    </div>
  );
};
export default CustomLink;
