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
      <div className="text-text">
        <NavBar />
        <Home />
        <About />
        <Acievement />
        <Team />
        <Event />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
