const server = require("./api/server.js");

const PORT = process.env.PORT || 3300;

// if (!module.parent) {
//   server.listen(PORT, () => {
//     console.log(`\n=== Server listening on port ${PORT} ===\n`);
//   });
// }

// WHEN NOT TESTING. OR WHEN DOTENV CONFIG SET UP IN PACKAGE.JSON FILE
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
