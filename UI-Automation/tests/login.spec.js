const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { username, password } = require('../utils/testData');

test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await loginPage.login(username, password);

    await expect(page).toHaveURL(/dashboard/);
});

test('Invalid login test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('WrongUser');
    await page.getByPlaceholder('Password').fill('WrongPassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
});