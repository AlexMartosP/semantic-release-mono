const regex = new RegExp(
  /(feat|fix|docs|test|ci|build|perf|refactor)(\(.*\))?:\s.*/,
  "gs"
);

function validatePRTitle() {
  const title = process.argv[2];

  if (!title) {
    console.log("Title was not provided as argument");

    process.exit(1);
  }

  if (!regex.test(title)) {
    console.log("Title does not conform to templete");
    console.log("Example: 'feat: Foo bar' or 'fix(foo): Bar baz'");
    process.exit(1);
  }

  console.log("PR title is valid");
}

validatePRTitle();
