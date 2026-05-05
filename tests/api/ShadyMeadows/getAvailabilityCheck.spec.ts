// I want to send a request to the Shady Meadows B&B API to check the availability of rooms for a specific date range. I will use the fetch API to make a GET request to the endpoint that checks availability. The endpoint is likely to be something like /api/availability?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD. I will replace YYYY-MM-DD with the actual start and end dates I want to check.

// Here is an example of how I can implement this in TypeScript:

async function checkAvailability(startDate: string, endDate: string): Promise<void> {
    const apiUrl =`https://automationintesting.online/api/room?checkin=${startDate}&checkout=${endDate}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error checking availability: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Availability data:', data);
        console.log('Available rooms:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sending the check availability request for set dates
// TBD the date range need to move to a function that chooses a date range a couple of weeks in the future so the test doesn't try checking in the past.
checkAvailability('2026-05-10', '2026-05-15');
console.log('Availability check request sent.');

// I want to console log the returned data from the API to see the availability information. The data will likely include details about available rooms, their types, and prices for the specified date range.  
console.log('Available rooms');