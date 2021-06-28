const core = require('@actions/core');
const github = require('@actions/github');

try {
  const data = core.getInput('data');
  console.log(`Data: ${JSON.stringify(data)}`);

  core.setOutput("data", data);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
