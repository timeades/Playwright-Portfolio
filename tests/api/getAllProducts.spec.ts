/* API 1: Get All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: GET
Response Code: 200
Response JSON: All products list */

import { test, expect } from "@playwright/test";

test.describe("API 1: Get All Products List", () => {
  test("should return all products list with status code 200", async ({
    request,
  }) => {
    const response = await request.get(
      "https://automationexercise.com/api/productsList",
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("products");
    expect(Array.isArray(responseBody.products)).toBe(true);
    console.log("API 1: Get All Products List test completed successfully.");
    console.log("Response Body:", JSON.stringify(responseBody, null, 2));
  });
});