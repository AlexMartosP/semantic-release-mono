import chalk from "chalk";
import { logInternal } from "semantic_release_mono_internal";

export function giveMeBlue() {
  console.log(chalk.blue.bold("Hello foo"));
}

export function fromInternal() {
  logInternal();
}
