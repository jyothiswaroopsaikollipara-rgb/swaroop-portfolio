# Swaroop — Premium Developer Portfolio

A responsive Next.js + TypeScript portfolio with a dark editorial engineering aesthetic, animated sections, project case-study modals, a 60-second Recruiter Mode, interactive skill clusters, and a command-based portfolio terminal.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing — content checklist

The site intentionally avoids invented achievements, technologies, links, and metrics. Replace the following placeholders:

1. `data/portfolio.ts`
   - `email`, `github`, and `linkedin`
   - Internship organizations, providers, exact responsibilities, technology stacks, project names, and verified outcomes
   - Each project’s actual implementation, individual contribution, challenges, stack, and results
   - Rotaract role, club, dates, and verified activities
   - Remove any skills you have not used or explored.
2. Add your actual PDF resume at `public/Swaroop-Resume.pdf`.
3. Add verified repository/demo URLs to each project’s `repo` and `live` fields.
4. Replace `metadataBase` in `app/layout.tsx` with your deployed domain.
5. For the DTCC project, publish only information you are permitted to disclose; do not include confidential company or financial data.

## Deploy

Push the project to GitHub, import it into Vercel, and deploy with the default Next.js settings.

## Notes

- The architecture diagrams are explicitly marked conceptual until implementation details are confirmed.
- No fabricated GitHub activity, user counts, performance metrics, awards, or certifications are shown.
- The resume download CTA requires the PDF to be added to `public/`.
