/* API 5: POST To Search Product
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Request Parameter: search_product (For example: top, tshirt, jean)
Response Code: 200
Response JSON: Searched products list */

import { test, expect } from "@playwright/test";

test.describe("API 5: POST To Search Product", () => {
  test("should return searched products list with status code 200", async ({
    request,
  }) => {
    const searchTerm = "t-shirt"; // You can change this to test with different search terms
    const response = await request.post(
      "https://automationexercise.com/api/searchProduct",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `search_product=${encodeURIComponent(searchTerm)}`,
      },
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("products");
    expect(Array.isArray(responseBody.products)).toBe(true);
    console.log("API 5: POST To Search Product test completed successfully.");
    console.log("Response Body:", JSON.stringify(responseBody, null, 2));
  });
});
