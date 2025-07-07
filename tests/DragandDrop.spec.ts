import{test, expect} from'@playwright/test'
test('Drag and Drop',async({page})=>
{
await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
const rome=await page.locator('#box6');
const Italy=await page.locator('#box106');

await rome.hover();
await page.mouse.down();

await Italy.hover();
await page.mouse.up();

await page.waitForTimeout(10000);
await page.pause();


})