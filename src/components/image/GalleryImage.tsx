import React from "react";
import styled from "styled-components";

interface GalleryImageProps {
  img?: string;
}

const GalleryImage = (props: GalleryImageProps) => {
  return (
    <>
      <GalleryImgDiv style={{ backgroundImage: props.img }}></GalleryImgDiv>
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
    background-size: 110%;
  }
`;

export default GalleryImage;
