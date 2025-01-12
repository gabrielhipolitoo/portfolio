import  { FC } from "react";

interface Props {
  text: string;
}

const TitleText: FC<Props> = ({ text }) => {
  return <h1 id="main_title">{text}</h1>;
};

export default TitleText;
