import {test, expect} from '@playwright/test'

test('Record Video', async({page})=>
{
await page.goto('https://www.demoblaze.com/index.html');                                                     
await page.click('id=login2')                                                        
await page.fill('#loginusername',"manasalayooo")                                                          
await page.fill('#loginpassword',"Mylv@143")                                                           
await page.click("//button[normalize-space()='Log in']")
await expect(page.locator("#logout2")).toBeVisible();
await page.close();
})