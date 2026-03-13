/* API 6: POST To Search Product without search_product parameter
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Response Code: 400
Response Message: Bad request, search_product parameter is missing in POST request. */

import { test, expect } from "@playwright/test";

test.describe("API 6: POST To Search Product without search_product parameter", () => {
  test("should return status code 400 for POST request without search_product parameter", async ({
    request,
  }) => {
    const response = await request.post(
      "https://automationexercise.com/api/searchProduct",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "", // No search_product parameter provided
      },
    );
    expect(response.status()).toBe(400);
    const responseBody = await response.text();
    expect(responseBody).toContain(
      "Bad request, search_product parameter is missing in POST request",
    );
    console.log(
      "API 6: POST To Search Product without search_product parameter test completed successfully.",
    );
    console.log("Response Body:", responseBody);
  });
}); 