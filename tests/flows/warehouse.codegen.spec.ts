import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('http://10.218.90.14:8312/webui/servlet/standalone');
  // Open Session and close Systemmeldung
  await page.locator('iframe').nth(1).contentFrame().locator('#sysmesdialog-button-n0').click();

  // Options Dropdown öffnen und dann auf Programm ausführen klicken dann tdsls4601m200 in das Feld tippen und dann auf OK Button klicken
  await page.locator('iframe').nth(1).contentFrame().getByText(/^(Optionen|Options)$/).click();
  await page.locator('iframe').nth(1).contentFrame().getByText(/^(Programm ausfuhren|Programm ausführen|Run Program)$/).click();
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-run_program-input-control-widget').click();
  await page.locator('iframe').nth(1).contentFrame().getByRole('textbox', { name: 'search' }).fill('tdsls4601m200');
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-run_program-button-n0').click();

  // Sales Order button klicken (dann landet man auf der Sales Order Seite)
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4601m200-button-std-file.new"] > .SvgIconDiv > .icon').click();

  // Business Partner Feld Lupe klicken dann ein Sold to Business Partner auswählen (zb 1003) dann auf OK Button klicken
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('#tccom4510m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tccom4510m000-button-std-file.save_and_close"]').click();

  // Dann von Business Partner Feld 2 x Tabben es erscheint Adress und dann Postal Code dann nochmal 2 x Tappen dann landet man auf der Order Type Feld dann auf die Lupe klicken dann einen SalesOrder Type auswählen (zb. C10) dann auf OK Button klicken 
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tccom4510m000-button-std-file.save_and_close"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tccom4510m000-grid-n1-select-n0 #icon-checkbox-ln').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tccom4510m000-button-std-file.save_and_close"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofad-n3-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-address.tdsls400.ofad"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.ofcn-n7-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().getByRole('row', { name: 'Customer Order:', exact: true }).getByRole('textbox').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tdsls0594m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls0594m000-button-std-file.save_and_close"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tdsls0594m000').waitFor({ state: 'hidden' });

  // Dann von Order Type Feld einmal Tabben dann landet man auf Sales Office dann klickt man auf die Lupe dann wählt ein Sales Office aus (zb SO1000) dann auf OK Button klicken und dann von dort aus nochmal Tabben dann landet man auf Number Feld und in Number Feld erscheint SOR 
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"] > .SvgIconDiv > .icon').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id^="tdsls0512m000-grid-n1-select-n"]').first().click({ force: true, timeout: 5000 }).catch(async () => {
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"] > .SvgIconDiv > .icon').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id^="tdsls0512m000-grid-n1-select-n"]').first().click({ force: true });});
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls0512m000-button-std-file.save_and_close"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-widget"]').press('Tab');


  // Dann klickt man auf Order Line button es erscheint erstmal eine Feld Sales Order : tcgens0068 dann klickt man auf OK. Als nächstes erscheint in Line ein Feld und dann schreibt man eine 1 rein dann 2x Tabben man landet auf Item Feld dann auf die Lupe klicken dann ein Item auswählen (zb. C1000) dann auf OK Button klicken. Am Ende klickt man auf das Speichern Button. Es erscheint leider eine Fehlermeldung mit Tax code field
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4101m000-button-std-file.new"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-tdsls4100m900-input-button-n0').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id^="tdsls4101m000-grid-n1-tdsls401.pono-"][id$="-n0-widget"]').fill('1');
  await page.locator('iframe').nth(1).contentFrame().locator('[id^="tdsls4101m000-grid-n1-tdsls401.pono-"][id$="-n0-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.1-n422-n0-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.2-n422-n0-trigger-button"]').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('#tdisa0501m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxPartial').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdisa0501m000-button-std-file.save_and_close"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tdisa0501m000').waitFor({ state: 'hidden' });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tdsls4100m900-button-std-file.save"] > .SvgIconDiv > .icon').click({ force: true });
});