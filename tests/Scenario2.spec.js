const{test,expect}= require('@playwright/test')

test('Scenario 2', async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.getByText("Drag & Drop Sliders").click();
    const slider = page.locator("#slider3 input[type=range]")
    await slider.focus();
    for(let i=15;i<95;i++) {
        await page.keyboard.press('ArrowRight');
    }
    await page.waitForTimeout(3000);
});


