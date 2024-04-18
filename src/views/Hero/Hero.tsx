import { BackgroundImage } from "../../components/BackgroundImage/BackgroundImage";
import { Generator } from "../../components/Generator/Generator";
import { HeroCard } from "../../components/HeroCard/HeroCard";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export function Hero() {
  return (
    <div className="relative flex h-fit bg-center py-24">
      <BackgroundImage className="bg-fixed" backgroundFixed={true} />
      <Wrapper className="relative z-50 flex-col gap-10 sm:gap-20">
        <div>
          <h1 className="mb-3 text-5xl font-black text-neutral-100 md:text-8xl">
            Free Password Generator
          </h1>
          <h4 className="text-3xl font-light text-neutral-300 md:text-5xl">
            Create safe and unique passwords
          </h4>
        </div>

        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap">
            <Generator />
            <HeroCard>
              <h1 className="text-h2 font-bold leading-regular text-indigo-500">
                Keep your private data to yourself
              </h1>
              <p className="leading-lg">
                Embracing security shouldn't mean sacrificing simplicity.
                Drawing inspiration from the user-centric design principles of
                top password generators, our platform offers a seamless blend of
                security and simplicity. Join us as we redefine the way you
                protect your digital identity, with intuitive password
                generation tool and support every step of the way.
              </p>
            </HeroCard>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
