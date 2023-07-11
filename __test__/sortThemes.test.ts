import { expect, test } from "vitest";
import { sortThemes } from "../src/utils/sortThemes";
interface Theme {
  [key: string]: any;
}
test("should return the correct order", (t) => {
  const array: Theme[] = [
    {
      "@media (prefers-color-scheme:1)": [Object],
      "[data-theme=light]": [Object],
    },
    {
      ":root": [Object],
      "@media (prefers-color-scheme:2)": [Object],
      "[data-theme=light]": [Object],
    },
    {
      "[data-theme=dark]": [Object],
      "@media (prefers-color-scheme:3)": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { ":root": [Object] },
    { "@media (prefers-color-scheme:1)": [Object] },
    { "@media (prefers-color-scheme:2)": [Object] },
    { "@media (prefers-color-scheme:3)": [Object] },
    { "[data-theme=light]": [Object] },
    { "[data-theme=light]": [Object] },
    { "[data-theme=dark]": [Object] },
  ]);
});
test("should handle an empty array", (t) => {
  const array: Theme[] = [];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([]);
});
test("should handle duplicate themes", (t) => {
  const array: Theme[] = [
    {
      ":root": [Object],
    },
    {
      "@media (prefers-color-scheme:dark)": [Object],
      "[data-theme=dark]": [Object],
    },
    {
      "[data-theme=rock]": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { ":root": [Object] },
    { "@media (prefers-color-scheme:dark)": [Object] },
    { "[data-theme=dark]": [Object] },
    { "[data-theme=rock]": [Object] },
  ]);
});
test("should handle mixed theme types", (t) => {
  const array: Theme[] = [
    {
      "@media (prefers-color-scheme:dark)": [Object],
    },
    {
      "[data-theme=dark]": [Object],
    },
    {
      ":root": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { ":root": [Object] },
    { "@media (prefers-color-scheme:dark)": [Object] },
    { "[data-theme=dark]": [Object] },
  ]);
});
test("should return the same order even if :root obj is not present..", (t) => {
  const array: Theme[] = [
    {
      "@media (prefers-color-scheme:dark)": [Object],
    },
    {
      "[data-theme=dark]": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { "@media (prefers-color-scheme:dark)": [Object] },
    { "[data-theme=dark]": [Object] },
  ]);
});
test("should return the same order if only @media are present ", (t) => {
  const array: Theme[] = [
    {
      "@media (prefers-color-scheme:dark)": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { "@media (prefers-color-scheme:dark)": [Object] },
  ]);
});
test("should return the same order if only data-theme are present ", (t) => {
  const array: Theme[] = [
    {
      "[data-theme=dark]": [Object],
    },
    {
      "[data-theme=light]": [Object],
    },
  ];
  const themes = sortThemes(array);
  expect(themes).toStrictEqual([
    { "[data-theme=dark]": [Object] },
    { "[data-theme=light]": [Object] },
  ]);
});
