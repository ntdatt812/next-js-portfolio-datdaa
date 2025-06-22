import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Project from "./components/Project";

export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
      <Blog />
      <Newsletter />
    </main>
  );
}
