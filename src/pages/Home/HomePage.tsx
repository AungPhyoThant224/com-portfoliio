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
  return (
    <>
      <Section maxWidth="1200px" background="white" as={"nav"}>
        <NavBar />
      </Section>
      <Section maxWidth="1200px" background="gray.50" as={"section"}>
        <Landing />
      </Section>
      <Section maxWidth="1200px" background="green.100" as={"section"}>
        <Services />
      </Section>
      <Section maxWidth="1200px" background="gray.50" as={"section"}>
        <Technologies />
      </Section>
      <Section maxWidth="1200px" background="green.100" as={"section"}>
        <About />
      </Section>
      <Section maxWidth="1200px" background="gray.50" as={"section"}>
        <Team />
      </Section>
      <Section maxWidth="1200px" background="green.100" as={"section"}>
        <Contact />
      </Section>
      <Section maxWidth="1200px" background="gray.50" as={"footer"}>
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
