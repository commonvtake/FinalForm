# Final Form — web app

Final Form as a website you add to your Home Screen. It opens full screen like a normal app on iPhone and Android, and no Mac or app store is needed. All your data stays on your phone.

## Put it online (free, about 5 minutes, from your PC)

1. Go to <https://github.com/new>. Name the repository `final-form`, set it to **Public**, then click **Create repository**.
2. On the new repo page, click **uploading an existing file**. Drag in everything from this folder (`index.html`, `app.js`, `sw.js`, `manifest.webmanifest` and the `icons` folder), then click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch** and Branch to **main** / **(root)**, then click **Save**.
4. After about a minute, your app is live at `https://<your-github-username>.github.io/final-form/`.

## Install it on your iPhone

1. Open that link in **Safari**.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Open **Final Form** from your Home Screen. It runs full screen with its own icon, and works offline after the first load.

On Android: open the link in Chrome, tap ⋮, then **Add to Home screen** (or **Install app**).

## What works differently from a native app

| Feature | Web app |
|---|---|
| Steps | iPhone web apps can't read Apple Health, so you type in your step total from the Health app (Today → Steps). Steps still earn calories and XP. |
| Reminders | Profile → Reminders → **Add reminders to my Calendar** creates repeating calendar events with alerts (weigh-in, step check, food log, weekly check-in). |
| GPS recording | Start / Pause / Resume / Finish with live route, pace, distance, elevation and calories. The screen stays on while recording. On iPhone, keep Final Form open: locking the phone pauses GPS. |
| Data | Saved on your phone. Use Profile → **Export** now and then for a backup, and **Import** to restore it. |

## Strava (optional)

1. Create an API app at <https://www.strava.com/settings/api>.
2. Set **Authorization Callback Domain** to `<your-github-username>.github.io`.
3. In Final Form, go to Profile → Strava, paste your Client ID and Secret, and tap **Connect with Strava**. The keys stay on your phone.

## Updating

Upload the changed files to the same repo again. The app picks up the new version the next time it opens with internet.
