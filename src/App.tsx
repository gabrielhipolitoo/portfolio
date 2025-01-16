import { Analytics } from "@vercel/analytics/react";
import About from "./components/Elements/About";
import Budget from "./components/Elements/Budget";
import Experiential from "./components/Elements/Experiential";
import Footer from "./components/Elements/Footer";
import Header from "./components/Elements/Header";
import Initial from "./components/Elements/Initial";
import Methodology from "./components/Elements/Methodology";
import Services from "./components/Elements/Services";
import Skills from "./components/Elements/Skills";

function App() {
  return (
    <main className="portfolio">
      <Header />
      <Initial />
      <About />
      <Services />
      <Budget />
      <Methodology />
      <Skills />
      <Experiential />
      <Footer />
      <Analytics />
    </main>
  );
}

export default App;
