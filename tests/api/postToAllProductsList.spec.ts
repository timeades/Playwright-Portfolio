/* API 2: POST To All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: POST
Response Code: 405
Response Message: This request method is not supported. */

import { test, expect } from "@playwright/test";

test.describe("API 2: POST To All Products List", () => {
  test("should return status code 405 for POST request", async ({ request }) => {
    const response = await request.post(
      "https://automationexercise.com/api/productsList",
      {
        headers: {
          "Content-Type": "application/json"
        },
        data: {}
      }
    );
    expect(response.status()).toBe(405);
    const responseBody = await response.text();
    expect(responseBody).toContain("This request method is not supported");
    console.log("API 2: POST To All Products List test completed successfully.");
    console.log("Response Body:", responseBody);
  });
});  