
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('draw button displays bots',async() => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const displayed = await drawBtn.isDisplayed()

    expect(displayed).toBeTruthy()
    await driver.sleep(3000)

})

test('all bots button was clicked', async()=>{
    const allBots = await driver.findElement(By.id('see-all'))
   
    expect(allBots).toHaveBeenCalled()
    await driver.sleep(3000)
})
