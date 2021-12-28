const {Then} = require('@cucumber/cucumber');

Then(/^I expect that element "([^"]*)?" is( not)* displayed$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.visible(selector);
  }
 
  return browser.assert.visible(selector);
});

Then(/^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/, function(selector, negativeCase, expectedClass) {
  if (negativeCase) {
    return browser.assert.not.cssClassPresent(selector, expectedClass);
  }

  return browser.assert.cssClassPresent(selector, expectedClass);
});

Then(/^I expect that the title is( not)* "([^"]*)?"$/, function(negativeCase, expectedTitle) {
  if (negativeCase) {
    return browser.assert.not.title(expectedTitle);
  }
  
  return browser.assert.title(expectedTitle);
});

Then(/^I expect that element "([^"]*)?" is( not)* present$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.elementPresent(selector);
  }
 
  return browser.assert.elementPresent(selector);
});

Then(/^I expect that element "([^"]*)?" becomes displayed$/,  function(selector) {
  return browser.waitForElementVisible(selector);
});

Then(/^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, async function(elementType, selector, negativeCase, expectedText) {
  let command = 'getValue';
  if (['container', 'button'].includes(elementType) || (await browser.getElementProperty(selector, 'value')) === null) {
    command = 'getText';
  }
  await browser.waitForElementVisible(selector);
      
  if (negativeCase) {
    command ==='getValue' 
      ? await browser.assert.not.valueContains(selector, expectedText)
      : await browser.assert.not.containsText(selector, expectedText);
  } else {
    command ==='getValue' 
      ? await browser.assert.valueContains(selector, expectedText)
      : await browser.assert.containsText(selector, expectedText);
  }
});

Then(/^I expect that the url is( not)* "([^"]*)?"$/, function(negativeCase, expectedUrl) {
  if (negativeCase) {
    return browser.assert.urlEquals(expectedUrl);
  }
 
  return browser.assert.not.urlContains(expectedUrl);
});

Then(/^I expect the url to( not)* contain "([^"]*)?"$/, function(negativeCase, expectedUrl) {
  if (negativeCase) {
    return browser.assert.not.urlContains(expectedUrl);
  }

  return browser.assert.urlContains(expectedUrl);   
});

Then(/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/, function(isCss, attrName, selector, negativeCase, expectedValue) { 
  if (negativeCase) {
    return isCss 
      ? browser.assert.not.cssProperty(selector, attrName, expectedValue)
      : browser.assert.not.domProperty(selector, attrName, expectedValue);
  }

  return isCss 
    ? browser.assert.cssProperty(selector, attrName, expectedValue)
    : browser.assert.domProperty(selector, attrName, expectedValue);
});

Then(/^I expect that checkbox "([^"]*)?" is( not)* checked$/, function(selector, negativeCase) {
  if (negativeCase) {     
    return browser.assert.not.selected(selector);
  }
 
  return browser.assert.selected(selector);
    
});

Then(/^I expect that element "([^"]*)?" is( not)* selected$/, function(selector, negativeCase) {
  if (negativeCase) {     
    return browser.assert.not.selected(selector);
  }
 
  return browser.assert.selected(selector);
    
});

Then(/^I expect that element "([^"]*)?" is( not)* enabled$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.assert.not.enabled(selector);
  }

  return browser.assert.enabled(selector);
});

Then(/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/, function(name, negativeCase, expectedValue) {
  if (negativeCase) {
    return browser.expect.cookie(name).to.not.contain(expectedValue);
  }
 
  return browser.expect.cookie(name).to.contain(expectedValue);
    
});

Then(/^I expect that element "([^"]*)?" is( not)* focused$/, function(selector, negativeCase) {
  if (negativeCase) {
    return browser.expect.element(selector).to.not.be.active; 
  }
 
  return browser.expect.element(selector).to.be.visible;
});
