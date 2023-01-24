import { useLocation } from 'react-router-dom';

import { CategoryList } from '../data/CategoryList';
import { QuestionList } from '../data/QuestionList';
import { QuizTemplate } from '../templates/QuizTemplate';

// API未実装のためデータファイルから取得
const categoryList = CategoryList;
const questionList = QuestionList;

export const QuizPage = () => {

  const { state } = useLocation();
  const selectedCategory = categoryList.find(obj => obj.id == state.categoryId);
  const targetQuestionList = questionList.filter(obj => obj.categoryId == state.categoryId);

  return (
    <>
      <QuizTemplate title={selectedCategory.sentence} questionList={targetQuestionList} />
    </>
  );
};
