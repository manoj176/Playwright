import{test, expect} from'@playwright/test'
test('Page Screenshot',async({page})=>
{
await page.goto('https://www.flipkart.com/');
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})
})

test('Full Page Screenshot',async({page})=>
{
await page.goto('https://www.flipkart.com/');
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png',fullpage:true})
})

test.only('Element Screenshot',async({page})=>
{
await page.goto('https://www.flipkart.com/');
await page.locator("//img[@alt='Mobiles']").screenshot({path:'tests/Screenshots/'+Date.now()+'Mobiles.png'})
})