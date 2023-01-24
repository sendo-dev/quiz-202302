import { BaseTitle } from "./BaseTitle";

export const QuizTitle = (props) => {

  const { category, numerator, denominator } = props;
  
  return (
    <>
      <BaseTitle>{category} ({numerator}/{denominator})</BaseTitle>
    </>
  );
};
