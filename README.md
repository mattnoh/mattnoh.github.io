# mattnoh.github.io

Personal academic site. Next.js static export, deployed as plain HTML.

## Where things live

| Path | Job |
|---|---|
| `lib/profile.ts` | **All content.** Publications, research, education. Edit this, not the pages. |
| `app/page.tsx` | the `/` page (About) |
| `app/research/page.tsx` | the `/research` page |
| `app/publications/page.tsx` | the `/publications` page |
| `app/cv/page.tsx` | the `/cv` page — embeds the PDF |
| `app/layout.tsx` | masthead, sidebar, footer — shared by every page |
| `app/globals.css` | all styling |
| `components/nav.tsx` | the tab bar (needs to be a client component to know the active tab) |
| `../CV/cv.tex` | LaTeX source for the CV — lives in its own folder beside this repo, not inside it. |
| `public/` | files served as-is: photo, the built CV PDF |
| `out/` | generated site. This is what gets deployed. |

One folder per page under `app/` is a Next.js requirement — the folder name
*is* the URL. `app/research/page.tsx` becomes `/research`.

## Commands

```bash
pnpm dev       # local preview at http://localhost:3000
pnpm cv        # rebuild ../CV/cv.tex -> public/Sungjin_Noh_CV.pdf
pnpm deploy    # rebuild CV, then export the site to out/
```

`pnpm cv` needs pdflatex with `lmodern` and `kotex`. It shells out to
`../CV/build.sh`, which compiles the CV and copies the PDF into `public/`.
You can also just run `bash ../CV/build.sh` directly.

## Deploying

GitHub Pages serves static files — it does not run Next.js. `pnpm deploy`
flattens everything into `out/`:

```
out/index.html          ->  mattnoh.github.io/
out/research.html       ->  mattnoh.github.io/research
out/publications.html   ->  mattnoh.github.io/publications
out/cv.html             ->  mattnoh.github.io/cv
out/Sungjin_Noh_CV.pdf  ->  mattnoh.github.io/Sungjin_Noh_CV.pdf
```

Those files are the website. Nothing else in this repo is public.
Not wired up to GitHub yet.
