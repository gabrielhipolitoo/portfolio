import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section: FC<Props> = ({ children, id, className = "sectionItem" }) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;
