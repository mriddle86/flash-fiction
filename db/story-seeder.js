module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert('stories', [
      // {story_name: "Big Mac", author: "author", createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('stories', null, {truncate : true});
    
  }

};