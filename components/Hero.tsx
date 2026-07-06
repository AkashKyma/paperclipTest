type HeroProps = {
  totalSuites: number;
  totalOverlays: number;
  totalTiers: number;
};

export function Hero({ totalSuites, totalOverlays, totalTiers }: HeroProps) {
  return (
    <section className="hero panel">
      <div>
        <p className="eyebrow">Expanded v2 · Research snapshot: May 25, 2026</p>
        <h1>Cloude Skill platform</h1>
        <p className="lead">
          Enterprise Claude Skills Catalog for buyers who need department suites, industry overlays,
          subscription packaging, and an understandable credit model in one place.
        </p>
      </div>
      <div className="heroStats">
        <div>
          <strong>{totalSuites}</strong>
          <span>Department suites</span>
        </div>
        <div>
          <strong>{totalOverlays}</strong>
          <span>Industry overlays</span>
        </div>
        <div>
          <strong>{totalTiers}</strong>
          <span>Subscription tiers</span>
        </div>
      </div>
    </section>
  );
}
