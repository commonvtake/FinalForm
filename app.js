/* Final Form — web app edition (works on iPhone & Android from the Home Screen).
   Everything is stored on the device (localStorage). No account, no server. */
(() => {
'use strict';

// ===========================================================================
// Icons (Material-style 24px paths)
// ===========================================================================
const P = {
  plus: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  left: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z',
  right: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  down: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z',
  check: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  close: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  trash: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
  play: 'M8 5v14l11-7z',
  pause: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
  stop: 'M6 6h12v12H6z',
  rec: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
  dumbbell: 'M20.57 14.86 22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z',
  run: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z',
  walk: 'M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7',
  bike: 'M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10 2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z',
  flame: 'M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32z',
  trophy: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
  chart: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
  calendar: 'M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z',
  person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  food: 'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z',
  scale: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 3a7 7 0 0 0-6.2 3.8l1.8.9A5 5 0 0 1 11 8.1V11h2V8.1a5 5 0 0 1 2.4 1.6l1.8-.9A7 7 0 0 0 12 6z',
  heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  bell: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
  gps: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
  star: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  shield: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
  halfshield: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.2V20.9c-4-1.2-7-5.4-7-9.9V6.3l7-3.1z',
  hexagon: 'M17.2 3H6.8L1.6 12l5.2 9h10.4l5.2-9z',
  diamond: 'M6 3h12l4 6-10 12L2 9z',
  crown: 'M3 18h18v2H3zM3 7l4.5 4L12 4l4.5 7L21 7l-2 9H5z',
  medal: 'M17 4V2H7v2l3.5 5.5a6 6 0 1 0 3 0zM12 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6.5 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z',
  bolt: 'M7 2v11h3v9l7-12h-4l4-8z',
  sparkle: 'M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z',
  lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
  warn: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  checkc: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  ffwd: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z',
  download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
  upload: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z',
  refresh: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
  a11y: 'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z',
  flag: 'M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z',
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  steps: 'M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7',
  timer: 'M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
  share: 'M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z',
};
const icon = (name, cls = '') =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${P[name] || P.star}"/></svg>`;

// ===========================================================================
// Utilities
// ===========================================================================
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const DAY = 86400000;
const sod = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const dkey = (d) => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`; };
const daysBetween = (a, b) => {
  const A = new Date(a), B = new Date(b);
  return Math.round((Date.UTC(B.getFullYear(), B.getMonth(), B.getDate()) - Date.UTC(A.getFullYear(), A.getMonth(), A.getDate())) / DAY);
};
const isoDow = (d) => new Date(d).getDay() || 7; // 1 = Mon ... 7 = Sun
const sameDay = (a, b) => dkey(a) === dkey(b);

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ISO_DAY = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const num = (n) => Math.round(n).toLocaleString('en-US');
const fday = (d) => { const x = new Date(d); return `${MON[x.getMonth()]} ${x.getDate()}`; };
const fdayY = (d) => { const x = new Date(d); return `${MON[x.getMonth()]} ${x.getDate()}, ${x.getFullYear()}`; };
const fwd = (d) => WDAY[new Date(d).getDay()];
const ftime = (h, m) => `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
const fclock = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};
const signed = (v) => `${v > 0 ? '+' : ''}${v.toFixed(1)}`;
const parseNum = (s) => { const t = String(s ?? '').trim().replace(',', '.'); if (!t) return null; const v = Number(t); return Number.isFinite(v) ? v : null; };
const toLocalInput = (d) => { const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0, 16); };
const fromLocalInput = (s) => { const d = new Date(s); return Number.isNaN(d.getTime()) ? null : d; };

// Units
const LB = 2.20462262185;
const dispW = (kg, u) => (u === 'imperial' ? kg * LB : kg);
const kgFrom = (v, u) => (u === 'imperial' ? v / LB : v);
const wu = (u) => (u === 'imperial' ? 'lb' : 'kg');
const W = (kg, u, dg = 1) => `${dispW(kg, u).toFixed(dg)} ${wu(u)}`;
const RATE = (kg, u) => `${dispW(kg, u).toFixed(1)} ${wu(u)}/wk`;
const feetIn = (i) => `${Math.floor(i / 12)}′ ${i % 12}″`;
const paceOpts = (u) => (u === 'imperial' ? [0.5, 1, 1.5, 2].map((x) => x / LB) : [0.25, 0.5, 0.75, 1]);
const nearestPace = (kg, u) => paceOpts(u).reduce((b, o) => (Math.abs(o - kg) < Math.abs(b - kg) ? o : b));
const heightStr = (cm, u) => (u === 'imperial' ? feetIn(Math.round(cm / 2.54)) : `${Math.round(cm)} cm`);
const distStr = (m, u) => (u === 'imperial' ? (m / 1609.344).toFixed(2) : (m / 1000).toFixed(2));
const distU = (u) => (u === 'imperial' ? 'mi' : 'km');
const paceStr = (mps, u) => {
  if (!mps || mps < 0.3) return '--:--';
  const secs = Math.round((u === 'imperial' ? 1609.344 : 1000) / mps);
  if (secs >= 3600) return '--:--';
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`;
};
const paceU = (u) => (u === 'imperial' ? '/mi' : '/km');
const speedStr = (mps, u) => (u === 'imperial' ? mps * 2.2369363 : mps * 3.6).toFixed(1);
const speedU = (u) => (u === 'imperial' ? 'mph' : 'km/h');
const elevStr = (m, u) => (u === 'imperial' ? `${Math.round(m * 3.28084)} ft` : `${Math.round(m)} m`);

// ===========================================================================
// Calorie engine (same math as the native version)
// ===========================================================================
const KCAL_PER_KG = 7700;
const LIFE = {
  sitting: { label: 'Mostly sitting', detail: 'Desk work, classes, gaming', factor: 1.2, base: 5000 },
  light: { label: 'Lightly active', detail: 'Walking between classes, errands, chores', factor: 1.3, base: 7000 },
  onFeet: { label: 'On my feet a lot', detail: 'Retail, restaurant or front-desk shifts', factor: 1.4, base: 9000 },
  physical: { label: 'Physical job', detail: 'Warehouse, construction, landscaping', factor: 1.5, base: 11000 },
};
const SEX = { male: 'Male', female: 'Female', other: 'Other' };
const ageOn = (birth, on) => {
  const b = typeof birth === 'string' ? new Date(`${birth}T12:00:00`) : new Date(birth), o = new Date(on);
  let y = o.getFullYear() - b.getFullYear();
  if (o.getMonth() < b.getMonth() || (o.getMonth() === b.getMonth() && o.getDate() < b.getDate())) y--;
  return Math.max(0, y);
};
const bmr = (w, h, age, sex) => 10 * w + 6.25 * h - 5 * age + (sex === 'male' ? 5 : sex === 'female' ? -161 : -78);
const minIntake = (sex) => (sex === 'male' ? 1500 : sex === 'female' ? 1200 : 1350);
const dailyDeficit = (rate) => (rate * KCAL_PER_KG) / 7;
const netMet = (met, w, min) => (Math.max(0, met - 1) * w * min) / 60;
const strideKm = (h) => (h * 0.415) / 100000;
const walkNet = (km, w) => 0.5 * w * km;
const runNet = (km, w) => 1.0 * w * km;
const climbKcal = (m, w) => 0.009 * w * Math.max(0, m);
const extraStepKcal = (steps, base, w, h) => walkNet(Math.max(0, steps - base) * strideKm(h), w);
const kcalPerStep = (w, h) => walkNet(strideKm(h), w);
const rideMet = (kmh) => (kmh < 16 ? 4 : kmh < 19.3 ? 6.8 : kmh < 22.5 ? 8 : kmh < 25.7 ? 10 : 12);

const CATS = {
  strength: ['Strength', 'dumbbell'], walkRun: ['Walking & Running', 'run'], cycling: ['Cycling', 'bike'],
  cardio: ['Cardio machines & Swimming', 'bolt'], hiit: ['HIIT & Conditioning', 'flame'], sports: ['Sports', 'trophy'], mind: ['Mind & Body', 'person'],
};
// [id, name, category, MET, on-foot speed km/h]
const EX = [
  ['weights_mod', 'Weight training, moderate', 'strength', 3.5], ['weights_vig', 'Weight training, vigorous', 'strength', 6.0],
  ['bodyweight_mod', 'Bodyweight exercises, moderate', 'strength', 3.8], ['circuit', 'Circuit training, vigorous', 'strength', 8.0],
  ['walk_easy', 'Walking, easy (2.5 mph)', 'walkRun', 3.0, 4.0], ['walk_moderate', 'Walking, moderate (3.0 mph)', 'walkRun', 3.5, 4.8],
  ['walk_brisk', 'Walking, brisk (3.5 mph)', 'walkRun', 4.3, 5.6], ['walk_fast', 'Walking, very brisk (4.0 mph)', 'walkRun', 5.0, 6.4],
  ['walk_incline', 'Incline walk, 3.5 mph, 6–15% grade', 'walkRun', 8.0, 5.6], ['hike', 'Hiking', 'walkRun', 6.0, 4.0],
  ['run_5', 'Running, 5 mph (12:00/mi)', 'walkRun', 8.3, 8.0], ['run_6', 'Running, 6 mph (10:00/mi)', 'walkRun', 9.8, 9.7],
  ['run_7', 'Running, 7 mph (8:34/mi)', 'walkRun', 11.0, 11.3], ['run_8', 'Running, 8 mph (7:30/mi)', 'walkRun', 11.8, 12.9],
  ['cycle_leisure', 'Cycling, leisure (<10 mph)', 'cycling', 4.0], ['cycle_moderate', 'Cycling, 12–14 mph', 'cycling', 8.0],
  ['cycle_vigorous', 'Cycling, 14–16 mph', 'cycling', 10.0], ['bike_stationary_mod', 'Stationary bike, moderate', 'cycling', 6.8],
  ['bike_stationary_vig', 'Stationary bike, vigorous', 'cycling', 8.8],
  ['elliptical', 'Elliptical, moderate', 'cardio', 5.0], ['stair_machine', 'Stair climber', 'cardio', 9.0],
  ['rowing_mod', 'Rowing machine, moderate', 'cardio', 7.0], ['rowing_vig', 'Rowing machine, vigorous', 'cardio', 8.5],
  ['swim_mod', 'Swimming laps, moderate', 'cardio', 5.8], ['swim_vig', 'Swimming laps, vigorous', 'cardio', 9.8],
  ['hiit', 'HIIT / calisthenics, vigorous', 'hiit', 8.0], ['jump_rope', 'Jump rope, moderate', 'hiit', 11.8],
  ['boxing_bag', 'Boxing, heavy bag', 'hiit', 5.5], ['aerobic_dance', 'Aerobic dance', 'hiit', 7.3],
  ['basketball', 'Basketball, game', 'sports', 8.0], ['soccer', 'Soccer, casual', 'sports', 7.0],
  ['tennis', 'Tennis, singles', 'sports', 8.0], ['volleyball', 'Volleyball, recreational', 'sports', 3.0],
  ['yoga', 'Yoga, hatha', 'mind', 2.5], ['pilates', 'Pilates', 'mind', 3.0], ['stretching', 'Stretching', 'mind', 2.3],
].map(([id, name, cat, met, foot]) => ({ id, name, cat, met, foot: foot ?? null }));
const EXMAP = Object.fromEntries(EX.map((e) => [e.id, e]));
const exOf = (id) => EXMAP[id] || { id, name: 'Workout', cat: 'hiit', met: 5, foot: null };
const exIcon = (e) => (e.id.startsWith('walk') || e.id === 'hike' ? 'walk' : CATS[e.cat][1]);
const exKcal = (id, min, w) => netMet(exOf(id).met, w, min);

function workoutKcal(wo, w) { return wo.kcal != null ? Math.max(0, wo.kcal) : exKcal(wo.ex, wo.min, w); }
function workoutFootKm(wo) {
  const e = exOf(wo.ex);
  if (e.foot == null) return 0;
  if (wo.dist != null) return wo.dist / 1000;
  return (e.foot * wo.min) / 60;
}
const ONFOOT = ['Run', 'TrailRun', 'VirtualRun', 'Walk', 'Hike'];
function stravaKcal(a, w, b) {
  const min = a.moving / 60, rest = (b / 1440) * min, km = a.dist / 1000;
  if (a.cal > 0) return Math.max(0, a.cal - rest);
  if (a.kj > 0) return Math.max(0, a.kj - rest);
  if (['Run', 'TrailRun', 'VirtualRun'].includes(a.sport)) return km >= 0.1 ? runNet(km, w) + climbKcal(a.gain, w) : netMet(9.8, w, min);
  if (['Walk', 'Hike'].includes(a.sport)) return km >= 0.1 ? walkNet(km, w) + climbKcal(a.gain, w) : netMet(3.5, w, min);
  const hrs = a.moving / 3600;
  const met = /Ride/.test(a.sport) ? (/^E/.test(a.sport) ? 4 : rideMet(hrs > 0 ? km / hrs : 0))
    : ({ Swim: 7, WeightTraining: 5, HighIntensityIntervalTraining: 8, Crossfit: 8, Workout: 8, Yoga: 2.5, Pilates: 3, Elliptical: 5, Rowing: 7, VirtualRow: 7, StairStepper: 9, Soccer: 7, Tennis: 6.5, Pickleball: 6.5, Badminton: 6.5 }[a.sport] ?? 5);
  return netMet(met, w, min);
}
const stravaIcon = (s) => (/Run/.test(s) ? 'run' : s === 'Walk' || s === 'Hike' ? 'walk' : /Ride/.test(s) ? 'bike' : s === 'WeightTraining' ? 'dumbbell' : 'bolt');

// ===========================================================================
// Data & persistence
// ===========================================================================
const KEY = 'ff_data_v1', REC_KEY = 'ff_rec_v1', TOK_KEY = 'ff_strava_tokens', SCFG_KEY = 'ff_strava_cfg', HINT_KEY = 'ff_hint_install';
const plans = {
  starter: () => ({ name: 'Starter · 3 days', sessions: [[1, 'walk_brisk', 30], [3, 'weights_mod', 40], [5, 'walk_brisk', 40]].map(([d, ex, min]) => ({ id: uid(), d, ex, min })) }),
  balanced: () => ({ name: 'Balanced · 4 days', sessions: [[1, 'weights_mod', 45], [2, 'elliptical', 30], [4, 'weights_mod', 45], [6, 'hike', 60]].map(([d, ex, min]) => ({ id: uid(), d, ex, min })) }),
  shred: () => ({ name: 'Shred · 5 days', sessions: [[1, 'weights_vig', 50], [2, 'hiit', 25], [3, 'run_6', 30], [4, 'weights_vig', 50], [6, 'cycle_moderate', 60]].map(([d, ex, min]) => ({ id: uid(), d, ex, min })) }),
};
const blank = () => ({
  version: 1, profile: null,
  a11y: { theme: 'system', scale: 1, hc: false, rm: false, cb: false, bold: false, haptics: true },
  rem: { weigh: '07:00', steps: '17:30', food: '20:00', weeklyDow: 0, weekly: '09:00' },
  weights: [], foods: [], workouts: [], steps: {}, plan: plans.starter(), themeId: 'ember', lastSeenTier: 0,
  strava: [], stravaLastSync: null,
});
function loadData() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    const d = JSON.parse(raw), b = blank();
    return Object.assign(b, d, { a11y: Object.assign(b.a11y, d.a11y || {}), rem: Object.assign(b.rem, d.rem || {}) });
  } catch (e) { return blank(); }
}
let data = loadData();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(data)); }
  catch (e) { toast('Could not save — your browser storage may be full.'); }
}

// ===========================================================================
// Projection & trend
// ===========================================================================
const TOL = 0.45;
function trendPts(ws) {
  const out = []; let cur = null, last = null;
  for (const e of [...ws].sort((a, b) => a.date - b.date)) {
    if (cur == null) cur = e.kg;
    else cur = cur + (1 - Math.pow(0.8, Math.max(1, daysBetween(last, e.date)))) * (e.kg - cur);
    last = e.date;
    out.push({ date: e.date, kg: e.kg, trend: cur });
  }
  return out;
}
function trendOn(day) {
  const end = addDays(sod(day), 1).getTime();
  for (let i = D.trend.length - 1; i >= 0; i--) if (D.trend[i].date < end) return D.trend[i].trend;
  return null;
}
function fit(es) {
  if (es.length < 2) return null;
  const o = Math.min(...es.map((e) => e.date));
  const xs = es.map((e) => (e.date - o) / DAY), ys = es.map((e) => e.kg), n = es.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0;
  for (let i = 0; i < n; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) ** 2; }
  if (sxx <= 0) return null;
  const slope = sxy / sxx;
  return { o, slope, at: (t) => my - slope * mx + slope * ((t - o) / DAY) };
}
const windowOf = (ws, from, to) => ws.filter((w) => w.date >= from.getTime() && w.date < to.getTime());
function currentEstimate(day = new Date()) {
  const ws = data.weights, end = addDays(sod(day), 1);
  const win = windowOf(ws, addDays(sod(day), -13), end);
  if (win.length >= 3) {
    const first = Math.min(...win.map((w) => w.date)), last = Math.max(...win.map((w) => w.date));
    if (last - first >= 4 * DAY) { const f = fit(win); if (f) return f.at(last); }
  }
  const prior = ws.filter((w) => w.date < end.getTime());
  if (!prior.length) return data.profile ? data.profile.startKg : 75;
  const latest = prior[prior.length - 1];
  const recent = windowOf(ws, addDays(sod(latest.date), -2), end);
  return recent.reduce((a, w) => a + w.kg, 0) / recent.length;
}
function weeklyLossRate(day = new Date(), windowDays = 21) {
  const end = addDays(sod(day), 1), w = windowOf(data.weights, addDays(sod(day), -(windowDays - 1)), end);
  if (w.length < 3) return null;
  const first = Math.min(...w.map((x) => x.date)), last = Math.max(...w.map((x) => x.date));
  if (last - first < 6 * DAY) return null;
  const f = fit(w); return f ? -f.slope * 7 : null;
}
const plannedWeight = (p, day) => Math.max(p.goalKg, p.startKg - (p.rate * daysBetween(p.startDate, day)) / 7);
const planGoalDate = (p) => addDays(sod(p.startDate), Math.max(0, Math.ceil(((p.startKg - p.goalKg) / p.rate) * 7)));
function eta(cur, goal, rate) {
  if (cur <= goal) return sod(new Date());
  if (!rate || rate <= 0.02) return null;
  const days = Math.ceil(((cur - goal) / rate) * 7);
  return days >= 3 * 365 ? null : addDays(sod(new Date()), days);
}
function statusOf(cur, planned, goal) {
  if (cur <= goal) return 'goal';
  if (cur < planned - TOL) return 'ahead';
  if (cur <= planned + TOL) return 'ontrack';
  return 'behind';
}
const STATUS = {
  ahead: { title: 'Ahead of schedule', short: 'Ahead', color: 'var(--good)', icon: 'ffwd' },
  ontrack: { title: 'On schedule', short: 'On track', color: 'var(--info)', icon: 'checkc' },
  behind: { title: 'Behind schedule', short: 'Behind', color: 'var(--warn)', icon: 'warn' },
  goal: { title: 'Goal reached', short: 'Goal!', color: 'var(--gold)', icon: 'trophy' },
};

// ===========================================================================
// Derived data
// ===========================================================================
let D = { w: {}, f: {}, wo: {}, s: {}, trend: [], ledger: null };
const group = (items, f) => { const m = {}; for (const it of items) (m[dkey(f(it))] ||= []).push(it); return m; };
const weightKgOn = (day) => trendOn(day) ?? data.profile?.startKg ?? 75;

function summary(date) {
  const p = data.profile; if (!p) return null;
  const day = sod(date), k = dkey(day), w = weightKgOn(day);
  const b = bmr(w, p.heightCm, ageOn(p.birth, day), p.sex);
  const life = LIFE[p.life] || LIFE.light;
  const baseBurn = b * life.factor, mi = minIntake(p.sex);
  const baseBudget = Math.max(mi, baseBurn - dailyDeficit(p.rate));
  const wos = D.wo[k] || [], ss = D.s[k] || [], fs = D.f[k] || [];
  const workoutK = wos.reduce((a, x) => a + workoutKcal(x, w), 0);
  const stravaK = ss.reduce((a, x) => a + stravaKcal(x, w, b), 0);
  const steps = data.steps[k] || 0;
  let stepK = 0;
  if (p.countSteps) {
    const raw = extraStepKcal(steps, life.base, w, p.heightCm);
    const foot = wos.reduce((a, x) => a + workoutFootKm(x), 0) + ss.reduce((a, x) => a + (ONFOOT.includes(x.sport) ? x.dist / 1000 : 0), 0);
    stepK = Math.max(0, raw - walkNet(foot, w));
  }
  const s = {
    date: day, w, bmr: b, baseBurn, baseBudget, minIntake: mi, steps, stepK, workoutK, stravaK,
    eatBack: p.eatBack / 100, eaten: fs.reduce((a, x) => a + x.kcal, 0), foodCount: fs.length, sessions: wos.length + ss.length,
  };
  s.exercise = s.workoutK + s.stravaK;
  s.active = s.exercise + s.stepK;
  s.budget = s.baseBudget + s.eatBack * s.active;
  s.remaining = s.budget - s.eaten;
  s.deficit = s.baseBurn + s.active - s.eaten;
  return s;
}
function intakeWeeklyLoss() {
  const p = data.profile; if (!p) return null;
  const today = sod(new Date()), first = sod(p.startDate), defs = [];
  for (let i = 1; i <= 7; i++) {
    const d = addDays(today, -i); if (d < first) break;
    const s = summary(d); if (s && s.foodCount >= 2) defs.push(s.deficit);
  }
  return defs.length < 3 ? null : ((defs.reduce((a, b) => a + b, 0) / defs.length) * 7) / KCAL_PER_KG;
}
function forecast() {
  const a = weeklyLossRate(); if (a != null) return [a, 'from your weigh-ins'];
  const i = intakeWeeklyLoss(); if (i != null) return [i, 'from your food & activity logs'];
  return [data.profile.rate, 'from your plan (log more to personalize)'];
}

// ===========================================================================
// Ranks, themes, XP
// ===========================================================================
const TIERS = [
  ['Bronze', 0, 'shield', ['#e09a68', '#8c4a2f'], 'Every quest starts somewhere.'],
  ['Silver', 600, 'halfshield', ['#e6ebf2', '#7d8ba1'], 'Habits are forming.'],
  ['Gold', 1800, 'star', ['#ffe08a', '#d99a00'], 'Consistency is paying off.'],
  ['Platinum', 4000, 'hexagon', ['#9ff3e6', '#2e9c95'], "You show up even when it's hard."],
  ['Diamond', 7500, 'diamond', ['#9ae6ff', '#4c6fff'], 'Pressure made you sharper.'],
  ['Master', 12500, 'crown', ['#d59bff', '#7b2ff7'], "You've mastered the routine."],
  ['Grandmaster', 20000, 'medal', ['#ff8ba0', '#c9184a'], 'Few make it this far.'],
  ['Champion', 30000, 'trophy', ['#ffe66d', '#ff6b35'], 'Elite discipline.'],
  ['One Above All', 45000, 'sparkle', ['#ffd700', '#9b5de5'], 'Nobody outworks you.'],
].map(([name, min, ic, colors, tag], i) => ({ i, name, min, icon: ic, colors, tag }));
const THEMES = [
  ['ember', 'Ember', 0, ['#ff8a1f', '#ff3d54']], ['frost', 'Frost', 1, ['#6fc3ff', '#5b6cfa']],
  ['solar', 'Solar', 2, ['#ffc93c', '#ff8c1a']], ['aurora', 'Aurora', 3, ['#2edbb0', '#2d8cff']],
  ['prism', 'Prism', 4, ['#52d8f0', '#b46cff']], ['royal', 'Royal', 5, ['#a86bff', '#ff4fd8']],
  ['inferno', 'Inferno', 6, ['#ff2e63', '#ff9a3c']], ['nova', 'Nova', 7, ['#ffb347', '#ff5e7e']],
  ['ascended', 'Ascended', 8, ['#ffc300', '#9b5de5']],
].map(([id, name, tier, colors]) => ({ id, name, tier, colors }));
const roman = (n) => ['', 'I', 'II', 'III'][n] || String(n);
function rankFor(xp) {
  let t = TIERS[0];
  for (const x of TIERS) if (xp >= x.min) t = x;
  const next = TIERS[t.i + 1];
  if (!next) return { tier: t.i, t, div: null, xp, floor: t.min, next: null, nextTitle: null, title: t.name, progress: 1 };
  const step = Math.floor((next.min - t.min) / 3);
  const idx = Math.min(2, Math.floor((xp - t.min) / Math.max(1, step)));
  const div = 3 - idx, floor = t.min + idx * step, nextXp = idx === 2 ? next.min : floor + step;
  const nextTitle = idx === 2 ? (next.i === 8 ? next.name : `${next.name} III`) : `${t.name} ${roman(div - 1)}`;
  return { tier: t.i, t, div, xp, floor, next: nextXp, nextTitle, title: `${t.name} ${roman(div)}`, progress: clamp((xp - floor) / Math.max(1, nextXp - floor), 0, 1) };
}
const curTheme = () => {
  const r = rankFor(D.ledger ? D.ledger.total : 0);
  const t = THEMES.find((x) => x.id === data.themeId) || THEMES[0];
  return t.tier <= r.tier ? t : THEMES[0];
};
const ACH = [
  ['first_weigh_in', 'First Step', 'Log your first weigh-in', 'scale', 50], ['first_workout', 'Warmed Up', 'Log your first workout', 'run', 50],
  ['first_record', 'Hit Record', 'Record an activity with GPS', 'gps', 100], ['strava_linked', 'Synced Up', 'Import an activity from Strava', 'link', 100],
  ['streak_7', 'On Fire', '7-day activity streak', 'flame', 150], ['streak_30', 'Unstoppable', '30-day activity streak', 'flame', 500],
  ['budget_7', 'Dialed In', 'Finish 7 days inside your calorie budget', 'checkc', 200], ['steps_10k', '10K Club', '10,000 steps in one day', 'walk', 100],
  ['steps_20k', 'Road Warrior', '20,000 steps in one day', 'walk', 250], ['workouts_25', 'Regular', 'Complete 25 workouts', 'dumbbell', 300],
  ['workouts_100', 'Iron Will', 'Complete 100 workouts', 'medal', 1000], ['perfect_week', 'Perfect Week', 'Hit every planned workout in a week', 'checkc', 250],
  ['on_track_4', 'Locked In', '4 weekly check-ins on schedule', 'calendar', 300], ['lost_5', 'Down 5', 'Trend weight down 5 lb (2.3 kg)', 'down', 250],
  ['lost_10', 'Down 10', 'Trend weight down 10 lb (4.5 kg)', 'down', 500], ['lost_25', 'Down 25', 'Trend weight down 25 lb (11.3 kg)', 'bolt', 1500],
  ['goal_reached', 'Final Form', 'Reach your goal weight', 'trophy', 2500],
].map(([id, title, detail, ic, xp]) => ({ id, title, detail, icon: ic, xp }));

function computeLedger() {
  const p = data.profile;
  const L = { total: 0, events: [], ach: [], streak: 0, best: 0, weeksOnTrack: 0, budgetDays: 0, sessions: 0 };
  if (!p) return L;
  const events = [], un = {};
  const unlock = (id, d) => { if (!un[id]) un[id] = d; };
  const start = sod(p.startDate), today = sod(new Date());
  const lastIdx = Math.max(0, daysBetween(start, today));
  const plannedDays = new Set(data.plan.sessions.map((s) => s.d));
  let streak = 0, hit = 0, tot = 0;
  for (let i = 0; i <= lastIdx; i++) {
    const day = addDays(start, i), s = summary(day), isToday = i === lastIdx, k = dkey(day);
    const weighed = (D.w[k] || []).length > 0;
    const active = weighed || s.foodCount > 0 || s.sessions > 0;
    if (active) streak++; else if (!isToday) streak = 0;
    L.best = Math.max(L.best, streak);
    if (streak >= 7) unlock('streak_7', day);
    if (streak >= 30) unlock('streak_30', day);
    const parts = [];
    if (weighed) { parts.push(['Weigh-in', 20, 'scale']); unlock('first_weigh_in', day); }
    if (s.foodCount >= 2) parts.push(['Meals logged', 15, 'food']);
    if (!isToday && s.foodCount >= 2 && s.eaten >= s.minIntake - 50 && s.eaten <= s.budget + 50) {
      parts.push(['Stayed in budget', 25, 'checkc']); L.budgetDays++;
      if (L.budgetDays >= 7) unlock('budget_7', day);
    }
    if (s.steps >= p.stepGoal) {
      parts.push(['Step goal', 30, 'walk']);
      if (s.steps >= p.stepGoal * 1.5) parts.push(['Step goal ×1.5', 15, 'walk']);
    }
    if (s.steps >= 10000) unlock('steps_10k', day);
    if (s.steps >= 20000) unlock('steps_20k', day);
    if (s.sessions > 0) {
      parts.push(['Workout', Math.min(80, Math.floor(s.exercise / 5)) + Math.min(2, s.sessions) * 10, 'dumbbell']);
      L.sessions += s.sessions; unlock('first_workout', day);
      if (L.sessions >= 25) unlock('workouts_25', day);
      if (L.sessions >= 100) unlock('workouts_100', day);
      if ((D.wo[k] || []).some((w) => w.route && w.route.length > 1)) unlock('first_record', day);
    }
    if (plannedDays.has(isoDow(day))) { tot++; if (s.sessions > 0) { hit++; parts.push(['Plan day complete', 25, 'calendar']); } }
    for (const [t, xp, ic] of parts) events.push({ date: day.getTime(), title: t, xp, icon: ic });
    const base = parts.reduce((a, x) => a + x[1], 0);
    const bonus = Math.round(base * Math.min(streak, 30) * 0.01);
    if (bonus > 0) events.push({ date: day.getTime(), title: `Streak bonus · ${streak} days`, xp: bonus, icon: 'flame' });
    if ((i + 1) % 7 === 0) {
      const ws = addDays(day, -6), we = addDays(day, 1);
      const weighedWeek = data.weights.some((w) => w.date >= ws.getTime() && w.date < we.getTime());
      if (weighedWeek && currentEstimate(day) <= plannedWeight(p, day) + TOL) {
        L.weeksOnTrack++;
        events.push({ date: day.getTime(), title: `Week ${(i + 1) / 7} on schedule`, xp: 150, icon: 'calendar' });
        if (L.weeksOnTrack >= 4) unlock('on_track_4', day);
      }
      if (tot > 0 && hit === tot) { events.push({ date: day.getTime(), title: 'Perfect plan week', xp: 100, icon: 'checkc' }); unlock('perfect_week', day); }
      hit = 0; tot = 0;
    }
  }
  for (const pt of D.trend) {
    if (pt.date < start.getTime()) continue;
    const lost = p.startKg - pt.trend;
    if (lost >= 5 / LB) unlock('lost_5', pt.date);
    if (lost >= 10 / LB) unlock('lost_10', pt.date);
    if (lost >= 25 / LB) unlock('lost_25', pt.date);
    if (pt.trend <= p.goalKg) unlock('goal_reached', pt.date);
  }
  if (data.strava.length) unlock('strava_linked', Math.max(start.getTime(), Math.min(...data.strava.map((a) => a.date))));
  for (const a of ACH) if (un[a.id]) events.push({ date: new Date(un[a.id]).getTime(), title: `Achievement · ${a.title}`, xp: a.xp, icon: a.icon });
  L.ach = ACH.map((a) => ({ ...a, on: un[a.id] ? new Date(un[a.id]) : null }));
  L.streak = streak;
  L.total = events.reduce((a, e) => a + e.xp, 0);
  L.events = events.sort((a, b) => b.date - a.date);
  return L;
}
const xpOn = (day) => D.ledger.events.filter((e) => sameDay(e.date, day)).reduce((a, e) => a + e.xp, 0);

function rebuild(checkRank = true) {
  data.weights.sort((a, b) => a.date - b.date);
  D.w = group(data.weights, (x) => x.date);
  D.f = group(data.foods, (x) => x.date);
  D.wo = group(data.workouts, (x) => x.date);
  D.s = group(data.strava, (x) => x.date);
  D.trend = trendPts(data.weights);
  D.ledger = computeLedger();
  const r = rankFor(D.ledger.total);
  if (!checkRank) data.lastSeenTier = Math.max(data.lastSeenTier, r.tier);
  else if (data.profile && r.tier > data.lastSeenTier && !ui.pendingRank) ui.pendingRank = r;
}
function commit(checkRank = true) { rebuild(checkRank); save(); render(); }

// ===========================================================================
// Theme & accessibility
// ===========================================================================
const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16), c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const onColor = (colors) => (colors.reduce((a, c) => a + lum(c), 0) / colors.length > 0.55 ? '#111' : '#fff');
let baseFont = null;
function applyTheme() {
  const h = document.documentElement, a = data.a11y;
  const mode = a.theme === 'system' ? (darkMQ.matches ? 'dark' : 'light') : a.theme;
  h.dataset.theme = mode;
  h.classList.toggle('hc', !!a.hc || window.matchMedia('(prefers-contrast: more)').matches);
  h.classList.toggle('cb', !!a.cb);
  h.classList.toggle('bold', !!a.bold);
  h.classList.toggle('rm', !!a.rm);
  if (baseFont == null) {
    baseFont = 16;
    try {
      if (CSS.supports('font', '-apple-system-body')) {
        h.style.font = '-apple-system-body';
        baseFont = parseFloat(getComputedStyle(h).fontSize) || 17; // follows iPhone Dynamic Type
        h.style.font = '';
      }
    } catch (e) { /* ignore */ }
  }
  const px = baseFont * a.scale;
  h.style.fontSize = `${px}px`;
  h.classList.toggle('big', px >= 21);
  const t = curTheme();
  h.style.setProperty('--a1', t.colors[0]);
  h.style.setProperty('--a2', t.colors[1]);
  h.style.setProperty('--on-accent', onColor(t.colors));
}
darkMQ.addEventListener?.('change', () => data.a11y.theme === 'system' && render());
const buzz = (ms = 10) => { if (data.a11y.haptics && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) { /* ignore */ } };
const reduced = () => data.a11y.rm || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===========================================================================
// UI framework: render, toast, sheets, events
// ===========================================================================
const ui = { tab: 'today', day: sod(new Date()), pendingRank: null, ob: null, sheet: {} };
const app = $('#app');

let toastTimer = null;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.style.display = 'block';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.style.display = 'none'; }, 3200);
}

const sheets = [];
function openSheet(html, { dialog = false, label = 'Dialog', onClose } = {}) {
  const ov = document.createElement('div');
  ov.className = `overlay${dialog ? ' dialog' : ''}`;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(label)}">${dialog ? '' : '<div class="grab" aria-hidden="true"></div>'}${html}</div>`;
  document.body.appendChild(ov);
  const prev = document.activeElement;
  ov.addEventListener('click', (e) => { if (e.target === ov) closeSheet(); });
  sheets.push({ ov, prev, onClose });
  const f = ov.querySelector('[autofocus]') || ov.querySelector('input,select,textarea,button');
  if (f) setTimeout(() => f.focus({ preventScroll: true }), 30);
  return ov;
}
function closeSheet() {
  const s = sheets.pop(); if (!s) return;
  s.ov.remove();
  if (s.onClose) s.onClose();
  if (s.prev && document.contains(s.prev)) s.prev.focus({ preventScroll: true });
}
const topSheet = () => sheets[sheets.length - 1]?.ov;
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sheets.length) closeSheet(); });

function confirmBox(title, body, ok = 'OK', danger = false) {
  return new Promise((res) => {
    const ov = openSheet(`<h2>${esc(title)}</h2><p class="muted">${esc(body)}</p>
      <div class="row"><button class="btn ghost grow" data-x="no">Cancel</button><button class="btn grow ${danger ? 'danger' : ''}" data-x="yes">${esc(ok)}</button></div>`,
      { dialog: true, label: title, onClose: () => res(false) });
    ov.querySelector('[data-x=yes]').addEventListener('click', () => { const s = sheets.pop(); s.ov.remove(); res(true); });
    ov.querySelector('[data-x=no]').addEventListener('click', () => closeSheet());
  });
}

const A = {}; // click actions
const IN = {}; // input handlers
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-a]');
  if (!el || el.disabled) return;
  const fn = A[el.dataset.a];
  if (fn) { e.preventDefault(); fn(el.dataset, el, e); }
});
document.addEventListener('input', (e) => {
  const el = e.target.closest('[data-in]');
  if (el && IN[el.dataset.in]) IN[el.dataset.in](el.value, el, e);
});
document.addEventListener('change', (e) => {
  const el = e.target.closest('[data-ch]');
  if (el && IN[el.dataset.ch]) IN[el.dataset.ch](el.value, el, e);
});

// Small HTML helpers
const card = (inner, extra = '') => `<section class="card" ${extra}>${inner}</section>`;
const cardH = (title, ic, right = '') => `<div class="card-h">${icon(ic)}<h2>${esc(title)}</h2>${right}</div>`;
const stat = (label, value, caption = '', color = '') =>
  `<div class="stat"><div class="label">${esc(label)}</div><div class="v"${color ? ` style="color:${color}"` : ''}>${esc(value)}</div>${caption ? `<div class="c">${esc(caption)}</div>` : ''}</div>`;
const seg = (act, options, current) =>
  `<div class="seg" role="group">${options.map(([v, l]) => `<button type="button" data-a="${act}" data-v="${esc(v)}" aria-pressed="${String(v) === String(current)}">${esc(l)}</button>`).join('')}</div>`;
const sw = (act, label, on, sub = '') =>
  `<button type="button" class="switch" role="switch" aria-checked="${!!on}" data-a="${act}"><span class="grow"><b>${esc(label)}</b>${sub ? `<br><span class="small muted">${esc(sub)}</span>` : ''}</span><span class="tr" aria-hidden="true"></span></button>`;
const emblem = (t, size = 80, locked = false) =>
  `<div class="emblem${locked ? ' locked' : ''}" role="img" aria-label="${esc(t.name)} rank${locked ? ', locked' : ''}" style="width:${size}px;height:${size}px;background:linear-gradient(135deg,${t.colors[0]},${t.colors[1]});box-shadow:0 0 ${size * 0.25}px ${t.colors[0]}88">${icon(locked ? 'lock' : t.icon)}</div>`;
const chipStatus = (st) => { const s = STATUS[st]; return `<span class="chip" style="color:${s.color};background:color-mix(in srgb,${s.color} 15%,transparent)" aria-label="Status: ${s.title}">${icon(s.icon)}${s.short}</span>`; };
function entry({ ic, title, sub = '', val = '', tint = 'var(--a1)', del = '', delLabel = '', tap = '', action = '' }) {
  const inner = `<span class="bub" style="background:color-mix(in srgb,${tint} 16%,transparent);color:${tint}" aria-hidden="true">${icon(ic)}</span>
    <span class="grow"><span class="t">${esc(title)}</span>${sub ? `<br><span class="s">${esc(sub)}</span>` : ''}</span>${val ? `<span class="val">${esc(val)}</span>` : ''}`;
  return `<div class="entry">${tap ? `<button class="entry tap grow" ${tap}>${inner}</button>` : `<div class="entry grow">${inner}</div>`}${action}${del ? `<button class="icon-btn" ${del} aria-label="${esc(delLabel || `Delete ${title}`)}">${icon('trash')}</button>` : ''}</div>`;
}
function ringSVG(progress, colors, label, center) {
  const r = 62, c = 2 * Math.PI * r, p = clamp(progress, 0, 1);
  return `<div class="ring" role="img" aria-label="${esc(label)}"><svg viewBox="0 0 150 150" aria-hidden="true">
    <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:${colors[0]}"/><stop offset="1" style="stop-color:${colors[1]}"/></linearGradient></defs>
    <circle cx="75" cy="75" r="${r}" fill="none" style="stroke:var(--track)" stroke-width="16"/>
    ${p > 0.004 ? `<circle cx="75" cy="75" r="${r}" fill="none" stroke="url(#rg)" stroke-width="16" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - p)).toFixed(1)}"/>` : ''}
  </svg><div class="ctr" aria-hidden="true">${center}</div></div>`;
}
const bar = (p, label) => `<div class="bar" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(clamp(p, 0, 1) * 100)}"><i style="width:${Math.max(4, clamp(p, 0, 1) * 100)}%"></i></div>`;

// ===========================================================================
// Render
// ===========================================================================
function render() {
  applyTheme();
  if (!data.profile) { app.innerHTML = vOnboarding(); return; }
  const views = { today: vToday, plan: vPlan, progress: vProgress, rank: vRank, profile: vProfile };
  app.innerHTML = `<div class="page">${(views[ui.tab] || vToday)()}</div>${tabbar()}`;
  if (ui.pendingRank && !sheets.length) showRankUp();
}
function tabbar() {
  const t = (id, ic, label) => `<button class="tab" data-a="tab" data-v="${id}" ${ui.tab === id ? 'aria-current="page"' : ''}>${icon(ic, 'lg')}<span>${label}</span></button>`;
  const live = R.state !== 'idle';
  return `<nav class="tabbar" aria-label="Main"><div class="in">
    ${t('today', 'flame', 'Today')}${t('plan', 'calendar', 'Plan')}
    <button class="tab rec${live ? ' live' : ''}" data-a="openRec" aria-label="${live ? 'Return to recording' : 'Record an activity'}"><span class="dot">${icon(live ? 'timer' : 'rec', 'lg')}</span><span id="tabRecLabel">${live ? fclock(recMoving()) : 'Record'}</span></button>
    ${t('progress', 'chart', 'Progress')}${t('rank', 'trophy', 'Rank')}
  </div></nav>`;
}
A.tab = (d) => { ui.tab = d.v; buzz(); render(); window.scrollTo(0, 0); };

// ===========================================================================
// Onboarding
// ===========================================================================
function obDefaults() {
  const now = new Date();
  return { step: 0, name: '', sex: 'male', birth: `${now.getFullYear() - 21}-01-01`, units: 'imperial', inches: 69, cm: 175, weight: '', goal: '', rate: 1, life: 'light', stepGoal: 8000 };
}
function obCalc() {
  const o = ui.ob, u = o.units;
  const heightCm = u === 'imperial' ? o.inches * 2.54 : o.cm;
  const wv = parseNum(o.weight), gv = parseNum(o.goal);
  const w = wv == null ? null : kgFrom(wv, u), g = gv == null ? null : kgFrom(gv, u);
  const rate = paceOpts(u)[o.rate];
  const age = o.birth ? ageOn(o.birth, new Date()) : 0;
  const minHealthy = 18.5 * (heightCm / 100) ** 2;
  return { heightCm, w, g, rate, age, minHealthy, u };
}
function obError() {
  const o = ui.ob, c = obCalc();
  if (o.step === 1) {
    if (!o.name.trim()) return 'Enter your name.';
    if (!o.birth) return 'Enter your birthday.';
    if (c.age < 18) return "Final Form's calorie math is built for adults 18+.";
  }
  if (o.step === 2 && (c.w == null || c.w < 30 || c.w > 350)) return 'Enter your current weight.';
  if (o.step === 3) {
    if (c.w == null) return 'Enter your current weight first.';
    if (c.g == null) return 'Enter a goal weight.';
    if (c.g >= c.w) return 'Your goal should be below your current weight.';
    if (c.g < c.minHealthy - 0.05) return `That's below a healthy BMI (18.5) for your height. Choose ${W(c.minHealthy, c.u)} or more.`;
    if (c.rate > c.w * 0.01 + 0.0001) return 'That pace is more than 1% of your body weight per week. Pick a slower one.';
  }
  return null;
}
const logo = (size = 3.2) => `<div class="logo" role="img" aria-label="Final Form" style="font-size:${size}rem"><div class="a">FINAL</div><div>FORM</div><div class="rule" style="width:${size * 3.1}rem"></div></div>`;
function vOnboarding() {
  ui.ob ||= obDefaults();
  const o = ui.ob, c = obCalc(), err = obError(), last = 5;
  const bar6 = `<div class="steps-onb" role="img" aria-label="Step ${o.step + 1} of ${last + 1}">${[0, 1, 2, 3, 4, 5].map((i) => `<i class="${i <= o.step ? 'on' : ''}"></i>`).join('')}</div>`;
  const title = (t, s) => `<div><h1>${esc(t)}</h1><p class="muted" style="margin:4px 0 0">${esc(s)}</p></div>`;
  let body = '';
  if (o.step === 0) {
    const f = (ic, t) => `<div class="row" style="align-items:flex-start">${icon(ic)}<span>${esc(t)}</span></div>`;
    body = `<div style="height:20px"></div>${logo(3.4)}
      <p style="font-size:1.25rem;font-weight:700" class="muted">Lose weight on a real schedule — and level up while you do it.</p>
      <div class="page" style="gap:14px">${f('flame', 'A daily calorie budget built from your body, not a guess')}${f('rec', 'Record runs, walks and rides with GPS — start, pause, finish')}${f('chart', "Weekly projections that tell you if you're on schedule")}${f('trophy', 'Earn XP and climb from Bronze to One Above All')}${f('a11y', 'Dark mode, larger text, high contrast and color-blind safe colors')}</div>`;
  } else if (o.step === 1) {
    body = `${title('About you', 'Used for your metabolism (Mifflin–St Jeor).')}
      <div class="field"><label for="ob-name">First name</label><input id="ob-name" class="input" data-in="ob" data-k="name" value="${esc(o.name)}" autocomplete="given-name" autocapitalize="words"></div>
      <div class="field"><label>Sex</label>${seg('obSet', Object.entries(SEX).map(([k, v]) => [k, v]), o.sex).replace(/data-a="obSet"/g, 'data-a="obSet" data-k="sex"')}
        ${o.sex === 'other' ? '<span class="small muted">We use the midpoint of the male and female formulas.</span>' : ''}</div>
      <div class="field"><label for="ob-birth">Birthday</label><input id="ob-birth" type="date" class="input" data-in="ob" data-k="birth" value="${esc(o.birth)}" max="${dkey(new Date())}">
        <span class="small muted">Age ${c.age}</span></div>`;
  } else if (o.step === 2) {
    const hOpts = o.units === 'imperial'
      ? Array.from({ length: 43 }, (_, i) => 48 + i).map((i) => `<option value="${i}" ${i === o.inches ? 'selected' : ''}>${feetIn(i)}</option>`).join('')
      : Array.from({ length: 111 }, (_, i) => 120 + i).map((i) => `<option value="${i}" ${i === o.cm ? 'selected' : ''}>${i} cm</option>`).join('');
    body = `${title('Your body', "Height and today's weight.")}
      ${seg('obUnits', [['imperial', 'lb · ft'], ['metric', 'kg · cm']], o.units)}
      <div class="field"><label for="ob-h">Height</label><select id="ob-h" class="input" data-ch="obHeight">${hOpts}</select></div>
      <div class="field"><label for="ob-w">Current weight</label><div class="suffix"><input id="ob-w" class="input big" inputmode="decimal" data-in="ob" data-k="weight" value="${esc(o.weight)}" placeholder="0"><span>${wu(o.units)}</span></div>
        <span class="small muted">Tip: weigh in the morning, after the bathroom, before eating.</span></div>`;
  } else if (o.step === 3) {
    body = `${title('Your goal', "We'll build your schedule from this.")}
      <div class="field"><label for="ob-g">Goal weight</label><div class="suffix"><input id="ob-g" class="input big" inputmode="decimal" data-in="ob" data-k="goal" value="${esc(o.goal)}" placeholder="0"><span>${wu(o.units)}</span></div>
        <span class="small muted">Healthy minimum for your height: ${W(c.minHealthy, o.units)}</span></div>
      <div class="field"><label>Weekly pace</label>${seg('obSet', paceOpts(o.units).map((r, i) => [i, RATE(r, o.units).replace('/wk', '')]), o.rate).replace(/data-a="obSet"/g, 'data-a="obSet" data-k="rate"')}
        <span class="small muted">0.5–1% of body weight per week is the sustainable range. Faster loses more muscle.</span></div>
      <div class="field"><label id="life-l">Daily life (not counting workouts)</label><div role="radiogroup" aria-labelledby="life-l" class="page" style="gap:8px">
        ${Object.entries(LIFE).map(([k, l]) => `<button type="button" class="opt" role="radio" aria-checked="${o.life === k}" data-a="obSet" data-k="life" data-v="${k}"><span class="radio" aria-hidden="true"></span><span><b>${l.label}</b><br><span class="small muted">${l.detail}</span></span></button>`).join('')}
      </div></div>
      <div class="card"><div class="row"><b class="grow">Daily step goal</b>
        <button class="icon-btn tonal" data-a="obSteps" data-v="-500" aria-label="Decrease step goal">−</button>
        <b aria-live="polite">${num(o.stepGoal)}</b>
        <button class="icon-btn tonal" data-a="obSteps" data-v="500" aria-label="Increase step goal">+</button></div></div>`;
  } else if (o.step === 4) {
    const w = c.w ?? 80, g = c.g ?? w - 5;
    const b = bmr(w, c.heightCm, c.age, o.sex), maint = b * LIFE[o.life].factor, mi = minIntake(o.sex);
    const target = maint - dailyDeficit(c.rate), budget = Math.max(mi, target);
    const goalDate = addDays(new Date(), Math.ceil(((w - g) / c.rate) * 7));
    body = `${title('Your plan', `Here's the math, ${o.name.trim()}.`)}
      ${card(`<div class="label">Daily food budget</div><div style="font-size:2.6rem;font-weight:900;color:var(--a1)">${num(budget)} kcal</div><div class="small muted">+ 75% of what you burn in workouts and extra steps (adjustable).</div>`)}
      ${card(`<div class="stats">${stat('BMR', num(b), 'at rest')}${stat('Maintenance', num(maint), 'daily life')}${stat('Deficit', num(maint - budget), 'per day')}</div>`)}
      ${card(`<div class="stats">${stat('Pace', RATE(c.rate, o.units))}${stat('To lose', W(w - g, o.units))}${stat('Goal date', fday(goalDate), String(goalDate.getFullYear()))}</div>`)}
      ${target < mi ? card(`<div class="row" style="color:var(--warn)">${icon('shield')}<span>Your budget is held at the safe minimum (${num(mi)} kcal). Workouts and steps make up the rest of the deficit.</span></div>`) : ''}`;
  } else {
    body = `${title('Make it an app', 'Two quick things to get the most out of Final Form.')}
      ${card(`${cardH('Add to Home Screen', 'share')}${installSteps()}`)}
      ${card(`${cardH('Steps from your phone', 'walk')}<p class="small muted" style="margin:0">Web apps can't read Apple Health directly, so you type in your step total (from the Health app) whenever you like. It takes 5 seconds and earns calories + XP.</p>`)}
      ${card(`${cardH('Reminders', 'bell')}<p class="small muted" style="margin:0">Add weigh-in, step, food and weekly check-in reminders to your phone's Calendar any time from Profile → Reminders.</p>`)}`;
  }
  return `<div class="page" style="padding-bottom:140px">${bar6}${body}</div>
    <div class="obfoot"><div class="in">
      ${err && o.step > 0 ? `<div class="warnmsg" role="alert">${esc(err)}</div>` : ''}
      <div class="row">${o.step > 0 ? `<button class="icon-btn tonal" data-a="obBack" aria-label="Back">${icon('left')}</button>` : ''}
      <button class="btn grow" data-a="obNext" ${err && o.step > 0 ? 'disabled' : ''}>${o.step === last ? 'Start my quest' : o.step === 0 ? "Let's set it up" : 'Continue'}</button></div>
    </div></div>`;
}
function installSteps() {
  return `<ol class="small" style="margin:0;padding-left:20px;line-height:1.7">
    <li>Open this page in <b>Safari</b> on iPhone (Chrome on Android).</li>
    <li>Tap the <b>Share</b> button ${icon('share')} (Android: the ⋮ menu).</li>
    <li>Choose <b>Add to Home Screen</b>, then <b>Add</b>.</li>
    <li>Open <b>Final Form</b> from your Home Screen — it runs full screen like an app.</li></ol>`;
}
IN.ob = (v, el) => {
  ui.ob[el.dataset.k] = v;
  // Re-render only the footer state without stealing focus from the input.
  const err = obError(), foot = $('.obfoot .in');
  if (foot) {
    const btn = foot.querySelector('[data-a=obNext]'); if (btn) btn.disabled = !!(err && ui.ob.step > 0);
    let w = foot.querySelector('.warnmsg');
    if (err && ui.ob.step > 0) { if (!w) { w = document.createElement('div'); w.className = 'warnmsg'; w.setAttribute('role', 'alert'); foot.prepend(w); } w.textContent = err; } else if (w) w.remove();
  }
};
IN.obHeight = (v) => { if (ui.ob.units === 'imperial') ui.ob.inches = +v; else ui.ob.cm = +v; };
A.obSet = (d) => { ui.ob[d.k] = d.k === 'rate' ? +d.v : d.v; render(); };
A.obSteps = (d) => { ui.ob.stepGoal = clamp(ui.ob.stepGoal + +d.v, 2000, 30000); render(); };
A.obUnits = (d) => {
  const o = ui.ob; if (d.v === o.units) return;
  const conv = (s) => { const v = parseNum(s); return v == null ? s : dispW(kgFrom(v, o.units), d.v).toFixed(1); };
  o.weight = conv(o.weight); o.goal = conv(o.goal);
  if (d.v === 'metric') o.cm = clamp(Math.round(o.inches * 2.54), 120, 230); else o.inches = clamp(Math.round(o.cm / 2.54), 48, 90);
  o.units = d.v; render();
};
A.obBack = () => { ui.ob.step--; render(); window.scrollTo(0, 0); };
A.obNext = () => {
  const o = ui.ob;
  if (o.step < 5) { if (obError() && o.step > 0) return; o.step++; render(); window.scrollTo(0, 0); return; }
  const c = obCalc(), now = Date.now();
  data.profile = {
    name: o.name.trim(), sex: o.sex, birth: o.birth, heightCm: c.heightCm, startKg: c.w, goalKg: c.g, rate: c.rate,
    life: o.life, units: o.units, startDate: now, stepGoal: o.stepGoal, eatBack: 75, countSteps: true,
  };
  data.weights = [{ id: uid(), date: now, kg: c.w }];
  data.foods = []; data.workouts = []; data.steps = {}; data.plan = plans.starter(); data.themeId = 'ember'; data.lastSeenTier = 0;
  ui.ob = null; ui.tab = 'today'; ui.day = sod(new Date());
  commit(false); buzz(20);
};

// ===========================================================================
// Today
// ===========================================================================
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
function vToday() {
  const p = data.profile, s = summary(ui.day), r = rankFor(D.ledger.total), isToday = sameDay(ui.day, new Date());
  const h = new Date().getHours(), greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const streak = D.ledger.streak;
  let out = `<header class="header"><div class="grow"><div class="greet">${greet}</div><div class="name">${esc(p.name || "Let's go")}</div>
      <div class="streak ${streak > 0 ? 'on' : ''}">${icon('flame')}${streak}-day streak</div></div>
      <button class="rankchip" data-a="tab" data-v="rank" aria-label="Rank ${esc(r.title)}, ${num(r.xp)} XP">${emblem(r.t, 44)}<b class="small">${esc(r.title)}</b><span class="tiny muted">${num(r.xp)} XP</span></button>
      <button class="icon-btn tonal" data-a="tab" data-v="profile" aria-label="Profile and settings">${icon('person')}</button></header>`;
  const firstDay = sod(p.startDate);
  out += `<div class="daypick"><button class="icon-btn" data-a="day" data-v="-1" aria-label="Previous day" ${ui.day <= firstDay ? 'disabled' : ''}>${icon('left')}</button>
    <div class="mid" aria-live="polite"><b>${isToday ? 'Today' : fwd(ui.day)}</b><div class="tiny muted">${fdayY(ui.day)}</div></div>
    <button class="icon-btn" data-a="day" data-v="1" aria-label="Next day" ${isToday ? 'disabled' : ''}>${icon('right')}</button></div>`;
  if (!isStandalone() && localStorage.getItem(HINT_KEY) !== 'hide') {
    out += `<div class="banner">${icon('info')}<div class="grow"><b>Install Final Form</b><br>Tap Share ${icon('share')} → <b>Add to Home Screen</b> so it opens full screen like an app.</div><button class="icon-btn" data-a="hideHint" aria-label="Dismiss">${icon('close')}</button></div>`;
  }
  // Budget
  const over = s.remaining < 0, colors = over ? ['var(--bad)', 'var(--warn)'] : ['var(--a1)', 'var(--a2)'];
  let expl = `Base ${num(s.baseBudget)} + ${Math.round(s.eatBack * 100)}% of ${num(s.active)} active kcal from workouts & extra steps`;
  if (s.baseBudget <= s.minIntake + 0.5) expl += ` · base held at the ${num(s.minIntake)} kcal safe minimum`;
  out += card(`<div class="ringwrap">${ringSVG(s.budget > 0 ? s.eaten / s.budget : 0, colors,
      over ? `${num(-s.remaining)} calories over your ${num(s.budget)} calorie budget` : `${num(s.remaining)} calories left of your ${num(s.budget)} calorie budget`,
      `<span class="big">${num(Math.abs(s.remaining))}</span><span class="small" style="font-weight:800;color:${over ? 'var(--bad)' : 'var(--muted)'}">${over ? 'kcal over' : 'kcal left'}</span>`)}
    <div class="page" style="gap:10px;flex:1">${stat('Budget', num(s.budget))}${stat('Eaten', num(s.eaten))}${stat('Active', `+${num(s.active)}`, '', 'var(--good)')}</div></div>
    <div class="small muted" style="border-top:1px solid var(--stroke);padding-top:10px">${esc(expl)}</div>`);
  out += `<div class="actions">
    <button class="action" data-a="sheetWeight">${'<span class="bubble" style="background:linear-gradient(135deg,var(--a1),var(--a2));color:var(--on-accent)">' + icon('scale', 'lg') + '</span>'}Weigh in</button>
    <button class="action" data-a="sheetFood"><span class="bubble" style="background:linear-gradient(135deg,#22c77a,#1c8fe8)">${icon('food', 'lg')}</span>Food</button>
    <button class="action" data-a="sheetWorkout"><span class="bubble" style="background:linear-gradient(135deg,#a35cff,#5b6cfa)">${icon('dumbbell', 'lg')}</span>Workout</button></div>`;
  // Plan
  const planned = data.plan.sessions.filter((x) => x.d === isoDow(ui.day));
  if (planned.length) {
    const done = s.sessions > 0;
    out += card(`${cardH(isToday ? "Today's plan" : 'Planned', 'calendar', `<span class="small" style="font-weight:800;color:${done ? 'var(--good)' : 'var(--muted)'}">${done ? 'Done ✓' : '+25 XP'}</span>`)}
      ${planned.map((x) => { const e = exOf(x.ex); return entry({ ic: exIcon(e), title: e.name, sub: `${x.min} min · ~${num(exKcal(x.ex, x.min, s.w))} kcal`, action: done ? '' : `<button class="btn sm" data-a="sheetWorkout" data-ex="${x.ex}" data-min="${x.min}">Log</button>` }); }).join('')}`);
  }
  // Steps
  let cap;
  if (s.steps >= p.stepGoal) cap = `Goal smashed — +30 XP. Steps above ${num(LIFE[p.life].base)} add to your budget.`;
  else { const rem = p.stepGoal - s.steps; cap = `${num(rem)} to go · about a ${Math.round(((rem * strideKm(p.heightCm)) / 4.8) * 60)}-minute walk`; }
  out += card(`${cardH('Steps', 'walk', s.stepK > 0 ? `<span class="small" style="font-weight:800;color:var(--good)">+${num(s.stepK)} kcal</span>` : '')}
    <div class="row" style="align-items:baseline"><span style="font-size:2.1rem;font-weight:900">${num(s.steps)}</span><span class="muted">of ${num(p.stepGoal)} steps</span></div>
    ${bar(s.steps / Math.max(1, p.stepGoal), 'Step goal progress')}
    <div class="small muted">${esc(cap)}</div>
    <button class="btn ghost" data-a="sheetSteps">${icon('edit')}${s.steps ? 'Update steps' : 'Enter steps'}</button>`);
  // Weight
  const todays = D.w[dkey(ui.day)] || [], cur = currentEstimate(ui.day), plannedW = plannedWeight(p, ui.day), st = statusOf(cur, plannedW, p.goalKg);
  out += card(`${cardH('Weight', 'scale', chipStatus(st))}
    <div class="stats">${stat('Weigh-in', todays.length ? W(todays[todays.length - 1].kg, p.units) : '—')}${stat('Trend', W(cur, p.units))}${stat('Plan', W(plannedW, p.units))}</div>
    ${todays.length ? '' : `<button class="btn" data-a="sheetWeight">${icon('plus')}Weigh in · +20 XP</button>`}`);
  // Food
  const foods = [...(D.f[dkey(ui.day)] || [])].sort((a, b) => a.date - b.date);
  const MEALS = [['breakfast', 'Breakfast'], ['lunch', 'Lunch'], ['dinner', 'Dinner'], ['snack', 'Snack']];
  out += card(`${cardH('Food', 'food', `<button class="icon-btn" data-a="sheetFood" aria-label="Log food">${icon('plus')}</button>`)}
    ${foods.length ? MEALS.filter(([m]) => foods.some((f) => f.meal === m)).map(([m, label]) => `<div class="sect">${label}</div>${foods.filter((f) => f.meal === m).map((f) => entry({ ic: 'food', title: f.name, sub: f.protein ? `${Math.round(f.protein)} g protein` : '', val: `${num(f.kcal)} kcal`, tint: '#22c77a', del: `data-a="delFood" data-id="${f.id}"` })).join('')}`).join('')
      : '<p class="muted" style="margin:0">Nothing logged yet. Log 2+ meals for +15 XP.</p>'}`);
  // Workouts
  const k = dkey(ui.day), wos = D.wo[k] || [], ss = D.s[k] || [];
  out += card(`${cardH('Workouts', 'dumbbell', `${s.exercise > 0 ? `<span class="small" style="font-weight:800;color:var(--good)">+${num(s.exercise)} kcal</span>` : ''}<button class="icon-btn" data-a="sheetWorkout" aria-label="Log workout">${icon('plus')}</button>`)}
    ${!wos.length && !ss.length ? '<p class="muted" style="margin:0">No workouts yet. Tap Record to track a run, walk or ride.</p>' : ''}
    ${wos.map((w) => { const e = exOf(w.ex), recd = w.title || w.dist != null;
      const sub = recd ? `Recorded · ${fclock(w.min * 60000)}${w.dist ? ` · ${distStr(w.dist, p.units)} ${distU(p.units)}` : ''}${w.route && w.route.length > 1 ? ' · tap for route' : ''}` : `${Math.round(w.min)} min · ${w.kcal != null ? 'from watch' : 'estimated'}`;
      return entry({ ic: exIcon(e), title: w.title || e.name, sub, val: `${num(workoutKcal(w, s.w))} kcal`, tint: '#a35cff', del: `data-a="delWorkout" data-id="${w.id}"`, tap: recd ? `data-a="activity" data-id="${w.id}"` : '' }); }).join('')}
    ${ss.map((a) => entry({ ic: stravaIcon(a.sport), title: a.name, sub: ['Strava', fclock(a.moving * 1000), a.dist > 0 ? `${distStr(a.dist, p.units)} ${distU(p.units)}` : '', a.hr ? `${Math.round(a.hr)} bpm` : ''].filter(Boolean).join(' · '), val: `${num(stravaKcal(a, s.w, s.bmr))} kcal`, tint: 'var(--strava)' })).join('')}`);
  return out;
}
A.day = (d) => { ui.day = sod(addDays(ui.day, +d.v)); render(); };
A.hideHint = () => { localStorage.setItem(HINT_KEY, 'hide'); render(); };
A.delFood = async (d) => { if (await confirmBox('Delete this food?', 'This removes it from your log.', 'Delete', true)) { data.foods = data.foods.filter((f) => f.id !== d.id); commit(); } };
A.delWorkout = async (d) => { if (await confirmBox('Delete this workout?', 'Its calories and XP will be removed.', 'Delete', true)) { data.workouts = data.workouts.filter((w) => w.id !== d.id); commit(); } };
const entryDate = () => (sameDay(ui.day, new Date()) ? new Date() : new Date(sod(ui.day).getTime() + 12 * 3600000));
const dateLimits = () => `min="${toLocalInput(sod(data.profile.startDate))}" max="${toLocalInput(new Date())}"`;
function readWhen(ov) {
  const d = fromLocalInput(ov.querySelector('[name=when]').value);
  if (!d) return new Date();
  return new Date(clamp(d.getTime(), sod(data.profile.startDate).getTime(), Date.now()));
}

// ---- Weight sheet
A.sheetWeight = () => {
  const p = data.profile, last = data.weights[data.weights.length - 1];
  const ov = openSheet(`<h2>Weigh in</h2>
    <div class="field"><label for="sw-w">Weight</label><div class="suffix"><input id="sw-w" name="w" class="input big" inputmode="decimal" value="${last ? dispW(last.kg, p.units).toFixed(1) : ''}" autofocus><span>${wu(p.units)}</span></div></div>
    <div class="field"><label for="sw-when">When</label><input id="sw-when" name="when" type="datetime-local" class="input" value="${toLocalInput(entryDate())}" ${dateLimits()}></div>
    <p class="small muted" style="margin:0">Same time each day — after waking, before eating — gives the cleanest trend. Daily ups and downs are mostly water.</p>
    <button class="btn block" data-a="saveWeight">Save weigh-in</button>`, { label: 'Weigh in' });
  const inp = ov.querySelector('[name=w]'); inp.select?.();
};
A.saveWeight = () => {
  const ov = topSheet(), p = data.profile, v = parseNum(ov.querySelector('[name=w]').value);
  const kg = v == null ? null : kgFrom(v, p.units);
  if (kg == null || kg < 30 || kg > 350) { toast('Enter a valid weight.'); return; }
  data.weights.push({ id: uid(), date: readWhen(ov).getTime(), kg });
  closeSheet(); commit(); buzz(20); toast('Weigh-in saved · +20 XP');
};

// ---- Steps sheet
A.sheetSteps = () => {
  const cur = data.steps[dkey(ui.day)] || '';
  openSheet(`<h2>Steps · ${sameDay(ui.day, new Date()) ? 'today' : fday(ui.day)}</h2>
    <div class="field"><label for="ss-n">Total steps</label><input id="ss-n" name="n" class="input big" inputmode="numeric" value="${cur}" autofocus placeholder="0"></div>
    <div class="banner">${icon('info')}<div>On iPhone: open the <b>Health</b> app → <b>Browse</b> → <b>Activity</b> → <b>Steps</b> and copy today's total. Enter it again later to update — it replaces, not adds.</div></div>
    <button class="btn block" data-a="saveSteps">Save steps</button>`, { label: 'Enter steps' });
};
A.saveSteps = () => {
  const n = parseNum(topSheet().querySelector('[name=n]').value);
  if (n == null || n < 0 || n > 150000) { toast('Enter a step count.'); return; }
  data.steps[dkey(ui.day)] = Math.round(n);
  closeSheet(); commit(); buzz(15);
};

// ---- Food sheet
A.sheetFood = () => {
  const recent = []; const seen = new Set();
  for (const f of [...data.foods].sort((a, b) => b.date - a.date)) { const key = f.name.toLowerCase(); if (!seen.has(key)) { seen.add(key); recent.push(f); } if (recent.length >= 10) break; }
  const when = entryDate(), h = when.getHours(), meal = h < 11 ? 'breakfast' : h < 16 ? 'lunch' : h < 21 ? 'dinner' : 'snack';
  ui.sheet.meal = meal;
  openSheet(`<h2>Log food</h2>
    ${recent.length ? `<div class="label">Quick add</div><div class="chips">${recent.map((f, i) => `<button class="chipbtn" data-a="quickFood" data-i="${i}">${esc(f.name)} · ${num(f.kcal)}</button>`).join('')}</div>` : ''}
    <div class="field"><label for="sf-n">What did you eat?</label><input id="sf-n" name="n" class="input" autocapitalize="sentences" ${recent.length ? '' : 'autofocus'}></div>
    <div class="row"><div class="field grow"><label for="sf-k">Calories</label><input id="sf-k" name="k" class="input" inputmode="numeric"></div>
      <div class="field grow"><label for="sf-p">Protein (g, optional)</label><input id="sf-p" name="p" class="input" inputmode="numeric"></div></div>
    <div class="field"><label>Meal</label><div id="mealseg">${seg('meal', [['breakfast', 'Breakfast'], ['lunch', 'Lunch'], ['dinner', 'Dinner'], ['snack', 'Snack']], meal)}</div></div>
    <div class="field"><label for="sf-when">When</label><input id="sf-when" name="when" type="datetime-local" class="input" value="${toLocalInput(when)}" ${dateLimits()}></div>
    <button class="btn block" data-a="saveFood">Add food</button>`, { label: 'Log food' });
  ui.sheet.recent = recent;
};
A.quickFood = (d) => {
  const f = ui.sheet.recent[+d.i], ov = topSheet();
  ov.querySelector('[name=n]').value = f.name; ov.querySelector('[name=k]').value = Math.round(f.kcal);
  ov.querySelector('[name=p]').value = f.protein ? Math.round(f.protein) : '';
};
A.meal = (d) => { ui.sheet.meal = d.v; topSheet().querySelector('#mealseg').innerHTML = seg('meal', [['breakfast', 'Breakfast'], ['lunch', 'Lunch'], ['dinner', 'Dinner'], ['snack', 'Snack']], d.v); };
A.saveFood = () => {
  const ov = topSheet(), name = ov.querySelector('[name=n]').value.trim(), k = parseNum(ov.querySelector('[name=k]').value), pr = parseNum(ov.querySelector('[name=p]').value);
  if (!name) { toast('Enter what you ate.'); return; }
  if (k == null || k < 0 || k > 10000) { toast('Enter the calories.'); return; }
  data.foods.push({ id: uid(), date: readWhen(ov).getTime(), name, kcal: k, meal: ui.sheet.meal, protein: pr != null && pr >= 0 ? pr : null });
  closeSheet(); commit(); buzz(15);
};

// ---- Workout sheet (also used to add planned sessions)
function exSelect(selected) {
  return `<select name="ex" class="input" data-ch="woEx">${Object.entries(CATS).map(([c, [label]]) => `<optgroup label="${esc(label)}">${EX.filter((e) => e.cat === c).map((e) => `<option value="${e.id}" ${e.id === selected ? 'selected' : ''}>${esc(e.name)} · MET ${e.met}</option>`).join('')}</optgroup>`).join('')}</select>`;
}
A.sheetWorkout = (d = {}) => {
  ui.sheet.wo = { ex: d.ex || 'weights_mod', min: +(d.min || 45), watch: false, planDay: d.planday ? +d.planday : null };
  const plan = ui.sheet.wo.planDay != null;
  openSheet(`<h2>${plan ? `Add to ${ISO_DAY[ui.sheet.wo.planDay]}` : 'Log workout'}</h2>
    <div class="field"><label>Exercise</label>${exSelect(ui.sheet.wo.ex)}</div>
    <div class="field"><label for="wo-min">Duration</label><div class="row"><button class="icon-btn tonal" data-a="woMin" data-v="-5" aria-label="Five minutes less">−</button>
      <input id="wo-min" type="range" min="5" max="240" step="5" value="${ui.sheet.wo.min}" data-in="woRange" aria-valuetext="${ui.sheet.wo.min} minutes" class="grow">
      <button class="icon-btn tonal" data-a="woMin" data-v="5" aria-label="Five minutes more">+</button></div><b id="wo-minv" class="center">${ui.sheet.wo.min} min</b></div>
    ${plan ? '' : `<div id="wo-cal"></div>
    <div class="field"><label for="wo-when">When</label><input id="wo-when" name="when" type="datetime-local" class="input" value="${toLocalInput(entryDate())}" ${dateLimits()}></div>
    ${data.strava.length ? '<p class="small" style="color:var(--warn);margin:0">Strava activities import automatically — don\'t log them here too.</p>' : ''}`}
    <div id="wo-est" class="small" style="color:var(--good);font-weight:800"></div>
    <button class="btn block" data-a="saveWorkout">${plan ? 'Add to plan' : 'Add workout'}</button>`, { label: plan ? 'Add planned session' : 'Log workout' });
  woRefresh();
};
function woRefresh() {
  const ov = topSheet(); if (!ov) return;
  const wo = ui.sheet.wo, w = weightKgOn(new Date()), e = exOf(wo.ex), est = exKcal(wo.ex, wo.min, w);
  ov.querySelector('#wo-minv').textContent = `${wo.min} min`;
  const r = ov.querySelector('#wo-min'); r.value = wo.min; r.setAttribute('aria-valuetext', `${wo.min} minutes`);
  const cal = ov.querySelector('#wo-cal');
  if (cal) {
    if (!cal.dataset.ready) {
      cal.dataset.ready = '1';
      cal.innerHTML = `<div class="field"><label>Calories</label><div id="wo-seg"></div></div><div id="wo-watch" class="field" hidden><label for="wo-wk">Active calories from your watch</label><input id="wo-wk" name="wk" class="input" inputmode="numeric"><span class="small muted">Use ACTIVE calories (Active Energy), not total.</span></div>`;
    }
    cal.querySelector('#wo-seg').innerHTML = seg('woWatch', [['0', 'Estimate'], ['1', 'From my watch']], wo.watch ? '1' : '0');
    cal.querySelector('#wo-watch').hidden = !wo.watch;
  }
  ov.querySelector('#wo-est').textContent = wo.watch ? '' : `≈ ${num(est)} kcal above resting · MET ${e.met} × ${w.toFixed(1)} kg × ${(wo.min / 60).toFixed(2)} h`;
}
IN.woEx = (v) => { ui.sheet.wo.ex = v; woRefresh(); };
IN.woRange = (v) => { ui.sheet.wo.min = +v; woRefresh(); };
A.woMin = (d) => { ui.sheet.wo.min = clamp(ui.sheet.wo.min + +d.v, 5, 240); woRefresh(); };
A.woWatch = (d) => { ui.sheet.wo.watch = d.v === '1'; woRefresh(); };
A.saveWorkout = () => {
  const ov = topSheet(), wo = ui.sheet.wo;
  if (wo.planDay != null) {
    data.plan = { name: 'Custom', sessions: [...data.plan.sessions, { id: uid(), d: wo.planDay, ex: wo.ex, min: wo.min }] };
    closeSheet(); commit(); return;
  }
  let kcal = null;
  if (wo.watch) { kcal = parseNum(ov.querySelector('[name=wk]').value); if (kcal == null || kcal < 0 || kcal > 5000) { toast('Enter the active calories.'); return; } }
  data.workouts.push({ id: uid(), date: readWhen(ov).getTime(), ex: wo.ex, min: wo.min, kcal });
  closeSheet(); commit(); buzz(20);
};

// ---- Activity detail
A.activity = (d) => {
  const w = data.workouts.find((x) => x.id === d.id); if (!w) return;
  const u = data.profile.units, secs = w.min * 60, spd = w.dist != null && secs > 0 ? w.dist / secs : null, ride = w.ex.startsWith('cycle');
  openSheet(`<h2>${esc(w.title || exOf(w.ex).name)}</h2><div class="muted small">${fwd(w.date)}, ${fdayY(w.date)} · ${ftime(new Date(w.date).getHours(), new Date(w.date).getMinutes())}</div>
    ${w.route && w.route.length > 1 ? `<div style="height:220px;border-radius:22px;overflow:hidden;border:1px solid var(--stroke)">${routeSVG(w.route, false)}</div>` : ''}
    <div class="stats">${stat('Time', fclock(secs * 1000))}${w.dist != null ? stat('Distance', `${distStr(w.dist, u)} ${distU(u)}`) : ''}${stat('Calories', num(w.kcal ?? workoutKcal(w, weightKgOn(w.date))), 'above resting', 'var(--good)')}</div>
    ${w.dist != null ? `<div class="stats two">${ride ? stat('Avg speed', `${speedStr(spd || 0, u)} ${speedU(u)}`) : stat('Avg pace', `${paceStr(spd, u)} ${paceU(u)}`)}${stat('Elev gain', elevStr(w.gain || 0, u))}</div>` : ''}
    <button class="btn ghost block" data-a="closeSheet">Done</button>`, { label: 'Activity details' });
};
A.closeSheet = () => closeSheet();

// ===========================================================================
// Plan
// ===========================================================================
function vPlan() {
  const p = data.profile, w = weightKgOn(new Date());
  const weekly = data.plan.sessions.reduce((a, s) => a + exKcal(s.ex, s.min, w), 0);
  const extra = (weekly * (1 - p.eatBack / 100)) / KCAL_PER_KG;
  const today = sod(new Date()), monday = addDays(today, -(isoDow(today) - 1));
  let out = `<div class="row"><h1 class="grow">Workout plan</h1><button class="icon-btn tonal" data-a="templates" aria-label="Plan templates">${icon('calendar')}</button></div>`;
  out += card(`<div class="label" style="color:var(--a1)">${esc(data.plan.name)}</div>
    <div class="stats">${stat('Sessions', `${data.plan.sessions.length}/wk`)}${stat('Planned burn', `${num(weekly)} kcal`, 'per week')}${stat('Extra loss', W(extra, p.units, 2), `if you keep ${100 - p.eatBack}%`)}</div>
    <div class="small muted">Your base budget already creates the deficit for your pace. Workouts raise your budget — the part you don't eat back speeds things up.</div>`);
  for (let i = 0; i < 7; i++) {
    const day = addDays(monday, i), dow = isoDow(day), sessions = data.plan.sessions.filter((s) => s.d === dow);
    const sum = summary(day), done = sum && sum.sessions > 0, isToday = sameDay(day, today), past = day < today;
    const started = day >= sod(p.startDate), canLog = !done && started && day <= new Date();
    const badge = done ? `<span class="chip" style="color:var(--good)">${icon('checkc')}Done</span>`
      : sessions.length && past && started ? '<span class="chip muted">Missed</span>' : !sessions.length ? '<span class="small muted">Rest day</span>' : '';
    out += card(`<div class="row"><div class="grow"><b style="color:${isToday ? 'var(--a1)' : 'inherit'}">${ISO_DAY[dow]}</b><div class="tiny muted">${isToday ? 'Today · ' : ''}${fday(day)}</div></div>${badge}
        <button class="icon-btn" data-a="sheetWorkout" data-planday="${dow}" aria-label="Add a session on ${ISO_DAY[dow]}">${icon('plus')}</button></div>
      ${sessions.map((s) => { const e = exOf(s.ex); return entry({ ic: exIcon(e), title: e.name, sub: `${s.min} min · ~${num(exKcal(s.ex, s.min, w))} kcal`,
        action: canLog ? `<button class="btn sm" data-a="logPlanned" data-ex="${s.ex}" data-min="${s.min}" data-day="${day.getTime()}">Log</button>` : '',
        del: `data-a="delSession" data-id="${s.id}"`, delLabel: `Remove ${e.name} from ${ISO_DAY[dow]}` }); }).join('')}`, 'style="padding:12px 12px 12px 16px;gap:6px"');
  }
  out += '<p class="small muted">Any workout logged on a planned day — including a recorded activity or one from Strava — completes it.</p>';
  return out;
}
A.logPlanned = (d) => { ui.day = sod(+d.day); A.sheetWorkout({ ex: d.ex, min: d.min }); };
A.delSession = (d) => { data.plan = { name: 'Custom', sessions: data.plan.sessions.filter((s) => s.id !== d.id) }; commit(); };
A.templates = () => {
  openSheet(`<h2>Plan templates</h2>${Object.entries(plans).map(([k, f]) => { const t = f(); return `<button class="lrow" data-a="useTemplate" data-v="${k}"><span class="grow"><b>${esc(t.name)}</b><br><span class="small muted">${t.sessions.map((s) => exOf(s.ex).name.split(',')[0]).join(' · ')}</span></span>${icon('right')}</button>`; }).join('')}
    <button class="lrow" data-a="useTemplate" data-v="clear"><span class="grow" style="color:var(--bad)"><b>Clear plan</b></span></button>`, { label: 'Plan templates' });
};
A.useTemplate = async (d) => {
  closeSheet();
  const clear = d.v === 'clear', t = clear ? { name: 'Custom', sessions: [] } : plans[d.v]();
  if (await confirmBox('Replace your plan?', clear ? 'This removes every planned session.' : `This replaces your weekly sessions with "${t.name}".`, 'Replace')) { data.plan = t; commit(); }
};

// ===========================================================================
// Progress
// ===========================================================================
function chartSVG(p) {
  const u = p.units, W0 = 340, H0 = 220, L = 36, Rr = 8, T = 10, Bm = 24;
  const weigh = data.weights.map((w) => [w.date, dispW(w.kg, u)]);
  const trend = D.trend.map((t) => [t.date, dispW(t.trend, u)]);
  const plan = [[p.startDate, dispW(p.startKg, u)], [planGoalDate(p).getTime(), dispW(p.goalKg, u)]];
  const cur = currentEstimate(), [rate] = forecast(), e = eta(cur, p.goalKg, rate);
  const proj = e && cur > p.goalKg ? [[Date.now(), dispW(cur, u)], [e.getTime(), dispW(p.goalKg, u)]] : [];
  const goal = dispW(p.goalKg, u), all = [...weigh, ...trend, ...plan, ...proj];
  let minT = Math.min(...all.map((x) => x[0])), maxT = Math.max(...all.map((x) => x[0]));
  if (maxT - minT < DAY) maxT = minT + 7 * DAY;
  let minV = Math.min(goal, ...all.map((x) => x[1])), maxV = Math.max(goal, ...all.map((x) => x[1]));
  const pad = Math.max(1.5, (maxV - minV) * 0.08); minV -= pad; maxV += pad;
  const X = (t) => L + ((t - minT) / (maxT - minT)) * (W0 - L - Rr), Y = (v) => T + ((maxV - v) / (maxV - minV)) * (H0 - T - Bm);
  const line = (pts) => pts.map((q, i) => `${i ? 'L' : 'M'}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join('');
  let g = '';
  for (let i = 0; i <= 4; i++) {
    const v = maxV - ((maxV - minV) * i) / 4, y = Y(v);
    g += `<line x1="${L}" x2="${W0 - Rr}" y1="${y}" y2="${y}" style="stroke:var(--track)" stroke-width="1"/><text x="${L - 6}" y="${y + 3.5}" text-anchor="end" font-size="10" style="fill:var(--muted)">${v.toFixed(0)}</text>`;
  }
  for (let i = 0; i <= 3; i++) {
    const t = minT + ((maxT - minT) * i) / 3, x = X(t);
    g += `<text x="${clamp(x, L + 12, W0 - 22)}" y="${H0 - 6}" text-anchor="middle" font-size="10" style="fill:var(--muted)">${fday(t)}</text>`;
  }
  const gy = Y(goal);
  return `<svg viewBox="0 0 ${W0} ${H0}" aria-hidden="true">${g}
    <line x1="${L}" x2="${W0 - Rr}" y1="${gy}" y2="${gy}" style="stroke:var(--good)" stroke-width="1.2" stroke-dasharray="3 3" opacity=".8"/>
    <text x="${L + 4}" y="${gy - 4}" font-size="10" font-weight="800" style="fill:var(--good)">Goal</text>
    <path d="${line(plan)}" fill="none" style="stroke:var(--muted)" stroke-width="2" stroke-dasharray="6 5"/>
    ${proj.length ? `<path d="${line(proj)}" fill="none" style="stroke:var(--good)" stroke-width="2.2" stroke-dasharray="1.5 5" stroke-linecap="round"/>` : ''}
    ${weigh.map((q) => `<circle cx="${X(q[0]).toFixed(1)}" cy="${Y(q[1]).toFixed(1)}" r="2.6" style="fill:var(--muted)"/>`).join('')}
    ${trend.length ? `<path d="${line(trend)}" fill="none" style="stroke:var(--a1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${X(trend[trend.length - 1][0])}" cy="${Y(trend[trend.length - 1][1])}" r="5" style="fill:var(--a1)"/>` : ''}
    <text x="${W0 - Rr}" y="${T + 8}" text-anchor="end" font-size="10" style="fill:var(--muted)">${wu(u)}</text></svg>`;
}
function vProgress() {
  const p = data.profile, u = p.units, cur = currentEstimate(), planned = plannedWeight(p, new Date()), st = statusOf(cur, planned, p.goalKg), S = STATUS[st], gap = cur - planned;
  let detail;
  if (st === 'goal') detail = `Trend weight ${W(cur, u)} is at or below your goal. You reached your final form.`;
  else if (st === 'ahead') detail = `${W(-gap, u)} ahead of plan (${W(planned, u)}). Keep doing what you're doing.`;
  else if (st === 'ontrack') detail = `Within 1 lb of plan (${W(planned, u)}). Right where you should be.`;
  else {
    const kpd = (gap * KCAL_PER_KG) / 7, ps = kcalPerStep(cur, p.heightCm), steps = ps > 0 ? Math.round(kpd / ps / 500) * 500 : 0;
    detail = `${W(gap, u)} behind plan. To catch up this week: about ${num(kpd)} kcal/day less, or ~${num(steps)} extra steps/day.`;
  }
  const [rate, source] = forecast(), e = eta(cur, p.goalKg, rate), actual = weeklyLossRate(), intake = intakeWeeklyLoss();
  let out = '<h1>Progress</h1>';
  out += card(`<div class="row" style="align-items:flex-start"><span class="bub" style="width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none;color:${S.color};background:color-mix(in srgb,${S.color} 15%,transparent)" aria-hidden="true">${icon(S.icon, 'lg')}</span>
    <div class="grow"><h2 style="font-size:1.3rem">${S.title}</h2><div class="muted">${esc(detail)}</div></div></div>`);
  const summaryText = `Weight chart. Started at ${W(p.startKg, u)}, trend now ${W(cur, u)}, goal ${W(p.goalKg, u)}${e ? `, projected to reach it ${fdayY(e)}` : ''}.`;
  out += card(`${cardH('Weight', 'chart')}<div class="chart" role="img" aria-label="${esc(summaryText)}">${chartSVG(p)}</div>
    <div class="legend" aria-hidden="true"><span><i style="background:var(--a1)"></i>Trend</span><span><i style="background:var(--muted)"></i>Plan</span><span><i style="background:var(--good)"></i>Projection</span><span><i style="background:var(--muted);width:6px;height:6px;border-radius:50%"></i>Weigh-ins</span></div>`);
  out += card(`${cardH('Projected weight loss', 'chart')}
    <div class="stats">${stat('Plan', RATE(p.rate, u))}${stat('Actual', actual == null ? '—' : RATE(actual, u), actual == null ? 'need 3+ weigh-ins over a week' : 'last 3 weeks')}${stat('From logs', intake == null ? '—' : RATE(intake, u), intake == null ? 'log food 3+ days' : 'last 7 days')}</div>
    <div class="stats" style="border-top:1px solid var(--stroke);padding-top:12px">${stat('Start', W(p.startKg, u))}${stat('Lost', W(Math.max(0, p.startKg - cur), u), '', 'var(--good)')}${stat('To go', W(Math.max(0, cur - p.goalKg), u))}</div>
    <div class="stats two" style="border-top:1px solid var(--stroke);padding-top:12px">${stat('Plan goal date', fdayY(planGoalDate(p)))}${stat('Projected', e ? fdayY(e) : '—', source)}</div>`);
  // Weekly recap
  const first = sod(p.startDate), today = sod(new Date()); let weeks = '';
  for (let wk = 0; wk < 6; wk++) {
    const end = addDays(today, -7 * wk); if (end < first) break;
    let start = addDays(end, -6); if (start < first) start = first;
    const eaten = []; let steps = 0, sd = 0, ses = 0;
    for (let d = start; d <= end; d = addDays(d, 1)) { const s = summary(d); if (s.foodCount >= 2) eaten.push(s.eaten); if (s.steps > 0) { steps += s.steps; sd++; } ses += s.sessions; }
    const before = trendOn(addDays(start, -1)) ?? p.startKg, after = trendOn(end), ch = after == null ? null : dispW(after - before, u);
    weeks += `<div style="padding:8px 0;border-bottom:1px solid var(--stroke)"><div class="row"><b class="grow">${fday(start)} – ${fday(end)}</b><b style="color:${(ch ?? 0) <= 0 ? 'var(--good)' : 'var(--warn)'}">${ch == null ? '—' : signed(ch)} ${wu(u)}</b></div>
      <div class="small muted">${eaten.length ? num(eaten.reduce((a, b) => a + b, 0) / eaten.length) : '—'} kcal/day · ${sd ? num(steps / sd) : '—'} steps/day · ${ses} workouts</div></div>`;
  }
  out += card(`${cardH('Weekly recap', 'calendar')}${weeks}`);
  const recent = [...data.weights].reverse().slice(0, 30);
  out += card(`${cardH('Weigh-ins', 'scale', `<span class="small muted">${data.weights.length} total</span>`)}
    ${recent.map((w, i) => entry({ ic: 'scale', title: W(w.kg, u), sub: `${fwd(w.date).slice(0, 3)}, ${fday(w.date)} · ${ftime(new Date(w.date).getHours(), new Date(w.date).getMinutes())}`,
      val: recent[i + 1] ? signed(dispW(w.kg - recent[i + 1].kg, u)) : '', del: `data-a="delWeight" data-id="${w.id}"`, delLabel: `Delete weigh-in from ${fday(w.date)}` })).join('')}`);
  return out;
}
A.delWeight = async (d) => {
  if (data.weights.length <= 1) { toast('Keep at least one weigh-in.'); return; }
  if (await confirmBox('Delete this weigh-in?', 'Your trend and XP will update.', 'Delete', true)) { data.weights = data.weights.filter((w) => w.id !== d.id); commit(); }
};

// ===========================================================================
// Rank
// ===========================================================================
function vRank() {
  const r = rankFor(D.ledger.total), L = D.ledger;
  let out = '<h1>Rank</h1>';
  out += card(`<div class="center page" style="gap:8px;align-items:center">${emblem(r.t, 116)}<h2 style="font-size:1.8rem">${esc(r.title)}</h2><div class="muted">${esc(r.t.tag)}</div>
      <b style="font-size:1.1rem;color:${r.t.colors[1]}">${num(r.xp)} XP</b></div>
    ${bar(r.progress, r.nextTitle ? `Progress to ${r.nextTitle}` : 'Max rank')}
    <div class="center small muted">${r.nextTitle ? `${num(r.next - r.xp)} XP to ${esc(r.nextTitle)}` : 'Maximum rank reached. Legendary.'}</div>`);
  out += card(`${cardH('Ranks', 'trophy')}<div class="ladder">${TIERS.map((t) => `<div class="t">${emblem(t, t.i === r.tier ? 60 : 46, t.i > r.tier)}<span style="${t.i === r.tier ? 'font-weight:900' : ''}">${t.name}</span><span class="muted">${num(t.min)}</span></div>`).join('')}</div>`);
  out += card(`<div class="stats">${stat('Streak', `${L.streak} days`, `best ${L.best}`)}${stat('Weeks on time', L.weeksOnTrack)}${stat('Workouts', L.sessions)}</div>
    <div class="stats">${stat('XP today', `+${num(xpOn(new Date()))}`, '', 'var(--good)')}${stat('Budget days', L.budgetDays)}${stat('Badges', `${L.ach.filter((a) => a.on).length}/${L.ach.length}`)}</div>`);
  const cur = curTheme();
  out += card(`${cardH('Reward themes', 'sparkle', '<span class="small muted">Rank up to unlock</span>')}<div class="swatches">${THEMES.map((t) => {
    const un = t.tier <= r.tier, sel = cur.id === t.id;
    return `<button class="sw" data-a="theme" data-v="${t.id}" ${un ? '' : 'disabled'} aria-pressed="${sel}" aria-label="${esc(t.name)} theme${un ? '' : `, unlocks at ${TIERS[t.tier].name}`}"><span class="g" style="background:linear-gradient(90deg,${t.colors[0]},${t.colors[1]})">${un ? (sel ? icon('check', 'lg') : '') : icon('lock')}</span>${esc(t.name)}<span class="tiny muted">${un ? 'Unlocked' : TIERS[t.tier].name}</span></button>`;
  }).join('')}</div>`);
  out += card(`${cardH('Achievements', 'medal')}<div class="grid2">${L.ach.map((a) => `<div class="ach${a.on ? ' on' : ''}"><div class="row"><span class="bub" style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;${a.on ? 'background:linear-gradient(135deg,var(--a1),var(--a2));color:var(--on-accent)' : 'background:var(--track);color:var(--muted)'}" aria-hidden="true">${icon(a.icon)}</span><span class="grow"></span><b class="small" style="color:${a.on ? 'var(--good)' : 'var(--muted)'}">+${a.xp}</b></div>
      <b>${esc(a.title)}</b><span class="small muted">${esc(a.detail)}</span><span class="tiny" style="font-weight:800;color:${a.on ? 'var(--good)' : 'var(--muted)'}">${a.on ? `Unlocked ${fday(a.on)}` : 'Locked'}</span></div>`).join('')}</div>`);
  const rule = (ic, t, xp) => `<div class="row" style="min-height:36px">${icon(ic)}<span class="grow">${t}</span><b>${xp}</b></div>`;
  out += card(`${cardH('How to earn XP', 'info')}${rule('scale', 'Weigh in', '+20')}${rule('food', 'Log 2+ meals', '+15')}${rule('checkc', 'Finish a day inside budget (never below the safe minimum)', '+25')}${rule('walk', 'Hit your step goal (+15 more at 1.5×)', '+30')}${rule('dumbbell', 'Workouts: 1 XP per 5 kcal + 10 per session', '≤100')}${rule('calendar', 'Complete a planned workout day', '+25')}${rule('flame', 'Streak bonus: +1% per streak day', '≤30%')}${rule('calendar', 'Weekly check-in on schedule', '+150')}${rule('checkc', 'Perfect plan week', '+100')}`);
  out += card(`${cardH('Recent XP', 'refresh')}${L.events.length ? L.events.slice(0, 25).map((e) => entry({ ic: e.icon, title: e.title, sub: fday(e.date), val: `+${e.xp}`, tint: 'var(--good)' })).join('') : '<p class="muted" style="margin:0">Log a weigh-in, a meal or a workout to start earning.</p>'}`);
  return out;
}
A.theme = (d) => { data.themeId = d.v; save(); buzz(); render(); };
function showRankUp() {
  const r = ui.pendingRank, th = THEMES.find((t) => t.tier === r.tier && t.tier > 0);
  openSheet(`<div class="center page" style="align-items:center;gap:12px"><div class="label" style="letter-spacing:.3em">Rank up</div>${emblem(r.t, 140)}
    <h2 style="font-size:2rem">${esc(r.t.name)}</h2><div class="muted">${esc(r.t.tag)}</div>
    ${th ? `<div class="row chip" style="background:var(--card)"><span style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,${th.colors[0]},${th.colors[1]})"></span>New theme unlocked: ${esc(th.name)}</div>` : ''}
    <button class="btn block" data-a="closeSheet">Let's go</button></div>`, {
    dialog: true, label: `Rank up: ${r.t.name}`,
    onClose: () => { data.lastSeenTier = Math.max(data.lastSeenTier, r.tier); ui.pendingRank = null; save(); },
  });
  buzz(40);
}

// ===========================================================================
// Profile & settings
// ===========================================================================
function vProfile() {
  const p = data.profile, a = data.a11y, u = p.units, rem = data.rem, life = LIFE[p.life];
  const lrow = (label, value, act, extra = '') => `<button class="lrow" data-a="${act}" ${extra}><span class="grow">${esc(label)}</span><span class="v">${esc(value)}</span>${icon('right')}</button>`;
  let out = '<h1>Profile</h1>';
  out += card(`${cardH('Appearance & accessibility', 'a11y')}
    ${seg('a11yTheme', [['system', 'Auto'], ['dark', 'Dark'], ['light', 'Light']], a.theme)}
    <div class="field"><label for="a-scale">Text size · ${Math.round(a.scale * 100)}%</label><input id="a-scale" type="range" min="0.85" max="1.6" step="0.05" value="${a.scale}" data-ch="a11yScale" aria-valuetext="${Math.round(a.scale * 100)} percent"></div>
    ${sw('a11yHc', 'High contrast', a.hc, 'Stronger borders and brighter secondary text')}
    ${sw('a11yBold', 'Bold text', a.bold)}
    ${sw('a11yCb', 'Color-blind safe colors', a.cb, 'Blue/orange status colors instead of green/red')}
    ${sw('a11yRm', 'Reduce motion', a.rm, 'Turns off animations')}
    ${sw('a11yHaptics', 'Vibration feedback', a.haptics, 'Android only — iPhone web apps can’t vibrate')}
    <div class="small muted">Auto follows your phone's dark mode. Your phone's text size (Dynamic Type), reduce motion and increase contrast settings are respected too, and every control works with VoiceOver and TalkBack.</div>`);
  out += card(`${cardH('You', 'person')}
    ${lrow('Name', p.name || '—', 'editName')}${lrow('Sex', SEX[p.sex], 'editSex')}${lrow('Birthday', fdayY(new Date(`${p.birth}T12:00:00`)), 'editBirth')}${lrow('Height', heightStr(p.heightCm, u), 'editHeight')}
    ${seg('units', [['imperial', 'lb · ft'], ['metric', 'kg · cm']], u)}`);
  const cur = currentEstimate(), tooFast = p.rate > cur * 0.01 + 0.0001;
  out += card(`${cardH('Goal', 'flag')}
    ${lrow('Goal weight', W(p.goalKg, u), 'editGoal')}${lrow('Weekly pace', RATE(p.rate, u), 'editPace')}${lrow('Daily life', life.label, 'editLife')}
    <div class="lrow"><span class="grow">Started</span><span class="v">${fdayY(p.startDate)} at ${W(p.startKg, u)}</span></div>
    <div class="lrow"><span class="grow">Plan goal date</span><span class="v">${fdayY(planGoalDate(p))}</span></div>
    ${tooFast ? '<div class="small" style="color:var(--warn)">This pace is now more than 1% of your body weight per week. Consider slowing down to protect muscle.</div>' : ''}`);
  out += card(`${cardH('Daily budget', 'flame')}
    <div class="row"><span class="grow">Step goal</span><button class="icon-btn tonal" data-a="stepGoal" data-v="-500" aria-label="Decrease step goal">−</button><b aria-live="polite">${num(p.stepGoal)}</b><button class="icon-btn tonal" data-a="stepGoal" data-v="500" aria-label="Increase step goal">+</button></div>
    <div class="field"><label>Eat back exercise calories</label>${seg('eatBack', [[50, '50%'], [75, '75%'], [100, '100%']], p.eatBack)}</div>
    ${sw('countSteps', 'Earn calories from extra steps', p.countSteps)}
    <div class="small muted">Exercise estimates and fitness trackers tend to run high, so eating back 75% keeps you honest. Steps above ${num(life.base)} a day earn calories; steps inside recorded walks and runs are never counted twice.</div>`);
  out += card(`${cardH('Reminders', 'bell')}
    <div class="small muted">Web apps on iPhone can't schedule notifications by themselves, so Final Form adds repeating reminders to your phone's Calendar instead. They alert you like any calendar event.</div>
    <div class="row"><label class="grow" for="r-w">Weigh-in</label><input id="r-w" type="time" class="input" style="width:auto" value="${rem.weigh}" data-ch="rem" data-k="weigh"></div>
    <div class="row"><label class="grow" for="r-s">Step check</label><input id="r-s" type="time" class="input" style="width:auto" value="${rem.steps}" data-ch="rem" data-k="steps"></div>
    <div class="row"><label class="grow" for="r-f">Log your food</label><input id="r-f" type="time" class="input" style="width:auto" value="${rem.food}" data-ch="rem" data-k="food"></div>
    <div class="row"><label class="grow" for="r-wd">Weekly check-in</label><select id="r-wd" class="input" style="width:auto" data-ch="rem" data-k="weeklyDow">${WDAY.map((n, i) => `<option value="${i}" ${+rem.weeklyDow === i ? 'selected' : ''}>${n}</option>`).join('')}</select><input type="time" class="input" style="width:auto" value="${rem.weekly}" data-ch="rem" data-k="weekly" aria-label="Weekly check-in time"></div>
    <button class="btn" data-a="ics">${icon('calendar')}Add reminders to my Calendar</button>
    <div class="tiny muted">Opens a calendar file — tap <b>Add All</b>. To change times later, delete the old "Final Form" events and add again.</div>`);
  const cfg = stravaCfg(), tok = stravaTokens();
  out += card(`${cardH('Strava', 'link')}
    ${tok ? `<div class="lrow"><span class="grow">Athlete</span><span class="v">${esc(tok.athlete || 'Connected')}</span></div>
      <div class="lrow"><span class="grow">Last sync</span><span class="v">${data.stravaLastSync ? rel(data.stravaLastSync) : 'Never'}</span></div>
      <div class="lrow"><span class="grow">Activities imported</span><span class="v">${data.strava.length}</span></div>
      <div class="row"><button class="btn ghost grow" data-a="stravaSync">${icon('refresh')}Sync now</button><button class="link bad" data-a="stravaDisconnect">Disconnect</button></div>`
      : `<div class="small muted">Optional. Create a free API app at strava.com/settings/api, set its Authorization Callback Domain to <b>${esc(location.hostname || 'your site')}</b>, then paste the keys here. They stay on this phone.</div>
      <div class="field"><label for="s-id">Client ID</label><input id="s-id" class="input" inputmode="numeric" value="${esc(cfg.id || '')}" data-ch="scfg" data-k="id"></div>
      <div class="field"><label for="s-sec">Client Secret</label><input id="s-sec" class="input" type="password" autocomplete="off" value="${esc(cfg.secret || '')}" data-ch="scfg" data-k="secret"></div>
      <button class="btn" data-a="stravaConnect" style="background:linear-gradient(90deg,var(--strava),#ff8a3d);color:#fff">${icon('link')}Connect with Strava</button>`}
    <div class="tiny muted">Runs, rides, lifts and walks you record on Strava count toward your budget, plan and XP.</div>`);
  out += card(`${cardH('Install & backup', 'download')}
    ${isStandalone() ? `<div class="row" style="color:var(--good)">${icon('checkc')}<b>Installed on your Home Screen</b></div>` : installSteps()}
    <div class="small muted">Your data lives only on this phone. Export a backup now and then, especially before clearing Safari data.</div>
    <div class="row"><button class="btn ghost grow" data-a="exportData">${icon('download')}Export</button><button class="btn ghost grow" data-a="importData">${icon('upload')}Import</button></div>`);
  out += card(`${cardH('How the numbers work', 'info')}
    <details><summary>Calorie budget</summary><p class="small muted">BMR uses the Mifflin–St Jeor equation from your weight, height, age and sex. Daily-life burn is BMR × ${life.factor} (${life.label.toLowerCase()}). Your pace of ${RATE(p.rate, u)} needs a ${num(dailyDeficit(p.rate))} kcal/day deficit (7,700 kcal per kg of fat). The budget never drops below ${num(minIntake(p.sex))} kcal.</p></details>
    <details><summary>Workouts, runs & steps</summary><p class="small muted">Workouts use (MET − 1) × weight × hours from the Compendium of Physical Activities, so only calories above resting count. Recorded runs and walks use your real GPS distance with the ACSM equations plus climbing; rides use speed-based METs. Extra steps earn about ${kcalPerStep(weightKgOn(new Date()), p.heightCm).toFixed(3)} kcal each for your size.</p></details>
    <details><summary>Projections</summary><p class="small muted">Your trend weight comes from a regression over the last 14 days, so single weigh-ins and water swings don't throw it off. Projected weekly loss uses your weigh-in trend when there's enough data, otherwise your logged food and activity.</p></details>`);
  out += card(`<button class="link bad" data-a="reset" style="text-align:left">${icon('trash')} Reset all data</button>
    <div class="small muted">Final Form gives general estimates, not medical advice. Talk to a doctor before starting a diet if you have a health condition.</div>`);
  return out;
}
const rel = (t) => { const m = Math.round((Date.now() - t) / 60000); return m < 1 ? 'just now' : m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} h ago` : `${Math.round(m / 1440)} d ago`; };
const setA = (k, v) => { data.a11y[k] = v; save(); render(); };
A.a11yTheme = (d) => setA('theme', d.v);
IN.a11yScale = (v) => setA('scale', clamp(+v, 0.85, 1.6));
A.a11yHc = () => setA('hc', !data.a11y.hc);
A.a11yBold = () => setA('bold', !data.a11y.bold);
A.a11yCb = () => setA('cb', !data.a11y.cb);
A.a11yRm = () => setA('rm', !data.a11y.rm);
A.a11yHaptics = () => setA('haptics', !data.a11y.haptics);
const setP = (patch) => { Object.assign(data.profile, patch); commit(); };
A.units = (d) => { if (d.v !== data.profile.units) setP({ units: d.v, rate: nearestPace(data.profile.rate, d.v) }); };
A.stepGoal = (d) => setP({ stepGoal: clamp(data.profile.stepGoal + +d.v, 2000, 30000) });
A.eatBack = (d) => setP({ eatBack: +d.v });
A.countSteps = () => setP({ countSteps: !data.profile.countSteps });
function pickSheet(title, options, current, onPick) {
  ui.sheet.pick = onPick;
  openSheet(`<h2>${esc(title)}</h2><div role="radiogroup" aria-label="${esc(title)}">${options.map(([v, l, sub]) => `<button class="lrow" role="radio" aria-checked="${String(v) === String(current)}" data-a="pick" data-v="${esc(v)}"><span class="grow"><b>${esc(l)}</b>${sub ? `<br><span class="small muted">${esc(sub)}</span>` : ''}</span>${String(v) === String(current) ? icon('check') : ''}</button>`).join('')}</div>`, { label: title });
}
A.pick = (d) => { const f = ui.sheet.pick; closeSheet(); f && f(d.v); };
function inputSheet(title, label, value, { type = 'text', mode = '', suffix = '', min = '', max = '' } = {}, onSave) {
  ui.sheet.save = onSave;
  openSheet(`<h2>${esc(title)}</h2><div class="field"><label for="is-v">${esc(label)}</label><div class="suffix"><input id="is-v" name="v" class="input" type="${type}" ${mode ? `inputmode="${mode}"` : ''} ${min ? `min="${min}"` : ''} ${max ? `max="${max}"` : ''} value="${esc(value)}" autofocus>${suffix ? `<span>${esc(suffix)}</span>` : ''}</div></div>
    <button class="btn block" data-a="inputSave">Save</button>`, { label: title });
}
A.inputSave = () => { const v = topSheet().querySelector('[name=v]').value; const f = ui.sheet.save; if (f && f(v) !== false) closeSheet(); };
A.editName = () => inputSheet('Your name', 'First name', data.profile.name, {}, (v) => { if (!v.trim()) return false; setP({ name: v.trim() }); });
A.editSex = () => pickSheet('Sex', Object.entries(SEX), data.profile.sex, (v) => setP({ sex: v }));
A.editBirth = () => {
  const now = new Date(), max = `${now.getFullYear() - 18}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  inputSheet('Birthday', 'Birthday', data.profile.birth, { type: 'date', max }, (v) => { if (!v || ageOn(v, now) < 18) { toast('Final Form is for adults 18+.'); return false; } setP({ birth: v }); });
};
A.editHeight = () => {
  const p = data.profile;
  const opts = p.units === 'imperial' ? Array.from({ length: 43 }, (_, i) => 48 + i).map((i) => [i, feetIn(i)]) : Array.from({ length: 111 }, (_, i) => 120 + i).map((i) => [i, `${i} cm`]);
  pickSheet('Height', opts, p.units === 'imperial' ? Math.round(p.heightCm / 2.54) : Math.round(p.heightCm), (v) => setP({ heightCm: p.units === 'imperial' ? +v * 2.54 : +v }));
};
A.editGoal = () => {
  const p = data.profile, minH = 18.5 * (p.heightCm / 100) ** 2, ceiling = Math.min(currentEstimate(), p.startKg);
  inputSheet('Goal weight', `Goal (healthy minimum ${W(minH, p.units)})`, dispW(p.goalKg, p.units).toFixed(1), { mode: 'decimal', suffix: wu(p.units) }, (v) => {
    const n = parseNum(v); if (n == null) { toast('Enter a number.'); return false; }
    const kg = kgFrom(n, p.units);
    if (kg < minH - 0.05) { toast(`Choose ${W(minH, p.units)} or more.`); return false; }
    if (kg >= ceiling) { toast('Your goal should be below your current weight.'); return false; }
    setP({ goalKg: kg });
  });
};
A.editPace = () => { const p = data.profile; pickSheet('Weekly pace', paceOpts(p.units).map((r) => [r, RATE(r, p.units), r > currentEstimate() * 0.01 + 0.0001 ? 'More than 1% of body weight — not recommended' : '']), nearestPace(p.rate, p.units), (v) => setP({ rate: +v })); };
A.editLife = () => pickSheet('Daily life (not counting workouts)', Object.entries(LIFE).map(([k, l]) => [k, l.label, l.detail]), data.profile.life, (v) => setP({ life: v }));
IN.rem = (v, el) => { data.rem[el.dataset.k] = el.dataset.k === 'weeklyDow' ? +v : v; save(); };
A.reset = async () => {
  if (!(await confirmBox('Erase everything?', "This deletes your profile, logs and XP from this phone. It can't be undone.", 'Erase all data', true))) return;
  const a11y = data.a11y; data = blank(); data.a11y = a11y; ui.ob = null; ui.tab = 'today'; save(); rebuild(false); render();
};

// ---- Calendar reminders (.ics)
A.ics = () => {
  const p = data.profile, r = data.rem, now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}00Z`;
  const startAt = (hhmm, dow) => {
    const [h, m] = hhmm.split(':').map(Number); let d = new Date(); d.setHours(h, m, 0, 0);
    if (dow != null) { while (d.getDay() !== dow) d = addDays(d, 1); }
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(h)}${pad(m)}00`;
  };
  const url = location.href.split('?')[0];
  const ev = (id, title, desc, hhmm, rrule, dow) => [
    'BEGIN:VEVENT', `UID:final-form-${id}-${Date.now()}@finalform`, `DTSTAMP:${stamp}`, `DTSTART:${startAt(hhmm, dow)}`, 'DURATION:PT5M',
    `RRULE:${rrule}`, `SUMMARY:${title}`, `DESCRIPTION:${desc} Open Final Form: ${url}`, `URL:${url}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT',
  ].join('\r\n');
  const BYDAY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][+r.weeklyDow];
  const text = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Final Form//Reminders//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    ev('weigh', 'Final Form · Weigh in ⚖️', 'Before breakfast, same scale. +20 XP and keeps your streak alive.', r.weigh, 'FREQ=DAILY'),
    ev('steps', 'Final Form · Step check 👟', `Goal: ${num(p.stepGoal)} steps. Enter today's total from the Health app.`, r.steps, 'FREQ=DAILY'),
    ev('food', 'Final Form · Log your food 🍽️', 'Logging 2+ meals earns 15 XP; finishing inside budget earns 25 more.', r.food, 'FREQ=DAILY'),
    ev('weekly', 'Final Form · Weekly check-in 📈', 'See if you are on schedule and claim your weekly bonus.', r.weekly, `FREQ=WEEKLY;BYDAY=${BYDAY}`, +r.weeklyDow),
    'END:VCALENDAR'].join('\r\n');
  download('final-form-reminders.ics', text, 'text/calendar');
};
function download(name, text, type) {
  const blob = new Blob([text], { type }), url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
A.exportData = () => download(`final-form-backup-${dkey(new Date())}.json`, JSON.stringify(data), 'application/json');
A.importData = () => {
  const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'application/json,.json';
  inp.onchange = () => {
    const f = inp.files && inp.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = async () => {
      try {
        const d = JSON.parse(rd.result);
        if (!d || typeof d !== 'object' || !('weights' in d)) throw new Error('not a Final Form backup');
        if (!(await confirmBox('Restore this backup?', 'It replaces everything currently in the app.', 'Restore'))) return;
        const b = blank(); data = Object.assign(b, d, { a11y: Object.assign(b.a11y, d.a11y || {}), rem: Object.assign(b.rem, d.rem || {}) });
        save(); rebuild(false); render(); toast('Backup restored.');
      } catch (e) { toast(`Couldn't read that file: ${e.message}`); }
    };
    rd.readAsText(f);
  };
  inp.click();
};

// ===========================================================================
// Recorder (Start → Pause → Resume / Finish)
// ===========================================================================
const SPORTS = {
  run: { label: 'Run', ex: 'run_6', gps: true, max: 12.5, met: 9.8, icon: 'run' },
  walk: { label: 'Walk', ex: 'walk_moderate', gps: true, max: 4.5, met: 3.5, icon: 'walk' },
  hike: { label: 'Hike', ex: 'hike', gps: true, max: 4.5, met: 6.0, icon: 'walk' },
  ride: { label: 'Ride', ex: 'cycle_moderate', gps: true, max: 30, met: 6.8, icon: 'bike' },
  workout: { label: 'Workout', ex: 'weights_mod', gps: false, max: 0, met: 0, icon: 'dumbbell' },
};
const R = { state: 'idle', sport: 'run', ex: 'weights_mod', startedAt: null, banked: 0, segStart: null, dist: 0, gain: 0, route: [], acc: null, last: null, recent: [], alt: null, anchor: null, watch: null, lock: null, err: null, el: null, tick: null, restored: false };
const recMoving = () => R.banked + (R.segStart ? Date.now() - R.segStart : 0);
const haversine = (a, b) => {
  const toR = Math.PI / 180, dLat = (b[0] - a[0]) * toR, dLng = (b[1] - a[1]) * toR;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * toR) * Math.cos(b[0] * toR) * Math.sin(dLng / 2) ** 2;
  return 6371008.8 * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
};
function recKcal(w) {
  const sp = SPORTS[R.sport], min = recMoving() / 60000, km = R.dist / 1000;
  if (!sp.gps) return exKcal(R.ex, min, w);
  if (km < 0.1) return netMet(sp.met, w, min);
  const climb = climbKcal(R.gain, w);
  if (R.sport === 'run') return runNet(km, w) + climb;
  if (R.sport === 'ride') return netMet(rideMet((R.dist / Math.max(1, recMoving() / 1000)) * 3.6), w, min);
  return walkNet(km, w) + climb;
}
function recCurSpeed() {
  if (R.state !== 'recording' || R.recent.length < 2) return null;
  const a = R.recent[0], b = R.recent[R.recent.length - 1], s = (b[0] - a[0]) / 1000;
  return s < 5 ? null : (b[1] - a[1]) / s;
}
function gpsQuality() {
  if (!SPORTS[R.sport].gps) return ['GPS off', 'var(--muted)'];
  if (R.watch == null || R.acc == null) return ['Finding GPS', 'var(--muted)'];
  if (R.acc <= 10) return ['GPS strong', 'var(--good)'];
  if (R.acc <= 25) return ['GPS ok', 'var(--info)'];
  return ['GPS weak', 'var(--warn)'];
}
function startGps() {
  if (!SPORTS[R.sport].gps || R.watch != null) return;
  if (!('geolocation' in navigator)) { R.err = 'This browser has no GPS access.'; recRender(); return; }
  R.watch = navigator.geolocation.watchPosition(onPos, (e) => {
    if (e.code === 3) { if (R.acc == null) { R.err = 'Still looking for GPS — head outside or near a window.'; recRender(); } return; } // timeout: keep waiting
    R.err = e.code === 1 ? 'Location is blocked. iPhone: Settings → Privacy & Security → Location Services → Safari Websites (or Final Form) → While Using. Then reopen the app.'
      : 'GPS signal unavailable right now. Keep the app open outside and it will retry.';
    if (e.code === 1) stopGps();
    recRender();
  }, { enableHighAccuracy: true, maximumAge: 0, timeout: 30000 });
}
function stopGps() { if (R.watch != null) { navigator.geolocation.clearWatch(R.watch); R.watch = null; } R.acc = null; }
function onPos(pos) {
  const c = pos.coords; R.acc = c.accuracy;
  if (R.err) { R.err = null; recRender(); }
  if (R.state === 'recording' && SPORTS[R.sport].gps && c.accuracy <= 35) {
    const pt = [c.latitude, c.longitude], t = pos.timestamp || Date.now();
    if (!R.last) { R.last = { pt, t }; R.route.push(pt); trackAlt(c); }
    else {
      const d = haversine(R.last.pt, pt), secs = (t - R.last.t) / 1000;
      if (d >= 2.5 && !(secs > 0 && d / secs > SPORTS[R.sport].max)) {
        R.dist += d; R.last = { pt, t }; R.route.push(pt); trackAlt(c);
        const now = Date.now(); R.recent.push([now, R.dist]); R.recent = R.recent.filter((x) => now - x[0] <= 30000);
      }
    }
  }
  recUpdate();
}
function trackAlt(c) {
  if (c.altitude == null || (c.altitudeAccuracy != null && c.altitudeAccuracy > 20)) return;
  R.alt = R.alt == null ? c.altitude : R.alt + 0.25 * (c.altitude - R.alt);
  if (R.anchor == null) R.anchor = R.alt;
  else if (R.alt - R.anchor >= 3) { R.gain += R.alt - R.anchor; R.anchor = R.alt; }
  else if (R.alt < R.anchor) R.anchor = R.alt;
}
async function wake(on) {
  try {
    if (on && 'wakeLock' in navigator && !R.lock) { R.lock = await navigator.wakeLock.request('screen'); R.lock.addEventListener?.('release', () => { R.lock = null; }); }
    if (!on && R.lock) { await R.lock.release(); R.lock = null; }
  } catch (e) { R.lock = null; }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && R.state !== 'idle') wake(true); });
function persistRec() {
  if (R.state === 'idle') { localStorage.removeItem(REC_KEY); return; }
  try { localStorage.setItem(REC_KEY, JSON.stringify({ state: R.state, sport: R.sport, ex: R.ex, startedAt: R.startedAt, banked: recMoving(), dist: R.dist, gain: R.gain, route: R.route.slice(-3000), savedAt: Date.now() })); } catch (e) { /* ignore */ }
}
function restoreRec() {
  try {
    const s = JSON.parse(localStorage.getItem(REC_KEY) || 'null'); if (!s || !s.startedAt) return;
    Object.assign(R, { state: 'paused', sport: s.sport, ex: s.ex, startedAt: s.startedAt, banked: s.banked, segStart: null, dist: s.dist, gain: s.gain, route: s.route || [], restored: true });
  } catch (e) { /* ignore */ }
}

A.openRec = () => { buzz(); recOpen(); };
function recOpen() {
  if (R.el) return;
  R.el = document.createElement('div'); R.el.className = 'recorder'; R.el.setAttribute('role', 'dialog'); R.el.setAttribute('aria-modal', 'true'); R.el.setAttribute('aria-label', 'Activity recorder');
  document.body.appendChild(R.el); document.body.style.overflow = 'hidden';
  if (R.state !== 'paused') startGps(); else if (SPORTS[R.sport].gps) startGps();
  recRender();
  if (R.state !== 'idle') wake(true);
}
function recClose() {
  if (!R.el) return;
  R.el.remove(); R.el = null; document.body.style.overflow = '';
  if (R.state === 'idle') { stopGps(); wake(false); }
  render();
}
A.recClose = () => recClose();
function routeSVG(route, live) {
  const W0 = 360, H0 = 300;
  let grid = '';
  for (let x = 0; x <= W0; x += 30) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H0}" style="stroke:var(--track)" stroke-width="1"/>`;
  for (let y = 0; y <= H0; y += 30) grid += `<line x1="0" y1="${y}" x2="${W0}" y2="${y}" style="stroke:var(--track)" stroke-width="1"/>`;
  if (!route || route.length < 2) return `<svg viewBox="0 0 ${W0} ${H0}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${grid}</svg>`;
  let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
  for (const [la, ln] of route) { minLat = Math.min(minLat, la); maxLat = Math.max(maxLat, la); minLng = Math.min(minLng, ln); maxLng = Math.max(maxLng, ln); }
  const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180)), w = Math.max((maxLng - minLng) * kx, 1e-6), h = Math.max(maxLat - minLat, 1e-6), pad = 30;
  const s = Math.min((W0 - pad * 2) / w, (H0 - pad * 2) / h), ox = (W0 - w * s) / 2, oy = (H0 - h * s) / 2;
  const pr = ([la, ln]) => [ox + (ln - minLng) * kx * s, oy + (maxLat - la) * s];
  const pts = route.map((p) => pr(p).map((v) => v.toFixed(1)).join(',')).join(' ');
  const a = pr(route[0]), b = pr(route[route.length - 1]);
  return `<svg viewBox="0 0 ${W0} ${H0}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><linearGradient id="rtg" x1="0" x2="1"><stop offset="0" style="stop-color:var(--a1)"/><stop offset="1" style="stop-color:var(--a2)"/></linearGradient></defs>${grid}
    <polyline points="${pts}" fill="none" style="stroke:var(--a1)" stroke-opacity=".25" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="${pts}" fill="none" stroke="url(#rtg)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${a[0]}" cy="${a[1]}" r="8" fill="#fff"/><circle cx="${a[0]}" cy="${a[1]}" r="5.5" style="fill:var(--good)"/>
    ${live ? `<circle cx="${b[0]}" cy="${b[1]}" r="15" style="fill:var(--a2)" opacity=".25"/>` : ''}<circle cx="${b[0]}" cy="${b[1]}" r="8" fill="#fff"/><circle cx="${b[0]}" cy="${b[1]}" r="5.5" style="fill:var(--a2)"/></svg>`;
}
function recRender() {
  if (!R.el) return;
  const sp = SPORTS[R.sport], u = data.profile.units, idle = R.state === 'idle', [gq, gc] = gpsQuality();
  const visual = sp.gps
    ? `<div class="map" role="img" aria-label="${R.route.length > 1 ? `Route map, ${R.route.length} points` : 'Route map, no route yet'}">${routeSVG(R.route, R.state === 'recording')}
        <div class="empty" id="rec-empty" ${R.route.length > 1 ? 'hidden' : ''}>${icon('gps', 'lg')}<span id="rec-emptyt"></span></div></div>`
    : `<div class="map" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px;text-align:center">${icon(exIcon(exOf(R.ex)), 'lg')}<b>${esc(exOf(R.ex).name)}</b><span class="small muted">Timer-only workout. Calories use MET ${exOf(R.ex).met} and your body weight.</span>
        ${idle ? `<select class="input" style="max-width:320px" data-ch="recEx" aria-label="Exercise">${Object.entries(CATS).map(([c, [label]]) => `<optgroup label="${esc(label)}">${EX.filter((e) => e.cat === c).map((e) => `<option value="${e.id}" ${e.id === R.ex ? 'selected' : ''}>${esc(e.name)}</option>`).join('')}</optgroup>`).join('')}</select>` : ''}</div>`;
  const m = (id, label, unit) => `<div><div class="label">${label}</div><div class="v" id="${id}">--</div>${unit ? `<div class="u">${unit}</div>` : ''}</div>`;
  const ride = R.sport === 'ride';
  const metrics = sp.gps
    ? `<div class="m">${m('rm-dist', 'Distance', distU(u))}${ride ? m('rm-avg', 'Avg speed', speedU(u)) : m('rm-avg', 'Avg pace', paceU(u))}${m('rm-kcal', 'Calories', 'kcal')}</div>
       <div class="m two">${ride ? m('rm-cur', 'Speed', speedU(u)) : m('rm-cur', 'Current pace', paceU(u))}${m('rm-elev', 'Elev gain', '')}</div>`
    : `<div class="m two">${m('rm-kcal', 'Calories', 'kcal')}${m('rm-xp', 'XP so far', '')}</div>`;
  let ctr;
  if (idle) {
    ctr = `<div class="chips wrapc" role="group" aria-label="Activity type">${Object.entries(SPORTS).map(([k, s]) => `<button class="chipbtn" data-a="recSport" data-v="${k}" aria-pressed="${R.sport === k}">${icon(s.icon)}${s.label}</button>`).join('')}</div>
      <div class="ctrls"><button class="round" data-a="recStart" aria-label="Start recording"><span class="c">${icon('play')}</span>Start</button></div>`;
  } else if (R.state === 'recording') {
    ctr = `<div class="ctrls"><button class="round" data-a="recPause" aria-label="Pause recording"><span class="c">${icon('pause')}</span>Pause</button></div>`;
  } else {
    ctr = `<div class="ctrls"><button class="round outline" data-a="recResume" aria-label="Resume recording"><span class="c">${icon('play')}</span>Resume</button>
      <button class="round" data-a="recFinish" aria-label="Finish activity"><span class="c">${icon('stop')}</span>Finish</button></div>`;
  }
  R.el.innerHTML = `<div class="top"><button class="icon-btn" data-a="recClose" aria-label="${idle ? 'Close recorder' : 'Minimize — recording continues'}">${icon(idle ? 'close' : 'down', 'lg')}</button>
      <b class="grow" style="font-size:1.2rem">${idle ? 'Record' : sp.label}</b>
      ${sp.gps ? `<span class="chip" id="rec-gps" style="color:${gc};background:color-mix(in srgb,${gc} 15%,transparent)">${icon('gps')}<span>${gq}</span></span>` : ''}</div>
    ${visual}
    <div class="card" style="margin-top:12px;gap:10px">
      ${R.state === 'paused' ? '<div class="paused" role="status">PAUSED</div>' : ''}
      ${R.restored && R.state === 'paused' ? '<div class="small muted center">Recovered your unfinished activity. Resume or finish it.</div>' : ''}
      <div class="label center">Time</div><div class="clock" id="rm-time" role="timer" aria-label="Moving time">00:00</div>
      ${metrics}
    </div>
    ${R.err ? `<div class="warnmsg" role="alert" style="margin-top:8px">${esc(R.err)}</div>` : ''}
    ${!idle && sp.gps ? '<div class="tiny muted center" style="margin-top:6px">Keep Final Form open — the screen stays on while recording. Locking the phone pauses GPS on iPhone.</div>' : ''}
    <div style="margin-top:auto;padding-top:10px">${ctr}</div>`;
  recUpdate();
}
function recUpdate() {
  if (!R.el) return;
  const u = data.profile.units, sp = SPORTS[R.sport], set = (id, v) => { const e = R.el.querySelector(`#${id}`); if (e) e.textContent = v; };
  set('rm-time', fclock(recMoving()));
  const w = weightKgOn(new Date());
  set('rm-kcal', num(recKcal(w)));
  if (sp.gps) {
    const avg = R.dist / Math.max(1, recMoving() / 1000), cur = recCurSpeed();
    set('rm-dist', distStr(R.dist, u));
    set('rm-avg', R.sport === 'ride' ? speedStr(avg, u) : paceStr(R.dist > 20 ? avg : null, u));
    set('rm-cur', R.sport === 'ride' ? (cur == null ? '--' : speedStr(cur, u)) : paceStr(cur, u));
    set('rm-elev', elevStr(R.gain, u));
    const [gq, gc] = gpsQuality(), chip = R.el.querySelector('#rec-gps');
    if (chip) { chip.style.color = gc; chip.style.background = `color-mix(in srgb,${gc} 15%,transparent)`; chip.lastElementChild.textContent = gq; }
    const map = R.el.querySelector('.map');
    if (map && R.route.length > 1 && map.dataset.n !== String(R.route.length)) {
      map.dataset.n = String(R.route.length);
      const svg = map.querySelector('svg'); if (svg) svg.outerHTML = routeSVG(R.route, R.state === 'recording');
      const em = R.el.querySelector('#rec-empty'); if (em) em.hidden = true;
    }
    const et = R.el.querySelector('#rec-emptyt');
    if (et) et.textContent = R.state === 'idle' ? (R.watch == null || R.acc == null ? 'Finding GPS…' : 'GPS ready. Tap Start when you are.') : 'Your route will draw here as you move';
  } else {
    set('rm-xp', `+${Math.min(80, Math.floor(recKcal(w) / 5)) + 10}`);
  }
  const tl = document.getElementById('tabRecLabel'); if (tl && R.state !== 'idle') tl.textContent = fclock(recMoving());
}
A.recSport = (d) => { if (R.state !== 'idle') return; R.sport = d.v; buzz(); if (SPORTS[R.sport].gps) startGps(); else stopGps(); recRender(); };
IN.recEx = (v) => { R.ex = v; recRender(); };
A.recStart = async () => {
  if (SPORTS[R.sport].gps) {
    startGps();
    if (R.err && R.watch == null) { toast('Location is needed to record distance.'); return; }
  }
  Object.assign(R, { state: 'recording', startedAt: Date.now(), banked: 0, segStart: Date.now(), dist: 0, gain: 0, route: [], last: null, recent: [], alt: null, anchor: null, restored: false });
  clearInterval(R.tick); R.tick = setInterval(() => { recUpdate(); if (Date.now() % 5000 < 1000) persistRec(); }, 1000);
  await wake(true); buzz(30); recRender(); persistRec();
};
A.recPause = () => {
  if (R.state !== 'recording') return;
  R.banked = recMoving(); R.segStart = null; R.state = 'paused'; R.last = null; R.recent = [];
  clearInterval(R.tick); buzz(20); persistRec(); recRender();
};
A.recResume = () => {
  if (R.state !== 'paused') return;
  R.state = 'recording'; R.segStart = Date.now(); R.restored = false; startGps();
  clearInterval(R.tick); R.tick = setInterval(() => { recUpdate(); if (Date.now() % 5000 < 1000) persistRec(); }, 1000);
  wake(true); buzz(20); recRender();
};
A.recFinish = () => {
  if (R.state === 'recording') A.recPause();
  const u = data.profile.units, sp = SPORTS[R.sport], w = weightKgOn(new Date()), st = new Date(R.startedAt || Date.now()), h = st.getHours();
  const part = h < 5 ? 'Night' : h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : h < 21 ? 'Evening' : 'Night';
  const what = sp.gps ? sp.label : exOf(R.ex).name.split(',')[0];
  openSheet(`<h2>Save activity</h2>
    <div class="field"><label for="rs-t">Title</label><input id="rs-t" name="t" class="input" value="${esc(`${part} ${what}`)}"></div>
    ${sp.gps && R.route.length > 1 ? `<div style="height:170px;border-radius:22px;overflow:hidden;border:1px solid var(--stroke)">${routeSVG(R.route, false)}</div>` : ''}
    <div class="stats">${stat('Time', fclock(recMoving()))}${sp.gps ? stat('Distance', `${distStr(R.dist, u)} ${distU(u)}`) : ''}${stat('Calories', num(recKcal(w)), 'above resting', 'var(--good)')}</div>
    ${sp.gps && R.dist < 100 ? '<div class="small muted">Almost no GPS distance was recorded (indoors or treadmill?), so calories use a time-based estimate instead.</div>' : ''}
    <button class="btn block" data-a="recSave">${icon('check')}Save activity</button>
    <div class="row"><button class="link grow" data-a="closeSheet">${icon('play')} Resume</button><button class="link bad grow" data-a="recDiscard">${icon('trash')} Discard</button></div>`, { label: 'Save activity' });
};
function downsample(pts, max) {
  const r5 = (p) => [Math.round(p[0] * 1e5) / 1e5, Math.round(p[1] * 1e5) / 1e5];
  if (pts.length <= max) return pts.map(r5);
  const step = pts.length / max, out = [];
  for (let i = 0; i < max; i++) out.push(r5(pts[Math.floor(i * step)]));
  out.push(r5(pts[pts.length - 1]));
  return out;
}
function recReset() {
  clearInterval(R.tick); stopGps(); wake(false);
  Object.assign(R, { state: 'idle', startedAt: null, banked: 0, segStart: null, dist: 0, gain: 0, route: [], last: null, recent: [], alt: null, anchor: null, err: null, restored: false });
  persistRec();
}
A.recSave = () => {
  const ov = topSheet(), sp = SPORTS[R.sport], w = weightKgOn(new Date());
  const title = ov.querySelector('[name=t]').value.trim() || sp.label;
  data.workouts.push({
    id: uid(), date: R.startedAt || Date.now(), ex: sp.gps ? sp.ex : R.ex, min: Math.max(1 / 60, recMoving() / 60000), kcal: recKcal(w),
    title, dist: sp.gps ? R.dist : null, gain: sp.gps ? R.gain : null, route: sp.gps ? downsample(R.route, 400) : [],
  });
  closeSheet(); recReset(); ui.tab = 'today'; ui.day = sod(new Date()); recClose(); commit(); buzz(40); toast('Activity saved 💪');
};
A.recDiscard = async () => {
  closeSheet();
  if (await confirmBox('Discard this activity?', "It won't be saved and you can't get it back.", 'Discard', true)) { recReset(); recClose(); }
};

// ===========================================================================
// Strava (optional)
// ===========================================================================
const stravaCfg = () => { try { return JSON.parse(localStorage.getItem(SCFG_KEY) || '{}'); } catch (e) { return {}; } };
const stravaTokens = () => { try { return JSON.parse(localStorage.getItem(TOK_KEY) || 'null'); } catch (e) { return null; } };
const setTokens = (t) => (t ? localStorage.setItem(TOK_KEY, JSON.stringify(t)) : localStorage.removeItem(TOK_KEY));
IN.scfg = (v, el) => { const c = stravaCfg(); c[el.dataset.k] = v.trim(); localStorage.setItem(SCFG_KEY, JSON.stringify(c)); };
const redirectUri = () => location.origin + location.pathname;
A.stravaConnect = () => {
  const c = stravaCfg();
  if (!c.id || !c.secret) { toast('Paste your Strava Client ID and Secret first.'); return; }
  const state = uid(); localStorage.setItem('ff_strava_state', state);
  const q = new URLSearchParams({ client_id: c.id, redirect_uri: redirectUri(), response_type: 'code', approval_prompt: 'auto', scope: 'read,activity:read_all', state });
  location.href = `https://www.strava.com/oauth/authorize?${q}`;
};
async function stravaToken(params) {
  const c = stravaCfg();
  const res = await fetch('https://www.strava.com/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ client_id: c.id, client_secret: c.secret, ...params }) });
  if (!res.ok) throw new Error(`Strava said ${res.status}`);
  return res.json();
}
async function handleStravaReturn() {
  const q = new URLSearchParams(location.search);
  if (!q.has('code') && !q.has('error')) return;
  history.replaceState(null, '', location.pathname);
  if (q.get('error')) { toast('Strava access was declined.'); return; }
  if (q.get('state') !== localStorage.getItem('ff_strava_state')) { toast('Strava sign-in expired. Please try again.'); return; }
  if (!(q.get('scope') || '').includes('activity:read')) { toast('Leave "View data about your activities" checked so workouts can sync.'); return; }
  try {
    const j = await stravaToken({ code: q.get('code'), grant_type: 'authorization_code' });
    const ath = j.athlete ? [j.athlete.firstname, j.athlete.lastname].filter(Boolean).join(' ') : '';
    setTokens({ access: j.access_token, refresh: j.refresh_token, expires: j.expires_at, athlete: ath || null });
    toast('Strava connected!'); ui.tab = 'profile'; render(); stravaSync(true);
  } catch (e) { toast(`Strava connection failed: ${e.message}`); }
}
async function stravaAccess() {
  const t = stravaTokens(); if (!t) throw new Error('not connected');
  if (t.expires - 300 > Date.now() / 1000) return t.access;
  const j = await stravaToken({ grant_type: 'refresh_token', refresh_token: t.refresh });
  setTokens({ ...t, access: j.access_token, refresh: j.refresh_token, expires: j.expires_at });
  return j.access_token;
}
async function stravaGet(path, params = {}) {
  const tok = await stravaAccess(), q = new URLSearchParams(params).toString();
  const url = `https://www.strava.com/api/v3${path}${q ? `?${q}` : ''}`;
  let res;
  try { res = await fetch(url, { headers: { Authorization: `Bearer ${tok}` } }); }
  catch (e) { res = await fetch(`${url}${q ? '&' : '?'}access_token=${encodeURIComponent(tok)}`); }
  if (res.status === 401) { setTokens(null); throw new Error('Strava access expired — please reconnect.'); }
  if (res.status === 429) throw new Error("Strava's rate limit was hit. Try again in 15 minutes.");
  if (!res.ok) throw new Error(`Strava error ${res.status}`);
  return res.json();
}
let syncing = false;
async function stravaSync(force = false) {
  const p = data.profile; if (!p || !stravaTokens() || syncing) return;
  if (!force && data.stravaLastSync && Date.now() - data.stravaLastSync < 15 * 60000) return;
  syncing = true;
  try {
    const questStart = sod(p.startDate).getTime(), recent = addDays(sod(new Date()), -30).getTime();
    const windowStart = !data.strava.length || recent < questStart ? questStart : recent;
    let list = [];
    for (let page = 1; page <= 5; page++) {
      const batch = await stravaGet('/athlete/activities', { after: Math.floor(windowStart / 1000), per_page: 100, page });
      if (!Array.isArray(batch)) break; list = list.concat(batch); if (batch.length < 100) break;
    }
    let budget = 25; const out = [];
    for (const s of list) {
      const a = { id: s.id, name: s.name || 'Strava activity', sport: s.sport_type || s.type || 'Workout', date: Date.parse(s.start_date), moving: s.moving_time || s.elapsed_time || 0, dist: s.distance || 0, gain: s.total_elevation_gain || 0, kj: s.kilojoules || null, hr: s.average_heartrate || null, cal: null, detail: false };
      const cached = data.strava.find((x) => x.id === a.id);
      if (cached && cached.detail) { a.cal = cached.cal; a.detail = true; }
      else if (budget-- > 0) { try { const dt = await stravaGet(`/activities/${a.id}`); a.cal = dt.calories || null; a.detail = true; } catch (e) { /* keep summary */ } }
      out.push(a);
    }
    data.strava = data.strava.filter((x) => x.date < windowStart).concat(out).sort((a, b) => b.date - a.date);
    data.stravaLastSync = Date.now(); commit();
    if (force) toast(`Strava synced · ${out.length} activities`);
  } catch (e) { if (force) toast(`Strava sync failed: ${e.message}`); }
  finally { syncing = false; }
}
A.stravaSync = () => stravaSync(true);
A.stravaDisconnect = async () => {
  const t = stravaTokens();
  if (t) { try { await fetch('https://www.strava.com/oauth/deauthorize', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ access_token: t.access }) }); } catch (e) { /* best effort */ } }
  setTokens(null); data.stravaLastSync = null; save(); render();
};

// ===========================================================================
// Start-up
// ===========================================================================
rebuild(false);
restoreRec();
render();
if (R.state !== 'idle') { R.tick = null; recOpen(); }
handleStravaReturn();
stravaSync(false);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  if (!sameDay(ui.day, new Date()) && sameDay(addDays(ui.day, 1), new Date())) ui.day = sod(new Date());
  rebuild(); render(); if (R.el) recUpdate(); stravaSync(false);
});
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
// Expose a tiny hook for automated tests.
window.__ff = { get data() { return data; }, R, A, ui, render, summary, rankFor };
})();
