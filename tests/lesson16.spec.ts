import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config()

test.describe('Tests from lesson 16', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL)
  })
  test('Button Submit enabled', async ({ page }) => {
    await expect(page.getByTestId('signIn-button')).toBeEnabled();
  })
  test('Popup visible', async ({ page }) => {
    const usernameField = await page.getByTestId('username-input')
    const passwordField = await page.getByTestId('password-input')
    await usernameField.fill('andrkuzm')
    await passwordField.fill('wrongpassword+')
    const submitButton = await page.getByTestId('signIn-button')
    await submitButton.click()
    const authPopup = await page.getByTestId('authorizationError-popup')
    await expect(authPopup).toBeVisible()
  })
})