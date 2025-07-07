import{test, expect} from'@playwright/test'
let page;
test.beforeAll(async ({browser})=>
{
page=await browser.newPage();
await page.goto('https://www.demoblaze.com/');
await page.locator("#login2").click();
await page.locator("#loginusername").fill('manasalayooo');
await page.locator("#loginpassword").fill('Mylv@143');
await page.locator("//button[normalize-space()='Log in']").click();
})

test.afterAll(async()=>
{
await page.locator("#logout2").click();
})
test('Home Page Test',async()=>
{


const items=await page.$$('.hrefch');
expect(items).toHaveLength(9);
await page.locator("#logout2").click();



})

test('Add items in cart Test',async()=>
{
await page.goto('https://www.demoblaze.com/');
await page.locator("#login2").click();
await page.locator("#loginusername").fill('manasalayooo');
await page.locator("#loginpassword").fill('Mylv@143');
await page.locator("//button[normalize-space()='Log in']").click();
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();
page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added.');
await dialog.accept();
})
await page.locator("#logout2").click();
})