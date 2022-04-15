import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  id?: string;
}

const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      id={props.id}
      style={{ width: "100%" }}
    />
  );
};

export default Image;
