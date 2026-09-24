import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import { profile } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: "SungJin Noh",
  description:
    "SungJin Noh — M.S. student, Computational Robotics and Autonomy Lab, Inha University. Trajectory optimization and numerical optimal control.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="masthead">
          <div className="inner">
            <Link className="me" href="/">
              {profile.name}
            </Link>
            <Nav />
          </div>
        </header>

        <div className="shell">
          <aside className="author">
            <img className="avatar" src="/profile.jpg" alt={profile.name} />
            <div className="nm">{profile.name}</div>
            <p className="role">
              M.S. student, Computational Robotics and Autonomy Lab,
              Inha University
            </p>
            <ul>
              <li>
                <span className="ic">◎</span>
                <span>Incheon, Republic of Korea</span>
              </li>
              <li>
                <span className="ic">✉</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="ic">◈</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/mattnoh
                </a>
              </li>
              <li>
                <span className="ic">in</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </aside>

          <main className="content">{children}</main>
        </div>

        <footer className="foot">
          <div className="inner">© 2026 {profile.name}</div>
        </footer>
      </body>
    </html>
  );
}
