const bcrypt = require('bcrypt');

async function testBcrypt() {
  const testPassword = "sky"; // Replace with the password you want to test
  const saltRounds = 10; // Adjust if your application uses a different value

  // Hash the password
  const hash = await bcrypt.hash(testPassword, saltRounds);
  console.log("Generated Hash:", hash);

  // Compare the password against the hash
  const match = await bcrypt.compare(testPassword, hash);
  console.log("Do they match?", match);
}

testBcrypt().catch(console.error);
