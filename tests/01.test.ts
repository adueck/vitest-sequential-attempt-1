import { expect, test } from "vitest";

export const log = {
  content: "",
};

test.sequential("1+2=3", async () => {
  log.content = log.content + "1️⃣";
  console.log({ logAt1: log });
  console.log("running test 1");
  expect(1 + 2).toBe(3);
});
