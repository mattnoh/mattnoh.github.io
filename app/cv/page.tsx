import { profile } from "@/lib/profile";

export default function CV() {
  return (
    <>
      <div className="cvhead">
        <h1 className="ph" style={{ margin: 0 }}>
          CV
        </h1>
        <a className="dl" href={profile.cvPath} download>
          Download PDF
        </a>
      </div>

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
    </>
  );
}
