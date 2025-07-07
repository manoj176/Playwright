const {test, expect} = require('@playwright/test')

test('SoftAssertions', async ({page})=>
{
await page.goto('https://www.demoblaze.com/index.html');

//HEAD ASSERTIONS
// await expect(page).toHaveTitle("STORE123");
// await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
// await expect(page.locator('.navbar-brand')).toBeVisible();

//SOFT ASSERTIONS
await expect.soft(page).toHaveTitle("STORE123");
await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
await expect.soft(page.locator('.navbar-brand')).toBeVisible();

await page.pause();

})