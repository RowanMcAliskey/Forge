# FORGE

A self-contained workout app: no build step, libraries, account, or external assets.

## v1.1 — guided strength blocks

Strength A and Strength B now run as guided PRIME and RESET → LIFT → RESTORE/CARRY blocks, followed by OUTPUT work. The screen presents one movement at a time with round and sequence progress, while the full block map remains available in an expandable overview. RESET and RESTORE movements are explicitly low effort and should not create fatigue.

The update adds six-point rocking, waiter carries, suitcase carries, a dead-hang progression, scapular resets, and targeted hip and shoulder resets. Trap-bar deadlifts remain at 4×4–6.

Goblet squat, dumbbell overhead press, and dumbbell bench press offer an optional four-exposure experiment:

1. 1×20–25 easy/moderate
2. 2×12–15 at RPE 6–7
3. 3×8 at about RPE 7
4. 4×5 at RPE 7–8

The next exposure unlocks only after the current target reps and an eligible RPE are logged. FORGE never automatically increases weight or applies a new load without your confirmation.

## Dynamic load suggestions

Strength and loaded-carry cards now show a starting load, a light warm-up suggestion where appropriate, and the initial working-set/repetition target. The current starting plan is goblet squat 75 lb, single-arm DB overhead press 50 lb per arm, trap-bar deadlift 185 lb, DB bench 50 lb per dumbbell, 50 lb kettlebell swings, 50 lb waiter/suitcase carries, four 45 lb sled plates, and a 25 lb slam ball. Controlled row starts as bodyweight inverted rows, with a one-arm DB option around 35 lb.

After an archived session, the next suggestion uses completed working sets, completed reps, and RPE: a small increase at the top of the range with controlled effort, the same load when performance is in range, or a small reduction after incomplete or very hard work. The app never changes the load automatically; **Use this load** copies the suggestion into the log. Dumbbell loads are labeled per dumbbell or per arm, and sled load is labeled as plates.

- `forge.html`: standalone app, suitable to hand to Codex for further development.
- `index.html`: identical GitHub Pages entry point. Upload this file to the root of your Pages repository and publish that directory.

Open the hosted page in Safari or Chrome. Attachment previews may display the design without running JavaScript. On iPhone, use Safari → Share → Add to Home Screen. Home-screen metadata and an embedded icon are included; offline page caching is not included in this single-file edition. Physical iPhone installation has not been tested.

## Training and logging

The sequence is Strength A, Hike, Recovery/mobility, Strength B, Recovery, Swim or hike, Explosive athlete, Recovery/shoulders, Athletic conditioning, Full rest. It advances only when you press **Next Rotation Day**, regardless of calendar dates. Day 10 rolls into Day 1 of the next cycle.

Icy blue text shows the plan; blank fields record actual work. Each card supports completion, load (include units), sets, reps/time, RPE and notes. Mobility is integrated into sessions and available in a searchable library. Extra library work is logged separately to the current session. Recovery-day mobility is optional, even though cards can be checked.

Entries save automatically to localStorage. Advancing archives the current session, including unfinished work, then opens a blank session. Previous recorded entries appear on exercise cards. Reset Checks only clears completion flags for the current session; all performance fields and notes remain.

Use History to inspect current and archived entries and export/import JSON backups. Import replaces the existing record after confirmation. Data is specific to the browser and site address, with no cloud sync. Export before changing devices or browsers, clearing browser data, or moving the site.

The program follows the supplied conversation. Later-added hip airplanes, knee-over-toe lunges, TRX work and windmills have suggested starting prescriptions rather than claiming exact prescriptions were provided in the original rotation.

## Validation

Tested with actual headless Chrome at mobile and desktop widths:

- Sequential Strength A guidance, round/step persistence and previous movement navigation.
- Progression gating from completed sets, reps and RPE, including persistence after reload.
- Strength B preview with unchanged 4×4–6 trap-bar deadlift programming.
- Loading an existing v1 active session without losing its exercise fields or notes.
- Four main navigation views and all ten rotation previews.
- All exercise field types and checkoffs persist after reload.
- Reset and cancel actions preserve logs correctly.
- Search, region filters and extra mobility logging.
- Full ten-day advancement and cycle rollover.
- Current/archived history, previous-entry display and safe rendering of notes.
- Export, backup restoration and invalid-backup rejection.
- Corrupt stored-data handling without overwriting the original value.
- Both HTML entry points; no JavaScript runtime errors.
- No horizontal overflow at 320, 390 and 1280 pixels.

Both delivered HTML files are identical. No deployment has been performed.
