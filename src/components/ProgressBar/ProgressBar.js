/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: var(--padding);
`;

const SIZES = {
  wrapper: {
    small: {
      "--padding": 0,
    },
    medium: {
      "--padding": 0,
    },
    large: {
      "--padding": 4 + "px",
    },
  },
  progress: {
    small: {
      "--height": 8 + "px",
    },
    medium: {
      "--height": 12 + "px",
    },
    large: {
      "--height": 16 + "px",
    },
  },
};

const Progress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${(props) =>
    props.value > 99 ? "4px 4px 4px 4px" : "4px 0px 0px 4px"};
  height: var(--height);
  width: ${(props) => props.value + "%"};
  max-width: 100%;
`;

const ProgressBar = ({ value, size }) => {
  const wrapperStyles = SIZES.wrapper[size];
  const progressStyles = SIZES.progress[size];

  return (
    <Wrapper style={wrapperStyles} size={size}>
      <Progress
        value={value}
        size={size}
        style={progressStyles}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <VisuallyHidden>{value}</VisuallyHidden>
      </Progress>
    </Wrapper>
  );
};

export default ProgressBar;
