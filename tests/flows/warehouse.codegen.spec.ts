import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('iframe').nth(1).contentFrame().getByText('Cost Order').click();
});