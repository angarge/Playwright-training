const{test,expect}= require('@playwright/test')

test('Scenario 1', async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.locator("a[href*='simple-form-demo']").click();
    expect(page.getByTitle("simple-form-demo"));
    const inputText="Welcome to LambdaTest";
    await page.getByPlaceholder("Please enter your Message").fill(inputText);
    await page.getByRole('button',{name:'Get Checked Value'}).click();
    const messageSection=page.locator("//div[@id='user-message']");
    await expect(messageSection.locator("#message")).toHaveText(inputText);
    await page.pause();


});