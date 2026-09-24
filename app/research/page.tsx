import Link from "next/link";
import { research } from "@/lib/profile";

export default function Research() {
  return (
    <>
      <h1 className="ph">Research</h1>
      <p className="lede" style={{ marginBottom: 36 }}>
        I work on trajectory optimization and numerical optimal control for
        aerial vehicles: generating motion that respects the constraints a
        vehicle actually has to fly, fast enough to re-solve online. How a
        constraint is written often decides whether the problem is tractable at
        all, and the planner that comes out of it still has to keep a vehicle
        flying while a solve is in flight.
      </p>

      {research.map((t, i) => (
        <article className="thread" key={t.id}>
          {i > 0 && <hr className="sep" />}
          <div className="kind">{t.kind}</div>
          <h2>{t.title}</h2>
          <p className="tprob">{t.problem}</p>
          <p>{t.approach}</p>
          {t.scale && <p className="tscale">{t.scale}</p>}
          {(t.links.length > 0 || t.paper) && (
            <div className="tlinks">
              {t.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
              {t.paper && <Link href={`/publications#${t.paper}`}>Publication</Link>}
            </div>
          )}
        </article>
      ))}
    </>
  );
}
