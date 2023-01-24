import { useContext } from 'react';

import { Contexts } from '../../App';
import { CategoryList } from '../data/CategoryList';

export const CategorySelect = () => {

  const { setCategoryId } = useContext(Contexts);

  return (
    <>
      <label className="form-label">カテゴリ</label>
      <select className="form-select" onChange={(event) => setCategoryId(event.target.value)}>
        <option value="0" defaultValue>未選択</option>
        {CategoryList.map((element, index) => (
          <option key={index} value={element.id}>{element.sentence}</option>
        ))}
      </select>
    </>
  );
};
