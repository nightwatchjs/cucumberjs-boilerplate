const {When} = require('@cucumber/cucumber');

const nightwatch = browser.page.nightwatch();
  
When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  nightwatch.clickElement
);

When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
  nightwatch.setInputField
);

When(
  /^I clear the inputfield "([^"]*)?"$/,
  nightwatch.clearInputField
);

When(
  /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
  nightwatch.dragElement
);

When(
  /^I pause for (\d+)ms$/,
  nightwatch.wait
);

When(
  /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
  nightwatch.setCookieName
);

When(
  /^I delete the cookie "([^"]*)?"$/,
  nightwatch.deleteTheCookie
);

When(
  /^I press "([^"]*)?"$/,
  nightwatch.pressButton
);

When(
  /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
  nightwatch.handleModal
);

When(
  /^I enter "([^"]*)?" into the prompt$/,
  nightwatch.setPromptText
);

When(
  /^I scroll to element "([^"]*)?"$/,
  nightwatch.moveTo
);

When(
  /^I close the last opened (window|tab)$/,
  nightwatch.closeLastOpenedWindow
);

When(
  /^I focus the last opened (window|tab)$/,
  nightwatch.focusLastOpenedWindow
);


When(
  /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
  nightwatch.selectOption
);

When(
  /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
  nightwatch.moveTo
);
