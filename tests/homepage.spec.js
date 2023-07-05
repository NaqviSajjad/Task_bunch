    const { test, expect, devices } = require('@playwright/test');

    import { PageObjects } from '../pages/Page_Objects';


    // First Test Case (The help center icon exists and is clickable)

    test ('help_center_icon_exist', async({page}) => {
        console.log('help_center_icon_exist test is running')
        await page.goto('baseURL')
        await expect(page).toHaveTitle(/bunch/)
        const page_objects = new PageObjects(page)
        await page_objects.helpcenter_icon_visible()
    });



    // Second Test Case (Clicking the icon opens up a popup that contains a search bar with the text "Search for help" )


    test ('Popup open with a search bar', async({page}) => {
        console.log('Popup open with a search bar test is running')
        await page.goto('baseURL')
        await expect(page).toHaveTitle(/bunch/)
        const page_objects = new PageObjects(page)
        await page_objects.popup_open()

    });



    test ('search in the search bar', async({page}) => { // Third testt case
        console.log('search in the search bar test is running')
        await page.goto('baseURL')
        await expect(page).toHaveTitle(/bunch/)
        const page_objects = new PageObjects(page)
        await page_objects.popup_open()
        await page.waitForTimeout(3000);
        await page_objects.input_searchbar() 
        await page.waitForTimeout(2000);
    });