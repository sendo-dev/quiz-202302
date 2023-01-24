import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { Contexts } from '../../App';

export const QuizButtons = (props) => {

  const history = useHistory();
  const { answer, denominator } = props;
  const { questionIndex, setQuestionIndex, checkedValues, setCheckedValues, setCategoryId, isAnswered, setIsAnswered } = useContext(Contexts);

  // この関数箇所、もっとReactっぽく書けないものか、、、
  const judge = () => {
    if (answer.length !== checkedValues.length) return false;
    for (let i = 0; i < answer.length; ++i) {
      if (answer[i] !== checkedValues[i]) return false;
    }
    return true;
  }
  const checkAnswer = () => {
    if (judge()) {
      alert("正解！");
    } else {
      alert("不正解！");
    }
  };
  const refresh = () => {
    setCheckedValues([]);
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (const i of checkboxes) {
        i.checked = false;
    };
  };
  const onClickTurn = () => {
    if (window.confirm("カテゴリ選択画面に戻りますか？")) {
      refresh();
      setCategoryId(0);
      setQuestionIndex(0);
      setIsAnswered(false)
      history.push({ pathname: "/" });
    };
  };

  return (
    <>
      <div className="mt-3">
        {isAnswered || <SPrimaryButton onClick={() => {checkAnswer(); setIsAnswered(true);}}>回答</SPrimaryButton>}
        {isAnswered && questionIndex + 1 < denominator && <SPrimaryButton onClick={() => {refresh(); setQuestionIndex(questionIndex + 1); setIsAnswered(false);}}>次の問題へ</SPrimaryButton>}
        {isAnswered && questionIndex + 1 === denominator && <SecondaryButton onClick={() => onClickTurn()}>カテゴリ選択へ戻る</SecondaryButton>}
      </div>
    </>
  );
}

const SPrimaryButton = styled(PrimaryButton)`
  margin: 0 5px 0 0;
`;
