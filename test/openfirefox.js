
const { Builder, By, Key, until, logging } = require('selenium-webdriver')
const assert = require('assert')
/* require('chromedriver'); */

require('geckodriver');


describe('Login ', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login ', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1850, 1053)
    await driver.findElement(By.id("inputEmail")).click()
    await driver.findElement(By.id("inputEmail")).sendKeys("admin")
    await driver.findElement(By.id("inputPassword")).sendKeys("admin")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.linkText("Logout")).click()
  })
})