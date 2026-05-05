/* API 7: POST To Verify Login with valid details
API URL: https://automationexercise.com/api/verifyLogin
email: testertim@example.com
password: thisisapassword
Request Method: POST
Request Parameters: email, password
Response Code: 200
Response Message: User exists!  */

import { test, expect } from "@playwright/test";

test.describe("API 7: POST To Verify Login with valid details", () => {
  test("should return status code 200 and user exists message for valid login details", async ({
    request,
  }) => {
    const response = await request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "email=testertim%40example.com&password=thisisapassword",
      },
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toContain("User exists!");
    console.log(
      "API 7: POST To Verify Login with valid details test completed successfully.",
    );
    console.log("Response Body:", responseBody);
  });
});
