import About from "../../components/About";
import Landing from "../../components/Landing";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Services from "../../components/Services";
import Technologies from "../../components/Technologies";

const HomePage = () => {
  return (
    <>
      <Section maxWidth="1200px" background="white">
        <NavBar />
      </Section>
      <Section maxWidth="1200px" background="gray.50">
        <Landing />
      </Section>
      <Section maxWidth="1200px" background="green.100">
        <Services />
      </Section>
      <Section maxWidth="1200px" background="gray.50">
        <Technologies />
      </Section>
      <Section maxWidth="1200px" background="green.100">
        <About />
      </Section>
    </>
  );
};

export default HomePage;
