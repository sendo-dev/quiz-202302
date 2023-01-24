import styled from "styled-components";

import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {

  const { children, className, onClick } = props;

  return (
    <>
      <SButton onClick={onClick} className={className}>{children}</SButton>
    </>
  )
};

const SButton = styled(BaseButton)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;
