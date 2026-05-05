/* API 3: Get All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: GET
Response Code: 200
Response JSON: All brands list */

import { test, expect } from "@playwright/test";

test.describe("API 3: Get All Brands List", () => {
  test("should return all brands list with status code 200", async ({
    request,
  }) => {
    const response = await request.get(
      "https://automationexercise.com/api/brandsList",
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("brands");
    expect(Array.isArray(responseBody.brands)).toBe(true);
    console.log("API 3: Get All Brands List test completed successfully.");
    console.log("Response Body:", JSON.stringify(responseBody, null, 2));
  });
});