import { describe, expect, it } from "vitest";
import { getStaticPaths } from "../../src/presets/netlify/utils";

describe("getStaticPaths", () => {
  it("always returns `/.netlify/*`", () => {
    expect(getStaticPaths([])).toEqual(["/.netlify/*"]);
  });

  it("returns a pattern with a leading slash for each non-fallthrough non-root public asset path", () => {
    const publicAssets = [
      {
        fallthrough: true,
        baseURL: "with-fallthrough",
        dir: "with-fallthrough-dir",
        maxAge: 0,
      },
      {
        fallthrough: true,
        dir: "with-fallthrough-no-baseURL-dir",
        maxAge: 0,
      },
      {
        fallthrough: false,
        dir: "no-fallthrough-no-baseURL-dir",
        maxAge: 0,
      },
      {
        fallthrough: false,
        dir: "no-fallthrough-root-baseURL-dir",
        baseURL: "/",
        maxAge: 0,
      },
      {
        baseURL: "with-default-fallthrough",
        dir: "with-default-fallthrough-dir",
        maxAge: 0,
      },
      {
        fallthrough: false,
        baseURL: "nested/no-fallthrough",
        dir: "nested/no-fallthrough-dir",
        maxAge: 0,
      },
    ];
    expect(getStaticPaths(publicAssets)).toEqual([
      "/.netlify/*",
      "/with-default-fallthrough/*",
      "/nested/no-fallthrough/*",
    ]);
  });
});
