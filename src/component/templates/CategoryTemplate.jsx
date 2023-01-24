import { CategoryTitle } from '../data/CategoryTitle';
import { BaseTitle } from '../atoms/title/BaseTitle';
import { CategorySelect } from '../molecules/CategorySelect';
import { CategoryButton } from '../organisms/CategoryButton';

export const CategoryTemplate = () => {

  return (
    <>
      <div className="container">
        <BaseTitle>{CategoryTitle}</BaseTitle>
        <CategorySelect />
        <CategoryButton/>
      </div>
    </>
  );
};
