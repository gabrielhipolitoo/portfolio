import Section from "../common/Section/Section";
import { Title } from "../common/manTitle";

const About = () => {
  return (
    <Section>
      <Title.context>
        <Title.main text="sobre" />
        <Title.span text="mim" />
      </Title.context>

      <section className="section-about">
        <article className="about-me">
          <div className="my-photo">
            <div></div>
          </div>
          <p>
            Sou um desenvolvedor front-end apaixonado por tecnologia e inovação,
            com experiência em criar soluções digitais eficientes, escaláveis e
            focadas na melhor experiência do usuário. Especialista em React,
            <span>#TypeScript</span> , <span>#Redux Toolkit</span> e{" "}
            <span>#React Query</span> , tenho habilidade em desenvolver
            interfaces modernas e organizadas, seguindo padrões como a
            arquitetura <span>Atomic Design</span>
          </p>
        </article>
      </section>
    </Section>
  );
};

export default About;
