import React, { useState } from "react";
import styled from "styled-components";

interface SpacerProps {
  height?: string;
  heightSm?: string;
  heightMd?: string;
  heightLg?: string;
}

const Spacer = (props: SpacerProps) => {
  return (
    <SpacerDiv
      height={props.height}
      heightSm={props.heightSm}
      heightMd={props.heightMd}
      heightLg={props.heightLg}
    ></SpacerDiv>
  );
};

const SpacerDiv = styled.div<SpacerProps>`
  height: ${(props) => (props.height ? props.height : props.heightSm)};

  @media (min-width: 576px) {
    height: ${(props) => props.heightSm};
  }
  @media (min-width: 768px) {
    height: ${(props) => props.heightMd};
  }
  @media (min-width: 992px) {
    height: ${(props) => props.heightLg};
  }
`;

export default Spacer;
