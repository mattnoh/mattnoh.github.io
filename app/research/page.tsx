import Link from "next/link";
import { research } from "@/lib/profile";

export default function Research() {
  return (
    <>
      <h1 className="ph">Research</h1>
      <p className="lede" style={{ marginBottom: 36 }}>
        I work on numerical optimal control for quadrotors, on formulations
        that let a constraint bind only where it matters. Approach geometry and
        actuator limits are critical near touchdown and slack far from it, and
        an optimizer that enforces them over the whole horizon will fail to
        solve from most initial conditions.
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
              {t.paper && <Link href="/publications">Publication</Link>}
            </div>
          )}
        </article>
      ))}
    </>
  );
}
