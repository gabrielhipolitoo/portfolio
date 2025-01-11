import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ContentTitle: FC<Props> = ({ children }) => {
  return <div id="content_title">{children}</div>;
};

export default ContentTitle;
