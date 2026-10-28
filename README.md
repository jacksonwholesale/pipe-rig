# Pipe Rig

MIDI-driven 3D music machines in the browser. Every note is scheduled ahead of time so its visual hit lands exactly on the beat.

**Live:** https://jacksonwholesale.github.io/pipe-rig/ (drag `.mid` files onto the page; MIDI devices work there in Chrome or Edge)

## Machines

- **Pipe Rig** — a central launcher fires balls in ballistic arcs onto a ring of instruments. Each part of a song gets its own instrument station:
  - struck by balls: marimba, vibraphone, glockenspiel, harp, horn pipes, bass strings, drum kit, **spring harp** (coils that sway and bounce) and **water bells** (glass bowls that ripple and splash)
  - running their own mechanism: **marble run** (marbles roll a rail and drop onto xylophone bars), **bellows organ** (valves open, pipes glow and puff smoke rings while the bellows breathe) and **laser lyre** (emitters charge, beams snap on and tremble while held)
- **Doll Drummer** — a jointed fashion doll on a pink sparkle kit. Sticks wind up ahead of each note, hands and feet are posed with two-bone IK, and the body moves on springs. You can load your own rigged humanoid (`.glb`, `.gltf` or `.zip`) and it's driven the same way.

## Run it

Double-click `play.cmd` (Windows, needs Python). It serves this folder on `http://localhost:8765` and opens `pipe-rig.html`; every `.mid` in `test-midi/` appears in the Songs list. Web MIDI input works there too (Chrome or Edge).

You can also open the page any other way and drag `.mid` files onto it. Sampled sounds need the page to be served (not opened as a file); otherwise the built-in synth plays.

## Controls

- **Machine** — switch between Pipe Rig and Doll Drummer.
- **Songs** — load or drop MIDI files, step with `[` / `]`, auto-advance.
- **Instruments** (Pipe Rig) — turn instrument types on or off for every song.
- **Effects** — each switches on or off and is remembered:
  - **Hit lights**: every hit throws a burst of colored light
  - **Glow**: bright surfaces bloom
  - **Held notes**: notes last their full length, in sound and on the instrument
  - **Sampled sounds**: recorded instruments instead of the synth (drums stay synthesized)
  - **Reverb**: a room around the sound
  - **Ball returns**: balls drop into catchers and roll back to the launcher
  - **Auto camera**: follows the busiest instrument; drag or scroll to take over for a few seconds
  - **Stage light** and **Glow strength** dials
  - **Environment**: light and reflect either machine with a Poly Haven HDRI (soft studio, neon studio, moonlit trees, Venice sunset, warehouse); **Show as backdrop** puts it behind the stage
- **Parts** — remap any MIDI part to a different instrument, or add a new one.
- **Live** — a MIDI device or the keyboard (`A`–`;` marimba, `Z`–`M` bass, `1`–`8` drums), in delayed (full arcs) or instant mode.

## How the timing works

Pipe Rig launches each ball at `T − τ` with `v₀ = (P − L)/τ − ½gτ`, so it lands on target `P` exactly at note time `T`. Self-driven stations plan the same way: a marble leaves the top of the run early enough to roll, drop and hit its bar at `T`; organ valves and laser emitters start their wind-up a fraction of a second before. The drummer plans each stroke the same way: wind-up before the note, contact at the note, rebound after.

## Sounds

`samples/` holds a small curated set of notes from the FluidR3 GM soundfont (every third semitone; the player pitch-shifts between them). Rebuild it with `node tools/build-samples.mjs`.

## Credits

- [three.js](https://threejs.org) r128 (MIT), plus its GLTFLoader and post-processing examples
- [JSZip](https://stuk.github.io/jszip/) (MIT)
- HDRI environments in `assets/hdri/`: [Poly Haven](https://polyhaven.com) (CC0)
- Instrument samples: FluidR3 GM by Frank Wen, rendered by [gleitz/midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- Fonts: Bricolage Grotesque and IBM Plex Mono via Google Fonts (OFL)

Models you load yourself keep their own licenses; check them before sharing anything you make with them.
