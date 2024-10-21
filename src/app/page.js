import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import ContactUs from "@/components/ContactUs/ContactUs";
import Education from "@/components/Education/Education";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";



export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Project></Project>
      <ContactUs></ContactUs>
    </main>
  );
}
