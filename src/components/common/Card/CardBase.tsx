import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

const CardBase: FC<Props> = ({ children, id = "cardBase", ...rest }) => {
  return (
    <section {...rest} id={id}>
      {children}
    </section>
  );
};

export default CardBase;
