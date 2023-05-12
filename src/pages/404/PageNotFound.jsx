import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">Sorry</span>
        <span className="smallText">You didn't search for anything</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
