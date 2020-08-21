/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";

const Loader = ({ loading, children }) => {
  return (
    <Fragment>
      {loading && (
        <div
          css={css`
            color: green;
            text-align: center;
            padding: 20px 0;
          `}
        >
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
