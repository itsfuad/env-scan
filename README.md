# env-scan

Inspect dotenv files for invalid names and duplicate assignments.

Small, dependency-light Node.js / CommonJS utility. Original implementation and history generated for a retrospective development exercise.

## Run

`node cli.js examples/input.txt --pretty`

`node cli.js -` consumes standard input. `--output report.json` saves structured results. Run `npm test` to check behavior.
