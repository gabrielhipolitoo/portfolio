import { useState } from "react";
import { OpenMenu } from "../../assets/images/OpenMenu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeScroll, setActiveScroll] = useState(false);

  window.addEventListener("scroll", () => {
    const scrollLimit = document.documentElement.scrollTop > 50;
    setActiveScroll(scrollLimit);
  });

  return (
    <header
      className={`header ${activeScroll ? "active-scroll" : ""} ${
        activeMenu ? "active-mobile" : ""
      }`}
    >
      <span className="header-brand">{`<Gabriel/>`}</span>

      <div className="header-links">
        <OpenMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Tecnologias</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
