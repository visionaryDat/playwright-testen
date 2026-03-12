import { test, expect } from '@playwright/test';

test('Sales Order Erstellung', async ({ page }) => {
  test.setTimeout(120000);

  // Locator Variables
  const urlInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  const frame = page.locator('iframe').nth(1).contentFrame();

  const systemmeldungButton = frame.locator('#sysmesdialog-button-n0');

  const optionsDropdown = frame.getByText(/^(Optionen|Options)$/);
  const runProgramOption = frame.getByText(/^(Programm ausfuhren|Programm ausführen|Run Program)$/);
  const programInput = frame.locator('#dlg-run_program-input-control-widget');
  const programSearchBox = frame.getByRole('textbox', { name: 'search' });
  const programOkButton = frame.locator('#dlg-run_program-button-n0');

  const salesOrderButton = frame.locator('[id="tdsls4601m200-button-std-file.new"] > .SvgIconDiv > .icon');

  const businessPartnerLookupButton = frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const businessPartnerSelectCheckbox = frame.locator('#tccom4510m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
  const businessPartnerSaveAndCloseButton = frame.locator('[id="tccom4510m000-button-std-file.save_and_close"]');

  const businessPartnerTab = frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-widget"]');
  const addressTab = frame.locator('[id="tdsls4100m900-tdsls400.ofad-n3-lookup-widget"]');
  const addressTab2 = frame.locator('[id="tdsls4100m900-address.tdsls400.ofad"]');
  const postalCodeTab = frame.locator('[id="tdsls4100m900-tdsls400.ofcn-n7-lookup-widget"]');
  const orderTypeTab = frame.getByRole('row', { name: 'Customer Order:', exact: true }).getByRole('textbox');
  
  const orderTypeLookupButton = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const orderTypeSelectCheckbox = frame.locator('#tdsls0594m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
  const orderTypeSaveAndCloseButton = frame.locator('[id="tdsls0594m000-button-std-file.save_and_close"]');
  const orderTypeHidden = frame.locator('#tdsls0594m000');
  
  const orderTypeTab2 = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]');
  const salesOfficeLookupButton = frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const salesOfficeLookupDialog = frame.locator('#tdsls0512m000');
  const salesOfficeSelectCheckbox = frame.locator('[id^="tdsls0512m000-grid-n1-select-n"]').first();
  const salesOfficeSaveAndCloseButton = frame.locator('[id="tdsls0512m000-button-std-file.save_and_close"]');
  const salesOfficeTab = frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-widget"]');

  const orderLineButton = frame.locator('[id="tdsls4101m000-button-std-file.new"]');
  const orderLineSalesOrderOkButton = frame.locator('#dlg-tdsls4100m900-input-button-n0');
  const orderLinePonoField = frame.locator('[id^="tdsls4101m000-grid-n1-tdsls401.pono-"][id$="-n0-widget"]');
  const orderLineItemSegment1Field = frame.locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.1-n422-n0-widget"]');
  const orderLineItemSegment2LookupButton = frame.locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.2-n422-n0-trigger-button"]');
  const itemSelectCheckbox = frame.locator('#tdisa0501m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxPartial');
  const itemSaveAndCloseButton = frame.locator('[id="tdisa0501m000-button-std-file.save_and_close"]');
  const itemLookupHidden = frame.locator('#tdisa0501m000');
  const orderSaveButton = frame.locator('[id="tdsls4100m900-button-std-file.save"] > .SvgIconDiv > .icon');





  // Test Steps 
  await test.step("Anmelden", async () => {
    await page.goto(urlInfor);
  });



  await test.step("Systemmeldung schließen", async () => {
    await systemmeldungButton.click();
  });


  await test.step(" STEP 1 Optionen Dropdown öffnen und dann auf Programm ausführen klicken dann tdsls4601m200 in das Feld tippen und dann auf OK Button klicken", async () => {
    await optionsDropdown.click();
    await runProgramOption.click();
    await programInput.click();
    await programSearchBox.fill('tdsls4601m200');
    await programOkButton.click();

    await expect(salesOrderButton).toBeVisible();
  });




  await test.step(" STEP 2 Sales Order button klicken (dann landet man auf der Sales Order Seite)", async () => {
    await salesOrderButton.click();

    await expect(businessPartnerLookupButton).toBeVisible();
  });


  

  
  await test.step(" STEP 3 Business Partner Feld Lupe klicken dann ein Sold to Business Partner auswählen (zb 1003) dann auf OK Button klicken", async () => {
    await businessPartnerLookupButton.click();
    await businessPartnerSelectCheckbox.click({ force: true });
    await businessPartnerSaveAndCloseButton.click();
  });


  


  await test.step(" STEP 4 Dann von Business Partner Feld 2 x Tabben es erscheint Adress und dann Postal Code dann nochmal 3 x Tappen dann landet man auf der Order Type Feld dann auf die Lupe klicken dann einen Sales Order Type auswählen (zb. C10) dann auf OK Button klicken ", async () => { 
    await businessPartnerTab.press('Tab');
    await addressTab.press('Tab');
    await addressTab2.press('Tab');
    await postalCodeTab.press('Tab');
    await orderTypeTab.press('Tab');
    await orderTypeLookupButton.click({ force: true });
    await orderTypeSelectCheckbox.click({ force: true });
    await orderTypeSaveAndCloseButton.click();
    await orderTypeHidden.waitFor({ state: 'hidden' });
  });







  await test.step(" STEP 5 Dann von Order Type Feld einmal Tabben dann landet man auf Sales Office dann klickt man auf die Lupe dann wählt ein Sales Office aus (zb SO1000) dann auf OK Button klicken und dann von dort aus nochmal Tabben dann landet man auf Number Feld und in Number Feld erscheint SOR ", async () => {
    await orderTypeTab2.press('Tab');
    await salesOfficeLookupButton.click({ force: true });
    await salesOfficeLookupDialog.waitFor({ state: 'visible' });
    await salesOfficeSelectCheckbox.waitFor({ state: 'visible', timeout: 15000 });
    await salesOfficeSelectCheckbox.click({ force: true });
    await salesOfficeSaveAndCloseButton.click({ force: true });
    await salesOfficeLookupDialog.waitFor({ state: 'hidden' });
    await salesOfficeTab.press('Tab');
  });





  await test.step(" STEP 6 Dann klickt man auf Order Line button es erscheint erstmal eine Feld Sales Order : tcgens0068 dann klickt man auf OK. Als nächstes erscheint in Line ein Feld und dann schreibt man eine 1 rein dann 2x Tabben man landet auf Item Feld dann auf die Lupe klicken dann ein Item auswählen (zb. C1000) dann auf OK Button klicken. Am Ende klickt man auf das Speichern Button. Es erscheint leider eine Fehlermeldung mit Tax code field", async () => {
    await orderLineButton.click();
    await orderLineSalesOrderOkButton.click();
    await orderLinePonoField.fill('1');
    await orderLinePonoField.press('Tab');
    await orderLineItemSegment1Field.press('Tab');
    await orderLineItemSegment2LookupButton.click({ force: true });
    await itemSelectCheckbox.click();
    await itemSaveAndCloseButton.click();
    await itemLookupHidden.waitFor({ state: 'hidden' });
    await orderSaveButton.click({ force: true });
  });
  
  



  




  


















});