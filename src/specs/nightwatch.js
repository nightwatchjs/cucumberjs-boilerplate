const {Given, Then} = require('@cucumber/cucumber');
const nightwatch = require('../pages/nightwatch');

const nightwatchPage = browser.page.nightwatch();

Given('I navigate to nightwatch home page', function() {
  nightwatchPage.navigate();

  return browser.pause(2000);
});

Given('Version dropdown is visible', function() {
  return nightwatchPage.waitForElementPresent('@version-menu');

});

Then('The latest verison of nightwatch should be {string}', function(version) {
  return nightwatchPage.assert.attributeContains('@version-menu', 'text', version);
});

