import styled from "styled-components";

export const Code = (props) => {

  const { code } = props;

  // リロードしないとスタイルがあたらない..
  return (
    <>
      <SCode className="prettyprint">{code}</SCode>
    </>
  );
};

const SCode = styled.pre`
  margin: 1rem 0 0 0;
  border: none !important;
`;
