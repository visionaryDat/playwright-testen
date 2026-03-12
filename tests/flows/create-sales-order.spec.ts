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
  const postalCodeTab = frame.locator('[id="tdsls4100m900-address.tdsls400.ofad"]');
  const orderTypeTab = frame.getByRole('row', { name: 'Customer Order:', exact: true }).getByRole('textbox');
  
  const orderTypeLookupButton = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon');
  const orderTypeSelectCheckbox = frame.locator('#tdsls0594m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
  const orderTypeSaveAndCloseButton = frame.locator('[id="tdsls0594m000-button-std-file.save_and_close"]');
  const ordeerTypeHidden = frame.locator('#tdsls0594m000');
  
  const orderTypeTab2 = frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]');
  const salesOfficeLookupButton = frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"] > .SvgIconDiv > .icon');
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
  const orderSaveButton = frame.locator('[id="tdsls4100 m900-button-std-file.save"] > .SvgIconDiv > .icon');  

  

  
















});