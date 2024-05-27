import MainLayout from "../layout/MainLayout";
import About from "../components/section/SecAbout";
import SecHero from "../components/section/SecHero";

export default function Home() {
  return (
    <MainLayout>
        <SecHero />
        <About />
    </MainLayout>
  );
}
