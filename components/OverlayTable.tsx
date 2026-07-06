import type { IndustryOverlay } from "@/src/catalog";

type OverlayTableProps = {
  overlays: IndustryOverlay[];
};

export function OverlayTable({ overlays }: OverlayTableProps) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Industry overlays</p>
          <h2>Compliance and market context layered onto each suite</h2>
        </div>
        <p>
          Overlays tailor the base platform to regulated or domain-specific teams without fragmenting the
          core catalog.
        </p>
      </div>
      <div className="panel tableWrap">
        <table>
          <thead>
            <tr>
              <th>Overlay</th>
              <th>Description</th>
              <th>Ideal fit</th>
              <th>Signature modules</th>
            </tr>
          </thead>
          <tbody>
            {overlays.map((overlay) => (
              <tr key={overlay.name}>
                <td>{overlay.name}</td>
                <td>{overlay.description}</td>
                <td>{overlay.fit.join(" · ")}</td>
                <td>{overlay.signatureModules.join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
