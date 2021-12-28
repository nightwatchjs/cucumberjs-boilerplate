const {Given} = require('@cucumber/cucumber');

Given(/^I open the (url|site) "([^"]*)?"$/, function(site, url) {
  return browser.url(url);
});

Given(/^the element "([^"]*)?" is( not)* displayed$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.visible(selector);
  }

  return browser.assert.visible(selector);
});

Given(/^the element "([^"]*)?" is( not)* enabled$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.enabled(selector);
  }

  return browser.assert.enabled(selector);
});

Given(/^the element "([^"]*)?" is( not)* selected$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.selected(selector);
  }

  return browser.assert.selected(selector);
});

Given(/^the checkbox "([^"]*)?" is( not)* checked$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.selected(selector);
  }

  return browser.assert.selected(selector);
});

Given(/^the title is( not)* "([^"]*)?"$/, function(negativeCase, expectedTitle) {
  if (negativeCase) {
    return browser.assert.not.title(expectedTitle);
  }

  return browser.assert.title(expectedTitle);
});

Given(/^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, async function(elementType, selector, negativeCase, expectedText) {
  let command = 'getValue';
  if (['container', 'button'].includes(elementType) || (await browser.getElementProperty(selector, 'value')) === null) {
    command = 'getText';
  }
  await browser.waitForElementVisible(selector);

  if (negativeCase) {
    command === 'getValue'
      ? await browser.assert.not.valueContains(selector, expectedText)
      : await browser.assert.not.containsText(selector, expectedText);
  } else {
    command === 'getValue'
      ? await browser.assert.valueContains(selector, expectedText)
      : await browser.assert.containsText(selector, expectedText);
  }
});


Given(/^the page url is( not)* "([^"]*)?"$/, function(negativeCase, expectedUrl) {
  if (negativeCase) {
    return browser.assert.urlEquals(expectedUrl);
  }

  return browser.assert.not.urlContains(expectedUrl);
});

Given(/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/, function(isCss, attrName, selector, negativeCase, expectedValue) {
  if (negativeCase) {
    return isCss
      ? browser.assert.not.cssProperty(selector, attrName, expectedValue)
      : browser.assert.not.domProperty(selector, attrName, expectedValue);
  }

  return isCss
    ? browser.assert.cssProperty(selector, attrName, expectedValue)
    : browser.assert.domProperty(selector, attrName, expectedValue);
});

Given(/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/, function(name, negativeCase, expectedValue) {
  if (negativeCase) {
    return browser.expect.cookie(name).to.not.contain(expectedValue);
  }

  return browser.expect.cookie(name).to.contain(expectedValue);
});

Given(/^I have a screen that is ([\d]+) by ([\d]+) pixels$/, function(width, height) {
  const widthInt = parseInt(width, 10);
  const heightInt = parseInt(height, 10);

  return browser.setWindowSize(widthInt, heightInt);
});

Given(/^I have closed all but the first (window|tab)$/, async function() {
  const windowHandles = await browser.windowHanles();
  windowHandles.reverse();

  return Promise.all(windowHandles.map(async (windowHandle, index) => {
    await browser.switchToWindow(windowHandle);

    if (index < windowHandles.length - 1) {
      await browser.closeWindow();
    }
  }));
});






