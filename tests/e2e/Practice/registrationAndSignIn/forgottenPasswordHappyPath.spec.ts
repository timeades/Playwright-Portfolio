import {test, expect} from '@playwright/test';

test('User should be able to retrieve a forgotten password', async ({page}) => {
  await page.goto('forgot-password');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('newuser@example.com');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.getByText('An e-mail has been sent to')).toBeVisible();
});