import { test, expect } from '@playwright/test';


test('Eine Bestellung erfassen mit falschen Eingabe bei Bestellart', async ({ page }) => {

  // Locator Variables 
  const URLInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  const frame = page.locator('iframe').nth(1).contentFrame();

  //const sysmedialogButton = frame.locator('#sysmesdialog-button-n0'); anscheined ist der Systemmeldung nicht immer da (05.03.2026), deswegen erstmal auskommentiert 

  const SalesDropdown = frame.getByText('Sales', { exact: true });
  const OrdersDropdown = frame.getByText('Orders');
  const OrdersIntakeWorkbench = frame.locator('#node-tdsls4601m200-image > #icon-launch > path');

  const AddSalesOrderButton = frame.locator('[id="tdsls4601m200-button-std-file.new"] > .SvgIconDiv > .icon');
  const BusinessPartnerLupe = frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const FirstBusinessPartner = frame.locator('#tccom4510m000-grid-n1-select-n0 #icon-checkbox-ln');
  const SaveAndCloseBPButton = frame.locator('[id="tccom4510m000-button-std-file.save_and_close"]'); // Das ist das OK Button
  const BusinessPartnerField = frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-widget"]');

  const AddressField = frame.locator('[id^="tdsls4100m900-tdsls400.ofad"][id$="lookup-widget"]');
  const PostalCodeLabel = frame.locator('[id^="tdsls4100m900-tccom130.pstc-"]:not(.Label-empty)');

  const OrderTypeField = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]');
  const ErrorModalOkButton  = frame.locator('#dlg-tdsls4100m900-input-button-n0');
  const ErrorDialog = ErrorModalOkButton.locator('..').locator('..'); // ggf. ein .. mehr

  const OrderTypeLupe = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon');




  // Test Steps
  await test.step("Anmelden", async () => {
    await page.goto(URLInfor);
  });



  //await test.step("Systemmeldung schließen", async () => {
    //await sysmedialogButton.click();
  //});



  await test.step(" STEP 1 Sales Dropdown öffnen und auf Orders und dann auf Orders Intake Workbench auswählen", async () => {
    await SalesDropdown.click();
    await OrdersDropdown.click();
    await OrdersIntakeWorkbench.click();

    await expect(AddSalesOrderButton).toBeVisible();
  });



  await test.step(" STEP 2 Klickt auf Sales order hinzufügen (dann landet man auf Sales Order Tab) und dann Lupe für Business partner klicken und dann erscheint man in der Sold To Business Partner Tab. Wählt ein Liferant aus und klickt auf OK", async () => {
    await AddSalesOrderButton.click();
    await expect(BusinessPartnerLupe).toBeVisible(); // Neue Bestellung Seite offen

    await BusinessPartnerLupe.click();
    await expect(FirstBusinessPartner).toBeVisible(); // Lieferanten Seite offen


    await FirstBusinessPartner.click();
    await SaveAndCloseBPButton.click(); // Das ist das OK Button
    await expect(BusinessPartnerField).not.toHaveValue(''); // Lieferantnummer steht im Feld
  });



  await test.step("STEP 3 Tab Taste klicken auf Business Partner Feld -> Adresse & Postleitzahl werden gefüllt", async () => {
    await BusinessPartnerField.press('Tab');
    await expect(BusinessPartnerField).toBeVisible();

    // warten bis wirklich gefüllt
    await expect(AddressField).toHaveValue(/.+/);
    await expect(PostalCodeLabel).toHaveText(/\S+/);
});





  await test.step(" STEP 4 Klickt auf Order Type Feld und Tippe exx ein es erscheint eine Fehlermeldung und dann auf OK klicken damit die Meldung schließt", async () => {
    await OrderTypeField.click();
    await OrderTypeField.fill('exx');
    await OrderTypeField.press('Tab');
    await expect(ErrorModalOkButton).toBeVisible(); // Modal erscheint + Text passt
    await expect(ErrorDialog).toContainText('Enter a value for the Order Type field.'); // Text prüfen: tatsächliche Meldung

   
    await ErrorModalOkButton.click();  // OK button klicken
    await expect(ErrorModalOkButton).toBeHidden(); // Modal schließt
  });




  await test.step(" STEP 5 Dann klickt man wieder auf die Lupe von Order Type und es öffnet sich die Sales Order Types", async () => {
    await OrderTypeLupe.click();
  });

  

});