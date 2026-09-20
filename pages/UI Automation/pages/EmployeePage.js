class EmployeePage {

    constructor(page) {
        this.page = page;
    }

    async goToPIM() {
        await this.page.getByText('PIM').click();
    }

    async addEmployee(firstName, lastName) {
        await this.page.getByText('Add Employee').click();

        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);

        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async searchEmployee(name) {
        await this.page.getByPlaceholder('Type for hints...').first().fill(name);
        await this.page.getByRole('button', { name: 'Search' }).click();
    }
}

module.exports = { EmployeePage };
