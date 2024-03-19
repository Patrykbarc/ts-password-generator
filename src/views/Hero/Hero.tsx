import { Generator } from "../../components/Generator/Generator";
import { HeroCard } from "../../components/HeroCard/HeroCard";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export function Hero() {
  return (
    <div className="flex min-h-dvh bg-[url('./assets/HeroSection.jpg')] bg-cover">
      <Wrapper className="flex-col gap-24">
        <div className="font-bold text-neutral-100">
          <h1 className="text-h1">Free Password Generator</h1>
          <h4 className="text-h3">Create safe and unique passwords</h4>
        </div>

        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <Generator className="grow" />
          <HeroCard className="grow">
            <h1 className="text-h2 font-bold leading-regular text-indigo-500">
              Keep your private data to yourself
            </h1>
            <p className="leading-lg">
              Embracing security shouldn't mean sacrificing simplicity. Drawing
              inspiration from the user-centric design principles of top
              password generators, our platform offers a seamless blend of
              security and simplicity. Join us as we redefine the way you
              protect your digital identity, with intuitive password generation
              tool and support every step of the way.
            </p>
          </HeroCard>
        </div>
      </Wrapper>
    </div>
  );
}
