const core = require('@actions/core');
const github = require('@actions/github');

try {
  const data = core.getInput('data');
  console.log(`Data: ${data}`);

  core.setOutput("data", data);

} catch (error) {
  core.setFailed(error.message);
}
