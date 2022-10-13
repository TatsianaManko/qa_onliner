export class ConfirmPage {
  browser: WebdriverIO.Browser;
  constructor(browser: WebdriverIO.Browser) {
    this.browser = browser;
  }

  get selectors() {
    return {
      form: '//*[@id="container"]/div/div/div/div/div[2]',
      button: '//*[@id="container"]/div/div/div/div/div[2]/div/div[5]/a',
    };
  }

  async isFormVisible() {
    return this.browser.$(this.selectors.form).waitForDisplayed();
  }

  async clickAuthButton() {
    return this.browser.$(this.selectors.button).click();
  }
}
