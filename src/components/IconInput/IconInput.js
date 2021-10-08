import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    icon: {
      small: 14,
      large: 18,
    },
    input: {
      small: {
        "--font-size": 14 + "px",

        "--padding": "0 0 0 20px",
        "--border-bottom-width": 1 + "px",
      },
      large: {
        "--font-size": 18 + "px",
        "--padding": "0 0 2px 30px",
        "--border-bottom-width": 2 + "px",
      },
    },
  };

  return (
    <ElementWrapper>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper>
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

// Hack to get icon to be same color on hover
const ElementWrapper = styled.div`
  color: ${COLORS.gray700};
  :hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  background-color: transparent;
  color: currentColor;
  font-weight: 700;
  padding: var(--padding);
  width: ${(props) => props.width + "px"};
  min-width: 100px;
  max-width: 300px;

  font-family: Roboto;
  font-size: var(--font-size);
  line-height: 21px;

  ::placholder {
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
  display: inline-block;
  margin-right: -18px;
  margin-bottom: -2px;
  color: currentColor;
`;

export default IconInput;
