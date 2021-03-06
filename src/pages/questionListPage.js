import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  Container,
  Header,
  HeaderContainer,
  LogoText
} from "../components/shared";
import Loader from "../components/loader";
import QuestionsList from "../components/questionsList";

const QuestionListPage = () => {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://polls.apiblueprint.org/questions`;

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line no-use-before-define
  }, [fetchQuestions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchQuestions = async () => {
    setLoading(true);

    await axios
      .get(API_BASE_URL)
      .then(result => setQuestions(result.data))
      .catch(error => {
        console.log(error);
        return null;
      });

    setLoading(false);
  };

  return (
    <Fragment>
      <Header>
        <HeaderContainer>
          <LogoText>PollsApi</LogoText>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>fetching questions ...</Loader>
        <QuestionsList questions={questions} />
      </Container>
    </Fragment>
  );
};

export default QuestionListPage;
