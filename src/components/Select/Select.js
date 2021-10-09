import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

// TODO: dynamic width on select, icon isn't clickable
// part way there but not all the way
// I tried making native select hidden but then it wasn't clickable,
// looking foward to Josh's solution

// const SelectElement = styled.select`
//   appearance: none;
//   border: none;
//   border-radius: 8px;
//   background-color: ${COLORS.gray50};
//   color: currentColor;
//   font-family: "Roboto", sans-serif;
//   font-weight: normal;
//   font-size: ${16 / 16 + "rem"};
//   line-height: ${19 / 16 + "rem"};
//   padding: 12px 24px 12px 16px;
//   width: auto;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   width: fit-content;
//   color: ${COLORS.gray700};

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 14px;
//   right: 10px;
// `;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  // return (
  //   <Wrapper>
  //     <SelectElement value={value} onChange={onChange}>
  //       {children}
  //     </SelectElement>
  //     <IconWrapper>
  //       <Icon id="chevron-down" size={14} strokeWidth={3} />
  //     </IconWrapper>
  //   </Wrapper>
  // );

  // from Josh's video

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: ${16 / 16 + "rem"};
  line-height: ${19 / 16 + "rem"};
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--size);
  width: var(--size);
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
