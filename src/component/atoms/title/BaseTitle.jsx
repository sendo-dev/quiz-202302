import styled from "styled-components";

export const BaseTitle = (props) => {

  const { children } = props;
  
  return (
    <>
      <STitle>{children}</STitle>
    </>
  );
};

const STitle = styled.div`
  margin: 1rem 0;
  font-size: 2.4rem;
  font-weight: 500;
`;
