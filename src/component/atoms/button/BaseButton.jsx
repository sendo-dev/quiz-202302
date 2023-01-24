import styled from "styled-components";

export const BaseButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }
`;
