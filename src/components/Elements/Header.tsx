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
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#skills">Tecnologias</a>
          </li>
          <li>
            <a href="#experiences">Experiências</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
