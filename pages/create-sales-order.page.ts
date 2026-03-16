import { expect, type FrameLocator, type Locator, type Page } from '@playwright/test';

export class CreateSalesOrderPage {
  private readonly urlInfor = 'http://10.218.90.14:8312/webui/servlet/standalone';
  private readonly frame: FrameLocator;

  private readonly systemmeldungButton: Locator;

  private readonly optionsDropdown: Locator;
  private readonly runProgramOption: Locator;
  private readonly programInput: Locator;
  private readonly programSearchBox: Locator;
  private readonly programOkButton: Locator;

  private readonly salesOrderButton: Locator;

  private readonly businessPartnerLookupButton: Locator;
  private readonly businessPartnerSelectCheckbox: Locator;
  private readonly businessPartnerSaveAndCloseButton: Locator;

  private readonly businessPartnerTab: Locator;
  private readonly addressTab: Locator;
  private readonly addressTab2: Locator;
  private readonly postalCodeTab: Locator;
  private readonly orderTypeTab: Locator;

  private readonly orderTypeLookupButton: Locator;
  private readonly orderTypeSelectCheckbox: Locator;
  private readonly orderTypeSaveAndCloseButton: Locator;
  private readonly orderTypeHidden: Locator;
  private readonly orderTypeDescription: Locator;

  private readonly orderTypeTab2: Locator;
  private readonly salesOfficeLookupButton: Locator;
  private readonly salesOfficeLookupIcon: Locator;
  private readonly salesOfficeLookupDialog: Locator;
  private readonly salesOfficeSelectCheckbox: Locator;
  private readonly salesOfficeSaveAndCloseButton: Locator;
  private readonly salesOfficeTab: Locator;

  private readonly orderLineButton: Locator;
  private readonly orderLineSalesOrderOkButton: Locator;
  private readonly orderLinePonoField: Locator;
  private readonly orderLineItemSegment1Field: Locator;
  private readonly orderLineItemSegment2LookupButton: Locator;
  private readonly itemSelectCheckbox: Locator;
  private readonly itemSaveAndCloseButton: Locator;
  private readonly itemLookupHidden: Locator;
  private readonly orderSaveButton: Locator;
  private readonly taxCodeErrorMessage: Locator;
  private readonly taxCodeErrorMessageOKButton: Locator;

  constructor(private readonly page: Page) {
    this.frame = page.locator('iframe').nth(1).contentFrame();

    this.systemmeldungButton = this.frame.locator('#sysmesdialog-button-n0');

    this.optionsDropdown = this.frame.getByText(/^(Optionen|Options)$/);
    this.runProgramOption = this.frame.getByText(/^(Programm ausfuhren|Programm ausführen|Run Program)$/);
    this.programInput = this.frame.locator('#dlg-run_program-input-control-widget');
    this.programSearchBox = this.frame.getByRole('textbox', { name: 'search' });
    this.programOkButton = this.frame.locator('#dlg-run_program-button-n0');

    this.salesOrderButton = this.frame.locator('[id="tdsls4601m200-button-std-file.new"] > .SvgIconDiv > .icon');

    this.businessPartnerLookupButton = this.frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.businessPartnerSelectCheckbox = this.frame.locator('#tccom4510m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.businessPartnerSaveAndCloseButton = this.frame.locator('[id="tccom4510m000-button-std-file.save_and_close"]');

    this.businessPartnerTab = this.frame.locator('[id="tdsls4100m900-tdsls400.ofbp-n1-lookup-widget"]');
    this.addressTab = this.frame.locator('[id="tdsls4100m900-tdsls400.ofad-n3-lookup-widget"]');
    this.addressTab2 = this.frame.locator('[id="tdsls4100m900-address.tdsls400.ofad"]');
    this.postalCodeTab = this.frame.locator('[id="tdsls4100m900-tdsls400.ofcn-n7-lookup-widget"]');
    this.orderTypeTab = this.frame.getByRole('row', { name: 'Customer Order:', exact: true }).getByRole('textbox');

    this.orderTypeLookupButton = this.frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.orderTypeSelectCheckbox = this.frame.locator('#tdsls0594m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside');
    this.orderTypeSaveAndCloseButton = this.frame.locator('[id="tdsls0594m000-button-std-file.save_and_close"]');
    this.orderTypeHidden = this.frame.locator('#tdsls0594m000');
    this.orderTypeDescription = this.frame.getByText('Cost Order');

    this.orderTypeTab2 = this.frame.locator('[id="tdsls4100m900-tdsls400.sotp-n11-lookup-widget"]');
    this.salesOfficeLookupButton = this.frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"]');
    this.salesOfficeLookupIcon = this.frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-trigger-button"] > .SvgIconDiv > .icon');
    this.salesOfficeLookupDialog = this.frame.locator('#tdsls0512m000');
    this.salesOfficeSelectCheckbox = this.frame.locator('[id^="tdsls0512m000-grid-n1-select-n"]').first();
    this.salesOfficeSaveAndCloseButton = this.frame.locator('[id="tdsls0512m000-button-std-file.save_and_close"]');
    this.salesOfficeTab = this.frame.locator('[id="tdsls4100m900-tdsls400.cofc-n13-lookup-widget"]');

    this.orderLineButton = this.frame.locator('[id="tdsls4101m000-button-std-file.new"]');
    this.orderLineSalesOrderOkButton = this.frame.locator('#dlg-tdsls4100m900-input-button-n0');
    this.orderLinePonoField = this.frame.locator('[id^="tdsls4101m000-grid-n1-tdsls401.pono-"][id$="-n0-widget"]');
    this.orderLineItemSegment1Field = this.frame.locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.1-n422-n0-widget"]');
    this.orderLineItemSegment2LookupButton = this.frame.locator('[id="tdsls4101m000-grid-n1-tdsls401.item.segment.2-n422-n0-trigger-button"]');
    this.itemSelectCheckbox = this.frame.locator('#tdisa0501m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxPartial');
    this.itemSaveAndCloseButton = this.frame.locator('[id="tdisa0501m000-button-std-file.save_and_close"]');
    this.itemLookupHidden = this.frame.locator('#tdisa0501m000');
    this.orderSaveButton = this.frame.locator('[id="tdsls4100m900-button-std-file.save"] > .SvgIconDiv > .icon');
    this.taxCodeErrorMessage = this.frame.getByText('Enter a value for the Tax Code field.');
    this.taxCodeErrorMessageOKButton = this.frame.locator('#dlg-tdsls4101m000-input-button-n0');
  }

  async anmelden() {
    await this.page.goto(this.urlInfor);
  }

  async systemmeldungSchliessen() {
    await this.systemmeldungButton.click();
  }

  async openRunProgramAndStartSalesOrder() {
    await this.optionsDropdown.click();
    await this.runProgramOption.click();
    await this.programInput.click();
    await this.programSearchBox.fill('tdsls4601m200');
    await this.programOkButton.click();

    await expect(this.salesOrderButton).toBeVisible();
  }

  async openSalesOrder() {
    await this.salesOrderButton.click();

    await expect(this.businessPartnerLookupButton).toBeVisible();
  }

  async selectBusinessPartner() {
    await this.businessPartnerLookupButton.click();
    await this.businessPartnerSelectCheckbox.click({ force: true });
    await this.businessPartnerSaveAndCloseButton.click();

    await expect(this.businessPartnerTab).toHaveValue(/1003/);
    await expect(this.addressTab).toBeVisible();
  }

  async selectOrderTypeAfterTabbing() {
    await this.businessPartnerTab.press('Tab');
    await this.addressTab.press('Tab');
    await this.addressTab2.press('Tab');
    await this.postalCodeTab.press('Tab');
    await this.orderTypeTab.press('Tab');
    await this.orderTypeLookupButton.click({ force: true });
    await this.orderTypeSelectCheckbox.click({ force: true });
    await this.orderTypeSaveAndCloseButton.click();
    await this.orderTypeHidden.waitFor({ state: 'hidden' });

    await expect(this.orderTypeLookupButton).toBeVisible();
    await expect(this.orderTypeTab2).toHaveValue(/C10/);
    await expect(this.orderTypeDescription).toContainText('Cost Order');
  }

  async selectSalesOfficeWithRetries() {
    await this.orderTypeTab2.press('Tab');
    await expect(this.salesOfficeTab).toBeEditable({ timeout: 15000 });
    await this.salesOfficeTab.click({ force: true });

    let salesOfficeLookupOpened = false;
    for (let attempt = 0; attempt < 3 && !salesOfficeLookupOpened; attempt++) {
      await this.salesOfficeLookupButton.click({ force: true });
      salesOfficeLookupOpened = await this.salesOfficeLookupDialog
        .waitFor({ state: 'visible', timeout: 4000 })
        .then(() => true)
        .catch(async () => false);

      if (!salesOfficeLookupOpened) {
        await this.salesOfficeLookupIcon.click({ force: true }).catch(async () => {});
        salesOfficeLookupOpened = await this.salesOfficeLookupDialog
          .waitFor({ state: 'visible', timeout: 4000 })
          .then(() => true)
          .catch(async () => false);
      }

      if (!salesOfficeLookupOpened) {
        await this.salesOfficeTab.click({ force: true });
        await this.salesOfficeTab.press('F4').catch(async () => {});
        salesOfficeLookupOpened = await this.salesOfficeLookupDialog
          .waitFor({ state: 'visible', timeout: 4000 })
          .then(() => true)
          .catch(async () => false);
      }

      if (!salesOfficeLookupOpened) {
        await this.page.waitForTimeout(400);
      }
    }

    if (!salesOfficeLookupOpened) {
      throw new Error('Sales Office lookup did not open after retries');
    }

    await this.salesOfficeSelectCheckbox.waitFor({ state: 'visible', timeout: 15000 });
    await this.salesOfficeSelectCheckbox.click({ force: true });
    await this.salesOfficeSaveAndCloseButton.click({ force: true });
    await this.salesOfficeLookupDialog.waitFor({ state: 'hidden', timeout: 10000 });
    await this.salesOfficeTab.press('Tab');

    await expect(this.salesOfficeLookupButton).toBeVisible();
    await expect(this.salesOfficeTab).toHaveValue(/SO1000/, { timeout: 15000 });
  }

  async addOrderLineAndSaveExpectTaxCodeError() {
    await this.orderLineButton.click();
    await this.orderLineSalesOrderOkButton.click();
    await this.orderLinePonoField.fill('1');
    await this.orderLinePonoField.press('Tab');
    await this.orderLineItemSegment1Field.press('Tab');
    await this.orderLineItemSegment2LookupButton.click({ force: true });
    await this.itemSelectCheckbox.click();
    await this.itemSaveAndCloseButton.click();
    await this.itemLookupHidden.waitFor({ state: 'hidden' });
    await this.orderSaveButton.click({ force: true });

    await expect(this.orderLinePonoField).toBeVisible();
    await expect(this.orderLinePonoField).toContainText(/1/);
    await expect(this.taxCodeErrorMessage).toContainText('Enter a value for the Tax Code field.');
    await expect(this.taxCodeErrorMessageOKButton).toBeVisible();
    await this.taxCodeErrorMessageOKButton.click();
  }
}
