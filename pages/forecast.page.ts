import { expect, type FrameLocator, type Locator, type Page } from '@playwright/test';

export class ForecastPage {
  private readonly URLInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  private readonly frame: FrameLocator;

  private readonly sysmedialogButton: Locator;

  private readonly PlanningDropdown: Locator;
  private readonly OrderPlanning: Locator;
  private readonly SpecialDemandByItem: Locator;

  private readonly NewViewButton: Locator;
  private readonly ScenarioField: Locator;
  private readonly PlanItemField: Locator;
  private readonly PlanItem2Field: Locator;
  private readonly M2100Field: Locator;
  private readonly ActualPlanLabel: Locator;
  private readonly DescriptionLabel: Locator;
  private readonly ForecastTimeFenceLabel: Locator;

  private readonly AddButton: Locator;
  private readonly DemandDateField: Locator;
  private readonly TimeField: Locator;
  private readonly SequenceNumber10: Locator;
  private readonly SerialNumberField: Locator;
  private readonly SaveButton: Locator;

  private readonly ItemOrderPlanLabel: Locator;
  private readonly ScenarioField2: Locator;
  private readonly PlanItemLupe: Locator;
  private readonly ItemC10: Locator;
  private readonly SaveAndCloseButton: Locator;

  private readonly PlanItem2Field2: Locator;
  private readonly PlanItem2Lupe: Locator;
  private readonly M2100Item: Locator;
  private readonly SaveAndCloseButton2: Locator;
  private readonly PeriodLengthField: Locator;
  private readonly PlanPeriods: Locator;
  private readonly HideEmptyPeriods: Locator;
  private readonly SaveAndCloseButton3: Locator;

  private readonly PrognoseCheckbox: Locator;
  private readonly ThreepoinstButton: Locator;
  private readonly GenerateOrdersButton: Locator;

  private readonly UpdatePeggingRelationsCheckbox: Locator;
  private readonly GenerateButton: Locator;
  private readonly YesButton: Locator;
  private readonly DevicedField: Locator;
  private readonly ContinueButton: Locator;

  constructor(private readonly page: Page) {
    this.frame = page.locator('iframe').nth(1).contentFrame();

    this.sysmedialogButton = this.frame.locator('#sysmesdialog-button-n0');

    this.PlanningDropdown = this.frame.getByText('Planning', { exact: true });
    this.OrderPlanning = this.frame.getByText('Order Planning', { exact: true });
    this.SpecialDemandByItem = this.frame.locator('#node-cpdsp2100m000-label');

    this.NewViewButton = this.frame.locator('[id="cpdsp2100m000-button-std-group.new"] > .SvgIconDiv > .icon');
    this.ScenarioField = this.frame.locator('[id="cpdsp2100m000-cpdsp200.plnc-n1-lookup-widget"]');
    this.PlanItemField = this.frame.getByRole('cell', { name: 'C10', exact: true }).getByRole('textbox');
    this.PlanItem2Field = this.frame.getByRole('textbox').nth(3);
    this.M2100Field = this.frame.getByRole('cell', { name: 'M2100', exact: true }).getByRole('textbox');
    this.ActualPlanLabel = this.frame.getByText('Actual Plan', { exact: true });
    this.DescriptionLabel = this.frame.getByText('In BOM').first();
    this.ForecastTimeFenceLabel = this.frame.getByText(/\d{1,2}[./]\d{1,2}[./]\d{4}/).first();

    this.AddButton = this.frame.locator('[id="cpdsp2100m000-button-std-file.new"] > .SvgIconDiv > .icon');
    this.DemandDateField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]');
    this.TimeField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt.time-n6-n0-widget-widget"]');
    this.SequenceNumber10 = this.frame .locator('[id^="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-"][id$="-widget"]')  .filter({ hasText: '10' })    .first();
    this.SerialNumberField = this.frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-n0-widget"]');
    this.SaveButton = this.frame.locator('[id="cpdsp2100m000-button-std-file.save"] > .SvgIconDiv > .icon');

    this.ItemOrderPlanLabel = this.frame.locator('#node-cprrp0520m000-label');
    this.ScenarioField2 = this.frame.locator('[id="cprrp0521s000-plnc.f-n2-lookup-widget"]');
    this.PlanItemLupe = this.frame.locator('[id="cprrp0521s000-item.f.segment.1-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.ItemC10 = this.frame.locator('#tcemm1135m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.SaveAndCloseButton = this.frame.locator('[id="tcemm1135m000-button-std-file.save_and_close"]');

    this.PlanItem2Field2 = this.frame.getByRole('textbox').nth(3);
    this.PlanItem2Lupe = this.frame.locator('[id="cprrp0521s000-item.f.segment.3-n4-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.M2100Item = this.frame.locator('#cprpd1100m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxCheckmark');
    this.SaveAndCloseButton2 = this.frame.locator('[id="cprpd1100m000-button-std-file.save_and_close"]');
    this.PeriodLengthField = this.frame.locator('[id="cprrp0521s000-perl.f-n11-control-widget"]');
    this.PlanPeriods = this.frame.getByText('Plan Periods').first();
    this.HideEmptyPeriods = this.frame.locator('[id="cprrp0521s000-skip.empty.days-n14"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.SaveAndCloseButton3 = this.frame.locator('[id="cprrp0521s000-button-std-file.save_and_close"]');

    this.PrognoseCheckbox = this.frame.locator('#cprrp0520m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxBorderOutside');
    this.ThreepoinstButton = this.frame.locator('#cprrp0520m000-toolbar-left-REGULAR-overflowButton > .SvgIconDiv > .icon');
    this.GenerateOrdersButton = this.frame.locator('#cprrp0520m000-button-form-cprrp1220m000');

    this.UpdatePeggingRelationsCheckbox = this.frame.locator('[id="cprrp1220m000-f.generate.peg-n17"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.GenerateButton = this.frame.locator('[id="cprrp1220m000-button-form-exec.cont.process"]');
    this.YesButton = this.frame.locator('#dlg-cprrp1220m000-input-button-n0');
    this.DevicedField = this.frame.locator('#ttstpsplopen-devc-n1-lookup-widget');
    this.ContinueButton = this.frame.locator('[id="ttstpsplopen-button-form-exec.cont.process"]');
  }

  async anmelden() {
    await this.page.goto(this.URLInfor);
  }

  async systemmeldungSchliessen() {
    await this.sysmedialogButton.click();
  }

  async openSpecialDemandByItem() {
    await this.PlanningDropdown.click();
    await this.OrderPlanning.click();
    await this.SpecialDemandByItem.click();

    await expect(this.NewViewButton).toBeVisible();
  }

  async clickNewViewButton() {
    await this.NewViewButton.click();

    await expect(this.ScenarioField).toBeVisible();
  }

  async tabThroughScenarioAndValidate() {
    await this.ScenarioField.press('Tab');
    await this.PlanItemField.press('Tab');
    await this.PlanItem2Field.press('Tab');
    await this.M2100Field.press('Tab');

    await expect(this.ScenarioField).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde
    await expect(this.ActualPlanLabel).toContainText('Actual Plan'); // überprüft, ob das Label "Actual Plan" sichtbar ist
    await expect(this.PlanItemField).toHaveValue('C10'); // überprüft, ob im Plan Item Feld automatisch "C10" eingetragen wurde
    await expect(this.M2100Field).toHaveValue('M2100'); // überprüft, ob im M2100 Feld automatisch "M2100" eingetragen wurde

    await expect(this.DescriptionLabel).toContainText('In BOM'); // überprüft, ob das Label "In BOM" sichtbar ist
    await expect(this.ForecastTimeFenceLabel).toHaveText(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // überprüft, ob das Forecast Time Fence Label ein Datum enthält
    await expect(this.AddButton).toBeVisible(); // überprüft, ob der Hinzufügen-Button sichtbar ist
  }

  async addDemandAndSave() {
    await this.AddButton.click();

    await expect(this.DemandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum automatisch gesetzt

    await this.DemandDateField.click();
    await this.page.keyboard.type('+20');
    await this.DemandDateField.press('Tab');

    await expect(this.DemandDateField).toHaveValue(/\d{1,2}[./]\d{1,2}[./]\d{4}/); // Datum wurde berechnet

    await this.TimeField.press('Tab');
    await this.SerialNumberField.press('Tab');
    await this.SaveButton.click();

    await expect(this.SequenceNumber10).toBeVisible(); // überprüuft, ob die Zeile mit der Seriennummer automatisch die "10" enthältlt und sichtbar ist
    await expect(this.ItemOrderPlanLabel).toBeVisible(); // überprüft, ob das Item Order Plan Label sichtbar ist
  }

  async openItemOrderPlanAndChooseC10() {
    await this.ItemOrderPlanLabel.click();
    await this.ScenarioField2.click();
    await this.ScenarioField2.press('Tab');
    await this.PlanItemLupe.click();
    await this.ItemC10.click({ force: true });
    await this.SaveAndCloseButton.click();

    await expect(this.ScenarioField2).toBeVisible(); // überprüft, ob man in Item Order Plan im Scenario Feld gelandet ist
    await expect(this.ScenarioField2).toHaveValue('ACT'); // überprüft, ob im Scenario Feld automatisch "ACT" eingetragen wurde
  }

  async selectM2100AndReturn() {
    await this.PlanItem2Field2.press('Tab');
    await this.PlanItem2Field2.press('Tab');
    await this.PlanItem2Lupe.click();
    await this.M2100Item.click({ force: true });
    await this.SaveAndCloseButton2.click();

    await expect(this.PeriodLengthField).toBeVisible();
  }

  async configurePeriods() {
    await this.PeriodLengthField.press('Tab');
    await this.PeriodLengthField.click();
    await this.PlanPeriods.click({ timeout: 3000 }).catch(() => {});
    await this.HideEmptyPeriods.click({ force: true });
    await this.SaveAndCloseButton3.click();

    await expect(this.PrognoseCheckbox).toBeVisible();
  }

  async openGenerateOrders() {
    await this.PrognoseCheckbox.click({ force: true });
    await this.ThreepoinstButton.click();
    await this.GenerateOrdersButton.click();

    await expect(this.UpdatePeggingRelationsCheckbox).toBeVisible();
  }

  async generateAndConfirm() {
    await this.UpdatePeggingRelationsCheckbox.click({ force: true });
    await this.GenerateButton.click();
    await this.YesButton.click();

    await expect(this.DevicedField).toBeVisible();
  }

  async setDeviceAndContinue() {
    await this.DevicedField.click();
    await this.DevicedField.fill('d');

    await expect(this.DevicedField).toHaveValue('d'); // überprüft, ob im Deviced Field "d" eingetragen wurde

    await this.DevicedField.press('Tab');

    await this.ContinueButton.click();
    await expect(this.frame.getByText('Generate Order Planning Error and Exception Report')).toBeVisible();
  }
}
