import {
  NavBar,
  Acievement,
  About,
  Team,
  Contact,
  Home,
  Event,
  Footer,
} from "./Components";

function App() {
  return (
    <>
      <div className="text-text bg-background">
        <NavBar />
        <Home />
        <About />
        <Event />
        <Acievement />
        <Team />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
