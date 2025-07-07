import { test, expect } from '@playwright/test';

test('Single File Upload Test', async ({ page }) => {
  await page.goto('https://imageresizer.com/image-compressor');
  const fileInput =  page.locator('//input[@type="file"]');

  
  await expect(fileInput).toBeVisible();

  await fileInput.setInputFiles('C:\\Users\\2414358\\OneDrive - Cognizant\\Pictures\\Screenshots\\Screenshot (1).png');

  await page.waitForTimeout(10000); 
});