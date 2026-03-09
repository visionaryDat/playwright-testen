import { test } from '@playwright/test';
import { ForecastPage } from '../../pages/forecast.page';

test('Prognose Erstellung', async ({ page }) => {
  const forecastPage = new ForecastPage(page);

  await test.step("Anmelden", async () => {
    await forecastPage.anmelden();
  });

  await test.step("Systemmeldung schließen", async () => {
    await forecastPage.systemmeldungSchliessen();
  });

  await test.step(" STEP 1 Planning Dropdown öffnen und Order Planning auswählen und dann auf das Special Demand by Item klicken", async () => {
    await forecastPage.openSpecialDemandByItem();
  });

  await test.step(" STEP 2 Neue Ansicht Button klicken ", async () => {
    await forecastPage.clickNewViewButton();
  });

  await test.step(" STEP 3 Dann durch Scenario Tappen dann durch plan Item tappen dann von dort aus 2 x tappen man landet auf M2100 und dort dann auf Tab tappen ", async () => {
    await forecastPage.tabThroughScenarioAndValidate();
  });

  await test.step(" STEP 4 Auf das hinzufügen button klicken und dann in der Zeile die + 20 eingeben und dann auf Tab klicken dann auf das Zeit Feld Tab klicken dann auf Seriennummern Feld Tab klicken und dann auf das Speichern Button klicken", async () => {
    await forecastPage.addDemandAndSave();
  });

  await test.step(" STEP 5 Klickt auf das Item Order Plan Label dann auf das Scenario Feld klicken von dort aus Tab dann landet man auf Plan Item dann auf Lupe klicken dann auf das Item C10 klicken und dann auf OK Button klicken", async () => {
    await forecastPage.openItemOrderPlanAndChooseC10();
  });

  await test.step(" STEP 6 Dann von Plan Item 2 x Tappen dann landet man in das Feld M2100 wählt dann das aus klickt auf Ok button und dann ist man wieder zurück (dritte Feld von Plan Item)", async () => {
    await forecastPage.selectM2100AndReturn();
  });

  await test.step(" STEP 7 Dann von dort aus Tab dann auf Period Lengtgh Feld drücken dann auf Plan Periods klicken dann auf Hide Empyty Periods klicken und dann auf Ok button klicken", async () => {
    await forecastPage.configurePeriods();
  });

  await test.step(" STEP 8 Jetzt auf das Prognose Kätschen markieren und dann Generate Orders klicken.", async () => {
    await forecastPage.openGenerateOrders();
  });

  await test.step(" STEP 9 Klicke auf Update Pegging Relations Kätschen (Update Resource Masterplan ist schon angeklickt) und dann auf Generate Button klicken dann auf Yes klicken", async () => {
    await forecastPage.generateAndConfirm();
  });

  await test.step(" STEP 10 Im nächsten Screen in das Devicedc Feld d eingeben und dann auf Tab drücken und dann auf Continue Button klicken. Es erscheint ein PDF Datei", async () => {
    await forecastPage.setDeviceAndContinue();
  });
});
