import { test, expect } from '@playwright/test';

test('Prognose Erstellung', async ({ page }) => {
    
  // Locator Variables
  const URLInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  const frame = page.locator('iframe').nth(1).contentFrame();

  //const sysmedialogButton = frame.locator('#sysmesdialog-button-n0');

  const PlanningDropdown = frame.getByText('Planning');
  const OrderPlanning = frame.getByText('Order Planning');
  const SpecialDemandByItem = frame.locator('#node-cpdsp2100m000-label');

  const NewViewButton = frame.locator('[id="cpdsp2100m000-button-std-group.new"] > .SvgIconDiv > .icon');
  const ScenarioField = frame.locator('[id="cpdsp2100m000-cpdsp200.plnc-n1-lookup-widget"]');
  const PlanItemField = frame.getByRole('cell', { name: 'C10', exact: true }).getByRole('textbox');
  const PlanItem2Field = frame.getByRole('textbox').nth(3);
  const M2100Field = frame.getByRole('cell', { name: 'M2100', exact: true }).getByRole('textbox');
  const AddButton = frame.locator('[id="cpdsp2100m000-button-std-file.new"] > .SvgIconDiv > .icon');
  const QuantityField = frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]');
  const TimeField = frame.locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt.time-n6-n0-widget-widget"]');
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
  const DevicedcField = frame.locator('#ttstpsplopen-devc-n1-lookup-widget');
  const ContinueButton = frame.locator('[id="ttstpsplopen-button-form-exec.cont.process"]');






});