import {MainPage} from "../pageobjects/main.page";
import {LoginPage} from "../pageobjects/login.page";
import {RegisterPage} from "../pageobjects/register.page";
import {ConfirmPage} from "../pageobjects/confirm.page";
import { getUserData } from "../getUserData";


describe("Registration on Oliner", () => {

   let mainPage;
   let loginPage;
   let registerPage;
   let confirmPage;
   let userData;
   let browser: WebdriverIO.Browser;

   beforeEach(async () =>{
    browser = await remote({
        capabilities: {
          browserName: "chrome",
        },
      });
    let mainPage = new MainPage();
    let loginPage = new LoginPage();
    let registerPage = new RegisterPage();
    let confirmPage = new ConfirmPage;
    userData = await getUserData();
    });

    afterEach(async () => {
        await browser.deleteSession();
    }) 

    it("Redirect to Login page from Main page", async()=>{
        await mainPage.open();
        expect(await mainPage.isLogInButtonVisible()).toBe(true);
        await mainPage.clickLogInButton(); 
        expect(await loginPage.isFormVisible()).toBe(true);
    });

    it("Redirect to Register page from Login page", async()=>{
        await mainPage.open();
        await mainPage.clickLogInButton(); 
        expect(await loginPage.isFormVisible()).toBe(true);
        
        await loginPage.clickSignUpButton();
        expect(await registerPage.isActive()).toBe(true);
        expect(await registerPage.isFormVisible()).toBe(true);
    });

    it("can create a new user", async()=>{
        await mainPage.open();
        await mainPage.clickLogInButton(); 
        expect(await loginPage.isFormVisible()).toBe(true);
        await loginPage.clickSignUpButton();
        expect(await registerPage.isActive()).toBe(true);
        expect(await registerPage.isFormVisible()).toBe(true);

        await registerPage.fillEmail(userData.email);
        await registerPage.fillPassword(userData.password);
        await registerPage.fillConfirmPassword(userData.confirmPassword);
        await registerPage.clickCheckbox();
        await registerPage.clickSubmitButton();
        expect(await confirmPage.isFormVisible()).toBe(true); 
    });

});


    
    

    
