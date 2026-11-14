# CrewReady 30-Second Video: How to Make It

This is the step-by-step for producing the video in `docs/10_VIDEO_30S_FINAL.md`. That file is the script: voiceover, shot order, labels and subtitles. This file covers what to record, where to put it, and the prompts to paste.

**The plan:**
1. **You** record short game clips (Part A) and the voiceover.
2. **Omni Flash 1.2** makes two short clips you can't screen-record: the threat montage and the bored kid (Part B).
3. **Fable**, in Claude Code, puts everything together in the Remotion project (`crewready-video/`) and renders the final 30-second MP4 (Part C).

---

## Part A: What you prepare

### A1. Make the folders

Put everything inside `crewready-video/public/v30/`, with exactly these folder and file names. Fable looks for them.

- `game/`: your game recordings
- `ai/`: the two Omni Flash clips
- `chars/`: your 3D character clips
- `challenge/`: challenge screenshot and recording
- `team/`: one photo per member
- `audio/`: the voiceover

### A2. Set up before recording the game

1. **Recorder:** use the Xbox Game Bar that comes with Windows.
   - Open Settings → Gaming → Captures and turn on **Capture mouse cursor when recording**.
   - Press **Win + Alt + R** to start recording, and again to stop. Clips save to `Videos/Captures`.
   - OBS also works, if you already use it.
2. **Browser:** open the game in Chrome.
   - Press **Ctrl + 0** to set zoom to 100%.
   - Press **F11** for full screen, so no tabs or bookmarks show.
3. **Notifications:** turn on Do Not Disturb so no pop-ups appear.
4. **Live data:** open a **fresh incognito window** each recording day, so the game fetches today's NASA data instead of an old saved copy.
5. **Mouse:** move it slowly and on purpose, so viewers can follow it.

### A3. The recording rule for every clip

Do the same thing for every clip, so Fable can trim them all the same way:

1. Get the screen ready **before** you press record.
2. Press **Win + Alt + R**.
3. Keep still for **1 second**.
4. Do the one action.
5. Wait **2 seconds** so the result shows (a bar moves, a screen changes).
6. Press **Win + Alt + R** to stop.
7. Rename the file to the exact name below and move it into `public/v30/game/`.

Each clip ends up about 4–6 seconds long. Fable keeps only the action. If a take is messy, just record it again; it's quicker than cutting.

### A4. Game clips to record

**For the "name the solution" part (0:03.5)**

1. **`welcome.mp4`:** the Welcome screen.
   - Before: open the game so the Welcome screen shows.
   - Action: just let it play for 3 seconds. Don't click.

**For the "game working" part (0:10–0:20)**

2. **`bars-gameover.mp4`:** the four bars hitting zero, then Replay.
   - Before: play a level making costly choices until one bar is very low.
   - Action: make the one choice that drops it to zero, and hold while the Replay screen appears.
   - Tip: this one may take a few tries. It's the most important shot, so get a clean take.
3. **`home.mp4`:** Home, with the space weather card.
   - Before: go to Home.
   - Action: hover the mouse over the "How stormy is the Sun today?" card for 2 seconds.
4. **`l1-crates.mp4`:** Level 1 packing.
   - Before: open Level 1 at the "Pack the rocket" step.
   - Action: drag 2–3 crates into different bars, and watch them rise.
5. **`l2-storm.mp4`:** Level 2 live storm.
   - Before: open Level 2 so its opening card shows.
   - Action: let the card show **NASA LIVE · Kp 6** for 2 seconds, then go on until the Shield bar drops.
   - Check: if it says NASA ARCHIVE, stop and fix the live data first (Part A8).
6. **`l3-landing.mp4`:** Level 3 landing.
   - Before: open Level 3 at the "Land on Mars" step.
   - Action: tap the four landing steps in order: Heat shield, Parachute, Landing engines, Touchdown.
7. **`l4-battery.mp4`:** Level 4 battery.
   - Before: open Level 4 at the "Share the battery" step.
   - Action: drag two sliders up and down.
8. **`l5-farm.mp4`:** Level 5 farm.
   - Before: open Level 5 at "How big will your farm be?".
   - Action: pick a farm size, and hold until the bars change.
9. **`l6-crew.mp4`:** Level 6 crew.
   - Before: open Level 6 at "Pick your crew".
   - Action: tap 3 experts.
10. **`arcade.mp4`:** a mini-game.
    - Before: open the Space Arcade and start **Asteroid Blaster**.
    - Action: blast 3–4 rocks so the stardust counter goes up.
11. **`fly.mp4`:** Fly.
    - Before: open Fly, but don't start yet. The start screen shows the badge and "Space weather: Kp … (slow / medium / fast)".
    - Action: hold 1 second on that badge, click start, then dodge obstacles for 3 seconds.

**For the "future and impact" part (0:20–0:30)**

12. **`twinkle.mp4`:** Twinkle's Gen Alpha line.
    - Before: in any level, get to a question step.
    - Action: open Twinkle's help so it says "Bestie, what's this asking?", or make a good choice so the result says "Big W, Commander!".
13. **`resources.mp4`:** the Resources tab.
    - Before: have some stardust, then open the Resources tab.
    - Action: buy one cargo upgrade with stardust, and hold while the stardust count drops and the upgrade shows.
14. **`bangla.mp4`:** the language switch.
    - Before: open Mission Settings in English.
    - Action: tap 🇧🇩 বাংলা, and hold while the screen changes to Bangla.

**Optional:**

15. **`hands-fly.mp4`:** real hands on a phone.
    - Set-up: the game open on a phone, filmed by a second phone held above it.
    - Action: 3 seconds of thumbs playing Fly.

**If you'd rather cut from your big recording:** that works too. Cut each moment with this command, run in the `crewready-video` folder. `-ss` is the start time and `-to` is the end time:

```bash
ffmpeg -ss 00:03:12 -to 00:03:17 -i "D:/path/to/full-recording.mp4" -an -vf "scale=1920:-2,fps=30" -c:v libx264 -crf 18 public/v30/game/l2-storm.mp4
```

### A5. Your other files

- **`chars/`:** rename your 3D character clips to `orbit.mp4`, `nova.mp4` and `twinkle-3d.mp4`.
- **`challenge/`:**
  - the challenge statement screenshot, as `challenge.png`
  - your recording of the challenge page, as `challenge.mp4`. A long one is fine; Fable uses 3 seconds.
- **`team/`:** square photos with the face centered:
  - `ahnaf.jpg`, `riyad.jpg`, `tasfia.jpg`, `ormi.jpg`, `jawat.jpg`, `wasima.jpg`
  - If someone has no photo, skip it and Fable uses a character picture.

### A6. Voiceover

1. Copy the voiceover paragraph from section 1 of `docs/10_VIDEO_30S_FINAL.md`.
2. Read it in one take, fast and excited, with a short breath between sections.
3. Record on a phone in a quiet room, held close to your mouth. Or use the same text-to-speech voice you used before.
4. Save it as `public/v30/audio/vo.mp3`. It must be **28 seconds or less**. If it's longer, read faster. Don't cut words.

The music, `public/audio/music.mp3`, is already in the project.

### A7. The game link

Have your public game link ready for the end card. Without it, Fable leaves `[game link]`.

### A8. If Level 2 says NASA ARCHIVE

- **Running locally** (`npm run dev`): your `.env` already has a working key. Open a fresh incognito window and try again.
- **Deployed site:** in the Vercel or Netlify settings, add `VITE_NASA_API_KEY` with the same key, then **redeploy**.
- **After about 30 Nov:** the Kp 6 storm leaves the game's 30-day window, so record before then.

---

## Part B: Omni Flash 1.2 prompts (two short clips)

Each clip only needs to be about **4 seconds**, so set the length to **5 seconds**, or the shortest your plan allows. If 15 seconds is the only option, generate it anyway; Fable uses the first few seconds.

**Rules for both clips:**
- **No text in the video.** AI video garbles letters. All words are added in Remotion.
- **No real logos.** No NASA logo, no brand names.
- 16:9, 1080p if you can choose.
- Make 2–3 versions of each and keep the best.
- Save them as `public/v30/ai/threats.mp4` and `public/v30/ai/bored-kid.mp4`.

### Prompt 1: Threat montage (hook, 0:00–0:03.5)

> 5-second cinematic fast-cut montage, 16:9, dramatic but suitable for children, no gore, no text, no logos. Hard cuts, about half a second each, with slight camera push-ins: a wildfire glowing orange at night; floodwater rushing through a village street; a city under thick brown smog; a huge solar flare erupting from the Sun; a rocky asteroid tumbling toward a blue Earth; a robot's eyes glitching red. The final second: a ten-year-old child seen from behind on a rooftop at night, looking up at a sky full of stars, soft blue light. Warm reds and oranges for the threats, calm deep blue at the end. Realistic, smooth motion. No people hurt.

### Prompt 2: Bored kid finds the stars (problem, 0:06.5–0:10)

> 5-second cinematic shot, 16:9, warm and hopeful, no text on any screen, no logos. A ten-year-old South Asian child sits on a bed at night, face lit by a tablet. They swipe with one thumb, bored; the screen shows only blurred colorless shapes. The child glances to the open window beside them, sees a night sky full of bright stars, lowers the tablet, and looks up amazed, eyes wide, a small smile starting. Gentle camera move toward the window. Light shifts from cold blue screen glow to warm starlight. Realistic style.

**Pick the take where:** the motion is smooth, no faces look strange, and no screen shows readable text.

---

## Part C: Prompt for Fable (paste into Claude Code)

Do Part A first so the files exist. Then open Claude Code in the `crewready-video` folder, choose the **Fable** model, and paste this whole block:

````text
Build a new 30-second video in this Remotion project. Don't change or delete anything
for the existing 240-second video (CrewReady-Landscape, CrewReady-Portrait and their scenes).

## Source of truth
Read ../docs/10_VIDEO_30S_FINAL.md first. It has the voiceover, timing, shot order, the
YOU LEARN / NASA DATA labels, subtitles and end card. Follow it exactly. Don't add claims
that aren't in it.

## Output
- New composition id "CrewReady-30s": 1920x1080, 30 fps, exactly 900 frames (30.0 s).
- Put the new code in src/v30/ (a root component plus one file per section).
- Register it in src/Root.tsx next to the existing compositions.
- Add a package.json script: "render:30": "remotion render CrewReady-30s out/CrewReady-30s.mp4"

## Assets (all under public/v30/, load with staticFile)
- game/*.mp4: welcome, bars-gameover, home, l1-crates, l2-storm, l3-landing, l4-battery,
  l5-farm, l6-crew, arcade, fly, twinkle, resources, bangla, and optional hands-fly.
  Each was recorded as: 1 s still, then the action, then 2 s of result. Skip the first
  ~1 s (trimBefore) and keep the part where something moves. Extract a few frames with
  ffmpeg if you need to find the action.
- ai/threats.mp4 and ai/bored-kid.mp4: AI clips. Use only the best ~3.5 s of each.
- chars/orbit.mp4, chars/nova.mp4, chars/twinkle-3d.mp4: 3D character clips.
- challenge/challenge.png and challenge/challenge.mp4 (use ~3 s of the video).
- team/*.jpg: member photos. If one is missing, use a character picture from public/art/.
- audio/vo.mp3: voiceover. Music: public/audio/music.mp3 at about 0.15 volume, with a
  short fade-in and fade-out.
List the folder first. If a file is missing, use a clear placeholder card with its file
name in the frame, carry on, and tell me at the end what was missing.
Mute every video clip; only the voiceover and music make sound.

## Sections (frames at 30 fps)
1. 0–105 HOOK: ai/threats.mp4, fast cuts, ending on the kid and the stars. Top banner from
   frame 0 to 195: "Young Sparks of Bangladesh × ScriptySphere · Cumilla, Bangladesh".
2. 105–195 NAME THE SOLUTION: game/welcome.mp4 full frame, the big title "CrewReady",
   tagline "Making the next gen READY", and six small round photo tiles with name + role
   popping in along the bottom (~6 frames apart). Names and roles are in the script.
3. 195–300 PROBLEM: ai/bored-kid.mp4, with challenge/challenge.mp4 (or the PNG) sliding in
   as a card, and the title "NASA Space Apps 2026 · Build a Junior Astronaut Mission Trainer".
4. 300–600 THE GAME WORKING: split screen, timing as in the script's shot list.
   - Left ~65%: the game clips in a rounded frame with a soft glow. Shot 5 is a 2x2 grid
     of l3-landing, l4-battery, l5-farm and l6-crew playing at once.
   - Right: two stacked label cards, "YOU LEARN" and "NASA DATA", with the exact text from
     the shot list and a quick slide/fade on each change. The NASA DATA cards for Level 2
     (DONKI) and Fly (NOAA) get a pulsing "LIVE" dot.
   - Bottom bar for all of 300–600: "⚡ Game difficulty rises with live NASA data".
   - hands-fly.mp4 (if present): small picture-in-picture box in a corner during Fly.
5. 600–900 FUTURE AND IMPACT: game/twinkle.mp4 with label "Twinkle · guide who speaks Gen
   Alpha" (600–660), game/resources.mp4 with label "Real-life skill: managing what you
   have" (660–720), game/bangla.mp4 (720–765), then the end card (765–900) exactly as in
   the script, with chars/twinkle-3d.mp4 small in a corner. Optionally slip chars/orbit.mp4
   and chars/nova.mp4 in beside the end card title.

## Style
- Reuse src/components where it fits (Starfield, DataBadge, MeterBar), and THEME from
  src/types. Match the 240 s video: dark space background, bright readable text.
- Text at least 36 px for labels and 28 px for small print, with strong contrast.
- Cuts land on the action. No fades longer than 6 frames in sections 1 and 4.

## Subtitles
Burn in English subtitles from the SRT in the script. Time them to vo.mp3: run
@remotion/openai-whisper (already installed) on public/v30/audio/vo.mp3 if you can,
otherwise use the script's times. Keep them above the bottom bar in section 4, on a dark
backing so they read over video.

## Check before you finish
1. npx tsc --noEmit passes.
2. Render stills at frames 50, 150, 250, 330, 450, 520, 630, 700 and 850 into out/ and
   look at them. Fix any overlapping, cut-off or unreadable text.
3. npm run render:30, then confirm with ffprobe that out/CrewReady-30s.mp4 is 30.0 s or less.
4. Tell me: the output path, any missing files, and anything in the script you couldn't do.
````

---

## Part D: After the render

1. Watch it 3 times:
   - once for timing,
   - once reading only the labels,
   - once with the sound off. The subtitles must carry it alone.
2. Check the duration is **30.0 s or less**.
3. Upload to YouTube (Unlisted is fine) or Google Drive (Anyone with the link). Open the link in a private window to check it plays **without logging in**.
4. Put the link in the NASA submission. Don't upload the file to the NASA site.
