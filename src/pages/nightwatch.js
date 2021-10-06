var nightwatchCommands = {
  clearInputField(selector) {
    return browser.clearValue(selector);
  },

  setInputField(method, value, selector) {
    return browser.setValue(selector, value);
  },

  clickElement(clickType, elementType, selector) {
    browser.waitForElementVisible(selector);

    return clickType ==='doubleClick' ? browser.doubleClick(selector) : browser.click(selector);
  },
  moveTo(selector, x, y) {
    const xOffset = parseInt(x, 10);
    const yOffset = parseInt(y, 10);

    return browser.moveToElement(selector, xOffset, yOffset);
  },

  async dragElement(selector, destination) {

    const selectorWebElement = await browser.findElement(selector);
    const destinationWebElement = await browser.findElement(destination);
    await browser.perform(function() {
      const actions = this.actions({async: true});

      return actions.dragAndDrop(selectorWebElement, destinationWebElement);
    });
  },

  async closeLastOpenedWindow() {
    const currentWindowHandle = await browser.windowHandle();
    const lastWindowHandle = (await browser.windowHandles()).slice(-1)[0];

    if (currentWindowHandle === lastWindowHandle) {
      await browser.closeWindow();
    } else {
      await browser.switchToWindow(lastWindowHandle);
      await browser.closeWindow();
      await browser.switchToWindow(currentWindowHandle);
    }
  },

  async focusLastOpenedWindow() {
    const lastWindowHandle = (await browser.windowHandles()).slice(-1)[0];
    await browser.switchToWindow(lastWindowHandle);
  },

  async closeAllButFirstTab() {
    const windowHandles = await browser.windowHanles();
    windowHandles.reverse();
    windowHandles.forEach(async (windowHandle, index) => {
      await browser.switchToWindow(windowHandle);
      if (index<windowHandles.length-1) {
        await browser.closeWindow();
      }
    });
    
  },

  deleteTheCookie(name) {
    return browser.deleteCookie(name);
  },

  handleModal(action, modalType) {
    if (modalType === 'alertbox') {
      return browser.acceptAlert();
    }

    return action === 'dismiss' ? browser.dismissAlert() : browser.acceptAlert();
  },

  setPromptText(text) {
    return browser.setAlertText(text);
  },

  openWebsite(site, url) {
    return browser.url(url);
  },

  wait(time) {
    const timeMs = parseInt(time, 10);

    return browser.pause(timeMs);
  },

  async pressButton(key) {
    await browser.perform(function() {
      const actions = this.actions({async: true});

      return actions
        .keyDown(Keys[key])
        .keyUp(Keys[key]);
    });
  },

  waitForVisible(selector) {
    return browser.waitForElementVisible(selector);
  },

  selectOption(type, value, selector) {
    return browser.click(`${selector} option[${type}="${value}"]`);
  },
  
  setCookieName(name, value) {
    return browser.setCookie({name, value});
  },

  setWindow(width, height) {
    const widthInt = parseInt(width, 10);
    const heightInt = parseInt(height, 10);

    return browser.setWindowSize(widthInt, heightInt);
  },

  isDisplayed(selector, negativeCase) {
    if (negativeCase) {
      return browser.assert.not.visible(selector);
    }
 
    return browser.assert.visible(selector);
    
  },

  checkElementPresent(selector, negativeCase) {
    if (negativeCase) {
      return browser.assert.not.elementPresent(selector);
    }
 
    return browser.assert.elementPresent(selector);
    
  },

  checkClass(selector, negativeCase, expectedClass) {
    if (negativeCase) {
      return browser.assert.not.cssClassPresent(selector, expectedClass);
    } else {
      return browser.assert.cssClassPresent(selector, expectedClass);
    }
  },
  
  checkCookieContent(name, negativeCase, expectedValue) {
    if (negativeCase) {
      return browser.expect.cookie(name).to.not.contain(expectedValue);
    }
 
    return browser.expect.cookie(name).to.contain(expectedValue);
    
  },

  checkActive(selector, negativeCase) {
    if (negativeCase) {
      return browser.expect.element(selector).to.not.be.active; 
    }
 
    return browser.expect.element(selector).to.be.visible;
    
  },

  checkSelected(selector, negativeCase) {
    if (negativeCase) {     
      return browser.assert.not.selected(selector);
    }
 
    return browser.assert.selected(selector);
    
  },

  checkTitle(negativeCase, expectedTitle) {
    if (negativeCase) {
      return browser.assert.not.title(expectedTitle);
    }

    return browser.assert.title(expectedTitle);
    
  },

  checkURL(negativeCase, expectedUrl) {
    if (negativeCase) {
      return browser.assert.urlEquals(expectedUrl);
    }
 
    return browser.assert.not.urlContains(expectedUrl);
    

  },

  checkURLContain(negativeCase, expectedUrl) {
    if (negativeCase) {
      return browser.assert.not.urlContains(expectedUrl);
    }
 
    return browser.assert.urlContains(expectedUrl);
    
  },

  checkIsEnabled(selector, negativeCase) {
    if (negativeCase) {
      return browser.assert.not.enabled(selector);
    }

    return browser.assert.enabled(selector);

  },

  async checkContainsText(elementType, selector, negativeCase, expectedText) {
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
  },

  
  checkProperty(isCss, attrName, selector, negativeCase, expectedValue) { 
    if (negativeCase) {
      return isCss 
        ? browser.assert.not.cssProperty(selector, attrName, expectedValue)
        : browser.assert.not.domProperty(selector, attrName, expectedValue);
    }

    return isCss 
      ? browser.assert.cssProperty(selector, attrName, expectedValue)
      : browser.assert.domProperty(selector, attrName, expectedValue);
    

  }
};

module.exports = {
  commands: [nightwatchCommands]  
};