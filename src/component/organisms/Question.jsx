import { Sentence } from "../atoms/Sentence";
import { Choice } from "../molecules/Choice";
import { Code } from "../molecules/Code";

export const Question = (props) => {

  const { question } = props;
  
  return (
    <>
      <label className="form-label">問題文</label>
      <Sentence>
        {question.problemSentence}
        {question.code != null && <Code code={question.code} />}
      </Sentence>
      {question.choices.map((element, index) => (
        <Choice key={index} count={index+1} choice={element} />
      ))}
    </>
  );
};
