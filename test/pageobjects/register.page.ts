export class RegisterPage {
    browser: WebdriverIO.Browser;
    constructor(browser: WebdriverIO.Browser) {
      this.browser = browser;
    }
  
    get selectors() {
      return {
        form: '//*[@id="container"]/div/div/div/form/div[2]',
        email:
          '//*[@id="container"]/div/div/div/form/div[2]/div/div[5]/div/div/div/div/input',
        password:
          '//*[@id="container"]/div/div/div/form/div[2]/div/div[6]/div/div/div/div/input',
        confirmPassword:
          '//*[@id="container"]/div/div/div/form/div[2]/div/div[8]/div/div/div/div/input',
        checkbox:
          '//*[@id="container"]/div/div/div/form/div[2]/div/div[9]/label/span/span[1]',
        submitButton:
          '//*[@id="container"]/div/div/div/form/div[2]/div/div[10]/button'
      };
    }
  
    async isActive(): Promise<boolean> {
      return true;
    }
  
    async isFormVisible() {
      return this.browser.$(this.selectors.form).waitForDisplayed();
    }
  
    async fillEmail(emailValue: string) {
      return this.browser.$(this.selectors.email).setValue(emailValue);
    }
  
    async fillPassword(passwordValue: string) {
      return this.browser.$(this.selectors.password).setValue(passwordValue);
    }
  
    async fillConfirmPassword(confirmPasswordValue: string) {
      return this.browser
        .$(this.selectors.confirmPassword)
        .setValue(confirmPasswordValue);
    }
  
    async clickCheckbox() {
      return this.browser.$(this.selectors.checkbox).click();
    }
  
    async clickSubmitButton() {
      return this.browser.$(this.selectors.submitButton).click();
    }
  }
  