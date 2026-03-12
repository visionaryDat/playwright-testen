import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.218.90.14:8312/webui/servlet/standalone');
  // Open Session and close Systemmeldung
  await page.locator('iframe').nth(1).contentFrame().locator('#sysmesdialog-button-n0').click();

  //Master Data Dropdown öffnen bzw das Item Artikel/Item auswählen
  await page.locator('iframe').nth(1).contentFrame().locator('.SvgIconDiv.tail > .icon').first().click();
  await page.locator('iframe').nth(1).contentFrame().locator('#node-mtcibd00001001-label').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#node-tcibd0501m000-label').click();
  
  //Klick auf den Pfeil neben Items
  await page.locator('iframe').nth(1).contentFrame().locator('#tcibd0501m000-grid-n1-drilldown-n10 > .SvgIconDiv > .icon > use').click();

  //Ordering Button klicken
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd0501m000-item.order.data"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]').fill('100');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-tcibd2100m000-input-button-n0').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]').press('Tab');
});