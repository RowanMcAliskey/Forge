# FORGE project context

FORGE is a single-file, mobile-first workout app intended for GitHub Pages. The current deliverables are `index.html` and `forge.html`; they are identical. `index.html` is the GitHub Pages entry point.

## Product decisions

- Brand: FORGE, with a restrained fantasy/sci-fi training-protocol feel.
- Approved palette: midnight navy, cool grays, seafoam green, and icy blue.
- The program is a flexible 10-session rotation, not a Monday-to-Sunday calendar:
  1. Strength A
  2. Hike
  3. Recovery and mobility
  4. Strength B
  5. Recovery
  6. Swim or hike
  7. Explosive athlete
  8. Recovery and shoulders
  9. Athletic conditioning
  10. Full rest
- The user advances manually with Next Rotation Day. Day 10 rolls to Day 1 of the next cycle.
- Strength A and B use guided PRIME → RESET → LIFT → RESTORE/CARRY → OUTPUT blocks. RESET and RESTORE should stay low effort and should not create fatigue.
- Strength A includes goblet squat, dumbbell overhead press, controlled row, scapular resets, carries, dead-hang progression, and kettlebell swings.
- Strength B includes trap-bar deadlift at lower reps, dumbbell bench, controlled row, scapular resets, carries, dead-hang progression, and sled work.
- Preserve Cossacks, hip airplanes, deep knee-over-toe lunges, open books, pass-throughs, TRX scapular work, kettlebell windmills, hikes, swimming, recovery, and explosive days.
- The optional four-exposure experiment applies to squat/press movements: 1×20–25, 2×12–15 at RPE 6–7, 3×8 around RPE 7, and 4×5 at RPE 7–8. It unlocks only from logged reps and RPE. FORGE must never choose or automatically increase weight. Deadlift stays 4×4–6.

## Initial load plan

- Goblet squat: 75 lb; two working sets initially, 5–10 reps; warm-up around 40 lb.
- Single-arm dumbbell overhead press: 50 lb per arm; two working sets initially, 5–8 reps; warm-up around 25 lb.
- Controlled row: bodyweight inverted row by default; optional one-arm dumbbell row starting around 35 lb, with 35–45 lb as the expected range.
- Trap-bar deadlift: 185 lb starting point; two working sets initially, 4–6 reps; warm-up around 95 lb.
- Dumbbell bench press: 50 lb per dumbbell; two working sets initially, 5–10 reps; warm-up around 25 lb per dumbbell.
- Kettlebell swing: 50 lb single kettlebell; double 35 lb is an alternate logged variation.
- Waiter carry and suitcase carry: 50 lb implement.
- Sled: four 45 lb plates as the starting difficult load; record whether load means plates only or total sled load.
- Slam ball: 25 lb.

Dynamic recommendations use completed reps, completed working sets, and logged RPE. They add one small increment at the top of the rep range with a controlled RPE, hold when performance is in range, and reduce one increment for incomplete or very hard work. The app does not change weight without the user choosing the suggested load.

## Technical constraints

- Preserve the localStorage key `forge.training.v1`.
- Preserve the existing entry fields: exercise identity, completion, load, sets, reps/time, RPE, and notes.
- Preserve old history and imported v1 backups.
- Keep the app self-contained unless a change explicitly requires assets or a build step.
- Test on mobile and desktop widths. Test navigation, guided movement controls, progression gating, reload persistence, rotation advancement, history, and backup import/export.
- Attachment previews may display HTML without running JavaScript; hosted Safari/Chrome is the intended runtime.

## Working files

- `index.html`: deploy this file to the root of a GitHub Pages repository.
- `forge.html`: standalone copy for handing to Codex or keeping as a backup.
- `README.md`: setup, usage, and validation notes.
- `FORGE_CONTEXT.md`: this context brief.

Before making changes, inspect the existing architecture and propose the minimum change set. Do not rebuild the app from scratch.
