import { profile } from "@/lib/profile";

const pages = [1, 2];

export default function CV() {
  return (
    <>
      <div className="cvhead">
        <h1 className="ph">CV</h1>
        <a className="dl" href={profile.cvPath} download>
          Download PDF
        </a>
      </div>

      {/* Desktop gets the real PDF. */}
      <object
        className="cvframe"
        data={`${profile.cvPath}#view=FitH&toolbar=0`}
        type="application/pdf"
      >
        <p className="lede">
          Your browser cannot display the embedded PDF.{" "}
          <a href={profile.cvPath} target="_blank" rel="noopener noreferrer">
            Open it in a new tab
          </a>
          .
        </p>
      </object>

      {/* Phones have no inline PDF viewer, so they get the rendered pages. */}
      <div className="cvpages">
        {pages.map((n) => (
          <img
            key={n}
            src={`/media/cv/page${n}.png`}
            alt={`Curriculum vitae, page ${n}`}
            loading={n === 1 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </>
  );
}
