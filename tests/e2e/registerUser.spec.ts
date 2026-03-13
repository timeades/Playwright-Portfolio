/* In these tests I have used test.step to give better visibility on what is being tested 
in the html reports */

import { test, expect } from "@playwright/test";

test("Register User", async ({ page }) => {
  await test.step("Launch browser & Navigate to url 'http://automationexercise.com'", async () => {
    await page.goto("http://automationexercise.com");
  });

  await test.step("Handle consent pop-up", async () => {
    // Common selectors for cookie consent pop-ups
    const consentSelectors = [
      'button:has-text("Accept")',
      'button:has-text("Accept All")',
      'button:has-text("Consent")',
      'button:has-text("Allow Cookies")',
    ];

    for (const selector of consentSelectors) {
      try {
        const button = page.locator(selector);
        if (await button.isVisible({ timeout: 2000 })) {
          await button.click();
          break;
        }
      } catch (error) {
        // Continue to next selector if this one fails
      }
    }
  });

  await test.step("Verify that home page is visible successfully", async () => {
    await expect(page.locator("body")).toBeVisible();
  });

  await test.step("Click on 'Signup / Login' button", async () => {
    await page.click('a[href="/login"]');
  });

  await test.step("Verify 'New User Signup!' is visible", async () => {
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  });

  await test.step("Enter name and email address", async () => {
    await page.fill('input[name="name"]', "Tim Eades");
    await page.fill('input[data-qa="signup-email"]', "timeades@example.com");
  });

  await test.step("Click 'Signup' button", async () => {
    await page.click('button[data-qa="signup-button"]');
  });

  await test.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
    await expect(
      page.locator('h2:has-text("Enter Account Information")'),
    ).toBeVisible();
  });

  await test.step("Fill details: Title, Name, Email, Password, Date of birth", async () => {
    await page.check('input[id="id_gender1"]'); // Select Title
    await page.fill('input[name="password"]', "password123"); // Fill Password
    await page.selectOption('select[name="days"]', "1"); // Select Day of Birth
    await page.selectOption('select[name="months"]', "1"); // Select Month of Birth
    await page.selectOption('select[name="years"]', "2000"); // Select Year of Birth
  });

  await test.step("Select checkbox 'Sign up for our newsletter!'", async () => {
    await page.check('input[name="newsletter"]');
  });

  await test.step("Select checkbox 'Receive special offers from our partners!'", async () => {
    await page.check('input[name="optin"]');
  });

  await test.step("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
    await page.fill('input[name="first_name"]', "Tim");
    await page.fill('input[name="last_name"]', "Eades");
    await page.fill('input[name="company"]', "Test Company");
    await page.fill('input[name="address1"]', "123 Test Street");
    await page.fill('input[name="address2"]', "456");
    await page.selectOption('select[name="country"]', "United Kingdom");
    await page.fill('input[name="state"]', "Greater London");
    await page.fill('input[name="city"]', "London");
    await page.fill('input[name="zipcode"]', "W14 8XX");
    await page.fill('input[name="mobile_number"]', "07740123456");
  });

  await test.step("Click 'Create Account button'", async () => {
    await page.click('button[data-qa="create-account"]');
  });

  await test.step("Verify that 'ACCOUNT CREATED!' is visible", async () => {
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
  });

  await test.step("Click 'Continue' button", async () => {
    await page.click('a[data-qa="continue-button"]');
  });

  await test.step("Verify that 'Logged in as username' is visible", async () => {
    await expect(
      page.locator('a:has-text("Logged in as Test User")'),
    ).toBeVisible();
  });

  await test.step("Click 'Delete Account' button", async () => {
    await page.click('a[href="/delete_account"]');
  });

  await test.step("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
    await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
    await page.click('a[data-qa="continue-button"]');
  });
});

/* 
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button 
*/
