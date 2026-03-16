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
    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    // Optionally, you can check for expected content in the body if needed
    console.log("API 2: POST To All Products List test completed successfully.");
    console.log("Response Body:", responseBody);
  });
}); 

// test.describe("API 2: POST To All Products List - Additional Test", () => {
//   test("should return status code 405 for POST request with payload", async ({ request }) => {
//   const response = await request.post("https://automationexercise.com/api/productsList", {...});
//   console.log("status", response.status());
//   console.log("body", await response.text());});
// });