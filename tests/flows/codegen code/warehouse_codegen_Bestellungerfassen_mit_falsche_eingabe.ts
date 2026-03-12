import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.218.90.14:8312/webui/servlet/standalone');
  // Open Session and close Systemmeldung
  await page.locator('iframe').nth(1).contentFrame().locator('#sysmesdialog-button-n0').click();

  // Sales Dropdown öffnen und auf Orders und dann auf Orders Intake Workbench auswählen
  await page.locator('iframe').nth(1).contentFrame().getByText('Sales', { exact: true }).click();
  await page.locator('iframe').nth(1).contentFrame().getByText('Orders').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#node-tdsls4601m200-image > #icon-launch > path').click();

  // Klickt auf Sales order hinzufügen und dann Lupe für Business partner und dann erscheint man in der Sold To Business Partner Tab. Wählt ein Liferant aus und klickt auf OK
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4601m200-button-std-file.new"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tccom4510m000-grid-n1-select-n0 #icon-checkbox-ln').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tccom4510m000-button-std-file.save_and_close"]').click();

  // Tab Taste klicken auf Business Partner es erscheint automatisch Adresss und Postleizahl
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-widget"]').press('Tab');

  // Klickt auf Order Type Feld und Tippe exx ein es erscheint eine Fehlermeldung und dann klickt man wieder auf die Lupe von Order Type und es öffnet sich die Sales Order Types
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]').fill('exx');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-tdsls4100m900-input-button-n0').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
});