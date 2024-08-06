const {AfterStep} = require('@cucumber/cucumber');

AfterStep(async function(testStep) {
  // take screenshot on failure after each step
  if (testStep.result.status === 'FAILED' && this.browser) {
    await this.browser.saveScreenshot('failure-screenshot.png');
  }
});

