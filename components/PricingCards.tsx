import type { SubscriptionTier } from "@/src/catalog";

type PricingCardsProps = {
  tiers: SubscriptionTier[];
};

export function PricingCards({ tiers }: PricingCardsProps) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Subscription packaging</p>
          <h2>Simple packaging for pilots, expansion, and enterprise standardization</h2>
        </div>
        <p>
          Credits stay visible, while bundled services explain what enterprises actually buy beyond raw AI
          usage.
        </p>
      </div>
      <div className="pricingGrid">
        {tiers.map((tier) => (
          <article key={tier.name} className="panel pricingCard">
            <div className="pricingHeader">
              <h3>{tier.name}</h3>
              <span>{tier.priceBand}</span>
            </div>
            <p>{tier.audience}</p>
            <strong>{tier.credits}</strong>
            <ul>
              {tier.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
