import { test, expect } from "vitest";
import { log } from "./01.test";

export const logCopied = log;

test.sequential("4-1=3", async () => {
  log.content = log.content + " 2️⃣ ";
  console.log({ logAt2: log });
  console.log("running test 2");
  expect(4 - 1).toBe(3);
});
