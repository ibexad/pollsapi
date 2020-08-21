import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { Container, Header } from "../components/shared";
import Loader from "../components/loader";
import QuestionsList from "../components/questionsList";

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 878px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.h3`
  margin: 0;
`;

const QuestionListPage = () => {
  const [questions, setQuestions] = useState("");
  //const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://polls.apiblueprint.org/questions`;

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line no-use-before-define
  }, [fetchQuestions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchQuestions = async () => {
    setLoading(true);
    //setError(false);
    try {
      const result = await axios.get(API_BASE_URL);
      setQuestions(result.data);
    } catch (error) {
      //setError(true);
    }
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
