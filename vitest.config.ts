import { defineConfig } from "vitest/config";
import { BaseSequencer, TestSpecification } from "vitest/node";

// for some reason it looks like we need to use this to keep the files in order
class Sequencer extends BaseSequencer {
  sort(files: TestSpecification[]): Promise<TestSpecification[]> {
    return new Promise((resolve) => {
      resolve(files);
    });
  }
}

export default defineConfig({
  test: {
    fileParallelism: false,
    maxConcurrency: 1,
    sequence: {
      concurrent: false,
      shuffle: false,
      sequencer: Sequencer,
    },
    globalSetup: "src/tests/setup.ts",
  },
});
