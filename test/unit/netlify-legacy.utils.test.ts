import { describe, expect, it } from "vitest";
import { generateCatchAllRedirects } from "../../src/presets/netlify/legacy/utils";

describe("generateCatchAllRedirects", () => {
  it("returns empty string if `catchAllPath` is not defined", () => {
    expect(generateCatchAllRedirects([], undefined)).toEqual("");
  });

  it("includes a redirect from `/*` to `catchAllPath` if defined", () => {
    expect(generateCatchAllRedirects([], "/catch-all")).toEqual(
      "/* /catch-all 200"
    );
  });

  it("includes a splat redirect for each non-fallthrough non-root public asset path, BEFORE the catch-all", () => {
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
    expect(
      generateCatchAllRedirects(publicAssets, "/catch-all")
    ).toMatchInlineSnapshot(
      `
"/with-default-fallthrough/* /with-default-fallthrough/:splat 200
/nested/no-fallthrough/* /nested/no-fallthrough/:splat 200
/* /catch-all 200"
    `.trim()
    );
  });
});
