import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { QuizPage } from "./component/pages/QuizPage";
import { CategoryPage } from "./component/pages/CategoryPage";
import { Bootstrap } from "./component/utils/Bootstrap";

export const Contexts = createContext();

function App() {

  const [categoryId, setCategoryId] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [checkedValues, setCheckedValues] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const value = {
    categoryId,
    setCategoryId,
    questionIndex,
    setQuestionIndex,
    checkedValues,
    setCheckedValues,
    isAnswered,
    setIsAnswered
  };

  return (
    <>
      <Contexts.Provider value={value}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <CategoryPage categoryId={categoryId} setCategoryId={setCategoryId} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/quiz">
              <QuizPage />
            </Route>
          </Switch>
        </BrowserRouter>
        <Bootstrap />
      </Contexts.Provider>
    </>
  );
}

export default App;
