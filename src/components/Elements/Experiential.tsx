import React from "react";
import Section from "../common/Section/Section";
import { Title } from "../common/manTitle";
import listExperiential from "../Utils/listExperiential";
import { Card } from "../common/Card";

const Experiential = () => {
  const list = listExperiential();
  return (
    <Section>
      <Title.context>
        <Title.main text="Minhas" />
        <Title.span text="Experiências" />
      </Title.context>
      <Card.content id="experiential-group">
        {list.map(({ title, slug, description, type, duration, image }) => (
          <Card.content>
            <Card.content id="experiential-content">
              <Card.header>
                <h1 id="experiental-title">{title}</h1>
                <span id="experiential-slug">{slug}</span>
              </Card.header>
              <Card.text text={type + duration} />
              <Card.text text={description} />
            </Card.content>
            <Card.cover urlImage={image} />
          </Card.content>
        ))}
      </Card.content>
    </Section>
  );
};

export default Experiential;
