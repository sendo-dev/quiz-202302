import styled from "styled-components";

import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {

  const { children, onClick } = props;

  return (
    <>
      <SButton onClick={onClick}>{children}</SButton>
    </>
  )
};

const SButton = styled(BaseButton)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;

  &:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }
`;
