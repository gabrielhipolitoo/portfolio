import  { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

const CardContent: FC<Props> = ({ children, id = "cardContent" }) => {
  return <section id={id}>{children}</section>;
};

export default CardContent;
