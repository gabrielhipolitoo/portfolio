import Section from "../common/Section/Section";
import { Title } from "../common/manTitle";

const Skills = () => {
  return (
    <Section>
      <Title.context>
        <Title.main text="Tecnologias " />
        <Title.span text="utilizadas" />
      </Title.context>
      <section className="section-skills">
        <section className="skills">
          <div>
            <span>HTML5</span>
          </div>
          <div>
            <span>CSS</span>
          </div>
          <div>
            <span>SASS</span>
          </div>
          <div>
            <span>JAVASCRIPT</span>
          </div>
          <div>
            <span>REACT</span>
          </div>
          <div>
            <span>TYPESCRIPT</span>
          </div>
          <div>
            <span>FIREBASE</span>
          </div>
          <div>
            <span>FGIMA</span>
          </div>
        </section>
      </section>
    </Section>
  );
};

export default Skills;
