// @ts-nocheck
const { test, expect, devices } = require('@playwright/test');

import { HomePage } from '../pages/Page_Objects';


test('help_center_icon_exits', async ({ page }) => {

  await page.goto('baseURL')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/bunch/)
  const Home = new HomePage(page)
  const divElement = await page.$("//div[@class='intercom-1chwhwk ectoxt03']");


  await page.locator("//*[name()='path' and contains(@d,'M28 32s-4.')]").click()
  console.log (page.locator("//*[name()='path' and contains(@d,'M28 32s-4.')]"))
  await page.waitForTimeout(2000);



  const iframeElement = await page.waitForSelector("//iframe[@name='intercom-messenger-frame']")
  const iframe = await iframeElement.contentFrame()
  // @ts-ignore
  await iframe.click("//button[@aria-label='Help']")
  await iframe.click("//div[@class='search-input-placeholder intercom-16hf2cg e1gslhfp2']")
  const inputField = await iframe.$('input[aria-label="Search for help"]')

  await inputField.fill('Hello, World!');
  await page.waitForTimeout(2000);


});
