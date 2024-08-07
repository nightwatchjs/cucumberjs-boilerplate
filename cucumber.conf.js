const {AfterStep} = require('@cucumber/cucumber');

AfterStep(async function(testCase) {
  // take screenshot on test case failure.
  //
  // follow this Discord thread for integrating the screenshots into your Cucumber report:
  // https://discord.com/channels/618399631038218240/1253341054921609306/1255939897047515250
  //
  if (testCase.result.status === 'FAILED' && this.browser) {
    await this.browser.saveScreenshot(`screenshots/${testCase.pickle.name}.png`);
  }
});

