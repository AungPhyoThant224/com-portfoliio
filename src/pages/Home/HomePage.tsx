import { useEffect } from "react";
import Aos from "aos";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Landing from "../../components/Landing";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Technologies from "../../components/Technologies";
import Footer from "../../components/footer";

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <Section id="nav-bar" maxWidth="1200px" background="white" as={"nav"}>
        <NavBar />
      </Section>
      <Section
        id="landing"
        maxWidth="1200px"
        background="gray.50"
        as={"section"}
      >
        <Landing />
      </Section>
      <Section
        id="services"
        maxWidth="1200px"
        background="green.100"
        as={"section"}
      >
        <Services />
      </Section>
      <Section
        id="technologies"
        maxWidth="1200px"
        background="gray.50"
        as={"section"}
      >
        <Technologies />
      </Section>
      <Section
        id="about"
        maxWidth="1200px"
        background="green.100"
        as={"section"}
      >
        <About />
      </Section>
      <Section id="team" maxWidth="1200px" background="gray.50" as={"section"}>
        <Team />
      </Section>
      <Section
        id="contact"
        maxWidth="1200px"
        background="green.100"
        as={"section"}
      >
        <Contact />
      </Section>
      <Section id="footer" maxWidth="1200px" background="gray.50" as={"footer"}>
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
