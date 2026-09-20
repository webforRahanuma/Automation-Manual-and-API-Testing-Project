const { test, expect } = require('@playwright/test');
const { username, password, getRandomEmployee } = require('../utils/testData');

test('Add new employee', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByText('PIM').click();
    await page.getByText('Add Employee').click();

    const employee = getRandomEmployee();

    await page.getByPlaceholder('First Name').fill(employee.firstName);
    await page.getByPlaceholder('Last Name').fill(employee.lastName);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForTimeout(2000); 
    await page.getByText('Employee List').click();

    await page.getByPlaceholder('Type for hints...').first().fill(employee.firstName);
    await page.waitForTimeout(1000);
    

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.getByRole('button', { name: 'Search' }).click();


    await expect(page.getByText(employee.firstName).first()).toBeVisible();


    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
});
