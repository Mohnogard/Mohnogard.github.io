import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrackSection from "./components/TrackSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { tracks } from "./data/tracks";
import { usePageEffects } from "./hooks/usePageEffects";

export default function App() {
  usePageEffects();

  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        {tracks.map((t, i) => (
          <TrackSection key={t.id} track={t} tinted={i % 2 === 0} />
        ))}
        <About />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
