import { Generator } from "../../components/Generator/Generator";
import { HeroCard } from "../../components/HeroCard/HeroCard";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export function Hero() {
  return (
    <div className="flex">
      <Wrapper>
        <Generator />
        <HeroCard>
          <h1>Keep your private data to yourself</h1>
          <p>
            Weak or stolen passwords are still a leading factor in data
            breaches. This fact is confirmed year by year with various reports.
            However, you can be an exception. To reduce the risk of your data
            being stolen, switch to reliable passwords and keep them safe.
            Sometimes it's all you need. Our strong password generator will help
            you and your business take your first step towards safer online
            accounts shielded by more robust passwords.
          </p>
        </HeroCard>
      </Wrapper>
    </div>
  );
}
