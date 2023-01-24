import { useContext } from 'react';
import styled from "styled-components";

import { Contexts } from '../../App';

export const Choice = (props) => {
  
  const { count, choice } = props;
  const { checkedValues, setCheckedValues } = useContext(Contexts);

  // この関数箇所、もっとReactっぽく書けないものか、、、
  const updateList = (event) => {
    if (event.target.checked) {
      checkedValues.push(count)
    } else {
      checkedValues.splice(checkedValues.indexOf(count), 1);
    }
    checkedValues.sort(function (a, b) {
      return a - b;
    });

    // 配列そのものは変更していないため再レンダリングされない
    setCheckedValues(checkedValues);
  };

  return (
    <>
      <div className="mt-3">
        <input id={count} className="form-check-input" type="checkbox" onChange={(event) => updateList(event)} />
        <SChoiceLabel htmlFor={count}>選択肢{count}</SChoiceLabel>
        <SChoiceState htmlFor={count}>{choice}</SChoiceState>
      </div>
    </>
  );
};

const SChoiceLabel = styled.label`
  margin: 0 0 0 5px;
  user-select: none;
`;

const SChoiceState = styled.label`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  white-space: pre-wrap;
  user-select: none;
`;
