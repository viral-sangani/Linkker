import Header from "../components/Landing/Header";
import Hero from "../components/Landing/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-green-50">
        <Header />
        <Hero />
      </div>
    </>
  );
}
