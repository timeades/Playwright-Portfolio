/* API 8: POST To Verify Login without email parameter
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameter: password
Response Code: 400
Response Message: Bad request, email or password parameter is missing in POST request. */

import { test, expect } from "@playwright/test";

test.describe("API 8: POST To Verify Login without email parameter", () => {
  test("should return status code 400 for POST request without email parameter", async ({
    request,
  }) => {
    const response = await request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "email=&password=thisisapassword", // Email parameter present but empty
      },
    );
    expect(response.status()).toBe(400);
    const responseBody = await response.text();
    expect(responseBody).toContain(
      "Bad request, email or password parameter is missing in POST request",
    );
    console.log(
      "API 8: POST To Verify Login without email parameter test completed successfully.",
    );
    console.log("Response Body:", responseBody);
  });
});