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

      <Card.content>
        {list.map(
          ({ description, duration, slug, title, type, image, icon, tags }) => (
            <Card.base>
              <Card.content>
                <Card.header>
                  <Card.title text={title} />
                  <Card.text text={slug} />
                </Card.header>
                <Card.text text={type + duration} />
                <Card.text text={description} />

                <div id="baseTags">
                  {tags.map((item) => (
                    <Card.text id="tagsExperiential" text={item} />
                  ))}
                </div>
              </Card.content>
              {image && <Card.cover urlImage={image} />}
              {icon && <Card.icon element={icon} />}
            </Card.base>
          )
        )}
      </Card.content>
    </Section>
  );
};

export default Experiential;
