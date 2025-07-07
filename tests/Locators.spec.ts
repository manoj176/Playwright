import {test, expect} from '@playwright/test'

test('Locators', async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');
     
                                                            //click on login button - property(2 methods)
                                                            //await page.locator('id=login2').click()
await page.click('id=login2')

                                                            //provide username
                                                            //await page.locator('#loginusername').fill("manoj")
await page.fill('#loginusername',"manasalayooo")
                                                            //await page.type('#loginusername')

                                                            //provide password
                                                            //await page.locator('#loginpassword').fill("Abc@123")
await page.fill('#loginpassword',"Mylv@143")
                                                            //await page.type('#loginpassword')

                                                            //Click on login button
await page.click("//button[normalize-space()='Log in']")

                                                            //verify logout link presence
// const logoutlink= await page.locator("//a[normalize-space()='Log out']")

// await expect(logoutlink).toBeVisible();
await expect(page.locator("#logout2")).toBeVisible();

await page.close();

})

