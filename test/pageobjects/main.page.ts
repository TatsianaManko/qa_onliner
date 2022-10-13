export class MainPage {
    browser: WebdriverIO.Browser;
    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser;
    }

  get selectors() {
    return {
      logInButton: 'div#userbar div[text()="Вход"]',
    };
  }

  async open() {
    this.browser.url("https://www.onliner.by");
    this.browser.$(this.selectors.logInButton).waitForExist({
      timeout: 7000
    });
  }

  async isLogInButtonVisible() : Promise<boolean> {
    return this.browser.$(this.selectors.logInButton).isDisplayed();
  }
  async clickLogInButton(){
      (await this.browser.$(this.selectors.logInButton)).click();
  }
}


