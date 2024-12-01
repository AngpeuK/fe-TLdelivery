import { test, expect } from '@playwright/test';
import * as path from 'path'

test.describe('Tests from lesson 16', () => {
  test.beforeEach(async ({ page }) => {
    const filePath: string = `file://${path.resolve('/Users/andrei/AquaProjects/demo-ui2/order-flow.html')}`
    await page.goto(filePath)
  })
  test('Button disabled', async ({ page }) => {
    await expect(page.getByTestId("submit-order")).toBeDisabled();
  })
  test('Button enabled', async ({ page }) => {
    const usernameField = await page.getByTestId('username')
    const emailField = await page.getByTestId('email')
    await usernameField.fill('User')
    await emailField.fill('user@email.com')
    await expect(page.getByTestId('submit-order')).toBeEnabled();
  })
  test('Popup message visible', async ({ page }) => {
    const usernameField = await page.getByTestId('username')
    const emailField = await page.getByTestId('email')
    // const popUpMessage = await page.locator('[id="popup-message"]')
    const popUpCSS = await page.locator('css=#popup-message')
    await usernameField.fill('User')
    await emailField.fill('user@email.com')
    await page.getByTestId('submit-order').click()
    // await expect(popUpMessage).toBeTruthy()
    // await expect(popUpMessage).toBeEnabled()
    // await expect(popUpMessage).toBeVisible()
    await expect(popUpCSS).toBeTruthy()
    await expect(popUpCSS).toBeEnabled()
    await expect(popUpCSS).toBeVisible()
  })
})