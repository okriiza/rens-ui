import { expect, test } from "vitest";
import { addPrefix } from "../src/utils/prefix";

type ColorObject = {
  [key: string]: string;
};

test("Should return colors with -- in each property", (t) => {
  const obj: ColorObject = {
    white: "#fff",
    "white-invert": "#000",
    "white-inverted": "#000",
  };
  const result = addPrefix(obj);
  expect(result).toEqual({
    "--white": "#fff",
    "--white-invert": "#000",
    "--white-inverted": "#000",
  });
});

test("Should return empty obj if receive empty obj", (t) => {
  const obj: ColorObject = {};
  const result = addPrefix(obj);
  expect(result).toEqual({});
});
