

How to run:
1. Use `npm run start:dashboard` to start the dashboard application
2. Open http://localhost:4200/ to review the dashboard and links to the remote applications
3. Click on Audit or Investor to review the remote application

Audit and Investor apps might be reviewed on http://localhost:4201/ and http://localhost:4202/ accordingly

Explanation of the app:

High-Level Concept
1. Module Federation + Nx Monorepo are used to split one large application into multiple independently deployable micro frontends.
2. There is one host application (dashboard) and two remote applications (audit and investor). Each contains tools/features used by specific user groups.
3. All three apps are built and deployed independently, but at runtime the host dynamically loads the remote apps.

Build Strategy

Each app is a separate build target in Nx:

| Project   | Build Command                                     | Output                |
|-----------|---------------------------------------------------|-----------------------|
| dashboard | `nx build dashboard --configuration=production`   | `dist/apps/dashboard` |
| audit     | `nx build audit --configuration=production`       | `dist/apps/audit`     |
| investor  | `nx build investor --configuration=production   ` | `dist/apps/investor`  |


Deployment Strategy

Host Deployment
- Deployed to a central domain (e.g., `https://app.company.com/`)
- Knows where to load remotes from using remoteEntry.js URLs. Example (`apps/dashboard/webpack.prod.config.ts`)

Remote (audit) Deployment
- Built independently
- Outputs a remoteEntry.js bundle (and chunks).
- Deployed to a remote domain (e.g., `https://audit.company.com/`).
- The host app does not need to be rebuilt if only audit changes

Same for `investor`.
