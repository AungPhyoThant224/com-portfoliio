import Landing from "../../components/Landing";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Services from "../../components/Services";

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
    </>
  );
};

export default HomePage;
