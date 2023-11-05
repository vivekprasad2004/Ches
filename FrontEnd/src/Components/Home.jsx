import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <section className="relative m-auto h-[100vh] w-full bg-bgHero bg-cover bg-no-repeat   flex justify-center ">
        <div className="absolute top-[10rem] sm:top-[13rem]  px-4  flex justify-around ">
          <div className="text-6xl max-sm:text-[3.23rem]   ">
            <h1 className="text-primary font-semibold font-NotoSans sm:flex gap-4 block">
              We Are
              <span className="text-accent font-OpenSans ">
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(Typewriter) => {
                    Typewriter.typeString("Ches")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Ches2")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Ches3")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
