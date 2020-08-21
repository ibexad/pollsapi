import React from "react";
import { Link } from "react-router-dom";
import { getQuestionId, getDate } from "../utils";

const Question = ({ question }) => {
  return (
    <div className="col-md-3">
      <h4>{question.question}</h4>
      <div>{getDate(question.published_at)}</div>
      <div>choices: {question.choices.length}</div>
      <p>
        <Link
          to={`/questions/${getQuestionId(question.url)}`}
          className="btn btn-primary btn-sm"
        >
          Show details
        </Link>
      </p>
    </div>
  );
};

const QuestionsList = ({ questions }) => {
  return (
    <div className="row">
      {questions
        ? questions.map((item, index) => {
            return <Question question={item} key={index} />;
          })
        : null}
    </div>
  );
};

export default QuestionsList;
