const{test, expect, chromium} = require('@playwright/test')
test('Handle Pages/windows',async()=>
{
const browser = await chromium.launch()
const context = await browser.newContext()

const page1=await context.newPage()
const page2=await context.newPage()

const allPages=context.pages()
console.log("No of Pages created:",allPages.length)

await page1.goto('https://www.flipkart.com/?affid=affveve&affExtParam1=3defeb5cb43297d1635315c53f330802&affExtParam2=60827');
await expect(page1).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books &amp; More. Best Offers!');

await page2.goto('https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_c3372407-ef12-47c6-834a-c08d6994a50f_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J');
await expect(page2).toHaveTitle('Mobile Phones Online at Best Prices in India')
})