import {test, expect} from '@playwright/test';

  test('User should be able to login', async ({page}) => {
    await page.goto('login');
    await expect(page.getByLabel('username')).toBeVisible();
    await page.getByLabel('username').fill('practice');
    await expect(page.getByLabel('password')).toBeVisible();
    await page.getByLabel('password').fill('SuperSecretPassword!');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByText('Secure Area page for Automation Testing Practice')).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');
  });   