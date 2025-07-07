export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username = "//input[@id='email1']"
        this.password = "//input[@id='password1']"
        this.loginbutton = "//button[normalize-space()='Sign in']"
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"admin@gmail.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
    }
}

//module.export=LoginPage;