import { test } from '@playwright/test';
import { CreateSalesOrderPage } from '../../pages/create-sales-order.page';

test('Sales Order Erstellung', async ({ page }) => {
  test.setTimeout(120000);
  const createSalesOrderPage = new CreateSalesOrderPage(page);

  // Test Steps
  await test.step("Anmelden", async () => {
    await createSalesOrderPage.anmelden();
  });

  await test.step("Systemmeldung schließen", async () => {
    await createSalesOrderPage.systemmeldungSchliessen();
  });

  await test.step(" STEP 1 Optionen Dropdown öffnen und dann auf Programm ausführen klicken dann tdsls4601m200 in das Feld tippen und dann auf OK Button klicken", async () => {
    await createSalesOrderPage.openRunProgramAndStartSalesOrder();
  });

  await test.step(" STEP 2 Sales Order button klicken (dann landet man auf der Sales Order Seite)", async () => {
    await createSalesOrderPage.openSalesOrder();
  });

  await test.step(" STEP 3 Business Partner Feld Lupe klicken dann ein Sold to Business Partner auswählen (zb 1003) dann auf OK Button klicken", async () => {
    await createSalesOrderPage.selectBusinessPartner();
  });

  await test.step(" STEP 4 Dann von Business Partner Feld 2 x Tabben es erscheint Adress und dann Postal Code dann nochmal 3 x Tappen dann landet man auf der Order Type Feld dann auf die Lupe klicken dann einen Sales Order Type auswählen (zb. C10) dann auf OK Button klicken ", async () => {
    await createSalesOrderPage.selectOrderTypeAfterTabbing();
  });

  await test.step(" STEP 5 Dann von Order Type Feld einmal Tabben dann landet man auf Sales Office dann klickt man auf die Lupe dann wählt ein Sales Office aus (zb SO1000) dann auf OK Button klicken und dann von dort aus nochmal Tabben dann landet man auf Number Feld und in Number Feld erscheint SOR ", async () => {
    await createSalesOrderPage.selectSalesOfficeWithRetries();
  });

  await test.step(" STEP 6 Dann klickt man auf Order Line button es erscheint erstmal eine Feld Sales Order : tcgens0068 dann klickt man auf OK. Als nächstes erscheint in Line ein Feld und dann schreibt man eine 1 rein dann 2x Tabben man landet auf Item Feld dann auf die Lupe klicken dann ein Item auswählen (zb. C1000) dann auf OK Button klicken. Am Ende klickt man auf das Speichern Button. Es erscheint leider eine Fehlermeldung mit Tax code field", async () => {
    await createSalesOrderPage.addOrderLineAndSaveExpectTaxCodeError();
  });
});
