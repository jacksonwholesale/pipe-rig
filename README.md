# Pipe Rig

MIDI-driven 3D music machines in the browser. Every note is scheduled ahead of time so its visual hit lands exactly on the beat.

**Live:** https://jacksonwholesale.github.io/pipe-rig/ (drag `.mid` files onto the page; MIDI devices work there in Chrome or Edge)

## Machines

- **Pipe Rig** — a central launcher fires balls in ballistic arcs onto a ring of instruments. Each part of a song gets its own instrument station:
  - struck by balls: marimba, vibraphone, glockenspiel, harp, horn pipes, bass strings, drum kit, **spring harp** (coils that sway and bounce) and **water bells** (glass bowls that ripple and splash)
  - running their own mechanism: **marble run** (marbles roll a rail and drop onto xylophone bars), **bellows organ** (valves open, pipes glow and puff smoke rings while the bellows breathe) and **laser lyre** (emitters charge, beams snap on and tremble while held)
- **Doll Drummer** — a jointed fashion doll on a pink sparkle kit. Sticks wind up ahead of each note, hands and feet are posed with two-bone IK, and the body moves on springs. You can load your own rigged humanoid (`.glb`, `.gltf` or `.zip`) and it's driven the same way.
- **Squish** — translucent gummy blobs, one per part, on a calm stage. For each note the blob spits a small round piece of itself off the top of its head: the top puckers, the body hops, and the piece is thrown high into the air (about 1 to 2.5 above its head, louder notes higher) on an arc timed like Pipe Rig's balls, so it falls back onto its spot on the head exactly on the beat (low notes on the left, high on the right). The landing is the note: it splats, dents the head and is absorbed straight away; a held note keeps the dent pressed for its length. The blobs are spring-mass soft bodies: they dent, bulge, wobble and settle on their own, and loud hits send rings through the backdrop. The sound comes from the shape: the voice's vowel opens and closes with the blob's squash and its pitch bends with the wobble. Drag a blob to pull it like taffy and it sings, higher the further it stretches. Every blob has glossy eyes set into the jelly: they watch their own pieces fly up and come down, glance at you and at each other, blink, squint on hard hits, go wide when grabbed and droop blissfully during long notes. Every hit flings jelly droplets on real arcs; they stretch as they fly, tick as they land and spread into little splats, or merge back into a blob they fall on. Some pieces leave the head trailing a sticky strand that stretches thin and snaps. Thin edges of the jelly stay bright while thick middles deepen, with a soft sheen at grazing angles.

## Run it

Double-click `play.cmd` (Windows, needs Python). It serves this folder on `http://localhost:8765` and opens `pipe-rig.html`; every `.mid` in `test-midi/` appears in the Songs list. Web MIDI input works there too (Chrome or Edge).

You can also open the page any other way and drag `.mid` files onto it. Sampled sounds need the page to be served (not opened as a file); otherwise the built-in synth plays.

## Controls

- **Machine** — switch between Pipe Rig, Doll Drummer and Squish.
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
  - **Groove**: everything moves with the beat (from the MIDI tempo map). The doll dances in styles picked from how busy the music is (chill sway, nod, headbang, shoulder shimmy, off-beat weirdness); Pipe Rig stations bob, tall ones sway, and a wave sometimes travels around the ring. Every note varies a little: ball arcs, landing spots and bounces, and the doll's stroke height, angle and spot, with runs of repeats rising and falling like real accents
  - **Stage light**, **Glow strength** and **Groove amount** dials
  - **Environment**: light and reflect any machine with a Poly Haven HDRI (soft studio, neon studio, moonlit trees, Venice sunset, warehouse, music hall, cozy café, bathroom, penguin museum, play room); **Show as backdrop** puts it behind the stage, and **Backdrop blur** softens it into an out-of-focus photographic plate
- **Sound** — what every part plays on:
  - **Instrument sounds**: each part's own instrument (samples or synth)
  - **Clanking swords**: a kit generated in the page from large blades: clanks struck together and stick-slip scrapes
  - **My sounds**: add audio files or press **Record** and clank, scrape, tap or sing into the microphone, with a short gap between sounds. Each sound becomes its own take: trimmed, levelled, sorted into a hit (it dies away) or a scrape (it keeps going), and checked for pitch. Click a take's Hit/Scrape button to switch it. Takes are kept in this browser.
  - Short notes trigger hits and held notes trigger scrapes that slide into pitch and last the note (with **Held notes** on). Pitched takes are re-pitched to the note; unpitched clatter strikes a body tuned to the note, so it still carries the melody. Every note varies: a different take than the last, a few cents of detune, brightness from velocity, its own stereo spot, and now and then a flam, a wobbling blade, a settling rattle, a squeal mid-scrape or a shing as a scrape ends.
  - **Keep drums as drums**: off, the drum parts play on the kit too (low thuds for kick and toms, ticks for hats, scrapes for cymbals).
- **Parts** — remap any MIDI part to a different instrument, or add a new one.
- **Live** — a MIDI device or the keyboard (`A`–`;` marimba, `Z`–`M` bass, `1`–`8` drums), in delayed (full arcs) or instant mode.

## How the timing works

Pipe Rig launches each ball at `T − τ` with `v₀ = (P − L)/τ − ½gτ`, so it lands on target `P` exactly at note time `T`. Self-driven stations plan the same way: a marble leaves the top of the run early enough to roll, drop and hit its bar at `T`; organ valves and laser emitters start their wind-up a fraction of a second before. The drummer plans each stroke the same way: wind-up before the note, contact at the note, rebound after.

## Sounds

`samples/` holds a small curated set of notes from the FluidR3 GM soundfont (every third semitone; the player pitch-shifts between them). Rebuild it with `node tools/build-samples.mjs`.

## Credits

- [three.js](https://threejs.org) r170 (MIT), plus its GLTFLoader, RGBELoader and post-processing add-ons
- [JSZip](https://stuk.github.io/jszip/) (MIT)
- HDRI environments in `assets/hdri/`: [Poly Haven](https://polyhaven.com) (CC0)
- Instrument samples: FluidR3 GM by Frank Wen, rendered by [gleitz/midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- Fonts: Bricolage Grotesque and IBM Plex Mono via Google Fonts (OFL)

Models you load yourself keep their own licenses; check them before sharing anything you make with them.
