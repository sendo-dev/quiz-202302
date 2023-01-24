import { useContext } from 'react';

import { QuizTitle } from "../atoms/title/QuizTitle";
import { Question } from "../organisms/Question";
import { QuizButtons } from "../organisms/QuizButtons";
import { Contexts } from '../../App';

export const QuizTemplate = (props) => {

  const { title, questionList } = props;
  const { questionIndex } = useContext(Contexts);

  return (
    <>
      <div className="container">
        <QuizTitle category={title} numerator={questionIndex+1} denominator={questionList.length} />
        <Question question={questionList[questionIndex]} />
        <QuizButtons answer={questionList[questionIndex].answer} denominator={questionList.length} />
      </div>
    </>
  );
};
