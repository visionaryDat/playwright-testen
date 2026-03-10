import { expect, type FrameLocator, type Locator, type Page } from '@playwright/test';

export class ForecastPage {
  private readonly urlInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  private readonly frame: FrameLocator;

  private readonly sysmedialogButton: Locator;

  private readonly planningDropdown: Locator;
  private readonly orderPlanning: Locator;
  private readonly specialDemandByItem: Locator;

  private readonly newViewButton: Locator;
  private readonly scenarioField: Locator;
  private readonly planItemField: Locator;
  private readonly planItem2Field: Locator;
  private readonly m2100Field: Locator;
  private readonly actualPlanLabel: Locator;
  private readonly descriptionLabel: Locator;
  private readonly forecastTimeFenceLabel: Locator;

  private readonly addButton: Locator;
  private readonly demandDateField: Locator;
  private readonly timeField: Locator;
  private readonly sequenceNumber10: Locator;
  private readonly serialNumberField: Locator;
  private readonly saveButton: Locator;

  private readonly itemOrderPlanLabel: Locator;
  private readonly scenarioField2: Locator;
  private readonly planItemLupe: Locator;
  private readonly itemC10: Locator;
  private readonly saveAndCloseButton: Locator;

  private readonly planItem2Field2: Locator;
  private readonly planItem2Lupe: Locator;
  private readonly m2100Item: Locator;
  private readonly saveAndCloseButton2: Locator;
  private readonly periodLengthField: Locator;
  private readonly planPeriods: Locator;
  private readonly hideEmptyPeriods: Locator;
  private readonly saveAndCloseButton3: Locator;

  private readonly prognoseCheckbox: Locator;
  private readonly threepoinstButton: Locator;
  private readonly generateOrdersButton: Locator;

  private readonly updatePeggingRelationsCheckbox: Locator;
  private readonly generateButton: Locator;
  private readonly yesButton: Locator;
  private readonly devicedField: Locator;
  private readonly continueButton: Locator;

  constructor(private readonly page: Page) {
    this.frame = page.locator('iframe').nth(1).contentFrame();

    this.sysmedialogButton = this.frame.locator('#sysmesdialog-button-n0');

    this.planningDropdown = this.frame.getByText('Planning', { exact: true });
    this.orderPlanning = this.frame.getByText('Order Planning', { exact: true });
    this.specialDemandByItem = this.frame.locator('#node-cpdsp2100m000-label');

    this.newViewButton = this.frame.locator('[id="cpdsp2100m000-button-std-group.new"] > .SvgIconDiv > .icon');
    this.scenarioField = this.frame.locator('[id="cpdsp2100m000-cpdsp200.plnc-n1-lookup-widget"]');
    this.planItemField = this.frame.getByRole('cell', { name: 'C10', exact: true }).getByRole('textbox');
    this.planItem2Field = this.frame.getByRole('textbox').nth(3);
    this.m2100Field = this.frame.getByRole('cell', { name: 'M2100', exact: true }).getByRole('textbox');
    this.actualPlanLabel = this.frame.getByText('Actual Plan', { exact: true });
    this.descriptionLabel = this.frame.getByText('In BOM').first();
    this.forecastTimeFenceLabel = this.frame.getByText(/\d{1,2}[./]\d{1,2}[./]\d{4}/).first();

    this.addButton = this.frame.locator('[id="cpdsp2100m000-button-std-file.new"] > .SvgIconDiv > .icon');
    this.demandDateField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]');
    this.timeField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt.time-n6-n0-widget-widget"]');
    this.sequenceNumber10 = this.frame  .locator('[id^="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-"][id$="-widget"]') .filter({ hasText: '10' }) .first();
    this.serialNumberField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-n0-widget"]');
    this.saveButton = this.frame.locator('[id="cpdsp2100m000-button-std-file.save"] > .SvgIconDiv > .icon');

    this.itemOrderPlanLabel = this.frame.locator('#node-cprrp0520m000-label');
    this.scenarioField2 = this.frame.locator('[id="cprrp0521s000-plnc.f-n2-lookup-widget"]');
    this.planItemLupe = this.frame.locator('[id="cprrp0521s000-item.f.segment.1-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.itemC10 = this.frame.locator('#tcemm1135m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.saveAndCloseButton = this.frame.locator('[id="tcemm1135m000-button-std-file.save_and_close"]');

    this.planItem2Field2 = this.frame.getByRole('textbox').nth(3);
    this.planItem2Lupe = this.frame.locator('[id="cprrp0521s000-item.f.segment.3-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.m2100Item = this.frame.locator('#cprpd1100m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxCheckmark');
    this.saveAndCloseButton2 = this.frame.locator('[id="cprpd1100m000-button-std-file.save_and_close"]');
    this.periodLengthField = this.frame.locator('[id="cprrp0521s000-perl.f-n11-control-widget"]');
    this.planPeriods = this.frame.getByText('Plan Periods').first();
    this.hideEmptyPeriods = this.frame.locator('[id="cprrp0521s000-skip.empty.days-n14"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.saveAndCloseButton3 = this.frame.locator('[id="cprrp0521s000-button-std-file.save_and_close"]');

    this.prognoseCheckbox = this.frame.locator('#cprrp0520m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxBorderOutside');
    this.threepoinstButton = this.frame.locator('#cprrp0520m000-toolbar-left-REGULAR-overflowButton > .SvgIconDiv > .icon');
    this.generateOrdersButton = this.frame.locator('#cprrp0520m000-button-form-cprrp1220m000');

    this.updatePeggingRelationsCheckbox = this.frame.locator('[id="cprrp1220m000-f.generate.peg-n17"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.generateButton = this.frame.locator('[id="cprrp1220m000-button-form-exec.cont.process"]');
    this.yesButton = this.frame.locator('#dlg-cprrp1220m000-input-button-n0');
    this.devicedField = this.frame.locator('#ttstpsplopen-devc-n1-lookup-widget');
    this.continueButton = this.frame.locator('[id="ttstpsplopen-button-form-exec.cont.process"]');
  }

  async anmelden() {
    await this.page.goto(this.urlInfor);
  }

  async systemmeldungSchliessen() {
    await this.sysmedialogButton.click();
  }

  async openSpecialDemandByItem() {
    await this.planningDropdown.click();
    await this.orderPlanning.click();
    await this.specialDemandByItem.click();

    await expect(this.newViewButton).toBeVisible();
  }

  async clickNewViewButton() {
    await this.newViewButton.click();

    await expect(this.scenarioField).toBeVisible();
  }

  async tabThroughScenarioAndValidate() {
    await this.scenarioField.press('Tab');
    await this.planItemField.press('Tab');
    await this.planItem2Field.press('Tab');
    await this.m2100Field.press('Tab');

    await expect(this.scenarioField).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde
    await expect(this.actualPlanLabel).toContainText('Actual Plan'); // überprüft, ob das Label "Actual Plan" sichtbar ist
    await expect(this.planItemField).toHaveValue('C10'); // überprüft, ob im Plan Item Feld automatisch "C10" eingetragen wurde
    await expect(this.m2100Field).toHaveValue('M2100'); // überprüft, ob im M2100 Feld automatisch "M2100" eingetragen wurde

    await expect(this.descriptionLabel).toContainText('In BOM'); // überprüft, ob das Label "In BOM" sichtbar ist
    await expect(this.forecastTimeFenceLabel).toHaveText(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // überprüft, ob das Forecast Time Fence Label ein Datum enthält
    await expect(this.addButton).toBeVisible(); // überprüft, ob der Hinzufügen-Button sichtbar ist
  }

  async addDemandAndSave() {
    await this.addButton.click();

    await expect(this.demandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum automatisch gesetzt

    await this.demandDateField.click();
    await this.page.keyboard.type('+20');
    await this.demandDateField.press('Tab');

    await expect(this.demandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum wurde berechnet

    await this.timeField.press('Tab');
    await this.serialNumberField.press('Tab');
    await this.saveButton.click();

    await expect(this.sequenceNumber10).toBeVisible(); // überprüuft, ob die Zeile mit der Seriennummer automatisch die "10" enthältlt und sichtbar ist
    await expect(this.itemOrderPlanLabel).toBeVisible(); // überprüft, ob das Item Order Plan Label sichtbar ist
  }

  async openItemOrderPlanAndChooseC10() {
    await this.itemOrderPlanLabel.click();
    await this.scenarioField2.click();
    await this.scenarioField2.press('Tab');
    await this.planItemLupe.click();
    await this.itemC10.click({ force: true });
    await this.saveAndCloseButton.click();

    await expect(this.scenarioField2).toBeVisible(); // überprüft, ob man in Item Order Plan im Scenario Feld gelandet ist
    await expect(this.scenarioField2).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde
  }

  async selectM2100AndReturn() {
    await this.planItem2Field2.press('Tab');
    await this.planItem2Field2.press('Tab');
    await this.planItem2Lupe.click();
    await this.m2100Item.click({ force: true });
    await this.saveAndCloseButton2.click();

    await expect(this.periodLengthField).toBeVisible();
  }

  async configurePeriods() {
    await this.periodLengthField.press('Tab');
    await this.periodLengthField.click();
    await this.planPeriods.click({ timeout: 3000 }).catch(() => {});
    await this.hideEmptyPeriods.click({ force: true });
    await this.saveAndCloseButton3.click();

    await expect(this.prognoseCheckbox).toBeVisible();
  }

  async openGenerateOrders() {
    await this.prognoseCheckbox.click({ force: true });
    await this.threepoinstButton.click();
    await this.generateOrdersButton.click();

    await expect(this.updatePeggingRelationsCheckbox).toBeVisible();
  }

  async generateAndConfirm() {
    await this.updatePeggingRelationsCheckbox.click({ force: true });
    await this.generateButton.click();
    await this.yesButton.click();

    await expect(this.devicedField).toBeVisible();
  }

  async setDeviceAndContinue() {
    await this.devicedField.click();
    await this.devicedField.fill('d');

    await expect(this.devicedField).toHaveValue('d'); // überprüft, ob im Deviced Field "d" eingetragen wurde

    await this.devicedField.press('Tab');

    await this.continueButton.click();
    await expect(this.frame.getByText('Generate Order Planning Error and Exception Report')).toBeVisible();
  }
}
