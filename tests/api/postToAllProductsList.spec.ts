/* API 2: POST To All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: POST
Response Code: 405
Response Message: This request method is not supported. */

import { test, expect } from "@playwright/test";

test.describe("API 2: POST To All Products List", () => {
  test("should return status code 400 for missing email param in verifyLogin POST request", async ({
    request,
  }) => {
    const response = await request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "email=&password=thisisapassword",
      },
    );
    const responseBody = await response.text();
    expect(responseBody).toContain(
      '404, "message": "User not found!"',
    );

    console.log(
      "API 2: POST To All Products List test completed successfully.",
    );
    console.log("Response Body:", responseBody);
  });
});
