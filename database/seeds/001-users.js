exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "testUser", password: "testpassword" },
        { username: "testUser2", password: "testpassword" },
        { username: "testUser3", password: "testpassword" },
        { username: "testUser4", password: "testpassword" },
        { username: "testUser5", password: "testpassword" }
      ]);
    });
};
