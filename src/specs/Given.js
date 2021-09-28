const {Given} = require('@cucumber/cucumber');

const nightwatch = browser.page.nightwatch();

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  nightwatch.openWebsite
);

Given(
  /^the element "([^"]*)?" is( not)* displayed$/,
  nightwatch.isDisplayed
);

Given(
  /^the element "([^"]*)?" is( not)* enabled$/,
  nightwatch.isEnabled
);

Given(
  /^the element "([^"]*)?" is( not)* selected$/,
  nightwatch.checkSelected
);

Given(
  /^the checkbox "([^"]*)?" is( not)* checked$/,
  nightwatch.checkSelected
);


Given(
  /^the title is( not)* "([^"]*)?"$/,
  nightwatch.checkTitle
);


Given(
  /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
  nightwatch.checkEqualsText
);

Given(
  /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  nightwatch.checkContainsText
);



Given(
  /^the page url is( not)* "([^"]*)?"$/,
  nightwatch.checkURL
);

Given(
  /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
  nightwatch.checkProperty
);

Given(
  /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
  nightwatch.checkCookieContent
);


Given(
  /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
  nightwatch.setWindow
);

Given(
  /^I have closed all but the first (window|tab)$/,
  nightwatch.closeAllButFirstTab
);






