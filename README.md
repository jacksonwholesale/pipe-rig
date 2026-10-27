# Pipe Rig

MIDI-driven 3D music machines in the browser. Every note is scheduled ahead of time so its visual hit lands exactly on the beat.

**Live:** https://jacksonwholesale.github.io/pipe-rig/ (drag `.mid` files onto the page; MIDI devices work there in Chrome or Edge)

## Machines

- **Pipe Rig** — a central launcher fires balls in ballistic arcs onto a ring of instruments (marimba, vibraphone, glockenspiel, harp, horn pipes, bass strings, drum kit). Each part of a song gets its own instrument station.
- **Doll Drummer** — a jointed fashion doll on a pink sparkle kit. Sticks wind up ahead of each note, hands and feet are posed with two-bone IK, and the body moves on springs. You can load your own rigged humanoid (`.glb`, `.gltf` or `.zip`) and it's driven the same way.

## Run it

Double-click `play.cmd` (Windows, needs Python). It serves this folder on `http://localhost:8765` and opens `pipe-rig.html`; every `.mid` in `test-midi/` appears in the Songs list. Web MIDI input works there too (Chrome or Edge).

You can also open the page any other way and drag `.mid` files onto it.

## Controls

- **Machine** — switch between Pipe Rig and Doll Drummer.
- **Songs** — load or drop MIDI files, step with `[` / `]`, auto-advance.
- **Instruments** (Pipe Rig) — turn instrument types on or off for every song.
- **Parts** — remap any MIDI part to a different instrument, or add a new one.
- **Live** — a MIDI device or the keyboard (`A`–`;` marimba, `Z`–`M` bass, `1`–`8` drums), in delayed (full arcs) or instant mode.

## How the timing works

Pipe Rig launches each ball at `T − τ` with `v₀ = (P − L)/τ − ½gτ`, so it lands on target `P` exactly at note time `T`. The drummer plans each stroke the same way: wind-up before the note, contact at the note, rebound after.

## Credits

- [three.js](https://threejs.org) r128 (MIT), plus its GLTFLoader
- [JSZip](https://stuk.github.io/jszip/) (MIT)
- Fonts: Bricolage Grotesque and IBM Plex Mono via Google Fonts (OFL)

Models you load yourself keep their own licenses; check them before sharing anything you make with them.
