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
      <div className="text-text-100 bg-background-950">
        <div className="bg-herobg bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Home />
        </div>
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
