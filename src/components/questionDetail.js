import React, { useState } from "react";
import { getQuestionId } from "../utils";
import CustomButton from "./customButton";
import Button from "./button";
import axios from "axios";
import { NotifyHandler } from "react-notification-component";

const API_BASE_URL = `https://polls.apiblueprint.org`;

export const CustomButton2 = ({ className, children, ...props }) => {
  return (
    <button className={`btn btn-${className}`} {...props}>
      {children}
    </button>
  );
};

const handleClickButton = async url => {
  await axios
    .post(`${API_BASE_URL}${url}`)
    .then(result => {
      NotifyHandler.add(
        "Title", // Notification title
        "Message", // Message
        {}, // Settings
        {}, // Styles
        () => {}, // Callback on click
        () => {} // Callback on time end
      );
      console.log(result.data.votes);
    })
    .catch(error => {
      console.log(error);
    });
};

const QuestionDetail = ({ question }) => {
  const [color, setColors] = useState("light");

  return (
    <section>
      <div>
        <h4> {question.question}</h4>
        <div className="container">
          {question.choices.map(choice => (
            <div className="row">
              <div className="col-md-3">{choice.choice}</div>
              <div className="col-md-3">{choice.votes}</div>
              <div className="col-md-3">
                {/* <Button className={`btn btn-${color}`} title="vvvv" url={choice.url}/>   */}
                <button
                  className={`btn btn-${color}`}
                  onClick={() => handleClickButton(choice.url)}
                >
                  Vote
                </button>
                {/* <CustomButton2 className="primary" children="Vote!" onClick={() => handleClickButton(choice.url)}/>                   */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionDetail;
