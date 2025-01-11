import { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  urlImage: HTMLElement;
  id?: string;
}

const CardCover: FC<Props> = ({ urlImage, id = "cardCover", ...rest }) => {
  return <img {...rest} id={id} src={urlImage} alt="foto" />;
};

export default CardCover;
