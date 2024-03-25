import { Accordion } from "../../components/Accordion/Accordion";
import { Card } from "../../components/Card/Card";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { cardsData } from "../../constants/cardsData";
import { DefaultProps } from "../../utils/interfaces";

export function Faq({ className }: DefaultProps) {
  return (
    <Wrapper className={className}>
      <section>
        <div className="mb-12">
          <h2 className="text-h2 font-bold">What makes a password strong?</h2>
          <h5 className="text-h5 font-semibold">
            Phishing, stolen credentials, and human error challenge your
            password security. Take action and improve your defense against
            them.
          </h5>
        </div>
        <div className="flex gap-4">
          {cardsData.map((card) => {
            return (
              <Card
                key={card.title + card.description}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>

        <Accordion />
      </section>
    </Wrapper>
  );
}
