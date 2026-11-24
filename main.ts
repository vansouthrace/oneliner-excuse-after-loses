import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Technically I didn't lose. The winning entry was funnier, which I have logged as a bug in the universe, and I am filing a formal complaint with myself.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
