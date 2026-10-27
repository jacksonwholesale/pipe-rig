// Builds samples/<instrument>.json from the FluidR3 GM soundfont renders hosted by gleitz/midi-js-soundfonts.
// FluidR3 GM is released under Creative Commons Attribution 3.0 (credit: Frank Wen; MIDI.js renders by gleitz).
// Each file keeps every third semitone across the range the rig uses; the player pitch-shifts the notes between.
//
//   node tools/build-samples.mjs
import { writeFile, mkdir } from 'node:fs/promises';

const BASE = 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/';
const STEP = 3;
// soundfont instrument -> [lowest, highest] MIDI note the rig plays on it
const SETS = {
  marimba: [48, 84],
  vibraphone: [53, 89],
  glockenspiel: [72, 103],
  orchestral_harp: [36, 84],
  acoustic_bass: [28, 47],
  french_horn: [48, 79],
  xylophone: [60, 96],
  kalimba: [48, 79],
  tubular_bells: [60, 84],
  church_organ: [36, 84],
  lead_2_sawtooth: [48, 84],
};
const NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const noteName = n => NAMES[n % 12] + (Math.floor(n / 12) - 1);

await mkdir(new URL('../samples/', import.meta.url), { recursive: true });
for (const [inst, [lo, hi]] of Object.entries(SETS)) {
  const src = await (await fetch(`${BASE}${inst}-mp3.js`)).text();
  // the file is a list of "NoteName": "data:audio/mp3;base64,..." pairs; read them as text, never run it
  const all = {};
  for (const m of src.matchAll(/"([A-G]b?-?\d)"\s*:\s*"(data:audio\/mp3;base64,[A-Za-z0-9+/=]+)"/g)) all[m[1]] = m[2];
  const out = {};
  const want = [];
  for (let n = lo; n <= hi; n += STEP) want.push(n);
  if (want[want.length - 1] !== hi) want.push(hi);
  for (const n of want) {
    const uri = all[noteName(n)];
    if (uri) out[n] = uri.slice(uri.indexOf(',') + 1);
  }
  const json = JSON.stringify(out);
  await writeFile(new URL(`../samples/${inst}.json`, import.meta.url), json);
  console.log(inst.padEnd(18), Object.keys(out).length, 'notes', (json.length / 1024).toFixed(0) + ' KB');
}
