const {test,expect} = require('@playwright/test');

test.only('Assignment Playwright test', async ({page})=>
{
    const userEmail = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await userEmail.fill('jchaitanya16@gmail.com');
    await userPassword.fill('Test@1234');
    await loginBtn.click();

    console.log( await page.locator('.card-body b').first().textContent());

});
