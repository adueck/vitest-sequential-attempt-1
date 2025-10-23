import { expect, test } from "vitest"; // Or your preferred test runner
import { logCopied } from "./02.test";

test.sequential("2*3=6", async () => {
  logCopied.content = logCopied.content + "3️⃣";
  console.log({ logAt3: logCopied });
  console.log("running test 3");
  expect(2 * 4).toBe(8);
});
