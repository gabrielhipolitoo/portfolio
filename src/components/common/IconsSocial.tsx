import { FC } from "react";
import IconGithub from "../../assets/images/IconGithub";
import IconInsta from "../../assets/images/IconInsta";
import IconLinkedin from "../../assets/images/IconLinkedin";
import IconWhats from "../../assets/images/IconWhats";

interface Props {
  id?: string;
}

const IconsSocial: FC<Props> = ({ id = "iconSocial" }) => {
  return (
    <div id={id}>
      <a href="https://github.com/gabrielhipolitoo">{<IconGithub />}</a>
      <a href="">{<IconInsta />}</a>
      <a href="">{<IconLinkedin />}</a>
      <a href="">{<IconWhats />}</a>
      <a href="https://drive.usercontent.google.com/download?id=1jSsqEpDjpV2y_g_avHYEIU-BRjfjfMO9&export=download&authuser=1&confirm=t&uuid=d70f8d23-4114-433d-8fff-f23e76f4c252&at=AIrpjvOGewPIwego_gMnsAZ4OJHh:1736802466334">
        Meu cv
      </a>
    </div>
  );
};

export default IconsSocial;
