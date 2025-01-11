import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

const CardHeader: FC<Props> = ({ children, id = "cardHeader", ...rest }) => {
  return (
    <header id={id} {...rest}>
      {children}
    </header>
  );
};

export default CardHeader;
