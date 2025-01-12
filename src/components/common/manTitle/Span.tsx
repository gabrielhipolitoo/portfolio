import  { FC } from "react";

interface Props {
  text: string;
}

const SpanText: FC<Props> = ({ text }) => {
  return <span id="main_span">{text}</span>;
};

export default SpanText;
