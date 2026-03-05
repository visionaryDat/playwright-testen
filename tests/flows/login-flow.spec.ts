import { test, expect } from '@playwright/test';

//Test Variables
const URLInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
const sysmedialogButton = '#sysmesdialog-button-n0';
const MasterData = '.SvgIconDiv.tail > .icon';
const MasterDataDropdown = '#node-mtcibd00001001-label';
const Items = '#node-tcibd0501m000-label';
const ItemsArrow = '#tcibd0501m000-grid-n1-drilldown-n10 > .SvgIconDiv > .icon';
const OrderingButton = '[id="tcibd0501m000-item.order.data"]'; 
const WarehouseField = '[id="tcibd2100m000-tcibd200.cwar-n41-lookup-widget"]';
const WarehouseFehlerMeldung = '[id^="dlg-"][id$="-input-button-n0"]';


test('warehouse flow', async ({ page }) => {
  await test.step("Anmelden", async () => {
    await page.goto(URLInfor);
  });

  await test.step("Systemmeldung schließen", async () => {
    await page.locator('iframe').nth(1).contentFrame().locator(sysmedialogButton).click();
  });

  await test.step("STEP 1: Master Data Dropdown öffnen bzw das Item ", async () => {
    await page.locator('iframe').nth(1).contentFrame().locator(MasterData).first().click();
    await page.locator('iframe').nth(1).contentFrame().locator(MasterDataDropdown).click();
  });

  await test.step("STEP 2: Artikel/Item auswählen", async () => {
    await page.locator('iframe').nth(1).contentFrame().locator(Items).click();
    await page.locator('iframe').nth(1).contentFrame().locator(ItemsArrow).click();
  });

  await test.step("STEP 3: Ordering Button klicken", async () => {
    await page.locator('iframe').nth(1).contentFrame().locator(OrderingButton).click();
  });

  await test.step("STEP 4: Warehouse Field ausfüllen und Fehlermeldung überprüfen", async () => {
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseField).click();
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseField).fill('100');
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseField).press('Tab');
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseFehlerMeldung).click();
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseField).click();
    await page.locator('iframe').nth(1).contentFrame().locator(WarehouseField).press('Tab');
  });
});