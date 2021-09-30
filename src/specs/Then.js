const {Then} = require('@cucumber/cucumber');
const nightwatch = browser.page.nightwatch();

Then(/^I expect that element "([^"]*)?" is( not)* displayed$/, nightwatch.isDisplayed);

Then(/^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/, nightwatch.checkClass);

Then(/^I expect that the title is( not)* "([^"]*)?"$/, nightwatch.checkTitle);

Then(/^I expect that the title( not)* contains "([^"]*)?"$/, nightwatch.checkTitleContains);

Then(/^I expect that element "([^"]*)?" is( not)* displayed$/, nightwatch.isDisplayed);

Then(/^I expect that element "([^"]*)?" is( not)* present$/, nightwatch.checkElementPresent);

Then(/^I expect that element "([^"]*)?" becomes displayed$/, nightwatch.waitForVisible);

Then(/^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, nightwatch.checkContainsText);

Then(/^I expect that the url is( not)* "([^"]*)?"$/, nightwatch.checkURL);

Then(/^I expect the url to( not)* contain "([^"]*)?"$/, nightwatch.checkURLContain);

Then(/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/, nightwatch.checkProperty);

Then(/^I expect that checkbox "([^"]*)?" is( not)* checked$/, nightwatch.checkSelected);

Then(/^I expect that element "([^"]*)?" is( not)* selected$/, nightwatch.checkSelected);

Then(/^I expect that element "([^"]*)?" is( not)* enabled$/, nightwatch.checkIsEnabled);

Then(/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/, nightwatch.checkCookieContent);

Then(/^I expect that element "([^"]*)?" is( not)* focused$/, nightwatch.checkActive);
