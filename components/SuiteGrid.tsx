import type { DepartmentSuite } from "@/src/catalog";

type SuiteGridProps = {
  suites: DepartmentSuite[];
};

export function SuiteGrid({ suites }: SuiteGridProps) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Department suites</p>
          <h2>Packaged for shared functions, not generic prompts</h2>
        </div>
        <p>
          Each suite combines repeatable workflows, governance touchpoints, and adoption guidance for
          operational leaders.
        </p>
      </div>
      <div className="cardGrid">
        {suites.map((suite) => (
          <article key={suite.name} className="panel card">
            <h3>{suite.name}</h3>
            <p>{suite.focus}</p>
            <ul>
              {suite.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="cardFooter">
              <span>{suite.outcome}</span>
              <small>{suite.adoption}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
