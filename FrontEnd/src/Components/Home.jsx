import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <section className="relative m-auto h-[100vh] w-full bg-bgHeroMobile md:bg-bgHero bg-cover bg-no-repeat   flex justify-center ">
        <div className="absolute top-[10rem] sm:top-[13rem]  px-4  flex justify-around ">
          <div className="text-[5rem] max-sm:text-[3.23rem]   ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-semibold font-NotoSans sm:flex gap-4 block">
              WE ARE
              <span className=" font-OpenSans ">
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(Typewriter) => {
                    Typewriter.typeString("CHES")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Chemical Engineering society")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("AIChE SVNIT Student Chapter")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("The Future")
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
