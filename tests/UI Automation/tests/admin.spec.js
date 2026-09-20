const { test, expect } = require('@playwright/test');
const { username, password } = require('../utils/testData');

test('Search and edit user in Admin', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Admin' }).click();

    const usernameInput = page.locator('.oxd-form-row').first().locator('input').first();
    await usernameInput.fill('Admin');
    await page.getByRole('button', { name: 'Search' }).click();

    const row = page.locator('.oxd-table-body .oxd-table-row').first();
    await expect(row).toBeVisible();
    await expect(row).toContainText('Admin');

    await row.getByRole('button').last().click();

    const statusDropdown = page.locator('.oxd-select-wrapper').last();
    await statusDropdown.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Admin' }).click();

    const searchInput = page.locator('.oxd-form-row').first().locator('input').first();
    await searchInput.fill('Admin');
    await page.getByRole('button', { name: 'Search' }).click();

    const updatedRow = page.locator('.oxd-table-body .oxd-table-row').first();
    await expect(updatedRow).toBeVisible();

    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
});
