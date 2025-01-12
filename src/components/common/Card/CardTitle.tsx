import { FC, HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  text: string;
}

const CardTitle: FC<Props> = ({ text, ...rest }) => {
  return <h2 {...rest}>{text}</h2>;
};

export default CardTitle;
