  const { expect, iframe, } = require('@playwright/test');
  const { name } = require('../playwright.config');



  exports.PageObjects = class PageObjects {
    constructor(page) {
    this.page = page;
    this.helpcenter_icon = page.locator("//*[name()='path' and contains(@d,'M28 32s-4.')]") 
    const frame_locator = page.frameLocator("iframe[name='intercom-messenger-frame']")
    this.help_locator = frame_locator.getByTestId('help')
    this.search_bar = frame_locator.locator("//p[normalize-space()='Search for help']")
    this.input_search = frame_locator.locator('input[aria-label="Search for help"]')
    }
  

    async helpcenter_icon_visible() { //1st test case
      await expect(this.helpcenter_icon).toBeVisible()
      await this.page.waitForTimeout(2000);

    }

    async popup_open (){    // 2nd test case
      await this.helpcenter_icon.click()
      await this.page.waitForTimeout(2000);
      await this.help_locator.click()
      await expect(this.search_bar).toBeVisible()
    }

    async input_searchbar (){ // Third test case

      await this.input_search.fill("Rollup")
      await this.page.waitForTimeout(2000);
      expect(this.input_search.getAttribute('value', 'Rollup'))
      await this.page.waitForTimeout(2000);

    }
  }