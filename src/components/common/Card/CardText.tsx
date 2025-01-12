import { FC, HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  text: string;
  id?: string;
}
const CardText: FC<Props> = ({ text, id = "cardText" }) => {
  return <p id={id}>{text}</p>;
};

export default CardText;
