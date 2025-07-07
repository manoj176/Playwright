import test from "@playwright/test";
import { expect } from "@playwright/test";
import { LoginPage } from "../POM/LoginPage";
test('Login to the Application Page',async({page})=>
{
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const loginPage=new LoginPage(page);
  await loginPage.loginToApplication();

  await page.pause();

})