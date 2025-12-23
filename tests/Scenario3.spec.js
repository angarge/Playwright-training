const{test,expect}= require('@playwright/test')

test('Scenario 3', async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.getByText("Input Form Submit").click();
    await page.getByRole('button',{name:'Submit'}).click();
    await page.waitForTimeout(3000);
    const successMsg="Thanks for contacting us, we will get back to you shortly.";
   page.on('load', async dialog => {
    let dialogMessage = dialog.message();
    console.log('Dialog message:', dialogMessage);
   })
   //expect(page.getByText("Please fill out this field.")).toHaveText("Please fill out this field.");
await page.locator("#name").fill("Ankita");
await page.locator("#inputEmail4").fill("abc432@yopmail.com");
await page.locator("#inputPassword4").fill("Password1");
await page.locator("#company").fill("Company4");
await page.locator("#websitename").fill("google.com");
const dropdown=page.locator("select[name=country]");
await dropdown.selectOption("India");
await page.pause();
await page.locator("#inputCity").fill("Mumbai");
await page.locator("#inputAddress1").fill("Kandivali");
await page.locator("#inputAddress2").fill("Thakur village");
await page.locator("#inputState").fill("Maharashtra");
await page.getByPlaceholder("Zip code").fill("Maharashtra");
await page.getByRole('button',{name:'Submit'}).click();
await expect(page.locator("p[class='success-msg hidden']")).toHaveText(successMsg);
await page.pause();

});