import{test, expect} from'@playwright/test'

test('Handle Dropdown',async ({page})=>
    {
  await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.locator("//select[@id='country']").selectOption('United States');
//   await page.locator("//select[@id='country']").selectOption({label:'United States'});
//   await page.locator("//select[@id='country']").selectOption({value:'uk'});
  await page.locator("//select[@id='country']").selectOption({index:1});
  await page.pause();
})
