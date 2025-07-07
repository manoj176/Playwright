const{test, expect} =require('@playwright/test');

test('Mouse right click',async({page})=>
{
    await page.goto('https://jquery.com/');
    const button=await page.locator('//a[@class="button db"]');

    await button.click({button:'right'});
    await page.waitForTimeout(5000);

})