import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";
import { ThemeProvider } from "emotion-theming";
import theme from "./components/theme";
import QuestionListPage from "./pages/questionListPage.js";
import QuestionDetailPage from "./pages/questionDetailPage";
import "./App.css";

const NoMatchRoute = () => <div>404 Not Found</div>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Router>
        <Switch>
          <Route path="/" exact component={QuestionListPage} />
          <Route
            path="/questions/:questionId"
            exact
            component={QuestionDetailPage}
          />
          <Route component={NoMatchRoute} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
