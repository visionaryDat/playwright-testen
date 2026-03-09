import { test, expect } from '@playwright/test';

test('Prognose Erstellung', async ({ page }) => {
    
  // Locator Variables
  const URLInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  const frame = page.locator('iframe').nth(1).contentFrame();

  const sysmedialogButton = frame.locator('#sysmesdialog-button-n0');

  const PlanningDropdown = frame.getByText('Planning', { exact: true });
  const OrderPlanning = frame.getByText('Order Planning', { exact: true });
  const SpecialDemandByItem = frame.locator('#node-cpdsp2100m000-label');

  const NewViewButton = frame.locator('[id="cpdsp2100m000-button-std-group.new"] > .SvgIconDiv > .icon');
  const ScenarioField = frame.locator('[id="cpdsp2100m000-cpdsp200.plnc-n1-lookup-widget"]');
  const PlanItemField = frame.getByRole('cell', { name: 'C10', exact: true }).getByRole('textbox');
  const PlanItem2Field = frame.getByRole('textbox').nth(3);
  const M2100Field = frame.getByRole('cell', { name: 'M2100', exact: true }).getByRole('textbox');
  const ActualPlanLabel = frame.getByText('Actual Plan', { exact: true });
  const DescriptionLabel = frame.getByText('In BOM').first();
  const ForecastTimeFenceLabel = frame.getByText(/\d{1,2}[./]\d{1,2}[./]\d{4}/).first();
  
  const AddButton = frame.locator('[id="cpdsp2100m000-button-std-file.new"] > .SvgIconDiv > .icon');
  const DemandDateField = frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]');
  const TimeField = frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt.time-n6-n0-widget-widget"]');
  const SequenceNumber10 = frame.locator('[id^="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-"][id$="-widget"]').filter({ hasText: '10' }).first();
  const SerialNumberField = frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-n0-widget"]');
  const SaveButton = frame.locator('[id="cpdsp2100m000-button-std-file.save"] > .SvgIconDiv > .icon');

  const ItemOrderPlanLabel = frame.locator('#node-cprrp0520m000-label');
  const ScenarioField2 = frame.locator('[id="cprrp0521s000-plnc.f-n2-lookup-widget"]');
  const PlanItemLupe = frame.locator('[id="cprrp0521s000-item.f.segment.1-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const ItemC10 = frame.locator('#tcemm1135m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
  const SaveAndCloseButton = frame.locator('[id="tcemm1135m000-button-std-file.save_and_close"]');

  const PlanItem2Field2 = frame.getByRole('textbox').nth(3);
  const PlanItem2Lupe = frame.locator('[id="cprrp0521s000-item.f.segment.3-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const M2100Item = frame.locator('#cprpd1100m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxCheckmark');
  const SaveAndCloseButton2 = frame.locator('[id="cprpd1100m000-button-std-file.save_and_close"]');
  const PeriodLengthField = frame.locator('[id="cprrp0521s000-perl.f-n11-control-widget"]');
  const PlanPeriods = frame.getByText('Plan Periods').first();
  const HideEmptyPeriods = frame.locator('[id="cprrp0521s000-skip.empty.days-n14"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
  const SaveAndCloseButton3 = frame.locator('[id="cprrp0521s000-button-std-file.save_and_close"]');

  const PrognoseCheckbox = frame.locator('#cprrp0520m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxBorderOutside');
  const ThreepoinstButton = frame.locator('#cprrp0520m000-toolbar-left-REGULAR-overflowButton > .SvgIconDiv > .icon');
  const GenerateOrdersButton = frame.locator('#cprrp0520m000-button-form-cprrp1220m000');

  const UpdatePeggingRelationsCheckbox = frame.locator('[id="cprrp1220m000-f.generate.peg-n17"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside')
  const GenerateButton = frame.locator('[id="cprrp1220m000-button-form-exec.cont.process"]');
  const YesButton = frame.locator('#dlg-cprrp1220m000-input-button-n0');
  const DevicedField = frame.locator('#ttstpsplopen-devc-n1-lookup-widget');
  const ContinueButton = frame.locator('[id="ttstpsplopen-button-form-exec.cont.process"]');







  // Test Steps
  await test.step("Anmelden", async () => {
    await page.goto(URLInfor);
  });



  await test.step("Systemmeldung schließen", async () => {
    await sysmedialogButton.click();
  });


  

  await test.step(" STEP 1 Planning Dropdown öffnen und Order Planning auswählen und dann auf das Special Demand by Item klicken", async () => {
    await PlanningDropdown.click();
    await OrderPlanning.click();
    await SpecialDemandByItem.click();

    await expect(NewViewButton).toBeVisible();
  });


  await test.step(" STEP 2 Neue Ansicht Button klicken ", async () => {
    await NewViewButton.click();

    await expect(ScenarioField).toBeVisible();
  });



  await test.step(" STEP 3 Dann durch Scenario Tappen dann durch plan Item tappen dann von dort aus 2 x tappen man landet auf M2100 und dort dann auf Tab tappen ", async () => {
    await ScenarioField.press('Tab');
    await PlanItemField.press('Tab');
    await PlanItem2Field.press('Tab');
    await M2100Field.press('Tab');

    await expect(ScenarioField).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde
    await expect(ActualPlanLabel).toContainText('Actual Plan');  // überprüft, ob das Label "Actual Plan" sichtbar ist
    await expect(PlanItemField).toHaveValue('C10'); // überprüft, ob im Plan Item Feld automatisch "C10" eingetragen wurde
    await expect(M2100Field).toHaveValue('M2100'); // überprüft, ob im M2100 Feld automatisch "M2100" eingetragen wurde

    await expect(DescriptionLabel).toContainText('In BOM'); // überprüft, ob das Label "In BOM" sichtbar ist
    await expect(ForecastTimeFenceLabel).toHaveText(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // überprüft, ob das Forecast Time Fence Label ein Datum enthält
    await expect(AddButton).toBeVisible(); // überprüft, ob der Hinzufügen-Button sichtbar ist
  });



  await test.step(" STEP 4 Auf das hinzufügen button klicken und dann in der Zeile die + 20 eingeben und dann auf Tab klicken dann auf das Zeit Feld Tab klicken dann auf Seriennummern Feld Tab klicken und dann auf das Speichern Button klicken", async () => {
    await AddButton.click();

    await expect(DemandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum automatisch gesetzt

    await DemandDateField.click();
    await page.keyboard.type('+20');
    await DemandDateField.press('Tab');

    await expect(DemandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum wurde berechnet

    await TimeField.press('Tab');
    await SerialNumberField.press('Tab');
    await SaveButton.click();

    await expect(SequenceNumber10).toBeVisible(); // überprüuft, ob die Zeile mit der Seriennummer automatisch die "10" enthältlt und sichtbar ist
    await expect(ItemOrderPlanLabel).toBeVisible(); // überprüft, ob das Item Order Plan Label sichtbar ist
  });



  
  await test.step(" STEP 5 Klickt auf das Item Order Plan Label dann auf das Scenario Feld klicken von dort aus Tab dann landet man auf Plan Item dann auf Lupe klicken dann auf das Item C10 klicken und dann auf OK Button klicken", async () => {
    await ItemOrderPlanLabel.click();
    await ScenarioField2.click();
    await ScenarioField2.press('Tab');
    await PlanItemLupe.click();
    await ItemC10.click({ force: true });
    await SaveAndCloseButton.click();

    await expect(ScenarioField2).toBeVisible(); // überprüft, ob man in Item Order Plan im Scenario Feld gelandet ist
    await expect(ScenarioField2).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde

  });





  await test.step(" STEP 6 Dann von Plan Item 2 x Tappen dann landet man in das Feld M2100 wählt dann das aus klickt auf Ok button und dann ist man wieder zurück (dritte Feld von Plan Item)", async () => {
    await PlanItem2Field2.press('Tab');
    await PlanItem2Field2.press('Tab');
    await PlanItem2Lupe.click();
    await M2100Item.click({ force: true });
    await SaveAndCloseButton2.click();

    await expect(PeriodLengthField).toBeVisible();
  });

  



  await test.step(" STEP 7 Dann von dort aus Tab dann auf Period Lengtgh Feld drücken dann auf Plan Periods klicken dann auf Hide Empyty Periods klicken und dann auf Ok button klicken", async () => {
    await PeriodLengthField.press('Tab');
    await PeriodLengthField.click();
    await PlanPeriods.click({ timeout: 3000 }).catch(() => {});
    await HideEmptyPeriods.click({ force: true });
    await SaveAndCloseButton3.click();

    await expect(PrognoseCheckbox).toBeVisible();
  });







  await test.step(" STEP 8 Jetzt auf das Prognose Kätschen markieren und dann Generate Orders klicken.", async () => {
    await PrognoseCheckbox.click({ force: true });
    await ThreepoinstButton.click();
    await GenerateOrdersButton.click();

    await expect(UpdatePeggingRelationsCheckbox).toBeVisible();
  });






  await test.step(" STEP 9 Klicke auf Update Pegging Relations Kätschen (Update Resource Masterplan ist schon angeklickt) und dann auf Generate Button klicken dann auf Yes klicken", async () => {
    await UpdatePeggingRelationsCheckbox.click({ force: true });
    await GenerateButton.click();
    await YesButton.click();

    await expect(DevicedField).toBeVisible();
    

  });




  await test.step(" STEP 10 Im nächsten Screen in das Devicedc Feld d eingeben und dann auf Tab drücken und dann auf Continue Button klicken. Es erscheint ein PDF Datei", async () => {
    await DevicedField.click();
    await DevicedField.fill('d');

    await expect(DevicedField).toHaveValue('d'); // überprüft, ob im Deviced Field "d" eingetragen wurde

    await DevicedField.press('Tab');

    await ContinueButton.click();
    await expect(frame.getByText('Generate Order Planning Error and Exception Report')).toBeVisible();




  });




  


});