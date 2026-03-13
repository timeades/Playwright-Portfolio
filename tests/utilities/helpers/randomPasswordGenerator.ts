/* a function to generate a random password between 10 to 20 characters, 
with at least one uppercase letter, one lowercase letter, 
one number and one special character, and return the password as a string.*/

export function generateRandomPassword() {
  const length = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const allChars = uppercase + lowercase + numbers + specialChars;

  let password = "";
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specialChars.charAt(
    Math.floor(Math.random() * specialChars.length),
  );

  for (let i = password.length; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}

console.log(generateRandomPassword());