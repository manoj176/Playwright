import{test, chromium} from "@playwright/test" ;
test("chrome",async()=>
{
    const browser=await chromium.launch();
    const page=await browser.newPage();
    await page.goto("https://www.facebook.com/");
    await page.fill("#email","heisenberg");
    await page.fill("#pass","test@123");
    await page.getByRole("button",{name:"Log in"}).click();
    await page.pause();
    await browser.close();
})