import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

const Section: FC<Props> = ({ children, id = "sectionItem" }) => {
  return <section id={id}>{children}</section>;
};

export default Section;
