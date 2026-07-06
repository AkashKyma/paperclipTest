type AppendixItem = {
  label: string;
  url: string;
};

type AppendixLinksProps = {
  items: AppendixItem[];
};

export function AppendixLinks({ items }: AppendixLinksProps) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Complete URL appendix</p>
          <h2>Reference links for the catalog narrative</h2>
        </div>
        <p>Useful placeholders for publishing the final buyer-facing content set.</p>
      </div>
      <div className="panel appendixList">
        {items.map((item) => (
          <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
            <span>{item.label}</span>
            <code>{item.url}</code>
          </a>
        ))}
      </div>
    </section>
  );
}
