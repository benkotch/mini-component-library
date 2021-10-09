import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    icon: {
      small: 16,
      large: 24,
    },
    input: {
      small: {
        "--font-size": 14 / 16 + "rem",

        "--padding": "0 0 0 20px",
        "--border-bottom-width": 1 + "rem",
        "--height": 24 + "px",
      },
      large: {
        "--font-size": 18 / 16 + "rem",
        "--padding": "0 0 0 30px",
        "--border-bottom-width": 2 + "px",
        "--height": 36 + "px",
      },
    },
  };

  return (
    <ElementWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": SIZES.icon[size] + "px",
        }}
      >
        <Icon id={icon} size={SIZES.icon[size]} strokeWidth={2} />
      </IconWrapper>
      <InputWrapper
        type="text"
        placeholder={placeholder}
        width={width}
        style={SIZES.input[size]}
      />
    </ElementWrapper>
  );
};

const ElementWrapper = styled.label`
  position: relative;
  width: max-content;

  color: ${COLORS.gray700};
  :hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  border-bottom-width: var(--border-bottom-width);
  background-color: transparent;
  color: inherit;
  font-weight: 700;
  padding: var(--padding);
  height: var(--height);
  width: ${(props) => props.width + "px"};
  min-width: 100px;
  max-width: 300px;
  outline-offset: 2px;
  font-family: Roboto;
  font-size: var(--font-size);
  line-height: 21px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    /* Chrome/Opera/Safari */
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  /* display: inline-block;
  margin-right: -18px;
  margin-bottom: -2px;
  color: currentColor; */
  position: absolute;

  height: var(--size);
  width: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

export default IconInput;
