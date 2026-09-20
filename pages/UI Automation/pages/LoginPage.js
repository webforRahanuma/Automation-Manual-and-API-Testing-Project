class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.getByPlaceholder("Username").fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.getByRole("button", { name: "Login" }).click();
    }
}

module.exports = { LoginPage };
