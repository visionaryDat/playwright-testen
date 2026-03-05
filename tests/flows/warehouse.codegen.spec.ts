import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.218.90.14:8312/webui/servlet/standalone');
   // Open Session and close Systemmeldung
  //await page.locator('iframe').nth(1).contentFrame().locator('#sysmesdialog-button-n0').click();

  // Planning Dropdown öffnen und Order Planning auswählen und dann auf das Special Demand by Item klicken
  await page.locator('iframe').nth(1).contentFrame().getByText('Planning').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('Order Planning').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#node-cpdsp2100m000-label').click();

  // Neue Ansicht Button klicken 
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-button-std-group.new"] > .SvgIconDiv > .icon').click();
  
  // Dann durch Scenario Tappen dann durch plan Item tappen dann von dort aus 2 x tappen man landet auf M2100 und dort dann auf Tab tappen 
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-cpdsp200.plnc-n1-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().getByRole('cell', { name: 'C10', exact: true }).getByRole('textbox').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().getByRole('textbox').nth(3).press('Tab');
  await page.locator('iframe').nth(1).contentFrame().getByRole('cell', { name: 'M2100', exact: true }).getByRole('textbox').press('Tab');

  // Auf das hinzufügen button klicken und dann in der Zeile die + 20 eingeben und dann auf Tab klicken dann auf das Zeit Feld Tab klicken dann auf Seriennummern Feld Tab klicken und dann auf das Speichern Button klicken
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-button-std-file.new"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]').click();
  await page.keyboard.type('+20');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt-n6-n0-widget-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-grid-n1-cpdsp200.spdt.time-n6-n0-widget-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-grid-n1-cpdsp200.sern-n7-n0-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cpdsp2100m000-button-std-file.save"] > .SvgIconDiv > .icon').click();

  // Klickt auf das Item Order Plan Label dann auf das Scenario Feld klicken von dort aus Tab dann landet man auf Plan Item dann auf Lupe klicken dann auf das Item C10 klicken und dann auf OK Button klicken
  await page.locator('iframe').nth(1).contentFrame().locator('#node-cprrp0520m000-label').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-plnc.f-n2-lookup-widget"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-plnc.f-n2-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-item.f.segment.1-n4-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#tcemm1135m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="tcemm1135m000-button-std-file.save_and_close"]').click();

  
  // Dann von Plan Item 2 x Tappen dann landet man in das Feld M2100 wählt dann das aus klickt auf Ok button und dann ist man wieder zurück (dritte Feld von Plan Item)
  await page.locator('iframe').nth(1).contentFrame().getByRole('textbox').nth(2).press('Tab');
  await page.locator('iframe').nth(1).contentFrame().getByRole('textbox').nth(3).press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-item.f.segment.3-n4-lookup-trigger-button"] > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#cprpd1100m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxCheckmark').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprpd1100m000-button-std-file.save_and_close"]').click();


  // Dann von dort aus Tab dann auf Period Lengtgh Feld drücken dann auf Plan Periods klicken dann auf Hide Empyty Periods klicken und dann auf Ok button klicken
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-item.f.segment.3-n4-lookup-widget"]').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-perl.f-n11-control-widget"]').click();
  await page.locator('iframe').nth(1).contentFrame().getByText('Plan Periods').first().click({ timeout: 3000 }).catch(() => {});
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-skip.empty.days-n14"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp0521s000-button-std-file.save_and_close"]').click(); 

  // Jetzt auf das Prognose Kätschen markieren und dann Generate Orders klicken.
  await page.locator('iframe').nth(1).contentFrame().locator('#cprrp0520m000-grid-n1-select-n0 > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxBorderOutside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('#cprrp0520m000-toolbar-left-REGULAR-overflowButton > .SvgIconDiv > .icon').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#cprrp0520m000-button-form-cprrp1220m000').click();

  // Klicke auf Update Pegging Relations Kätschen (Update Resource Masterplan ist schon angeklickt) und dann auf Generate Button klicken dann auf Yes klicken dann im nächsten Screen in das Devicedc Feld d eingeben und dann auf Tab drücken und dann auf Continue Button klicken. Es erscheint ein PDF Datei
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp1220m000-f.generate.peg-n17"] > .SvgIconDiv > #icon-checkbox-ln > .SvgCheckboxInside').click({ force: true });
  await page.locator('iframe').nth(1).contentFrame().locator('[id="cprrp1220m000-button-form-exec.cont.process"]').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#dlg-cprrp1220m000-input-button-n0').click();
  await page.locator('iframe').nth(1).contentFrame().locator('#ttstpsplopen-devc-n1-lookup-widget').fill('d');
  await page.locator('iframe').nth(1).contentFrame().locator('#ttstpsplopen-devc-n1-lookup-widget').press('Tab');
  await page.locator('iframe').nth(1).contentFrame().locator('[id="ttstpsplopen-button-form-exec.cont.process"]').click();
  


});