import React, { FC, HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  text: string;
}
const CardText: FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

export default CardText;
