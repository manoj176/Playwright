const{test, expect} = require('@playwright/test')

test('Assertions',async ({page})=>{
  await page.goto('https://demo.nopcommerce.com/register')

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logoElement=await page.locator('.header-logo');
  await expect(logoElement).toBeVisible();

  const searchBox=await page.locator('#small-searchterms');
  await expect(searchBox).toBeEnabled();

  const maleRadioButton=await page.locator('#gender-male');
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

 const newsLetterCheckBox = await page.locator('#Newsletter');
 await expect(newsLetterCheckBox).toBeChecked();

  const regButton=await page.locator('#register-button');
  await expect(regButton).toHaveAttribute('type','submit');

  const Register=await page.locator('.page-title h1');
  await expect(Register).toHaveText('Register');

  // const Register=await page.locator('.page-title h1');
  // await expect(Register).toContainText('Reg');

  const emailInputbox=await page.locator('#Email');
  await emailInputbox.fill('test123@gmail.com');
  await expect(emailInputbox).toHaveValue('test123@gmail.com');

  // const option=await page.locator('select[name=DateofBirthMonth] option');
  // await expect(option).toHaveCount(13);

  await page.pause();

})