const { expect } = require('@playwright/test');

class LeavePage {
    constructor(page) {
        this.page = page;
        this.appliedDate = null;

        this.leaveMenu = page.locator('a.oxd-main-menu-item[href*="leave"]');
        this.applyLink = page.locator('nav.oxd-topbar-body-nav a', { hasText: /Apply|Solicitar/i });
        this.myLeaveLink = page.locator('nav.oxd-topbar-body-nav a', { hasText: /My Leave|Mis Permisos/i });
        this.leaveType = page.locator('.oxd-select-wrapper').first();
        this.dateInputs = page.locator('.oxd-date-input input');
        this.submitButton = page.locator('button[type="submit"]');
    }

    async openLeaveModule() {
        await this.leaveMenu.click();
        await this.page.waitForTimeout(1000);
    }

    async openApplyLeave() {
        await this.applyLink.click();
        await this.page.waitForTimeout(1000);
        await this.page.locator('.oxd-form-loader')
            .waitFor({ state: 'detached' })
            .catch(() => {});
    }

    async selectLeaveType() {
        await expect(this.leaveType).toBeVisible({ timeout: 30000 });
        await this.leaveType.click();

        // Select the first available valid leave option (excluding placeholder)
        const option = this.page.locator('.oxd-select-dropdown [role="option"]')
            .filter({ hasNotText: '-- Select --' })
            .first();

        await option.waitFor({ state: 'visible', timeout: 5000 });
        await option.click();
        await this.page.waitForTimeout(500);

        await this.page.locator('.oxd-form-loader')
            .waitFor({ state: 'detached' })
            .catch(() => {});
    }

    async getWorkingDate() {
        const placeholder = (await this.dateInputs.first().getAttribute('placeholder').catch(() => 'yyyy-dd-mm')) || 'yyyy-dd-mm';
        const target = new Date();
        // Choose a future date offset within 2026 to avoid conflicts and weekends
        const offset = 15 + Math.floor(Math.random() * 45);
        target.setDate(target.getDate() + offset);

        // Ensure Monday-Friday
        if (target.getDay() === 6) target.setDate(target.getDate() + 2);
        if (target.getDay() === 0) target.setDate(target.getDate() + 1);

        const year = target.getFullYear();
        const month = String(target.getMonth() + 1).padStart(2, '0');
        const day = String(target.getDate()).padStart(2, '0');

        return placeholder.toLowerCase().includes('dd-mm')
            ? `${year}-${day}-${month}`
            : `${year}-${month}-${day}`;
    }

    async enterDates(date) {
        const targetDate = date || (await this.getWorkingDate());
        this.appliedDate = targetDate;

        await this.dateInputs.first().focus();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
        await this.dateInputs.first().pressSequentially(targetDate);
        await this.page.keyboard.press('Escape');

        await this.dateInputs.last().focus();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
        await this.dateInputs.last().pressSequentially(targetDate);
        await this.page.keyboard.press('Escape');

        return targetDate;
    }

    async submitLeave() {
        await this.submitButton.click();
        await this.page.locator('.oxd-toast').waitFor({ timeout: 10000 }).catch(() => {});
        await this.page.waitForTimeout(2000);
    }

    async openMyLeave() {
        await this.myLeaveLink.click();
        await this.page.locator('.oxd-table-body').waitFor({ state: 'visible', timeout: 15000 });
        await this.page.waitForTimeout(1000);
    }

    getLeaveRow(date, status) {
        let row = this.page.locator('.oxd-table-body .oxd-table-row');
        if (date) {
            row = row.filter({ hasText: date });
        }
        if (status) {
            row = row.filter({ hasText: status });
        }
        return row.first();
    }

    async verifyPendingApproval(date) {
        const targetDate = date || this.appliedDate;
        const row = this.getLeaveRow(targetDate, /Pending Approval/i);
        await expect(row).toBeVisible({ timeout: 15000 });
        await expect(row).toContainText(/Pending Approval/i);
        return row;
    }

    async cancelLeave(date) {
        const targetDate = date || this.appliedDate;
        const row = this.getLeaveRow(targetDate, /Pending Approval/i);
        const cancelButton = row.locator('button').filter({ hasText: /Cancel/i });
        await expect(cancelButton).toBeVisible({ timeout: 10000 });
        await cancelButton.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyCancelled(date) {
        const targetDate = date || this.appliedDate;
        const row = this.getLeaveRow(targetDate);
        await expect(row).toBeVisible({ timeout: 15000 });
        await expect(row).toContainText(/Cancelled/i, { timeout: 15000 });
    }
}

module.exports = { LeavePage };