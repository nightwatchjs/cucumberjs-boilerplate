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
        .keyDown(Key[key])
        .keyUp(Key[key]);
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
      return browser.expect.element(selector).to.not.be.visible;
    }
 
    return browser.expect.element(selector).to.be.visible;
    
  },

  checkElementPresent(selector, negativeCase) {
    if (negativeCase) {
      return browser.expect.element(selector).to.not.be.present;
    }
 
    return browser.expect.element(selector).to.be.present;
    
  },

  checkClass(selector, negativeCase, expectedClass) {
    if (negativeCase) {
      return browser.expect.element(selector).to.not.have.property('className').contain(expectedClass);
    } else {
      return browser.expect.element(selector).to.have.property('className').contain(expectedClass);
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
      return browser.expect.element(selector).to.not.be.selected;
    }
 
    return browser.expect.element(selector).to.be.selected;
    
  },

  checkTitle(negativeCase, expectedTitle) {
    if (negativeCase) {
      return browser.expect.title().to.not.equal(expectedTitle);
    }

    return browser.expect.title().to.equal(expectedTitle);
    
  },

  checkTitleContains(negativeCase, expectedTitle) {
    if (negativeCase) {
      return browser.expect.title().to.not.contain(expectedTitle);
    }
 
    return browser.expect.title().to.contain(expectedTitle);
    
  },

  checkURL(negativeCase, expectedUrl) {
    if (negativeCase) {
      return browser.expect.url().to.not.equal(expectedUrl);
    }
 
    return browser.expect.url().to.equal(expectedUrl);
    

  },

  checkURLContain(negativeCase, expectedUrl) {
    if (negativeCase) {
      return browser.expect.url().to.not.contain(expectedUrl);
    }
 
    return browser.expect.url().to.contain(expectedUrl);
    
  },

  checkIsEnabled(selector, negativeCase) {
    if (negativeCase) {
      return browser.expect.element(selector).to.not.be.enabled;
    }

    return browser.expect.element(selector).to.be.enabled;
    

  },

  async checkContainsText(elementType, selector, negativeCase, expectedText) {
    let command = 'getValue';
    if (['container', 'button'].includes(elementType) || (await browser.getElementProperty(selector, 'value')) === null) {
      command = 'getText';
    }
    await browser.waitForElementVisible(selector);
      
    if (negativeCase) {
      command ==='getValue' 
        ? await browser.expect.element(selector).to.not.have.property('value').contain(expectedText)
        : await browser.expect.element(selector).text.to.not.contain(expectedText);
    } else {
      command ==='getValue' 
        ? await browser.expect.element(selector).to.have.property('value').contain(expectedText)
        : await browser.expect.element(selector).text.to.contain(expectedText);
    }
  },

  async checkEqualsText(elementType, selector, negativeCase, expectedText) {
    let command = 'getValue';
    if (['container', 'button'].includes(elementType) || (await browser.getElementProperty(selector, 'value')) === null) {
      command = 'getText';
    }
      
    if (negativeCase) {
      command ==='getValue' 
        ? await browser.expect.element(selector).to.not.have.property('value').equals(expectedText)
        : await browser.expect.element(selector).text.to.not.equals(expectedText);
    } else {
      command ==='getValue' 
        ? await browser.expect.element(selector).to.have.property('value').equals(expectedText)
        : await browser.expect.element(selector).text.to.eqauls(expectedText);
    }
  },

  checkProperty(isCss, attrName, selector, negativeCase, expectedValue) { 
    if (negativeCase) {
      return isCss 
        ? browser.expect.element(selector).to.not.have.css(attrName).which.equals(expectedValue)
        : browser.expect.element(selector).to.not.have.css(attrName).which.equals(expectedValue);
    }

    return isCss 
      ? browser.expect.element(selector).to.have.css(attrName).which.equals(expectedValue)
      : browser.expect.element(selector).to.have.css(attrName).which.equals(expectedValue);
    

  }
};

module.exports = {
  commands: [nightwatchCommands]  
};