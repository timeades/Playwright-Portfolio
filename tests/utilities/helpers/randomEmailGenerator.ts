/* a function to return a randome email with the ending @example.com made of alpha characters only. */

export function generateRandomEmail() {
  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let email = "";
  for (let i = 0; i < length; i++) {
    email += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return `${email}@example.com`;
}

console.log(generateRandomEmail());
