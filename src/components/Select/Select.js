import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

// TODO: dynamic width on select, icon isn't clickable
// part way there but not all the way

const SelectElement = styled.select`
  appearance: none;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.gray50};
  color: currentColor;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: ${16 / 16 + "rem"};
  line-height: ${19 / 16 + "rem"};
  padding: 12px 24px 12px 16px;
  width: auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <IconWrapper>
        <Icon id="chevron-down" size={14} strokeWidth={3} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
