# Operating Readiness Checklist

- The root `Testing` repo is identified as `factory-backup` exactly once.
- Child project repos are represented separately from the root backup repo.
- Alias and junction paths resolve to canonical repo ids.
- Folder-to-repo index entries resolve to canonical repo ids.
- Project repos without remotes are marked as no-push until configured.
- Folder-scoped projects with non-root remotes are blocked from direct root push and have a defined subtree strategy.
- The policy file blocks workspace-root fallback when a child repo match exists.
- Factory backup flow and project flow are documented separately.
- Unknown or newly created repos are treated as blocked until registered.
- Remaining remote or branch uncertainties are documented explicitly.
