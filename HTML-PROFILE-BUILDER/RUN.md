# RUN.md

Run all future implementation commands from `HTML-PROFILE-BUILDER/`, not from the workspace root.

Planned milestone-1 commands after implementation:

```bash
npm install
npm run verify
node scripts/form-sync.js --input tests/fixtures/sample-cafe-raw.json --output briefs/ready/brew-and-bean.json
node scripts/build.js --brief briefs/ready/brew-and-bean.json
code outputs/brew-and-bean/v1/copilot-handoff.md
node scripts/validate-output.js --brief outputs/brew-and-bean/v1/input-snapshot.json --html outputs/brew-and-bean/v1/profile.html
node scripts/approve-qa.js --result outputs/brew-and-bean/v1/build-result.json --by "QA Reviewer" --notes "Ready for delivery"
```

Optional later commands:

```bash
node scripts/qr-generate.js <url> outputs/sample-client/v1/sample-client-qr.png
node scripts/deploy-netlify.js --file outputs/sample-client/v1/profile.html
```

If a command depends on third-party credentials, it must fail with an exact missing-env message rather than continuing with a partial build.

Milestone 1 build generation is local and does not require any AI provider API key.

If you want a Copilot refinement pass, open `outputs/<clientId>/<revision>/copilot-handoff.md` in VS Code and run the Phase 3 local agent against the generated `profile.html`.

Agent order for this isolated root:
`Phase 1 System Builder` -> `Phase 2 Workflow Architect` -> `Phase 3 Builder Developer` -> `Phase 4 Validator`