/* a function to generate random username, with title (Mr, Mrs, Miss, Dr) 
a First name between 3 and 10 characters and a Surname between 5 and 10 characters, 
and return the full name as a string. The username will be in the format: Title Firstname Surname
It will also be a recognisable first and second name following a standard western naming convention. */

export function generateRandomUserName() {
  const titles = ["Mr", "Mrs", "Miss", "Dr"];
  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
  ];
  const surnames = [    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];

  const title = titles[Math.floor(Math.random() * titles.length)];
  const firstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];

  return `${title} ${firstName} ${surname}`;
}

console.log(generateRandomUserName());