import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import { Container, Header } from "../components/shared";
import QuestionDetail from "../components/questionDetail";
import Loader from "../components/loader";
import { NotifyComponent } from "react-notification-component";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://polls.apiblueprint.org/questions`;
    const fetchQuestion = async () => {
      setLoading(true);

      await axios
        .get(`${API_BASE_URL}/${questionId}`)
        .then(result => setQuestion(result.data))
        .catch(error => {
          console.log(error);
        });
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
        <NotifyComponent />
        <Loader loading={loading}>
          loading question detail Id <strong>{questionId}</strong>
        </Loader>
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
