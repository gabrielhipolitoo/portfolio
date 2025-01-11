import React from "react";
import Section from "../common/Section/Section";
import { Title } from "../common/manTitle";

const Methodology = () => {
  return (
    <Section>
      <Title.context>
        <Title.main text="Metodologia de" />
        <Title.span text="desenvolvimento" />
      </Title.context>
      <section className="section-methodology">
        <article className="section-stages-methodology">
          <article className="stage-methodology">
            <h3>Imersão</h3>
            <p>
              Vamos compreender o projeto proposto, coletando informações e
              analisando requisitos, considerando objetivos e público-alvo, e
              debatendo quais tecnologias oferecem o melhor custo-benefício para
              sua execução
            </p>
          </article>
          <article className="stage-methodology">
            <p>
              Nesta fase, a equipe concebe o design do projeto através de
              brainstorming e esboços, gerando ideias inovadoras e definindo
              funcionalidades e características-chave para estabelecer um plano
              sólido para a implementação
            </p>
            <h3>Ideação</h3>
          </article>
          <article className="stage-methodology">
            <h3>Implementação</h3>
            <p>
              Nesta fase, o projeto é concretizado, traduzindo ideias e design
              em código e funcionalidades. Cada parte é desenvolvida e refinada
              para atender aos requisitos, transformando a visão em um produto
              final.
            </p>
          </article>
        </article>
      </section>
    </Section>
  );
};

export default Methodology;
