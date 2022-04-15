import React from "react";
import styled from "styled-components";

interface GalleryImageProps {
  img?: string;
  onClick?: () => void;
}

const GalleryImage = (props: GalleryImageProps) => {
  return (
    <>
      <GalleryImgDiv
        style={{ backgroundImage: props.img }}
        onClick={props.onClick}
      ></GalleryImgDiv>
    </>
  );
};

const GalleryImgDiv = styled.div`
  height: 350px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 300ms ease-out;

  &:hover {
    opacity: 0.6;
    background-size: 103%;
  }
`;

export default GalleryImage;
