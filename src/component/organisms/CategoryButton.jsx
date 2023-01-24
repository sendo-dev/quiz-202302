import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Contexts } from '../../App';

export const CategoryButton = () => {

  const { categoryId } = useContext(Contexts);
  const history = useHistory();
  const onClickStart = () => {
    if (categoryId === 0) {
      alert("カテゴリを選択してください！");
    } else {
      history.push({ pathname: "/quiz", state: { categoryId: categoryId } });
    }
  };

  return (
    <>
      <PrimaryButton className="mt-3" onClick={() => onClickStart()}>出題開始</PrimaryButton>
    </>
  );
}
