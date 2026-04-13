// Function to log a user in and be used as a beforeAll hook in tests that require a logged in user

import { expect, Page } from "@playwright/test";
export async function login(page: Page) {
  await page.goto("http://automationexercise.com");
  await page.click('a[href="/login"]');
  await page.fill('input[data-qa="login-email"]', "test@example.com");
  await page.fill('input[data-qa="login-password"]', "password");
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator('a:has-text("Logout")')).toBeVisible();
  console.log("Login successful");
}
