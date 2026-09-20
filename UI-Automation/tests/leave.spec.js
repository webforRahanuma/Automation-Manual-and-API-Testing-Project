const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');
const { username, password } = require('../utils/testData');

test('Apply, verify and cancel leave request', async ({ page }) => {
    test.setTimeout(90000);

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);


    await page.goto(
        'https://opensource-demo.orangehrmlive.com/',
        { waitUntil: 'domcontentloaded' }
    );
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

    await leavePage.openLeaveModule();

  
    await leavePage.openApplyLeave();
    await leavePage.selectLeaveType();
    const appliedDate = await leavePage.enterDates();
    console.log(`Applied for leave on date: ${appliedDate}`);
    await leavePage.submitLeave();

    await leavePage.openMyLeave();
    await leavePage.verifyPendingApproval(appliedDate);
    console.log(`Verified leave on ${appliedDate} is Pending Approval`);

 
    await leavePage.cancelLeave(appliedDate);

  
    await leavePage.verifyCancelled(appliedDate);
    console.log(`SUCCESS: Leave on ${appliedDate} was cancelled successfully`);

    
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('.oxd-dropdown-menu')
        .locator('a')
        .last()
        .click();
});