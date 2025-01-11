import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }) => {
  return <section className="section-item">{children}</section>;
};

export default Section;
