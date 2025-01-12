import { FC, HtmlHTMLAttributes} from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  urlImage: string | undefined;
  id?: string;
}

const CardCover: FC<Props> = ({ urlImage, id = "cardCover", ...rest }) => {
  return <img {...rest} id={id} src={urlImage} alt="foto" />;
};

export default CardCover;
