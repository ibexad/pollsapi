import React from "react";

const QuestionDetail = ({ question }) => {
  return (
    <section>
      <div>
        <h4> {question.question}</h4>
        <div className="container">
          {question.choices.map(choice => (
            <div className="row">
              <div className="col-md-3">{choice.choice}</div>
              <div className="col-md-3">{choice.votes}</div>
              <div className="col-md-3">{choice.url}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionDetail;
