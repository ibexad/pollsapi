import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import { Container, Header } from "../components/shared";
import QuestionDetail from "../components/questionDetail";
import Loader from "../components/loader";
import ErrorText from "../components/errorText";

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

const QuestionDetailPage = ({ match }) => {
  const {
    params: { questionId }
  } = match;
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://polls.apiblueprint.org/questions`;
    const fetchQuestion = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${questionId}`);
        setQuestion(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchQuestion();
  }, [questionId]);

  return (
    <Fragment>
      <Header>
        <HeaderContainer>
          <LogoText>PollsApi</LogoText>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          loading question detail Id <strong>{questionId}</strong>
        </Loader>
        {error && (
          <ErrorText>Some error occurred, while fetching API</ErrorText>
        )}
        {question && <QuestionDetail question={question} />}
        <br />
        <Link to={`/`} className="btn btn-secondary">
          Go back
        </Link>
      </Container>
    </Fragment>
  );
};

export default QuestionDetailPage;
