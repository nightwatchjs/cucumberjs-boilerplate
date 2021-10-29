const {When, Before} = require('@cucumber/cucumber');

  
When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, function(clickType, elementType, selector) {
    browser.waitForElementVisible(selector);

    return clickType ==='doubleClick' ? browser.doubleClick(selector) : browser.click(selector);
  });

When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, function(method, value, selector) {
    return browser.setValue(selector, value);
  });

When(
  /^I clear the inputfield "([^"]*)?"$/, function(selector) {
    return browser.clearValue(selector);
  });

When(
  /^I drag element "([^"]*)?" to element "([^"]*)?"$/, async    function(selector, destination) {
    const selectorWebElement = await browser.findElement(selector);
    const destinationWebElement = await browser.findElement(destination);
    await browser.perform(function() {
      const actions = this.actions({async: true});

      return actions.dragAndDrop(selectorWebElement, destinationWebElement);
    });
  });

When(
  /^I pause for (\d+)ms$/, function(time) {
    const timeMs = parseInt(time, 10);

    return browser.pause(timeMs);
  });

When(
  /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/, function(name, value) {
    return browser.setCookie({name, value});
  });

When(
  /^I delete the cookie "([^"]*)?"$/, function(name) {
    return browser.deleteCookie(name);
  });

When(
  /^I press "([^"]*)?"$/, async function(key) {
    await browser.perform(function() {
      const actions = this.actions({async: true});

      return actions
        .keyDown(this.Keys[key])
        .keyUp(this.Keys[key]);
    });
  });

When(
  /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,  function(action, modalType) {
    if (modalType === 'alertbox') {
      return browser.acceptAlert();
    }

    return action === 'dismiss' ? browser.dismissAlert() : browser.acceptAlert();
  });

When(
  /^I enter "([^"]*)?" into the prompt$/, function(text) {
    return browser.setAlertText(text);
  });

When(
  /^I scroll to element "([^"]*)?"$/, function(selector, x, y) {
    const xOffset = parseInt(x, 10);
    const yOffset = parseInt(y, 10);

    return browser.moveToElement(selector, xOffset, yOffset);
  }
);

When(
  /^I close the last opened (window|tab)$/, async function() {
    const currentWindowHandle = await browser.windowHandle();
    const lastWindowHandle = (await browser.windowHandles()).slice(-1)[0];

    if (currentWindowHandle === lastWindowHandle) {
      await browser.closeWindow();
    } else {
      await browser.switchToWindow(lastWindowHandle);
      await browser.closeWindow();
      await browser.switchToWindow(currentWindowHandle);
    }
  });

When(
  /^I focus the last opened (window|tab)$/, async function() {
    const lastWindowHandle = (await browser.windowHandles()).slice(-1)[0];
    await browser.switchToWindow(lastWindowHandle);
  });


When(
  /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/, function(type, value, selector) {
    return browser.click(`${selector} option[${type}="${value}"]`);
  });

When(
  /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/, function(selector, x, y) {
    const xOffset = parseInt(x, 10);
    const yOffset = parseInt(y, 10);

    return browser.moveToElement(selector, xOffset, yOffset);
  });
