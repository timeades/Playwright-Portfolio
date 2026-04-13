import {test, expect} from '@playwright/test';

test('should register a new user', async ({page}) => {
  await page.goto('register');
  await expect(page.getByLabel('username')).toBeVisible();
  await page.getByLabel('username').fill('newuser');
  await expect(page.getByLabel('email')).toBeVisible();
  await page.getByLabel('email').fill('newuser@example.com');
  await expect(page.getByLabel('password')).toBeVisible();
  await page.getByLabel('password').fill('NewPassword123!');
  await page.getByRole('button', {name: 'Register'}).click();
  await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
});