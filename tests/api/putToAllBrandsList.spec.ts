/* API 4: PUT To All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: PUT
Response Code: 405
Response Message: This request method is not supported. */

import { test, expect } from "@playwright/test";

test.describe("API 4: PUT To All Brands List", () => {
  test("should return status code 405 for PUT request", async ({ request }) => {
    const response = await request.put(
      "https://automationexercise.com/api/brandsList",
      {
        headers: {
          "Content-Type": "application/json"
        },
        data: {}
      }
    );
    const responseBody = await response.text();
    expect(responseBody).toContain('405, "message": "This request method is not supported."');
    console.log("API 4: PUT To All Brands List test completed successfully.");
    console.log("Response Body:", responseBody);
  });
}); 