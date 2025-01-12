import { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  element: JSX.Element | undefined;
  id?: string;
}

const CardIcon: FC<Props> = ({ element, id = "cardCover", ...rest }) => {
  return (
    <section {...rest} id={id}>
      {element}
    </section>
  );
};

export default CardIcon;
