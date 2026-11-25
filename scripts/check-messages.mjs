import { readFileSync } from "node:fs";

const locales = ["en", "ro", "ru"];

const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === "object" && v !== null
      ? flatten(v, `${prefix}${k}.`)
      : [`${prefix}${k}`]
  );

const keys = Object.fromEntries(
  locales.map((l) => [
    l,
    new Set(flatten(JSON.parse(readFileSync(`messages/${l}.json`, "utf8")))),
  ])
);

const all = new Set(locales.flatMap((l) => [...keys[l]]));
let bad = false;

for (const l of locales) {
  const missing = [...all].filter((k) => !keys[l].has(k));
  if (missing.length) {
    bad = true;
    console.log(`\n${l}: не хватает ${missing.length}`);
    missing.forEach((k) => console.log("  -", k));
  }
}

console.log(bad ? "\nЕсть расхождения." : "Все языки совпадают.");
process.exit(bad ? 1 : 0);