import {
  journalPublications,
  conferencePublications,
  inPreparation,
  type Publication,
} from "@/lib/profile";

function Ref({ pub }: { pub: Publication }) {
  return (
    <div className="ref">
      <div className="ryear">{pub.year}</div>
      <div className="rthumbcell">
        {pub.thumb && (
          <img className="rthumb" src={pub.thumb} alt="" loading="lazy" />
        )}
      </div>
      <div className="rbody">
      <div className="rt">{pub.title}</div>
      <div className="ra">{pub.authors}</div>
      <div className="rv">
        <em>{pub.venue}</em>
        {pub.detail ? `, ${pub.detail}` : ""}
      </div>
      {pub.status && <span className="tag">{pub.status}</span>}
      {pub.also && (
        <ul className="also">
          {pub.also.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      )}
      {pub.links && pub.links.length > 0 && (
        <div className="rlinks">
          {pub.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default function Publications() {
  const groups: [string, Publication[]][] = [
    ["Journal", journalPublications],
    ["Conference", conferencePublications],
    ["In preparation", inPreparation],
  ];
  return (
    <>
      <h1 className="ph">Publications</h1>
      {groups.map(([label, items]) =>
        items.length ? (
          <section key={label}>
            <h2 className="grp">{label}</h2>
            {items.map((p, i) => (
              <Ref key={i} pub={p} />
            ))}
          </section>
        ) : null
      )}
    </>
  );
}
